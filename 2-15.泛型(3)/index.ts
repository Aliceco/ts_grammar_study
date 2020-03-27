/**
 * 类、接口
 */

class Queue {
    private data = []
    push(item) {
        return this.data.push(item)
    }
    pop() {
        return this.data.shift()
    }
}
const queue = new Queue()
queue.push(1)
queue.push('str')
// toFixed只对数字类型有效果
console.log(queue.pop().toFixed())
console.log(queue.pop().toFixed())


class Queue2<T> {
    private data = []
    push(item: T) {
        return this.data.push(item)
    }
    pop(): T {
        return this.data.shift()
    }
}
const queue2 = new Queue2<number>()
queue2.push(1)
// queue2.push('str')
queue2.push(2)
// toFixed只对数字类型有效果
console.log(queue2.pop().toFixed())
console.log(queue2.pop().toFixed())


const queue3 = new Queue2<string>()
// queue3.push(1)
queue3.push('str')
console.log(queue3.pop().length)


interface IkeyPair<T, U> {
    key: T,
    value: U
}
let kp1: IkeyPair<number, string> = { key: 1, value: 'a'}
let kp2: IkeyPair<string, boolean> = { key: '1', value: false}


let arr:number[] = [1, 2, 3]
let arrTow: Array<number> = [1, 2, 3]


// interface Iplus {
//     (a: number, b: number): number
// }
interface Iplus<T, U> {
    (a: T, b: T): U
}
function plus(a: number, b: number): number {
    return a+b
}
const a:Iplus<number, number> = plus


function plus2(a: string, b: string): string {
    return a+b
}
const b:Iplus<string, string> = plus2
