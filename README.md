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

You need to run the cmake again and and rebuild the project.

Eluna API :
[http://elunaluaengine.github.io/](http://elunaluaengine.github.io/)

## Eluna-TS

The TypeScript support is integrated in this module, please refer to the [Eluna-TS/README.md](Eluna-TS/README.md) for more info

## For Devs

To keep the dependencies and Eluna-TS updated this module provides a script under `apps/git_tools/subrepo-update.sh`

This script uses [git subrepo](https://github.com/ingydotnet/git-subrepo) in background

Run that script to automatically push & pull changes with `Eluna-TS` and other internal dependencies. Note: LuaEngine is not handled directly by AzerothCore, it means that the `subrepo-update` script will only pull changes from that repo.
