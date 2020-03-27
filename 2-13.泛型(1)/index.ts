/**
 * 泛型是在定义接口、函数、类的时候，我们不预先指定数据类型，而是在使用的时候指定数据类型
 */

function echo<T>(arg: T): T {
    return arg
}
const res = echo (true)

// const res2: string = echo (true)


function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}
const res3 = swap(['string', 123])
console.log(res3[0])
