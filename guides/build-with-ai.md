# Build a mod with an AI agent

You can write a mod or a skin with a coding agent such as Claude Code, Cursor, Copilot or Codex. This page says what to give the agent and what it must never do on a real car.

::: warning Agents write code for modern browsers
The car's screen runs a web browser from 2012 (Opera 12, Presto engine). Code that works in a new browser can fail there, leave the screen black, or make the unit reboot. Agents do not know this unless you tell them.
:::

## What to give your agent

1. Clone the [revised-sdk](https://github.com/eXXon48/revised-sdk) repository.
2. Tell the agent: "Read `AGENTS.md` and follow it." The file says how to set up the build, how a package is made and tested, and which rules keep the car safe.
3. Make your project with `revised-sdk new app <name>`. The new project gets its own `AGENTS.md`. Point the agent at that file too.
4. Let the agent run `revised-sdk lint` after every change. Lint finds code the car's browser cannot run.

## How to test

1. On your PC first: `revised-sdk preview up` runs your mod against a simulated screen.
2. Then on a real unit, only through the Store in Developer mode: `revised-sdk push`.
3. To remove a mod, uninstall it in the Store.

## What the agent must never do on a real car

- **Never reload the screen page.** `location.reload()` reboots the whole unit about a minute later.
- **Never edit the unit's files by hand.** Changes reach the car only as packages that the Store installs and uninstalls. Then uninstall puts everything back.
- **Never touch the boot script above the safety line.** In `start_normal_mode.sh`, nothing goes above the `# cmu-re:tripwire` line. That line starts the guard that stops boot loops.
- **Never use modern JavaScript or CSS.** Only ES5 JavaScript. No flexbox, grid, `var()`, `calc()`, `clip-path` or `-webkit-` styles.
- **Never search the unit's file system.** Search a copy of the stock files on your PC.
- **Never push, reboot or write to the unit without your yes.** Watch what the agent does over SSH.

Keep your own eyes on the car. If the screen stays black or the unit keeps restarting, stop the agent and do not push again.
