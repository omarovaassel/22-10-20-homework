// 1. Создайте функцию rgb(), которая будет принимать три числовых
// аргумента и возвращать строку вида «rgb(23,100,134)». Если
// аргументы не заданы, считать их равными нулю.

function rgb(r = 0, g = 0, b = 0) {
    return `rgb(${r},${g},${b})`;
}

console.log( rgb(245,245,245) );

// 2. Создайте функцию avg() , которая будет принимать
// неограниченное кол-во аргументов и находить среднее значение по
// всем своим аргументам.

function avg() {
    let sum = 0;
    let count = 0;
    let avg = 0;

    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
        count++;
        avg = Math.floor(sum / count);
    }
    return avg;
}

console.log( avg(2,4,6,12) );

// 3. Создайте функцию repeat(str, n), которая возвращает строку,
// состоящую из n повторений строки str.

function repeat(str, n) { return str.repeat(n) };

console.log( repeat('привет! ', 5) );