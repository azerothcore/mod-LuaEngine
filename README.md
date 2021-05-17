# ![logo](https://raw.githubusercontent.com/azerothcore/azerothcore.github.io/master/images/logo-github.png) mod-eluna-lua-engine for AzerothCore
- Latest build status with azerothcore: [![Build Status](https://github.com/azerothcore/mod-eluna-lua-engine/workflows/core-build/badge.svg?branch=master&event=push)](https://github.com/azerothcore/mod-eluna-lua-engine)

[english](README.md) | [中文说明](README_CN.md) | [Español](README_ES.md)

An [Eluna](https://github.com/ElunaLuaEngine/Eluna) module for AzerothCore.

## How to install:

### 1) Download the sources

You can get the sources either using git (recommended) or downloading them manually.

#### download with git (recommended)

1. open a terminal inside your `azerothcore-wotlk` folder
2. go inside the **modules** folder: `cd modules`
3. download the module sources using:
```
git clone https://github.com/azerothcore/mod-eluna-lua-engine.git
```
### 2) Build

You need to run the core compilation by scratch and and rebuild the project.


By default, you will find the folder where to install the lua scripts under `/env/dist/scripts/lua`, or if you are using Docker: `/env/docker/scripts/lua`

Eluna API :
[http://elunaluaengine.github.io/](http://elunaluaengine.github.io/)

## Eluna-TS

The TypeScript support is integrated in this module, please refer to the [Eluna-TS/README.md](Eluna-TS/README.md) for more info

NOTE: Eluna-TS is not in the `/deps` folder since it's used here as a subsystem/workspace, and it's not as a dependency.

Eluna-TS is a system to compile TypeScript into Lua, therefore to use a pre-compiled Eluna-TS module you just need to install it under the `scripts/lua` folder as stated above.

## For developers


### Working with Eluna-TS

This module, in its own package.json, offers some npm commands for lazy people to operate on Eluna-TS, aside from working directly with Eluna-TS inside its own folder with the npm commands provided by that package.json

#### Requirements

As stated by the Eluna-TS README, you need [nodejs 14+](https://nodejs.org/en/). You can also run `./install-node.sh` script provided in this module to do it automatically.

NOTE: If you are working with the **Docker dev container**, nodejs is pre-installed there.

#### Getting started

You can jump into the Eluna-TS folder and follow its own documentation, however, this module also provides the following npm command to run most common operations
with pre-configured environment variable (check .env file):

1) `npm run ts:setup` : this command will install node dependencies for Eluna-TS

2) `npm run build` : this will build both the Eluna-TS library (needed for all the modules) and the scripts under the /Eluna-TS/modules folder (do not forget to add the `index.ts` with all the imports, which is the entrypoint needed to compile your scripts)

3) `npm run dev`: this will run the build command in **watch mode** (every time you change a script it will recompile it automatically)

### Updating sub-repositories

To keep the dependencies and Eluna-TS in sync with their own repositories, this module provides a script under `apps/git_tools/subrepo-update.sh`

This script uses [git subrepo](https://github.com/ingydotnet/git-subrepo) in background.

Run that script to automatically push & pull changes with `Eluna-TS` and other internal dependencies. Note: LuaEngine is not handled directly by AzerothCore, it means that the `subrepo-update` script will only pull changes from that repo and won't push anything.
