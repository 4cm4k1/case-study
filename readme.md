# Case Study [![Status](https://img.shields.io/website-up-down-green-red/https/case-study.anthony.codes.svg?label=status&style=flat-square)](https://case-study.anthony.codes) [![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://prettier.io/) [![Renovate](https://img.shields.io/badge/renovate-enabled-1f8ceb.svg?style=flat-square)](https://renovatebot.com/) [![Latest Release](https://img.shields.io/github/release/4cm4k1/case-study/all.svg?style=flat-square)](https://github.com/4cm4k1/case-study/releases) [![License](https://img.shields.io/github/license/4cm4k1/case-study.svg?style=flat-square)](license)

Case study for job application.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Code of Conduct](#code-of-conduct)
- [Contributing](#contributing)
- [Contributors](#contributors)
- [Changelog](#changelog)
- [License](#license)

## Prerequisites

- Node
- Yarn or npm
- Now (for deployment)

## Installation

```shell
git clone https://github.com/4cm4k1/case-study.git && cd case-study && yarn
```

or

```shell
git clone https://github.com/4cm4k1/case-study.git && cd case-study && npm i
```

## Usage

The following are available `npm` scripts contained within `package.json`. Each may be run on the command line like so: `yarn [script]` or `npm run [script]`.

### `analyze[:(browser|server)]`

Analyzes generated code using `webpack-bundle-analyzer`

### `build`

Generates production code bundles in `.next/`

### `dev`

Runs application in development mode with hot-module reloading thanks to `next` and `webpack`

### `precommit`

Runs `prettier` on staged files on `git commit`

### `start`

Runs application in production mode (requires `build` to be run once)

### `prettier`

Runs `prettier` on entire codebase

### `prettier:watch`

Runs `prettier` atomically when file changes are detected

### `watch`

Runs `prettier:watch` and `dev` concurrently

## [Code of Conduct](.github/code_of_conduct.md)

## [Contributing](.github/contributing.md)

## Contributors

| Name             | Website                 |
| ---------------- | ----------------------- |
| **Anthony Maki** | <https://anthony.codes> |

## [Changelog](changelog.md)

## [License](license)
