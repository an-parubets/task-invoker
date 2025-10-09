# task-invoker

A tiny TypeScript/JavaScript utility for scheduling asynchronous task execution with zero delay.
Perfect for deferring function calls to the event loop without using setTimeout(fn, 0).

[![npm version](https://img.shields.io/npm/v/task-invoker.svg?style=flat-square)](https://www.npmjs.com/package/task-invoker)  
[![npm downloads](https://img.shields.io/npm/dm/task-invoker.svg?style=flat-square)](https://www.npmjs.com/package/task-invoker)  
[![semantic release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)  
[![license](https://img.shields.io/npm/l/task-invoker.svg?style=flat-square)](./LICENSE)

---

## ✨ Features

- 🌀 Run tasks asynchronously with **zero delay**
- ⚡ Lightweight and dependency-free
- 🛡️ Written in TypeScript with type definitions

---

## 📦 Installation

```bash
npm install task-invoker
# or
yarn add task-invoker
# or
pnpm add task-invoker
```

---

## 🚀 Usage

```ts
import { schedule } from 'task-invoker';

const foo = () => {
  console.log('Hello from async task!');
};

// Task will be executed asynchronously, with no artificial delay
schedule(foo);

console.log('This will log first.');
```

---

## 🛠️ How it Works

`task-invoker` leverages microtask or macrotask scheduling to queue your function for execution after the current call stack clears — without introducing unnecessary delays.

This means:
- No need for `setTimeout(fn, 0)`
- Works consistently across modern runtimes
- Ensures smoother async flows

---

## 📚 API

### `schedule(fn: (...args: any[]) => void): void`

Schedules a function to run asynchronously.
- `fn` — function to execute

---

## 📖 Examples

#### Debouncing heavy tasks
```ts
import { schedule } from 'task-invoker';

window.addEventListener('resize', () => {
  schedule(() => {
    console.log('Window resized, handle expensive logic here');
  });
});
```

#### Async UI updates
```ts
schedule(() => {
  document.body.classList.add('loaded');
});
```

---

## 🔗 Links

- [npm package](https://www.npmjs.com/package/task-invoker)
- [GitHub repository](https://github.com/an-parubets/task-invoker)

---

## 📜 License

MIT © [Anatolii Parubets](https://github.com/an-parubets)
