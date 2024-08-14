function getFirstElement(array) {
    return array[0];
}
var numbers = [1, 2, 4];
var firstNum = getFirstElement(numbers);
var strings = ["one", "two", 'three'];
var firstStr = getFirstElement(strings);
console.log(firstNum, firstStr);
