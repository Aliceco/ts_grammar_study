/**
 * OOP三大特性：封装、继承、多态
 * 封装：将数据操作细节隐藏起来，只暴露对外的接口（外界的调用端不需要知道细节，通过对外暴露的接口来访问这个对象）
 * 继承：子类继承父类（可以拥有父的特性，也可以自我定义）
 * 多态：是由继承产生的不同的类，对同一个方法可以有不同的响应（猫和狗都继承动物类，但是他们的手脚长得都不一样）
 */
class Animal {
    public name: string
    static data: string[] = ['mammal', 'bird']
    constructor(name: string, age: number) {
        this.name = name
    }
    run() {
        return `${this.name} is running`
    }
    static isAnimal(item) {
        return item instanceof Animal
    }
}
console.log(Animal.data)
const snake = new Animal('snake', 12)
// console.log(snake.run())
console.log(Animal.isAnimal('snake'))


class Dog extends Animal {
    bark() {
        return `${this.name} is running`
    }
}

const dog = new Dog('B', 2)
console.log(dog.run())
console.log(dog.bark())


class Cat extends Animal {
    constructor(name, age) {
        // 继承的话必须用super调用父类的constructor参数
        super(name, age);
        console.log(this.name)
    }
    // 重写run方法
    run() {
        return 'Meow, ' + super.run()
    }
}

const cat = new Cat('momo', 3)
console.log(cat.run())
