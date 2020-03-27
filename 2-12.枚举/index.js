var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Left);
console.log(Direction[0]);
var Test;
(function (Test) {
    Test["Up"] = "UP";
    Test["Down"] = "DOWN";
    Test["Left"] = "LEFT";
    Test["Right"] = "right";
})(Test || (Test = {}));
var val = 'UP';
if (val === Test.Up) {
    console.log('go !!! ');
}
var val2 = 'UP';
if (val2 === "UP" /* Up */) {
    console.log('go !!! ');
}
