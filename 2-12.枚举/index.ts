enum Direction {
    Up,
    Down,
    Left,
    Right
}

console.log(Direction.Left)
console.log(Direction[0])

enum Test {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'right'
}
const val = 'UP'
if (val === Test.Up) {
    console.log('go !!! ')
}


const enum Test2 {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'right'
}
const val2 = 'UP'
if (val2 === Test2.Up) {
    console.log('go !!! ')
}
