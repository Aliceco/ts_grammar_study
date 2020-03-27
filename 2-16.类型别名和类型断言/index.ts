function sum(x: number, y:number): number {
    return x+y
}
const sum2: (x:number, y:number) => number = sum

// 类型别名
type PlusType = (x:number, y:number) => number
const sum3:PlusType = sum

type NameResolver = () => string
type NameOrResolver = string | NameResolver
function getName(n:NameOrResolver): string {
    if (typeof n === 'string') {
        return n
    } else {
        return n()
    }
}


// 类型断言(assertion)
/**
 * 在不确定数据类型的情况在我们要访问数据类型的属性、方法
 * */
function getLength(input: string | number): number {
    // const str = input as String
    // if (str.length) {
    //     return str.length
    // } else {
    //     const number = input as Number
    //     return number.toString().length
    // }
    // 把input断言成string
    if ((<string> input).length) {
        return (<string> input).length
    } else {
        return input.toString().length
    }
}
