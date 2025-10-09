# task-invoker

A tiny TypeScript/JavaScript utility for scheduling asynchronous task execution with **zero delay**.  
Perfect for deferring function calls to the event loop without using `setTimeout(fn, 0)`.

[![npm version](https://img.shields.io/npm/v/task-invoker.svg?style=flat-square)](https://www.npmjs.com/package/task-invoker)  
[![npm downloads](https://img.shields.io/npm/dm/task-invoker.svg?style=flat-square)](https://www.npmjs.com/package/task-invoker)  
[![license](https://img.shields.io/npm/l/task-invoker.svg?style=flat-square)](./LICENSE)

---

## ✨ Features

- 🌀 Run tasks asynchronously with **zero delay**  
- ⚡ Lightweight and dependency-free  
- 🛡️ Written in TypeScript with type definitions  
- 🔄 Works in both **Node.js** and **browser** environments

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

### With Arguments

```ts
import { schedule } from 'task-invoker';

const greet = (name: string) => {
  console.log(`Hello, ${name}!`);
};

schedule(greet, 'Anatolii');
```

---

## 🛠️ How it Works

`task-invoker` leverages microtask or macrotask scheduling (depending on environment) to queue your function for execution after the current call stack clears — without introducing unnecessary delays.

This means:
- No need for `setTimeout(fn, 0)`
- Works consistently across modern runtimes
- Ensures smoother async flows

---

## 📚 API

### `schedule(fn: (...args: any[]) => void, ...args: any[]): void`

Schedules a function to run asynchronously.  
- `fn` — function to execute  
- `...args` — optional arguments to pass into `fn`

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
- [GitHub repository](https://github.com/<your-username>/task-invoker)

---

## 📜 License

MIT © [Anatolii Parubets](https://github.com/<your-username>)
