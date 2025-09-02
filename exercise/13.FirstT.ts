/**
 * 实现一个First<T>泛型，它接受一个数组T并返回它的第一个元素的类型。
 * 1.处理空数组返回never
 * 2.兼容只读元组
 * type arr1 = ['a', 'b', 'c']
   type arr2 = [3, 2, 1]
   type head1 = First<arr1> // 应推导出 'a'
   type head2 = First<arr2> // 应推导出 3
 */

// ts的类型是窄类型不能赋值给宽类型
// 只读数组不能传递给数组,因为数组元素不可控,使得只读数组变得不安全
// 但是可变数组可以看成是被约束的只读数组
// 说白了就是可变数组我也可以不改所以是安全的,但是只读数组传给可变数组,你不能保证不改
// 使用infer得到第一位元素推导出类型
// “约束输入 + 提示更友好”的最佳实践
type First<T extends readonly unknown[]> = T extends readonly [
  infer F,
  ...unknown[]
]
  ? F
  : never;

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];
type arr3 = [];
type tuple1 = readonly [1, 2, 3];
type head1 = First<arr1>; // 应推导出 'a'
type head2 = First<arr2>; // 应推导出 3
type head3 = First<arr3>; // 应推导出 never
type head4 = First<tuple1>; // 应推导出 1
