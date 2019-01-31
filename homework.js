// -------------------------- Home work 3--------------------------
// -------------------------- Никита Дорошенко Андреевич --------------------------

// Циклы. Задачи

// #1
// let where = 'i am in the easycode';
// let newWhere = '';

// for (let i = 0; i < where.length; i++) {
// 	if (where[i - 1] === ' ' || i === 0) {
// 		newWhere += where[i].toUpperCase();
// 	} else {
// 		newWhere += where[i];
// 	}
// }
// console.log(newWhere)


// #2
// let who = 'tseb eht ma i';
// let i = who.length - 1;
// let newWho = '';

// while (i >= 0) {
// 	newWho += who[i]
// 	i--
// }
// console.log(newWho)

// #3
// let number = 10;

// for (let i = 1; i < number; i++) {
// 	number *= i
// }
// console.log(number)


// #4
// let what = 'JavaScript is a pretty good language';
// let newWhat = '';

// for (let i = 0; i < what.length; i++) {
// 	if (what[i - 1] === ' ') {
// 		newWhat += what[i].toUpperCase()
// 	} else if (what[i] !== ' ') {
// 		newWhat += what[i]
// 	}
// }
// console.log(newWhat)


// #5
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// for (let value of numbers) {
// 	if (value % 2) {
// 		console.log(value);
// 	}
// }


// #6 
let list = {
	name: 'Denis',
	work: 'easycode',
	age: 29
}

for (let str in list) {
	if (typeof list[str] === 'string') {
		console.log(list[str].toUpperCase())
	}
}