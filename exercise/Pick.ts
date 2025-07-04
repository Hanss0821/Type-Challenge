/**
 *不使用 Pick<T, K> ，实现 TS 内置的 Pick<T, K> 的功能。
    从类型 T 中选出符合 K 的属性，构造一个新的类型。
 */

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
type MyPick<T extends object, K> = {
  [P in keyof T as P extends K ? P : never]: T[P];
};
type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

export type { TodoPreview };
