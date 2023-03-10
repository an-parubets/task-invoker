# task-invoker

If you want to have a 0 msec timer, you have to use `task-invoker`.

How to use:

```ecmascript 6
import { schedule } from 'task-invoker';

const foo = () => {}

schedule(foo);
```
