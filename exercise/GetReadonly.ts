/**
 * 实现泛型GetReadonlyKeys<T>，
 * GetReadonlyKeys<T>返回由对象 T 所有只读属性的键组成的联合类型
 */

interface Todo {
  readonly title: string;
  readonly description: string;
  completed: boolean;
}
// 创建一个类型比较工具
type IsEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;
// 1.
type GetReadonlyKeys<
  T,
  U extends Readonly<T> = Readonly<T>,
  P extends keyof T = keyof T
> = P extends keyof T
  ? IsEqual<Pick<T, P>, Pick<U, P>> extends true
    ? P
    : never
  : never;

type keys = GetReadonlyKeys<Todo>;
// 2.
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;

type GetReadonlyKeys2<
  T,
  U extends Readonly<T> = Readonly<T>,
  K extends keyof T = keyof T
> = K extends keyof T
  ? Equal<Pick<T, K>, Pick<U, K>> extends true
    ? K
    : never
  : never;

type Keys2 = GetReadonlyKeys2<Todo>;
export type { GetReadonlyKeys, GetReadonlyKeys2 };
