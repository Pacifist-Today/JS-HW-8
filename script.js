//HW 8

//Task #1

let firstExample = Boolean(Number("10")) + 1; // 2
let secondExample = 'sub ' + Number(false); // sub0
let thirdExample = 16 * "      91    "; // 1456
let fourthExample = true-70; // -69
let fifthExample = Number(1 + String(1)) + 1 // 2
// В пятом примере разве не должно быть 12?
// 1 число + 1 строка, разве не должна произойти конкатенация?
// 11 преобразуется из строки в число, затем +1 и должно получится 12
console.log(sixthExample = 1 + "1")

console.log(firstExample)
console.log(secondExample)
console.log(thirdExample)
console.log(fourthExample)
console.log(firstExample)

// Task #2

let years = +prompt("Преобразуем часы в секунды")

if (typeof years === 'number') {
    years = years * 60 * 60
    alert(years + " секунд")
} else if (isNaN(years)) {
    alert("Ошибка! Введите число!")
}

// Task #3

let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num++;
num--;
alert(num);