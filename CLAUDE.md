# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A TypeScript-based DSL for generating Karabiner Elements configuration. The main concept is a "Hyper Key" (Caps Lock remapped to ⌃⌥⇧⌘) with sublayers — e.g., Hyper+O is the "open apps" layer, then pressing G opens Chrome.

## Build

```bash
yarn install        # one-time setup
yarn run build      # compile rules.ts → karabiner.json
yarn run watch      # rebuild on file changes
```

The build runs `tsm rules.ts`, which executes the script and writes `karabiner.json` directly via `fs.writeFileSync`. There is no separate compile step — the TypeScript file is both the source and the generator.

## Architecture

- **`rules.ts`** — Main config file. Defines the Hyper key mapping and all sublayers (keybindings for apps, window management, Raycast commands, etc.). Edit this to change keybindings.
- **`utils.ts`** — DSL helpers: `createHyperSubLayers()` orchestrates sublayer generation, plus shortcuts `app()`, `open()`, `window()`, `shell()` for common actions.
- **`types.ts`** — TypeScript types matching the Karabiner Elements JSON schema (`KarabinerRules`, `Manipulator`, `KeyCode`, etc.).
- **`karabiner.json`** — Generated output. Symlinked to `~/.config/karabiner/karabiner.json` so Karabiner Elements picks it up.

## Key Concepts

- A **sublayer** is a second key press after Hyper. In `rules.ts`, sublayers are objects passed to `createHyperSubLayers()`. Keys mapping to `LayerCommand` (has a `to` property) are direct actions; keys mapping to another object create a nested sublayer.
- `createHyperSubLayers()` must receive all sublayers at once so it can generate mutual-exclusion conditions (only one sublayer active at a time).
- **Double-tap rules** use `to_delayed_action` with a tracking variable. The second-press manipulator (with `variable_if` condition) must come before the first-press manipulator. Currently used for left ctrl×2 ��� msg-claude and left cmd×2 → msg-claude-img.
- The `window()` helper generates Raycast window management deep links. The `open()` helper wraps `open <url>` shell commands. The `app()` helper wraps `open -a '<name>.app'`.
