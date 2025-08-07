/**
 * 实现泛型GetReadonlyKeys<T>，GetReadonlyKeys<T>返回由对象 T 所有只读属性的键组成的联合类型。
 * 核心:比较只读与非只读的类型有什么不同
 *  创建比较类型的工具来进行类型比较
 */

interface Todo {
  readonly title: string;
  readonly description: string;
  completed: boolean;
}

// 这里是构造了两个函数来判定结构是否相同,若结构相同则完全相同
// string extends string | number 并不能比较出他们是否完全相等
type IsEqual<X, Y, A = X, B = never> = (<T>() => T extends X ? 1 : 2) extends <
  T
>() => T extends Y ? 1 : 2
  ? A
  : B;

type GetReadonlyKeys<T> = {
  [P in keyof T]-?: IsEqual<
    { [K in P]: T[K] },
    { readonly [K in P]: T[K] },
    P,
    never
  >;
}[keyof T];

type Keys = GetReadonlyKeys<Todo>; // expected to be "title" | "description"
