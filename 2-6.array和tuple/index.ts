let arrOfNumber: number[] = [1, 2, 3, 4]
arrOfNumber.push(15)

// 类数组
function test() {
    console.log(arguments)
    console.log(arguments.length)
    console.log(arguments[1])
    // arguments.forEach(() => {})
    // let arr:any[] = arguments
}

// 元组tuple
let user: [string, number, object] = ['a', 1, {'name': 'a'}]
user = ['b', 2, {'name': 'b'}]
