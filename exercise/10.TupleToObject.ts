/**
 * 将一个元组类型转换为对象类型，这个对象类型的键/值和元组中的元素对应。
 */
export {}
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const // 使用as const 可以获取值类型 不使用则是string[]

type TupleToObject<T extends readonly PropertyKey[]> = {
    // T[P]会将内建方法映射出来,但是ts中的类型键只能接受string | number | symbol
    // 需要过滤一层
    // [P in keyof T as P extends `${number}` ? T[P] : never] : T[P]
    // Extract工具提取出数字键
    // [P in Extract<keyof T,number> as T[P]] : T[P]
    // 将索引作为键,直接映射出类型作为
    [P in keyof T[number]]:P
}

type result = TupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'msdel 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}