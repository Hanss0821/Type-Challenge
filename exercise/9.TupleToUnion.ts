/**
 * 实现泛型TupleToUnion<T>，它返回元组所有值的合集。
 */
export {};

type Arr = ["1", "2", "3"];

type TupleToUnion<T> = {[P in keyof T]:T[P]}[keyof T];

type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'

const tset:Test = '1'


