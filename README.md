# task-invoker

<p>
    <a href="https://www.npmjs.com/package/task-invoker">
        <img src="https://img.shields.io/npm/dw/task-invoker" alt="">
    </a>
    <a href="https://www.npmjs.com/package/task-invoker">
        <img src="https://img.shields.io/npm/v/task-invoker" alt="">
    </a>
    <a href="https://github.com/semantic-release/semantic-release">
        <img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg" alt="">
    </a>
</p>

If you want to have a 0 msec timer, you have to use `task-invoker`.

How to use:

```ecmascript 6
import { schedule } from 'task-invoker';

const foo = () => {}

schedule(foo);
```
