var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * OOP三大特性：封装、继承、多态
 * 封装：将数据操作细节隐藏起来，只暴露对外的接口（外界的调用端不需要知道细节，通过对外暴露的接口来访问这个对象）
 * 继承：子类继承父类（可以拥有父的特性，也可以自我定义）
 * 多态：是由继承产生的不同的类，对同一个方法可以有不同的响应（猫和狗都继承动物类，但是他们的手脚长得都不一样）
 */
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
    }
    Animal.prototype.run = function () {
        return this.name + " is running";
    };
    return Animal;
}());
// const snake = new Animal('snake')
// console.log(snake.run())
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        return this.name + " is running";
    };
    return Dog;
}(Animal));
var dog = new Dog('B', 2);
console.log(dog.run());
console.log(dog.bark());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, age) {
        var _this = 
        // 继承的话必须用super调用父类的constructor参数
        _super.call(this, name, age) || this;
        console.log(_this.name);
        return _this;
    }
    // 重写run方法
    Cat.prototype.run = function () {
        return 'Meow, ' + _super.prototype.run.call(this);
    };
    return Cat;
}(Animal));
var cat = new Cat('momo', 3);
console.log(cat.run());
