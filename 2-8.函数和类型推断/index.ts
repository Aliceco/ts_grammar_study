function add(x: number, y: number = 0, z?:number): number {
    if (typeof z === "number") {
        return x+y+z
    } else {
        return x+y
    }
}
let res = add(2, 3)


const adds = function (x: number, y: number = 0, z?:number): number {
    if (typeof z === "number") {
        return x+y+z
    } else {
        return x+y
    }
}
// const add2: string = adds

// 类型推断原则
// let testA = '1' // 在我们没有明确类型的时候TS会帮我自动推断类型

const add2: (x:number, y:number, z?:number) => number =  adds
