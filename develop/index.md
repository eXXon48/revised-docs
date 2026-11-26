# Develop

Make apps and skins for the CMU150 screen and ship them through the Revised Store. This page shows what you build, the tools, and where to read next.

## What you build

A mod is an HMI app: HTML, ES5 JavaScript and CSS that run in the car's screen. It is packed into a `.rvp` package that the Store installs and uninstalls. A project has two parts:

- `mod.yaml`: the package description;
- `ui/`: the app itself (`main.js`, `style.css`).

::: warning The screen is a 2012 browser
The HMI runs Opera 12 (Presto engine). JavaScript is ES5 only: no `let`, `const`, arrow functions, `class` or `Promise`. CSS has no flexbox, grid, `var()`, `calc()`, `clip-path` or `-webkit-` styles. Never reload the page: `location.reload()` reboots the unit about a minute later.
:::

## Tools

Everything runs on your PC with [revised-sdk](https://github.com/eXXon48/revised-sdk). You need podman or docker, and Opera 12.10 for the preview.

| Step | Command |
|---|---|
| Set up once | `revised-sdk setup --store <cmu-re-store checkout>` |
| New project | `revised-sdk new app mydash` |
| Check | `revised-sdk lint` |
| Package | `revised-sdk build` → `dist/mydash-0.1.0.rvp` |
| Try on the PC | `revised-sdk preview up --accept-opera-license` |
| Install on a unit | `revised-sdk push --unit cmu@<ip> --key <ecdsa-key-file>` |

`push` needs the unit in Developer mode with SSH enabled. Every push is an unsigned install, and the unit logs it as one.

## Read next

- [Build with an AI agent](/develop/build-with-ai): what to give a coding agent and what it must never do on a real car.
- [SDK guide](/develop/sdk/guide): lint rules, the RevisedHMI API and every CLI command.
- [Reference](/research/): how the unit works inside: hardware, boot, services, the HMI framework, audio and vehicle data.
