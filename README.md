# Wavevision Timer

Simple utility for creating resumable timeouts written in TypeScript.

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
