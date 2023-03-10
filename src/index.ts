type Task = () => any;

const scheduledTasks: Task[] = [];
const messageName = 'zero-timeout-message';

const invoker = (event: MessageEvent<string>): void => {
  if (event.source === window && event.data === messageName) {
    event.stopPropagation();

    if (scheduledTasks.length > 0) {
      scheduledTasks.shift()?.();
    }
  }
};

window.addEventListener('message', invoker, true);

export const schedule = (task: Task): void => {
  scheduledTasks.push(task);
  window.postMessage(messageName, '*');
};
