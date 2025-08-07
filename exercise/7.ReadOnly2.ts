/**
 实现一个泛型MyReadonly2<T, K>，它带有两种类型的参数T和K。
类型 K 指定 T 中要被设置为只读 (readonly) 的属性。如果未提供K，则应使所有属性都变为只读，就像普通的Readonly<T>一样。
例如
 */
export {};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// type MyReadonly2<T, K> = K extends never
//   ? {
//       readonly [P in keyof T]: T[P];
//     }
//   : {
//       readonly [P in keyof T as P extends K ? P : never]: T[P];
//     } & {
//       [P in keyof T as P extends K ? never : P]: T[P];
//     };

type MyReadonly3<T, K extends keyof T = keyof T> = Readonly<Pick<T, K>> &
  Omit<T, K>;

const todo: MyReadonly3<Todo, "title" | "description"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo"; // Error: cannot reassign a readonly property
todo.completed = true; // OK
