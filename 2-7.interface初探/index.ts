interface Ifather {
    readonly id: number // 只读属性
    name: string
    age: number
    test?: string // 可选属性
}
let jj1:Ifather = {
    id: 1,
    name: 'A',
    age: 81
}

let jj2:Ifather = {
    id: 2,
    name: 'A',
    age: 81,
    test: 'aaa'
}
