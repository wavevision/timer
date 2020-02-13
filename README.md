<p align="center"><a href="https://github.com/wavevision"><img alt="Wavevision s.r.o." src="https://wavevision.com/images/wavevision-logo.png" width="120" /></a></p>
<h1 align="center">Timer</h1>

[![Build Status](https://travis-ci.org/wavevision/timer.svg?branch=master)](https://travis-ci.org/wavevision/timer)
[![Coverage Status](https://coveralls.io/repos/github/wavevision/timer/badge.svg?branch=master)](https://coveralls.io/github/wavevision/timer?branch=master)
[![npm](https://img.shields.io/npm/v/@wavevision/timer)](https://www.npmjs.com/package/@wavevision/timer)

Simple utility for creating resumable timeouts written in TypeScript. Works both in Node and browser environments.

## Installation

Via [Yarn](https://yarnpkg.com)

```bash
yarn add @wavevision/timer
```

or [npm](https://npmjs.com)

```bash
npm install --save @wavevision/timer
```

## Usage

Create your own timer.

```typescript
import timer from '@wavevision/timer';

timer(() => alert('Time is up!'), 1000);
// this timer will be auto-started
timer(() => alert('Hello!'), 500, true);
```

The returned object exposes following functions:

- **`clear(): void`** – clears the timeout
- **`pause(): number`** – pauses the timeout, returns remaining time
- **`remains(): number`** – returns remaining time
- **`restart(): void`** – clears and starts the timeout over again
- **`resume(): void`** – resumes the timeout (or starts if not running)
- **`running(): boolean`** – returns whether the timeout is running at the moment
- **`start(): void`** – starts the timeout (or resumes if paused)
