//1 Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.

let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let sum = 0;
let positiveElementsCount = 0;

for (let i = 0; i < arr.length; i++) {
	if (arr[i] > 0) {
		sum += arr[i];
		positiveElementsCount++;
	}
}

let div1 = document.querySelector('.div1');
div1.innerHTML = `Сума позитивних елементів: ${sum}<br>Кількість позитивних елементів: ${positiveElementsCount}`;

//2 Знайти мінімальний елемент масиву та його порядковий номер.

let min = arr[0];
let minIndex = 0;

for (let i = 0; i < arr.length; i++) {
	if (arr[i] < min) {
		min = arr[i];
		minIndex = i;
	}
}

let div2 = document.querySelector('.div2');
div2.innerHTML = `Мінімальний елемент масиву: ${min}<br>Його порядковий номер: ${minIndex}`;

//3 Знайти максимальний елемент масиву та його порядковий номер.

let max = arr[0];
let maxIndex = 0;

for (let i = 0; i < arr.length; i++) {
	if (arr[i] > max) {
		max = arr[i];
		maxIndex = i;
	}
}

let div3 = document.querySelector('.div3');
div3.innerHTML = `Максимальний елемент масиву: ${max}<br>Його порядковий номер: ${maxIndex}`;

//4 Визначити кількість негативних елементів.

let negativeElementsCount = 0;

for (let i = 0; i < arr.length; i++) {
	if (arr[i] < 0) {
		negativeElementsCount++;
	}
}

let div4 = document.querySelector('.div4');
div4.innerHTML = `Кількість негативних елементів: ${negativeElementsCount}`;

//5 Знайти кількість непарних позитивних елементів.

let oddPositiveElementsCount = 0;

for (let i = 0; i < arr.length; i++) {
	if (arr[i] > 0 && arr[i] % 2 !== 0) {
		oddPositiveElementsCount++;
	}
}

let div5 = document.querySelector('.div5');
div5.innerHTML = `Кількість непарних позитивних елементів: ${oddPositiveElementsCount}`;

//6 Знайти кількість парних позитивних елементів.

let evenPositiveElementsCount = 0;

for (let i = 0; i < arr.length; i++) {
	if (arr[i] > 0 && arr[i] % 2 === 0) {
		evenPositiveElementsCount++;
	}
}

let div6 = document.querySelector('.div6');
div6.innerHTML = `Кількість парних позитивних елементів: ${evenPositiveElementsCount}`;

//7 Знайти суму парних позитивних елементів.

let evenPositiveElementsSum = 0;

for (let i = 0; i < arr.length; i++) {
	if (arr[i] > 0 && arr[i] % 2 === 0) {
		evenPositiveElementsSum += arr[i];
	}
}

let div7 = document.querySelector('.div7');
div7.innerHTML = `Сума парних позитивних елементів: ${evenPositiveElementsSum}`;

//8 Знайти суму непарних позитивних елементів.

let oddPositiveElementsSum = 0;

for (let i = 0; i < arr.length; i++) {
	if (arr[i] > 0 && arr[i] % 2 !== 0) {
		oddPositiveElementsSum += arr[i];
	}
}

let div8 = document.querySelector('.div8');
div8.innerHTML = `Сума непарних позитивних елементів: ${oddPositiveElementsSum}`;

//9 Знайти добуток позитивних елементів.

let positiveElementsProduct = 1;

for (let i = 0; i < arr.length; i++) {
	if (arr[i] > 0) {
		positiveElementsProduct *= arr[i];
	}
}

let div9 = document.querySelector('.div9');
div9.innerHTML = `Добуток позитивних елементів: ${positiveElementsProduct}`;

//10 Знайти найбільший серед елементів масиву, остальні обнулити.

let maxElement = arr[0];

for (let i = 0; i < arr.length; i++) {
	if (arr[i] > maxElement) {
		maxElement = arr[i];
	}
}

for (let i = 0; i < arr.length; i++) {
	if (arr[i] !== maxElement) {
		arr[i] = 0;
	}
}

let div10 = document.querySelector('.div10');
div10.innerHTML = `Масив з найбільшим елементом: ${arr}`;