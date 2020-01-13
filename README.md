# Wavevision Timer

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

```typescript
import timer from '@wavevision/timer';

const timeout = timer(() => alert('Time is up!'), 1000);

// start timeout
timeout.start();
// pause timeout
timeout.pause();
// resume timeout
timeout.resume();
// clear timeout
timeout.clear();

const autoStarted = timer(() => alert('Hello!'), 500, true);
autoStarted.pause();
```
