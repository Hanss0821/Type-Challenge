/**
 * 不使用 ReturnType 实现 TypeScript 的 ReturnType<T> 泛型。
 */

const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

type MyReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : never;

type a = MyReturnType<typeof fn>; // should be "1 | 2"

export type { MyReturnType };
