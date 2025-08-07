/**
 * 不使用 ReturnType 实现 TypeScript 的 ReturnType<T> 泛型。
 * 考点 extends + infer
 * infer像是类型占位,能够解构出占位位置的值
 */

const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

// 获取返回值
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : T;
type a = MyReturnType<typeof fn>; // 应推导出 "1 | 2"
