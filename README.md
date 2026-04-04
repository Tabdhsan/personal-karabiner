# Personal Karabiner Config

TypeScript-based DSL for generating [Karabiner Elements](https://karabiner-elements.pqrs.org/) configuration. Built on top of [@mxstbr's karabiner repo](https://github.com/mxstbr/karabiner), which I discovered through his [Raycast interview](https://www.youtube.com/watch?v=m5MDv9qwhU8).

## How It Works

Caps Lock is remapped to a **Hyper Key** (Ctrl+Option+Shift+Cmd). Pressing Hyper + a sublayer key activates a group of shortcuts:

| Layer | Key | Commands |
|-------|-----|----------|
| **Apps** | `Hyper + O` | `A` Arc, `B` Bitwarden, `F` Finder, `G`/`C` Chrome, `N` Notes, `W` Warp |
| **Arc Spaces** | `Hyper + A` | `B` BitByteCo, `F` FindYourGroove, `N` Nesha, `C` Lisa |
| **Window** | `Hyper + W` | `M` Maximize, `B`/`N` Halves, `U`/`I`/`O`/`P` Fourths, `F`/`G`/`H` Thirds |
| **Telegram** | `Hyper + T` | `C` Claude, `S` Steven, `W` Whitney, `G` Taiyaki, `V` Claude+Image |
| **Raycast** | `Hyper + R` | `C` VS Code, `.` Emoji, `P` Confetti, `V` Clipboard, `N` Notion |

### Double-Tap Shortcuts

| Shortcut | Action |
|----------|--------|
| Left Ctrl × 2 | Msg Claude (text) |
| Left Cmd × 2 | Msg Claude (with clipboard image) |

## Setup

```bash
yarn install
yarn run build    # compile rules.ts → karabiner.json
yarn run watch    # rebuild on file changes
```

The generated `karabiner.json` should be symlinked to `~/.config/karabiner/karabiner.json`.

## Credits

Forked from [@mxstbr/karabiner](https://github.com/mxstbr/karabiner) — the TypeScript DSL, Hyper key concept, and sublayer architecture are all his work. Highly recommend watching his [deep dive with Raycast](https://www.youtube.com/watch?v=m5MDv9qwhU8) for context on how this fits into a productivity workflow.
