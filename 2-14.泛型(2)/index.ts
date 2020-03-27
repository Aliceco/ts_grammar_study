/**
 * 约束泛型
 */

// function echo<T>(arg: T): T {
//     console.log(arg.length)
//     return arg
// }

function echo<T>(arg: T[]): T[] {
    console.log(arg.length)
    return arg
}
const arrs = echo([1, 2, 3])




interface Iecho2 {
    length: number
}
function echo2<T extends Iecho2>(arg: T) : T {
    console.log(arg.length)
    return arg
}
const str = echo2('str')
const str2 = echo2({length: 10})
const str3 = echo2([1, 2, 3])



interface Iecho3 {
    name: string,
    age: number,
    obj: object,
    arr?: object[]
}
function echo3<T extends Iecho3>(data: T){
    console.log(data)
}
let from = {
    name: 'a',
    age: 12,
    obj: {name: 'a', age: 12},
    arr: [{name: 'a', age: 12}],
    date: '11111'
}
echo3(from)
