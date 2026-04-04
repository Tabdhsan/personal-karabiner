import fs from "fs";
import { KarabinerRules } from "./types";
import { createHyperSubLayers, app, open, window, shell } from "./utils";


const rules: KarabinerRules[] = [
  // Define the Hyper key itself
  {
    description: "Hyper Key (⌃⌥⇧⌘)",
    manipulators: [
      {
        description: "Caps Lock -> Hyper Key",
        from: {
          key_code: "caps_lock",
          modifiers: {
            optional: ["any"],
          },
        },
        to: [
          {
            set_variable: {
              name: "hyper",
              value: 1,
            },
          },
        ],
        to_after_key_up: [
          {
            set_variable: {
              name: "hyper",
              value: 0,
            },
          },
        ],
        to_if_alone: [
          {
            key_code: "escape",
          },
        ],
        type: "basic",
      },
    ],
  },
  ...createHyperSubLayers({
    // spacebar: open(
    //   "raycast://extensions/stellate/mxstbr-commands/create-notion-todo"
    // ),


    // a = "A"rc
    a: {
      b: open("raycast://extensions/the-browser-company/arc/new-window?arguments=%7B%22space%22%3A%22BitByteCo%22%7D"),
      f: open("raycast://extensions/the-browser-company/arc/new-window?arguments=%7B%22space%22%3A%22FindYourGroove%22%7D"),
      n: open("raycast://extensions/the-browser-company/arc/new-window?arguments=%7B%22space%22%3A%22nesha%22%7D"),
      c: open("raycast://extensions/the-browser-company/arc/new-window?arguments=%7B%22space%22%3A%22lisa%22%7D")
    },


    // b = "B"rowse
    // b: {
    //   t: open("https://twitter.com"),
    //   // Quarterly "P"lan
    //   p: open("https://mxstbr.com/cal"),
    //   y: open("https://news.ycombinator.com"),
    //   f: open("https://facebook.com"),
    //   r: open("https://reddit.com"),
    //   h: open("https://hashnode.com/draft"),
    // },




    // o = "Open" applications
    o: {
      a: open("raycast://extensions/the-browser-company/arc/new-window?arguments=%7B%22space%22%3A%22%22%7D"), // Arc
      b: app("Bitwarden"),
      f: app("Finder"),
      g: app("Google Chrome"),
      c: app("Google Chrome"),
      n: app("Notes"),
      w: app("warp"),

      // c: app("Notion Calendar"),
      // v: app("Zed"),
      // d: app("Discord"),
      // s: app("Slack"),
      // e: app("Superhuman"),
      // n: app("Notion"),
      // t: app("Terminal"),
      // // Open todo list managed via *H*ypersonic
      // h: open(
      //   "notion://www.notion.so/stellatehq/7b33b924746647499d906c55f89d5026"
      // ),
      // z: app("zoom.us"),
      // // "M"arkdown (Reflect.app)
      // m: app("Reflect"),
      // r: app("Reflect"),
      // // "i"Message
      // i: app("Texts"),
      // p: app("Spotify"),
      // a: app("iA Presenter"),
      // // "W"hatsApp has been replaced by Texts
      // w: open("Texts"),
      // l: open(
      //   "raycast://extensions/stellate/mxstbr-commands/open-mxs-is-shortlink"
      // ),
    },





    // TODO: This doesn't quite work yet.
    // l = "Layouts" via Raycast's custom window management
    // l: {
    //   // Coding layout
    //   c: shell`
    //     open -a "Visual Studio Code.app"
    //     sleep 0.2
    //     open -g "raycast://customWindowManagementCommand?position=topLeft&relativeWidth=0.5"

    //     open -a "Terminal.app"
    //     sleep 0.2
    //     open -g "raycast://customWindowManagementCommand?position=topRight&relativeWidth=0.5"
    //   `,
    // },





    // w = "Window"
    w: {
      //   semicolon: {
      //     description: "Window: Hide",
      //     to: [
      //       {
      //         key_code: "h",
      //         modifiers: ["left_command"],
      //       },
      //     ],
      //   },
      y: window("previous-display"),
      spacebar: window("previous-display"),
      m: window("maximize"),

      u: window("first-fourth"),
      i: window("second-fourth"),
      o: window("third-fourth"),
      p: window("last-fourth"),

      // 1 - 2 - 1 (fourths) + size
      j: window("first-fourth"),
      k: window("center-half"),
      c: window("center-half"), // For center
      l: window("last-fourth"),

      // Halves

      b: window("left-half"),
      n: window("right-half"),

      // thirds 1 - 1 - 1
      f: window("first-third"),
      g: window("center-third"),
      h: window("last-third"),



      //   o: window("next-display"),
      //   k: window("top-half"),
      //   j: window("bottom-half"),
      //   h: window("left-half"),
      //   l: window("right-half"),
      //   f: window("maximize"),
      // u: {
      //   description: "Window: Previous Tab",
      //   to: [
      //     {
      //       key_code: "tab",
      //       modifiers: ["left_control", "right_shift"],
      //     },
      //   ],
      // },
      //   i: {
      //     description: "Window: Next Tab",
      //     to: [
      //       {
      //         key_code: "tab",
      //         modifiers: ["left_control"],
      //       },
      //     ],
      //   },
      //   n: {
      //     description: "Window: Next Window",
      //     to: [
      //       {
      //         key_code: "grave_accent_and_tilde",
      //         modifiers: ["left_command"],
      //       },
      //     ],
      //   },
      //   b: {
      //     description: "Window: Back",
      //     to: [
      //       {
      //         key_code: "open_bracket",
      //         modifiers: ["left_command"],
      //       },
      //     ],
      //   },
      //   // Note: No literal connection. Both f and n are already taken.
      //   m: {
      //     description: "Window: Forward",
      //     to: [
      //       {
      //         key_code: "close_bracket",
      //         modifiers: ["left_command"],
      //       },
      //     ],
      //   },
    },



    // s = "System"
    // s: {
    //   u: {
    //     to: [
    //       {
    //         key_code: "volume_increment",
    //       },
    //     ],
    //   },
    //   j: {
    //     to: [
    //       {
    //         key_code: "volume_decrement",
    //       },
    //     ],
    //   },
    //   i: {
    //     to: [
    //       {
    //         key_code: "display_brightness_increment",
    //       },
    //     ],
    //   },
    //   k: {
    //     to: [
    //       {
    //         key_code: "display_brightness_decrement",
    //       },
    //     ],
    //   },
    //   l: {
    //     to: [
    //       {
    //         key_code: "q",
    //         modifiers: ["left_control", "left_command"],
    //       },
    //     ],
    //   },
    //   p: {
    //     to: [
    //       {
    //         key_code: "play_or_pause",
    //       },
    //     ],
    //   },
    //   semicolon: {
    //     to: [
    //       {
    //         key_code: "fastforward",
    //       },
    //     ],
    //   },
    //   e: open(
    //     `raycast://extensions/thomas/elgato-key-light/toggle?launchType=background`
    //   ),
    //   // "D"o not disturb toggle
    //   d: open(
    //     `raycast://extensions/yakitrak/do-not-disturb/toggle?launchType=background`
    //   ),
    //   // "T"heme
    //   t: open(`raycast://extensions/raycast/system/toggle-system-appearance`),
    //   c: open("raycast://extensions/raycast/system/open-camera"),
    //   // 'v'oice
    //   v: {
    //     to: [
    //       {
    //         key_code: "spacebar",
    //         modifiers: ["left_option"],
    //       },
    //     ],
    //   },
    // },



    // v = "moVe" which isn't "m" because we want it to be on the left hand
    // so that hjkl work like they do in vim
    // v: {
    //   h: {
    //     to: [{ key_code: "left_arrow" }],
    //   },
    //   j: {
    //     to: [{ key_code: "down_arrow" }],
    //   },
    //   k: {
    //     to: [{ key_code: "up_arrow" }],
    //   },
    //   l: {
    //     to: [{ key_code: "right_arrow" }],
    //   },
    //   // Magicmove via homerow.app
    //   m: {
    //     to: [{ key_code: "f", modifiers: ["left_control"] }],
    //     // TODO: Trigger Vim Easymotion when VSCode is focused
    //   },
    //   // Scroll mode via homerow.app
    //   s: {
    //     to: [{ key_code: "j", modifiers: ["left_control"] }],
    //   },
    //   d: {
    //     to: [{ key_code: "d", modifiers: ["right_shift", "left_command"] }],
    //   },
    //   u: {
    //     to: [{ key_code: "page_down" }],
    //   },
    //   i: {
    //     to: [{ key_code: "page_up" }],
    //   },
    // },



    // c = Musi*c* which isn't "m" because we want it to be on the left hand
    // c: {
    //   p: {
    //     to: [{ key_code: "play_or_pause" }],
    //   },
    //   n: {
    //     to: [{ key_code: "fastforward" }],
    //   },
    //   b: {
    //     to: [{ key_code: "rewind" }],
    //   },
    // },



    // t = "T"elegram
    t: {
      g: open("raycast://extensions/ikupenov/telegram-custom/msg-taiyaki"),
      w: open("raycast://extensions/ikupenov/telegram-custom/msg-whitney"),
      c: open("raycast://extensions/ikupenov/telegram-custom/msg-claude"),
      s: open("raycast://extensions/ikupenov/telegram-custom/msg-steven"),
      v: open("raycast://extensions/ikupenov/telegram-custom/msg-claude-img"),
    },

    // r = "Raycast"
    r: {
      c: open("raycast://extensions/thomas/visual-studio-code/index"),
      //   c: open("raycast://extensions/thomas/color-picker/pick-color"),
      //   n: open("raycast://script-commands/dismiss-notifications"),
      //   l: open(
      //     "raycast://extensions/stellate/mxstbr-commands/create-mxs-is-shortlink"
      //   ),
      "period": open(
        "raycast://extensions/raycast/emoji-symbols/search-emoji-symbols"
      ),
      p: open("raycast://extensions/raycast/raycast/confetti"),
      v: open(
        "raycast://extensions/raycast/clipboard-history/clipboard-history"
      ),
      n: open("raycast://extensions/notion/notion/create-database-page"),
      //   a: open("raycast://extensions/raycast/raycast-ai/ai-chat"),
      //   s: open("raycast://extensions/peduarte/silent-mention/index"),
      //   h: open(
      //     "raycast://extensions/raycast/clipboard-history/clipboard-history"
      //   ),
      //   1: open(
      //     "raycast://extensions/VladCuciureanu/toothpick/connect-favorite-device-1"
      //   ),
      //   2: open(
      //     "raycast://extensions/VladCuciureanu/toothpick/connect-favorite-device-2"
      //   ),
    },
  }),
  // {
  //   description: "Change Backspace to Spacebar when Minecraft is focused",
  //   manipulators: [
  //     {
  //       type: "basic",
  //       from: {
  //         key_code: "delete_or_backspace",
  //       },
  //       to: [
  //         {
  //           key_code: "spacebar",
  //         },
  //       ],
  //       conditions: [
  //         {
  //           type: "frontmost_application_if",
  //           file_paths: [
  //             "^/Users/mxstbr/Library/Application Support/minecraft/runtime/java-runtime-gamma/mac-os-arm64/java-runtime-gamma/jre.bundle/Contents/Home/bin/java$",
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // }

  // Double-tap left_control → msg-claude (text only)
  {
    description: "Double-tap Right Control → Msg Claude",
    manipulators: [
      {
        description: "Right Control double-tap (second press)",
        type: "basic",
        from: {
          key_code: "left_control",
          modifiers: { optional: ["any"] },
        },
        to: [
          { shell_command: "open raycast://extensions/ikupenov/telegram-custom/msg-claude" },
        ],
        conditions: [
          { type: "variable_if", name: "left_control_pressed", value: 1 },
        ],
      },
      {
        description: "Right Control double-tap (first press)",
        type: "basic",
        from: {
          key_code: "left_control",
          modifiers: { optional: ["any"] },
        },
        to: [
          { set_variable: { name: "left_control_pressed", value: 1 } },
          { key_code: "left_control" },
        ],
        to_delayed_action: {
          to_if_invoked: [{ set_variable: { name: "left_control_pressed", value: 0 } }],
          to_if_canceled: [{ set_variable: { name: "left_control_pressed", value: 0 } }],
        },
        parameters: {
          "basic.to_delayed_action_delay_milliseconds": 300,
        },
      },
    ],
  },

  // Double-tap left_command → msg-claude-img (with clipboard image)
  {
    description: "Double-tap Right Command → Msg Claude (with Image)",
    manipulators: [
      {
        description: "Right Command double-tap (second press)",
        type: "basic",
        from: {
          key_code: "left_command",
          modifiers: { optional: ["any"] },
        },
        to: [
          { shell_command: "open raycast://extensions/ikupenov/telegram-custom/msg-claude-img" },
        ],
        conditions: [
          { type: "variable_if", name: "left_command_pressed", value: 1 },
        ],
      },
      {
        description: "Right Command double-tap (first press)",
        type: "basic",
        from: {
          key_code: "left_command",
          modifiers: { optional: ["any"] },
        },
        to: [
          { set_variable: { name: "left_command_pressed", value: 1 } },
          { key_code: "left_command" },
        ],
        to_delayed_action: {
          to_if_invoked: [{ set_variable: { name: "left_command_pressed", value: 0 } }],
          to_if_canceled: [{ set_variable: { name: "left_command_pressed", value: 0 } }],
        },
        parameters: {
          "basic.to_delayed_action_delay_milliseconds": 300,
        },
      },
    ],
  },
];

fs.writeFileSync(
  "karabiner.json",
  JSON.stringify(
    {
      global: {
        show_in_menu_bar: false,
      },
      profiles: [
        {
          name: "Default",
          complex_modifications: {
            rules,
          },
          "virtual_hid_keyboard": { "keyboard_type_v2": "ansi" }
        },
      ],
    },
    null,
    2
  )
);
