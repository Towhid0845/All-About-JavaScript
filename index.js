// 🍓🍓🍓 Basic 🍓🍓🍓
// ----------------------

// ✅ console 🔥
// console.log("Hello World!");
// console.log("Hello Towhid " + 10 * 10);

//
//
// 🔥 variable 🔥
// ✅ variable(key) name = value
// var temp = "Towhid";
// console.log(temp);

// ✅ variable can start with $ or _
// var $myName = "Towhid";
// console.log($myName);
// var _myName = "Towhiduzzaman";
// console.log(_myName);

// ✅ variable can't start with number or special character
// var 5myName = "Towhiduzzaman";
// var %myName = "Towhiduzzaman";

//
//
// 🔥 String Operation🔥
// ✅ add number and string
// console.log(10 + "20");

// ✅ subtract string from a number is a bug in JS 🐛
// console.log(10 - "20");

// ✅ concating two string
// console.log("Towhid " + "zaman");

// ✅ subtracting a string from another string
// console.log("Towhid " - "zaman");

//
//
// 🔥 Data type & Operator 🔥
// ✅ typeof operator
// var country = "Bangladesh";
// console.log(typeof country);

// ✅ boolean data type
// var temp = true;
// console.log(temp);

// ✅ add two boolean (in JS true = 1)
// console.log(true + true);

// ✅ subtract two boolean (in JS false = 0)
// console.log(true - false);

// ✅ null value in JS 🙋‍♂️👨‍🏫
// type of null is object and it is a bug in JS 🐛
// var temp = null;
// console.log(temp);
// console.log(typeof temp);

// ✅ undefined datatype in JS 🙋‍♂️👨‍🏫
// var temp;
// console.log(temp);
// console.log(typeof temp);

// ✅ NaN in JS 🙋‍♂️👨‍🏫
// NaN is a property of the global object.
// In other words, it is a variable in global scope.
// The initial value of NaN is Not-A-Number
// NaN is a method in JS and it is ussd to validate password

// Example ❤️
// var temp = 10;
// var temp2 = "towhid";
// console.log(isNaN(temp));
// console.log(isNaN(temp2));
// if (isNaN(temp2)) {
// 	console.log("Plz enter a valid number");
// }

// console.log(NaN === NaN);
// console.log(Number.NaN === NaN);
// console.log(isNaN(NaN));
// console.log(isNaN(Number.NaN));
// console.log(Number.isNaN(NaN));

// ✅ exponential operator
// console.log(10 ** 3);
// console.log(10 ** -2);

// ✅ comparison operator 🙋‍♂️👨‍🏫
// '==' only checks value and '===' checks value with data type
// var num1 = 5;
// var num2 = "5";
// console.log(num1 == num2); //check only value
// console.log(num1 === num2); //check value and type

// Example ❤️
// leap year check
// var year = 2000;
// debugger;
// if (year % 4 == 0) {
// 	if (year % 100 == 0) {
// 		if (year % 400 == 0) {
// 			console.log("Leap year");
// 		} else {
// 			console.log("Not leap year");
// 		}
// 	} else {
// 		console.log("Leap year");
// 	}
// } else {
// 	console.log("Not leap year");
// }

// ✅ 5 falsy values in javascript:
// 0, undefined, null, NaN, false
// if ((x = 0)) {
// 	console.log("Not falsy");
// } else {
// 	console.log("Falsy...");
// }

// ✅ The conditional (ternary) operator:
// It is the only javascript operator that takes three operands.
// const age = 15;
// console.log(age >= 18 ? "You can vote" : "You can't vote");

// ✅ parameter vs argument
// function add(a, b) { // this is parameter
// 	var sum = a + b;
// 	console.log(sum);
// }
// add(10, 20); // this is argument

// ✅ anonymous function: a function that has no name
// var fun = function (a, b) {
// 	return (sum = a + b);
// };
// var add = fun(10, 20);
// console.log(add);

//
//
//
//
// 🍓🍓🍓 ECMAScript 2014 / ES5 updates 🍓🍓🍓
// ----------------------------------------------

// ✅ use strict 🔥
// everything needs to be in proper way if we write "use strict" in a code.
// "use strict";
// x = 3.14;    // it will give an error
// let x = 3.14;
// console.log(x);

//
//
//
//
// 🍓🍓🍓 ECMAScript 2015 / ES6 updates 🍓🍓🍓
// ----------------------------------------------

// 1️⃣ var, let and const 🔥🙋‍♂️👨‍🏫

// ✅ var: var k function scope bola hoi ja globally kaj kore.
// code ar jekono jaigai use kora jai and update kora jai.

// ✅ let: let k block scope bola hoi ja akta block '{}' ar moddhe
// declear korle tar barire r kaj kore na tobe oi block ar moddhe
// jodi inner block'{{}}' thake tobe inner block e o kaj kore.

// if (true) {
// 	let x = 10;
// 	console.log(x);
// }
// x++;
// console.log(x);

// ✅ const: const is almost similer to let.
// but const er value change kora jai na
// const x = 10;
// x = x + 1;
// console.log(x);

// 2️⃣ Template Literales(Template Strings) 🔥
// It is used as an alternative of string concatination
// for (let i = 0; i <= 10; i++) {
// let table = 10;
// console.log(table + "*" + i + "=" + table * i);  // old way
// console.log(`${table} * ${i} = ${table * i}`);
// }

// 3️⃣ Default parameter 🔥
// function ar parameter ar value jodi assign kore rakha hoi tobe function
// call e argument pass na korleo function parameter ar default value use kore
// function default_parameter(a = 10, b = 5) {
// 	return a * b;
// }
// console.log(default_parameter());
// console.log(default_parameter(5));  // always cosidered as first argument.
// console.log(default_parameter(2, 2));

// 4️⃣ fat arrow function 🔥
// In case of fat arrow function, we can not call a function before its declearation
// and we can not use 'this' keyword.
// console.log(arrowfunc());	// can not access before declearation
// const arrowfunc = () => {
// 	// let a = 5,
// 	// 	b = 10;
// 	// return `The summation is ${a + b}`;
// 	// or
// 	return `The summation is ${(a = 5) + (b = 10)}`;
// };
// console.log(arrowfunc());

// If arrow function contain only one line and need to returen it,
// then no need to use curly braces.
// const arrowfunc = () => `The summation is : ${(a = 5) + (b = 10)}`;
// console.log(arrowfunc());

//
//
// 5️⃣ Destructuring in ES6 🔥

// ✅ Array Destructuring
// const bioData = ["towhid", "zaman", 26];

// normally we used to do in this way but this is not efficient.
// let fName = bioData[0];
// let lName = bioData[1];
// let age = bioData[2];
// console.log(age);

// by applying array destructuring we can do this very simply and efficiently.
// let [fName, lName, age] = bioData;
// console.log(age);

// we can add values too
// let [fName, lName, age, edu = "BSC"] = bioData;
// console.log(edu);

// ✅ Object Destructuring
// const bioData = {
// 	fName: "Towhid",
// 	lName: "Zaman",
// 	age: 26,
// };

// normally we used to do in this way but this is not efficient.
// let age = bioData.age;
// console.log(age);
// or
// console.log(bioData.fName);

// by applying object destructuring we can do this very simply and efficiently.
// let { fName, lName, age } = bioData;
// console.log(age);

// we can add values too
// let { fName, lName, age, edu = "BSC" } = bioData;
// console.log(edu);

//
//
// 6️⃣ Object Properties 🔥🙋‍♂️👨‍🏫

// ✅ Dynamic Properties
// normally we can not access fName inside or do any arethmetic operation.
// let fName = "Towhid";
// const bioData = {
// 	fName: "Hi, How are you ?",
// 	// 20 + 6: "is my age", //not possible to use
// 	20: "is my age",
// };
// console.log(bioData);

// by useing dynamic property it is now accessable and
// arethmetic operation can also be performed.
// let fName = "Towhid";
// const bioData = {
// 	[fName]: "Hi, How are you ?",
// 	[20 + 6]: "is my age",
// };
// console.log(bioData);

// ✅ Skip key : value
// No need to write key and value, if both are same
// This is elaborate version (in detail how it working)
// let myName = "Towhiduzzaman";
// let myAge = 26;
// const bioData = {
// 	myName: myName,
// 	myAge: myAge,
// };
// console.log(bioData);

// In short, we can skip key value
// let myName = "Towhiduzzaman";
// let myAge = 26;
// const bioData = {
// 	myName,
// 	myAge,
// };
// or inline
// const bioData = { myName, myAge };
// console.log(bioData);

// 7️⃣ Spread Operator 🔥

// This is my fruits array and near future new fruit array can be add in this array.
// const fruits = ["apple", "orange", "banana", "mango"];
// but if we add elements in this way, it is not efficient.
// const favFruits = [
// 	"apple",
// 	"orange",
// 	"banana",
// 	"mango",
// 	"strawberry",
// 	"watermelon",
// ];
// using '...' spread operator it is so easy.
// const myFavFruits = [...fruits, "strawberry", "watermelon"];
// console.log(myFavFruits);

// 8️⃣ REST Operator: it not very importent.

//
//
//
//
// 🍓🍓🍓 ECMAScript 2016 / ES7 features 🍓🍓🍓
// -----------------------------------------------

// 1️⃣ includes() method in array🔥
// It is used to check whether an element is present in array or not.
// const fruits = ["apple", "orange", "banana", "mango"];
// const isPresent = fruits.includes("apple");
// console.log(isPresent);

// 2️⃣ exponential operator 🔥
// console.log(2 ** 5);

//
//
//
//
// 🍓🍓🍓 ECMAScript 2017 / ES8 features 🍓🍓🍓
// -----------------------------------------------

// 1️⃣ String Padding 🔥
// It is used to add padding at start/end of a string.
// const message = "Towhid";
// console.log(message);
// console.log(message.padStart(15));
// console.log(message.padEnd(20));

// 2️⃣ Object.values() 🔥
// It is used to get the values of all keys of an object all together.
// object is converting into array.
// const person = { name: "Towhid", age: 26 };
// console.log(Object.values(person));

// 3️⃣ Object.entries() 🔥
// It is used to get the all the key : value pairs of an object.
// object is converting into array.
// const person = { name: "Towhid", age: 26 };
// console.log(Object.entries(person));

// 4️⃣ ASYNC AWAIT
// It is an advance topic. We will see it later.

//
//
//
//
// 🍓🍓🍓 ECMAScript 2018 / ES9 features 🍓🍓🍓
// -----------------------------------------------

// 1️⃣ spread operator 🔥
// In ES6 it was only for array, but now we can use this for object also.
// const myInfo = { name: "Towhid", age: 26 };
// const addMyInfo = { ...myInfo };
// console.log(myInfo);
// console.log(addMyInfo);

//
//
//
//
// 🍓🍓🍓 ECMAScript 2019 / ES10 features 🍓🍓🍓
// ------------------------------------------------

// 1️⃣ flat() method 🔥
// In ES6 we have seen 'reduce() method' to flatten a 2D array.
// For example ❤️
// const arr = [
// 	["abc", "def"],
// 	["abc", "def"],
// 	["abc", "def"],
// 	["abc", "def"],
// ];
// let flatArr = arr.reduce((elem, currVal) => {
// 	return elem.concat(currVal);
// });
// console.log(flatArr);

// Here we can flatten an array with Infinity dimention(layers).
// Instead of those things, now we use flat() method
// For example ❤️
// const arr = [
// 	["abc", "def"],
// 	["abc", "def"],
// 	["abc", "def"],
// 	["abc", ["abc", "def"]],
// ];
// const arr1 = [
// 	["abc", "def"],
// 	["abc", "def"],
// 	["abc", "def"],
// 	["abc", ["abc", ["abc", "def"]]],
// ];
// console.log(arr.flat(2)); // 2(3D) indicates the number of layers.
// console.log(arr1.flat(3)); // 3(4D) indicates the number of layers.
// console.log(arr1.flat(Infinity)); // It will convert any numbers of layer.

// 2️⃣ Object.fromEntries() 🔥
// Object.entries() method converts an object into array.
// if we need to convert array to object then we can use Object.fromEntries()
// const person = { name: "towhid", age: 26 };
// const objArr = Object.entries(person);
// // console.log(Object.entries(person));
// console.log(Object.fromEntries(objArr));

// 3️⃣ String.prototype.{trimStart,trimEnd} 🔥
// It is used to remove padding from start/end of a string.
// const message = "Towhid";
// console.log(message);

// const temp = message.padStart(15);
// console.log(temp);
// console.log(temp.trimStart());

// const temp1 = message.padEnd(15);
// console.log(temp1);
// console.log(temp1.trimEnd());

//
//
//
//
// 🍓🍓🍓 ECMAScript 2020 / ES11 features 🍓🍓🍓
// ------------------------------------------------

// 1️⃣ BigInt 🔥
// let oldNum = Number.MAX_SAFE_INTEGER;
// console.log(oldNum);
// console.log(9007199254740991n + 12n);

// const newNum = 9007199254740991n + 12n;
// console.log(newNum);
// console.log(typeof newNum);

// 2️⃣ Nullish operator
// It returns RHS if LHS is null or undefined otherwise LHS returns.
// const foo = null ?? "default string";
// console.log(foo);

//
//
//
//
// 🍓🍓🍓 Array in Javascript 🍓🍓🍓
// ------------------------------------

// In JS we have a Arrary class and arrays are the prototypes of that class.
// A arrry in JS can contain different types of data.
// e.g. arr = ['name',32,true]

// ✅ length property of array 🔥
// var arr = ["name", "firstname", "lastname"];
// console.log(arr[2]);
// console.log(arr.length);
// console.log(arr[arr.length - 1]);

// ✅ for in loop 🔥
// It is use to access index of array
// var arr = ["A", "B", "C", "D", "E"];
// for (let elements in arr) {
// 	console.log(elements);
// }

// ✅ for of loop 🔥
// It is similer as normal for loop
// var arr = ["A", "B", "C", "D", "E"];
// for (let elements of arr) {
// 	console.log(elements);
// }

// ✅ forEach loop 🔥
// it is a combination of for in loop and for of loop
// It doesn't return anything.
// arr.forEach(callback(currentValue[,index[,array]]){
// it returns element for new array, after executing something
// }[,thisArg]);
// var arr = ["A", "B", "C", "D", "E"];
// let newArr = arr.forEach((item, index, array) => {
// 	console.log(item);
// 	// console.log(index + ":" + item);
// 	// console.log(array);
// });
// console.log(newArr);

//
//
//
//
// 🍓🍓🍓 searching and filter in an array 🍓🍓🍓
// -------------------------------------------------

// ✅ indexof() method 🔥
// array te kono akta element ar first index number ta ber kore and forword search kore.
// 0 index theke search kora suru kore(normally).
// It returns -1 if element doesn't found.
// indexof method e index number o pass kora jai as a second argument then, oi index theke search kora suru kore.
// var myNames = ["towhid", "zaman", "towhid", "towhiduzzaman", "towhid"];
// console.log(myNames.indexOf("towhid"));
// console.log(myNames.indexOf("towhid", 3));

// ✅ lastIndexof() method 🔥
// array te kono akta element ar last index number ta ber kore and ata backword search kore.
// last index theke search kora suru kore(normally).
// lastIndexof method e index number o pass kora jai as a second argument then, oi index theke search kora suru kore.
// var myNames = ["towhid", "zaman", "towhid", "towhiduzzaman", "towhid"];
// console.log(myNames.lastIndexOf("towhid"));
// console.log(myNames.lastIndexOf("towhid", 3));

// ✅ includes() method 🔥
// arrary te kono element ase kina ta ture or false hishabe returen kore.
// var myNames = ["towhid", "zaman", "towhiduzzaman"];
// console.log(myNames.includes("towhid"));

// ✅ find() method 🔥
// condition ar upor base kore array theke kono akta element k khuje ber kore
// const price = [200, 300, 400, 500, 600, 700, 800];
// console.log(price.find((element) => element < 500));
// console.log(price.find((element) => element > 1500));

// ✅ findIndex() method 🔥
// condition ar upor base kore array theke kono akta element ar index k khuje ber kore
// const price = [200, 300, 400, 500, 600, 700, 800];
// console.log(price.findIndex((element) => element < 500));
// console.log(price.findIndex((element) => element > 1500));

// ✅ filter() method 🔥
// find method ar motoi kaj kore tobe akhane condition satisfied element gula akta array te return kore.
// const price = [200, 300, 400, 500, 600, 700, 800];
// const result = price.filter((element, index) => {
// 	return element < 500;
// 	// return index < 5;
// 	// return element > 1500;
// });
// console.log(result);
// // // or
// // console.log(price.filter((element) => element < 800));

// ✅ sort() method 🔥
// only sting array k sort korte pare.
// alphabetically sort kore.
// const months = ["March", "Jan", "Feb", "April", "Dec", "Nov"];
// console.log(months.sort());

//
//
//
//
//
// 🍓🍓🍓 CRUD Operation in Array 🍓🍓🍓
//-----------------------------------------

// ✅ push() method 🔥
// it can insert elements at the end of array
// it can not sort number or string
// const arr = ["one", "two", "three", "four"];
// arr.push("five", "six");
// console.log(arr);

// or number
// const arr2 = [1, 2, 3, 4];
// arr2.push(5);
// console.log(arr2);

// it returns length of the array
// const count = arr.push("five", "six");
// console.log(count);

// ✅ unshift() method 🔥
// it can insert elements at the begenning of array
// it can not sort number or string
// const arr = ["one", "two", "three", "four"];
// arr.unshift("five", "six");
// console.log(arr);

// it returns length of the array
// const count = arr.unshift("five", "six");
// console.log(count);

// ✅ pop() method 🔥
// it removes the last element of the array and returns that element
// this method decrese the size of array
// const arr = ["one", "two", "three", "four"];
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);

// ✅ shift() method 🔥
// it removes the first element of the array and returns that element
// this method decrese the size of array
// const arr = ["one", "two", "three", "four"];
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);

// ✅ splice() method 🔥
// it can remove/add/update element in arrary
// it takes three argument: index, remove, add
// after remove/update it returns deleted item

// const arr = ["one", "two", "three", "four"];
// arr.splice(arr.length, 0, "five"); // add
// console.log(arr.splice(arr.length, 0, "five"));
// console.log(arr);

// const arr = ["one", "two", "three", "four"];
// const index = arr.indexOf("two");
// console.log(arr);
// if (index != -1) {
// 	console.log(arr.splice(index, 1)); // remove
// 	// console.log(arr.splice(index, 2)); // remove two element
// 	// console.log(arr.splice(index, Infinity)); // remove infinity element
// }
// console.log(arr);

// const arr = ["one", "two", "three", "four"];
// const index = arr.indexOf("four");	// search
// if (index != -1) {
// 	console.log(arr.splice(index, 1, "Four")); // update
// }
// console.log(arr);

// ✅ map() method 🔥
// It returns a new array without mutating the original array
// It is quite similar to forEach but it returns a array where forEach can't.
// We can add additional method to map method but not possible for forEach.
// arr.map(callback(currentValue[,index[,array]]){
// it returns element for new array, after executing something
// }[,thisArg]);

// const arr = [1, 2, 3, 4, 5];
// let newArr = arr.map((element, index, arr) => {
// 	return element > 3;
// });
// console.log(arr);
// console.log(newArr);

// const arr = [1, 2, 3, 4, 5];
// let newArr = arr.map((element, index, array) => {
// 	return `Index: ${index} and value: ${element} belongs to ${array}`;
// });
// console.log(arr);
// console.log(newArr);

// const arr = [4, 9, 16, 25, 36];
// let newArr = arr.map((element) => Math.sqrt(element));
// console.log(arr);
// console.log(newArr);

// const arr = [1, 2, 3, 4, 5];
// let newArr = arr
// 	.map((element) => {
// 		return element * 5;
// 	})
// 	.filter((element) => {
// 		return element > 10;
// 	});
// // or
// // let newArr = arr
// // 	.map((element) => element * 5)
// // 	.filter((element) => element > 10);
// console.log(arr);
// console.log(newArr);

//
//
// 🔥 reduce method 🔥🙋‍♂️👨‍🏫

// It converts  2d array into single dimensional array.
// It is used to calculate sum, product, avg, percentage, etc.
// It returns a single output value.
// It takes four arguments: Accumulator, Current Value, Current Index, Source Array.
// limitation: It can't convert 3d to single dimention array.
// ✅ flatten a 2D array
// const arr = [
// 	["abc", "def"],
// 	["ghi", "jkl"],
// 	["mno", "pqr"],
// 	["stu", "vwx"],
// ];
// let flatArr = arr.reduce((accumulator, currElem) => {
// 	return accumulator.concat(currElem);
// });
// console.log(flatArr);

// ✅ summation:
// let arr = [1, 2, 3, 4, 5];
// let sum = arr.reduce((accumulator, curElem, index, arr) => {
// 	return (accumulator += curElem);
// });
// console.log(sum);

// ✅ multiplication:
// let arr = [1, 2, 3, 4, 5];
// let sum = arr.reduce((accumulator, curElem, index, arr) => {
// 	debugger;
// 	return (accumulator *= curElem);
// });
// console.log(sum);

// ✅ add an initial value to the array
// let arr = [1, 2, 3, 4, 5];
// let sum = arr.reduce((accumulator, curElem, index, arr) => {
// 	// debugger;
// 	return (accumulator *= curElem);
// }, 10); //initial value 10 is added here.
// console.log(sum);

// example ❤️
// let arr = [1, 2, 3, 4, 5];
// let sum = arr
// 	.map((curElem) => {
// 		return curElem * 3;
// 	})
// 	.filter((curElem) => {
// 		return curElem > 10;
// 	})
// 	.reduce((accumulator, curElem) => {
// 		return (accumulator += curElem);
// 	});
// console.log(sum);

//
//
//
//
//
// 🍓🍓🍓 String in JS 🍓🍓🍓
//------------------------------

// In three ways we can create string
// let name1 = "Towhid zzaman";
// let name2 = "Towhid zzaman";
// let name3 = new String("Towhid zzaman"); // string create using constructor.
// console.log(name1);
// console.log(name2);
// console.log(name3);

// ✅ handling double quotes("") and single quotes('')
// let str1 = "My name is 'Towhid' zzaman";
// let str2 = 'My name is "Towhid" zzaman';
// console.log(str1);
// console.log(str2);

// ✅ find length for string
// let name1 = "Towhid zzaman";
// console.log(name1.length);

// ✅ indexOf() method for string 🔥
// const info = "I am Towhiduzzaman.";
// console.log(info.indexOf("am"));
// console.log(info.indexOf("a"));
// console.log(info.indexOf("a", 5));

// ✅ search() method 🔥
// It is similer method like indexOf
// but it can not take second argument.
// const info = "I am towhiduzzaman";
// const sInfo = info.search("am");
// console.log(sInfo);

// ✅ lastIndexOf() method for string 🔥
// const info = "I am towhiduzzaman";
// console.log(info.lastIndexOf("a"));
// console.log(info.lastIndexOf("a", 10));

// ✅ replace(search_word, replace_word) method 🔥
// This method can search a string and replace it where it found first.
// let myName = "I am towhid zzaman towhid";
// let myName = "I am towhidzzaman towhid";
// let temp = myName.replace("towhid", "TOWHID");
// let temp = myName.replace("Towhid", "TOWHID");  // This is a case sensitive method.
// console.log(temp);
// console.log(myName);

// ✅ toUpperCase() and toLowerCase() method 🔥
// let myName = "I am Towhiduzzaman";
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());

// ✅ concat() method 🔥
// let fName = "Towhid";
// let lName = "Zaman";
// console.log(fName + lName);
// console.log(fName.concat(lName));
// console.log(fName.concat(" ", lName));
// console.log(`${fName} ${lName}`);   // Best Option

// ✅ trim() method 🔥
// This method trim white space form begining and end of a string but not in the middle.
// let str = "     Hello     Towhid     ";
// console.log(str.trim());

// ✅ split() method 🔥
// Spliting can be possible using different characters such as: (.,|&) etc.
// let txt = "I am towhiduzzamn";
// let txt1 = "a,b,c,d,e";
// let txt2 = "aple.banana.cherry";
// console.log(txt.split(" ")); // split on spaces
// console.log(txt1.split(",")); // split on commas
// console.log(txt2.split(".")); // split on dot

//
//
//
//
// 🍓🍓🍓 Extracting String Parts 🍓🍓🍓
// ----------------------------------------
// There are 3 methods for extracting a part of string

// 1️⃣ slice(start, end) 🔥
// It extract a part of string and returns the extracted part in a new string
// end positon is not included in slice (i.e. start to end - 1).
// const str = "I am Towhid zzaman";
// const result = str.slice(2, 8);
// const result = str.slice(2, -5); // last theke 5ta character bad diya print korbe.
// const result = str.slice(2); // It also works without end agrument.
// console.log(result);

// example of slice() method ❤️
// display only 100 character like textarea limits.
// var myText =
// 	"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ";
// var displayText = myText.slice(0, 100);
// console.log(displayText);
// console.log(displayText.length);    // check the length

// 2️⃣ sbustring() method 🔥
// very similer to slice() method, but ignores negetive  agrument.
// if with put negetive argument, then it doesn't give any error but the ans will be for first argument.
// const str = "I am Towhid zzaman";
// const result = str.substring(2, 8);
// const result = str.substring(3, -2);
// console.log(result);

// 3️⃣ substr(star, size) method 🔥
// similer as slice() method but, size argument can't be negetive.
// var str = "I am towhiduzzaman";
// var result = str.substr(7, 3);
// var result = str.substr(7, -2);
// var result = str.substr(-5);
// console.log(result);

//
//
//
//
// 🍓🍓🍓 Extracting String Characters 🍓🍓🍓
// ---------------------------------------------
// There are three method for extracting string characters:

// 1️⃣ charAt(position) method 🔥
// It returns the character at a specified index(position) in a string.
// let str = "I am Towhiduzzaman";
// console.log(str.charAt(5));

// 2️⃣ charCodeAt(position) method 🔥
// It returns the Unicode of the last character in a string
// let str = "I am Towhiduzzaman";
// let lastChar = str.length - 1;
// console.log(str.charCodeAt(lastChar));

// 3️⃣ Property access [ ] 🔥
// In case of string it is called property access.
// let str = "I am Towhiduzzaman";
// console.log(str[10]);

//
//
//
//
// 🍓🍓🍓 Date Object in JS 🍓🍓🍓
// ----------------------------------
// There are 4 ways to create a new date object.

// 1️⃣ new.Date() 🔥
// Date object are created with the 'new Date()' constructor.
// let currDate = new Date();
// console.log(currDate); // In GMT
// console.log(currDate.toLocaleString()); // In local Time
// console.log(currDate.toString()); // local Time in string format

// 2️⃣ Date.now() 🔥
// It returns the numeric value in miliseconds corresponding to the current time(since 1st Jan 1970).
// console.log(Date.now());

// 3️⃣ new Date(year, month, day, hour, minute, second, milisecond) 🔥
// These arguments must be in this order.
// year and month are required  argument.
// JavaScript counts months from 0 to 11.
// var currDate = new Date(2023, 0, 6, 10, 50, 30, 5);
// var currDate = new Date(2023, 0);
// console.log(currDate.toLocaleString());

// 4️⃣ new Date(dateString) 🔥
// It creates a new date object from a date string
// var d = new Date("Feb 19, 2023 1:30:00");
// console.log(d.toLocaleString());

// 5️⃣ new Date(miliseconds) 🔥
// It creates new date object as zero time plus millisecond
// var d = new Date(0);
// var d = new Date(1674070816658);
// console.log(d.toLocaleString());

// 🔥 Dates Method 🔥

// ✅ get individual date
// var currDate = new Date();
// console.log(currDate.toLocaleString());
// console.log(currDate.getFullYear());
// console.log(currDate.getMonth());
// console.log(currDate.getDate());
// console.log(currDate.getDay());

// ✅ set the indivisual date
// var currDate = new Date();
// console.log(currDate.setFullYear(2022));
// // The setFullYear() method can optionally set month and day
// console.log(currDate.setFullYear(2022, 10, 5));
// let setmonth = currDate.setMonth(10); // 0-11 jan to dec
// console.log(setmonth);
// console.log(currDate.setDate(5));

// 🔥 Time Methods 🔥

// ✅ get individual time
// var currTime = new Date();
// console.log(currTime.getTime()); // returns the numbers in milliseconds since Jan 1, 1970.
// console.log(currTime.getHours()); // returns the number (0-23)
// console.log(currTime.getMinutes());
// console.log(currTime.getSeconds());
// console.log(currTime.getMilliseconds());

// ✅ set individual time
// var currTime = new Date();
// console.log(currTime.setTime()); // returns the numbers in milliseconds since Jan 1, 1970.
// console.log(currTime.setHours(10)); // returns the number (0-23)
// console.log(currTime.setMinutes(10));
// console.log(currTime.setSeconds(10));
// console.log(currTime.setMilliseconds(10));

//
//
//
//
//
// 🍓🍓🍓 Math Object in JS 🍓🍓🍓
// ----------------------------------

// ✅ Math.PI property:
// console.log(Math.PI);

// ✅ Math.round() method 🔥
// It returns the value of a number rounded to its nearest integer.
// var x = 10.499;
// var x = 10.599;
// console.log(Math.round(x));

// ✅ Math.pow(x,y) method 🔥
// It returns the value x to the power y.
// console.log(5 ** 2);
// console.log(Math.pow(5, 2));

// ✅ Math.sqrt(x) method 🔥
// It returns the square root of x.
// console.log(Math.sqrt(25));
// console.log(Math.sqrt(30));
// console.log(Math.sqrt(49));

// ✅ Math.abs(x) method 🔥
// // It returns the absolute (positive) value of x.
// console.log(Math.abs(-20));
// console.log(Math.abs(-200));
// console.log(Math.abs(-20.59));
// console.log(Math.abs(10 - 20));

// ✅ Math.ceil(x) method 🔥
// It returns the value of x rounded up to its nearest integer.
// console.log(Math.ceil(5.99));
// console.log(Math.ceil(5.11));
// console.log(Math.ceil(5.001));

// ✅ Math.floor(x) method 🔥
// It returns the value of x rounded down to its nearest integer.
// console.log(Math.floor(5.3));
// console.log(Math.floor(5.99));
// console.log(Math.floor(5.001));

// ✅ Math.min() method 🔥
// It is used to find lowest value of a list of agrument.
// console.log(Math.min(0, 20, 400, -55, 0.33));

// ✅ Math.max() method 🔥
// It is used to find highest value of a list of agrument.
// console.log(Math.max(0, 20, 400, -55, 0.33));

// ✅ Math.random() method 🔥
// It returns a random number between 0(inclusive), and 1(exclusive).
// console.log(Math.random());
// console.log(Math.random() * 10);
// console.log(Math.floor(Math.random() * 10));

// ✅ Math.trunc() method 🔥
// It returns the integer part of a number.
// if the argument is  a positive number then it works as Math.floor() otherwise it works as Math.ceil()
// console.log(Math.trunc(5.5));
// console.log(Math.trunc(-50.5));

//
//
//
//
//
//
// 🍓🍓🍓 Pictorial View of Window, DOM, BOM 🍓🍓🍓
// ---------------------------------------------------

//                                |----------|
//                                |  window  |
//                                |----------|
//                              -       -      -
//                            -         -        -
//                          -           -          -
//                DOM     -        BOM  -            - JavaScript
//             |----------|       |-----------|       |----------|
//             | document |       | navigator |       |  Object  |
//             |----------|       |  screen   |       |  Array   |
//                   |            | location  |       | Function |
//              |--------|        |  frames   |       |----------|
//              |  HTML  |        | histrory  |
//              |--------|      | XMLHttpRequest |
//             -          -     |----------------|
//            -            -
//      |--------|        |--------|
//      | <body> |        | <head> |
//      |--------|        |--------|
//          |                  |
//  |---------------|     |---------|
//  | all other tag |     | <meta>  |
//  |---------------|     | <title> |
//                        | <link>  |
//                        | <rel>   |
//                        |---------|

// 🌟 Window 🌟

// Window is the main container or we can say the global Object
// and any operations related to entire browser window can be a part of window object.
// For example :
// find the history or url or location etc.

// All the members like objects, methods or properties. If they are the part of window object
// then we do not refer the window object. Since window is the global object so you do not have to write down window.
// it will be figured out by the runtime.
// For example:
// window.location giving the current URL.
// window.screen or just screen is a small information (object about physical screen dimensions).
// window.document or just document is the main object of the potentially visible document object model (DOM).

// Window has methods, properties and object.
// For example:
// setTimeout() or setInterval() are the methods where as Document is the object of the Window and
// It also has a 'screen' object with properties describing the physical display.

// Some example of Window Object Properties are innerHeight, innerWidth and there are many more.

// 🌟 DOM(Document Object Model) 🌟

// whereas the DOM is the child of Window Object
// Where in the DOM we need to refer the document, if we want to use the document object, methods or properties
// For example:
// document.getElementById()

// Document is just the object of the global object that is Window,
// which deals with the document, the HTML element themselves.

// The DOM is the Document Object Model, which deals with the document,
// the HTML element themeselves, e.g. document and all traversal you would do in it, events, etc.
// For example:
// change the background color to red
// document.body.style.background = "red";

// 🌟 BOM (Browser Object Model) 🌟

// The BOM is the Browser Object Model, which deals with browser components aside from the document,
// like history, location, navigator and screen.
// In simple meaning all the window operations which comes under BOM are performed using BOM.

// 🗄️ See more detail about History object in 'history_back.html' file

// Function alert/comfirm/prompt are also a part of BOM:
// They are directly not related to the document.
// but represent pure browser methods of communicating with the user.
// For example:
// alert(location.href);
// if(confirm("Want to go Facebook?")){
//      location.href = "https://www.facebook.com/";
// }

// 🔥 Nevigate through the DOM 🔥

// 🗄️ see the dom_Navigation.html and implement these code to the browser
// HTML is the root element of document

// 1️⃣ document
// it returns the hole document

// 2️⃣ document.documentElement
// it returns only html portion of the document

// 3️⃣ document.head
// it returns only head portion of the document

// 4️⃣ document.body
// it returns only body portion of the document

// 5️⃣ document.body.childNodes
// it returns list of the direct children only (include tab,enter and whiteSpace)

// 6️⃣ document.body.children
// it returns list of the direct children only (without text nodes, only regular Elements)

// 7️⃣ How to check whether an element has child nodes or not ?
// document.body.hasChildNodes()
// it returns true/false

// 8️⃣ document.childNodes.length
// it returns length of the child

// ✅ How to find/access the child in DOM tree ❓
// 1️⃣ document.body.firstChild: it always return text because it includes tab, enter and whiteSpace.
// 2️⃣ document.body.firstElementChild: it will return actual first child
// document.body.firstElementChild.firstElementChild: we can access element in this way also.
// 3️⃣ lastChild: same as firstChild
// 4️⃣ lastElementChild: same as firstElementChild

// For example ❤️
// const data = document.body.firstElementChild.firstElementChild;
// data.style.color = "red"; // first child will be red.
// another way using class and querySlector// this is easy and better way to use
// const data = document.querySelector(".two").style.color = "blue";

// ✅ How to find or access Parent Nodes ❓
// document.body.parentNode: html is the parent of body
// document.body.parentElement: html is the parent of body

// ✅ How to find or access Siblings ❓
// document.body.nextSibling: immidiate next element
// document.body.nextElementSibling: actual next element
// document.body.previousSibling: immidiate previous element
// document.body.previousElementSibling: actual previous element

//
//
//
//
// 🍓🍓🍓 Events in JavaScript 🍓🍓🍓
// -------------------------------------

// HTML events are "things" that happen to HTML elements.
// When JavaScript is used in HTML pages, JavaScript can "react" on these events.

// ✅ HTML Events 🔥
// An HTML event can be something the browser does, or something a user does.
// Often, when events happen, you may want to do something.
// JavaScript lets you execute code when events are detected.
// HTML allows event handler attributes, with JavaScript code,
// to be added to HTML elements.

// Some examples of HTML events ❤️
// An HTML web page has finished loading
// An HTML input field was changed
// An HTML button was clicked

// ✅ 4 ways of writing Events in JavaScript 🔥
// 🗄️ visit 'eventTypes.html' to see the detail of this section.
// 1️⃣ using inline events: alert();
// 2️⃣ By calling a function (most common way)
// 3️⃣ Using Inline events (HTML onclick="" proprty and element.onclick)
// 4️⃣ Using Event listeners (addEventListner and IE's attachEvent)

// 🔥 Event Object 🔥

// ✅ What is Event Object ❓
// 'Event object' is the parent object of the 'event object'.
// for Example: MouseEvent, focusEvent, KeyboardEvent etc

// ✅ MouseEvent in JavaScript
// 🗄️ visit 'mouseUpDown.html' to see the event.
// 🗄️ visit 'mouseEnterLeave.html' to see the event.
// Events that occur when the mouse interacts with the HTML
// document belongs to the MouseEvent Object.

// ✅ KeyboardEvent  in JavaScript
// 🗄️ visit 'keyPress.html' to see the event.
// Events that occur when user presses a key on the keyboard,
// belongs to the KeyboardEvent Object.

// ✅ InputEvents in JavaScript
// The onchange event occurs when the value of an element has been change.
// For radiobutton and checkboxes, the onchange event occurs when the
// checked status has been changed.

//
//
//
// 🍓🍓🍓 JavaScript Timing Events 🍓🍓🍓
// -----------------------------------------

// The window object allows execution of code at specified time intervals.
// These time intervals are called timing events.
// Two key method to use with JavaScrpt are:
// setTimeout(function, miliseconds) : It executes a funciton, after
// waiting a specific number of milliseconds.
// setInterval(function, milliseconds): It is same as setTimeout(), but
// repeats the execution of the function continuously.

// ✅ Four methods:
// 1️⃣ setTimeout()
// 2️⃣ clearTimeout()
// 3️⃣ setInterval()
// 4️⃣ clearInterval()
// 🗄️ see the 'TimingEvents' folder for detail example.

//
//
//
//
//
// 🍓🍓🍓 Object Oriented JavaScript 🍓🍓🍓
// -------------------------------------------

// ✅ What is Object Literal ?
// Object literal is simply a key:value pair data structure.
// Storing variables and functions together in one container,
// we can refer this as an Objects.
// object is like a school bag.

// 🔥 How to create an object ? 🔥

// ✅ 1st way
// let bioData = {
// 	myName: "Towhiduzzaman",
// 	myAge: 26,
// 	getData: function () {
// 		console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
// 	},
// };
// bioData.getData();

// ✅ 2nd way: no need to write 'function' keyword(after es6)
// let bioData = {
// 	myName: "Towhiduzzaman",
// 	myAge: 26,
// 	getData() {
// 		console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
// 	},
// };
// bioData.getData();

// ✅ Object inside an Object
// let bioData = {
// 	myName: {
// 		fName: "Towhid",
// 		lName: "Zaman",
// 	},
// 	myAge: 26,
// 	getData: function () {
// 		console.log(
// 			`My name is ${bioData.myName.fName}${bioData.myName.lName} and my age is ${bioData.myAge}`
// 		);
// 	},
// };
// bioData.getData();

// 🔥 'this' Object in JavaScript 🔥
// run these code in browser console.

// Example 01 ❤️
// console.log(this);
// console.log(this.alert("Superb!..."));
// It refers to the current context and that is window global object

// Example 02 ❤️
// function myName() {
// 	console.log(this);
// }
// myName();

// Example 03 ❤️
// var name = "Towhiduzzaman";
// function myName() {
// 	console.log(this.name);
// }
// myName();

// Example 04 ❤️
// const object = {
//     myAge : 26,
//     myName(){
//         console.log(this);
//     }
// }
// object.myName();

// Example 05 ❤️
// 'this' keyword doesn't work in fat arrow function.
// that's why it is showing under window global object
// const object = {
// 	myAge: 26,
// 	myName: () => {
// 		console.log(this);
// 	},
// };
// object.myName();

// Example 06 ❤️
// Remember that the myName is the key and the object is act like a value
// let bioData = {
// 	myName: {
// 		fName: "Towhid",
// 		lName: "Zaman",
// 	},
// 	myAge: 26,
// 	getData: function () {
// 		console.log(
// 			`My name is ${this.myName.fName}${this.myName.lName} and my age is ${bioData.myAge}`
// 		);
// 	},
// };
// bioData.getData();

//
//
//
//
// 🍓🍓🍓 Advanced JavaScript 🍓🍓🍓
// ------------------------------------

// 🔥 Event Propagation 🔥

// ✅ The Event Propagation mode determines in which
// order the element receive the event.

// ✅ Event bubling and capturing are two ways of event propagation
// in the HTML DOM API, When an event occurs in an element inside another element,
// and both elements have registered a handle for that event.

// ✅ Event Bubling: With Event Bubbling, the event is first captured and
// handled by the innermost element and then propagated to outer element.
// By default event bubbling phase is active. 🙋‍♂️

// ✅ Event Capturing: With Event Capturing, the event is first captured by the
// outermost element and propagate to the inner elements.
// Capturing is also called "trickling". Which helps remember the propagation order.

//                        |-----------------------------|
//                        | 🔥 The Event Propagation 🔥 |
//                        |-----------------------------|
//                           Window              Window
//                             ⬇                    ⬆
// |------------------|     Document             Document    |------------------|
// |  Capture Phase:  |        ⬇                    ⬆        |   Bubble Passe:  |
// |  It works top to |     <html>               <html>      | It works bottom  |
// | bottom and going |        ⬇                    ⬆        | to top and travel|
// |from the window to|     <body>               <body>      |  From the event  |
// | the event phase  |        ⬇                    ⬆        |target (parent) to|
// |------------------|      <div>                <div>      |back to the window|
//                             ⬇                    ⬆        |------------------|
//                          <button>             <button>
//                             ⬇                    ⬆
//                            ⚪➡️ Target Phase ⬅️⚪
//                         |---------------------------|
//                         | Target phase: In which    |
//                         | element you are clicking  |
//                         | and the event is starting |
//                         |---------------------------|
//
//
// ✅ Higher Order Function 🔥🙋‍♂️👨‍🏫
// function which takes another function as an arguments is called HOF

// ✅ Callback Function 🔥🙋‍♂️👨‍🏫
// function which get passed as an argument to another function is called CBF
// A callback function is a function that is passed as an argument to
// another function, to be “called back” at a later time.

// For Example: make a calculator ❤️
// const add = (a, b) => {
// 	return a + b;
// };
// const sub = (a, b) => {
// 	return Math.abs(a - b);
// };
// const mul = (a, b) => {
// 	return a * b;
// };
// const div = (a, b) => {
// 	return a / b;
// };

// const calculator = (num1, num2, operator) => {
// 	return operator(num1, num2);
// };

// We will use the callback and the HOF to make it simple to use.
// console.log(calculator(10, 5, add));
// console.log(calculator(10, 5, sub));
// console.log(calculator(10, 5, mul));
// console.log(calculator(10, 5, div));
// console.log(add(10, 5));    // this is bad way to call

//
//
// 🔥 Hoisting in JavaScript 🔥

// we have a creation phase and execution phase.
// Hoisting in Javascript is a mechanism where variables and functions
// declarations are moved to the top of their scope before the code execute.

// For example ❤️
// If we write a code in this way:
// console.log(myName);
// var myName;
// myName = "Towhid";
// Hoisting will make this:
// var myName;
// console.log(myName);
// myName = "Towhid";

// ✅ In ES2015 (a.k.a. ES6), hoisting is avoided by using the let keyword
// instead of var. (The other difference is that variables declared
// with let are local to the surrounding block, not the entire function.)

//
//
// 🔥 What is Scope Chain and Lexical Scoping in JavaScript? 🔥🙋‍♂️👨‍🏫

// ✅ The scope chain is used to resolve the value of variable names
// in JS. scope chain in js is lexically defined, which means that we can
// see what the scope chain will be by looking at the code.

// ✅ Lexical Scoping means Now, the inner function can get access to
// their parent functions variables But the vice-versa is not true.

// For example ❤️
// let a = "Hello..."; // global scope
// const first = () => {
// 	let b = "How are you ?.."; // outer scope
// 	const second = () => {
// 		let c = "I am fine. Thank you..."; // inner scope
// 		console.log(a + b + c);
// 	};
// 	second();
// 	// console.log(a + b + c); // I can't access this here.
// };
// first();

//
//
// ✅ What is Closures in JavaScript 🔥

// A closure is the combination of a function bundled together (enclosed) with references
// to its surrounding state (the lexical environment). In other words, a closure gives you
// access to an outer function’s scope from an inner function. In JavaScript, closures are
// created every time a function is created, at function creation time.

// For example ❤️
// it same like lexical scoping
// const outerFun = (a) => {
// 	let b = 10;
// 	const innerFun = () => {
// 		let sum = a + b;
// 		console.log(`the sum of the two no is ${sum}`);
// 	};
// 	innerFun();
// };
// outerFun(5);

// Another Example ❤️
// function outerFun(a) {
// 	let b = 10;
// 	const innerFun = () => {
// 		let sum = a + b;
// 		console.log(`the sum of the two no is ${sum}`);
// 	};
// 	return innerFun; // we are not calling innerFun (just returning)
// }
// let checkClousure = outerFun(5);
// console.log(checkClousure); // it contain innerFun because we are returning it.
// because it is contain a function, if we call ti using () then, innerFun will run.
// checkClousure();
// console.log(checkClousure());
// console.dir(checkClousure); // run this code in a browser console.

// ✅ use strict mode 🔥
// if we use 'use strict' here, error will show.
// because type of x is not defined.
// "use strict"; // without 'use strict' no error occurs.
// x = "towhid";
// let x = "towhid";   // by using let, var or const no error occurs.
// console.log(x);

// ✅ Synchronous Programming in JS 🔥🙋‍♂️👨‍🏫
// It follows first come first serve (FCFS) approach

// For example ❤️
// const fun2 = () => {
// 	console.log("Function 2️⃣ is called");
// };
// const fun1 = () => {
// 	console.log(`Function 1 is called`);
// 	fun2();
// 	console.log(`Function 1 is called Again ✌`);
// };
// fun1();

// ✅ Asynchronous Programming in JS 🔥🙋‍♂️👨‍🏫
// It follows shortest job first approach (SJF) approach

// For example ❤️
// const fun2 = () => {
// 	setTimeout(() => {
// 		console.log(`Function 2️⃣  is called`); // it will execute last
// 	}, 2000);
// };
// const fun1 = () => {
// 	console.log(`Function 1 is called`);
// 	fun2();
// 	console.log(`Function 1 is called Again ✌`); // it will execute first
// };
// fun1();

//
//
// 🔥 The Event Loop in JavaScript 🔥

// ✅ Execution Context:  When a function called in JavaScript, it used to go
// in execution context where it does the neccessery work in that function.
// After the work is finished the execution context is removed form stack.

// ✅ Web API: setTimeout, DOM, AJAX/API calls all these are web api.

// ✅ Messege Queue: Web API delivers the result to the messege queue.

// For example ❤️
// const fun2 = () => {
// 	setTimeout(() => {
// 		console.log(`Function 2`); // it will execute last
// 	}, 2000);
// };
// const fun1 = () => {
// 	console.log(`Function 1`);
// 	fun2();
// 	console.log(`Function 11`); // it will execute first
// };
// fun1();

// Explaination of this example ❤️
// 1. fun1()                    👉  execution_context_stack : fun1()
// 2. console.log('Function 1') 👉  execution_context_stack : fun1(), console()
// 3. fun2()                    👉  execution_context_stack : fun1(), fun2(), setTimeout()
// 4. console.log('Function 2') 👉  It will not be added to the execution_context_stack
//                                   because immidiately it sends a Callback() timer
//                                   to the web API and setTimeout() ends.
//                                   execution_context_stack : fun1()
// 5. console.log(`Function 11`)👉  execution_context_stack : fun1(), console()

// All the function call is finished and the execution_context_stack is empty.
// Now the Callback() timer is shifted to the messege queue 👉  messege_queue : timer()
// After 2S completing of the timer(), an event loop will occur and the messege_queue will
// release the messege one by one. After that, console.log('Funcion 2') will be in the
// execution_context_stack : console()

//
//
// ✅ Curring 🔥🙋‍♂️👨‍🏫
// Curring is a technique of evaluating function with multiple argument,
// into sequence of function with single argument.
// In other words, when a function, instead of taking all arguments at one time,
// takes the first one and return a new function that takes second one and
// returns a new function which takes the third one, and so forth,
// untill all argument have been fulfilled.

// Example ❤️
// function sum(num1) {
// 	// console.log(num1);
// 	return function (num2) {
// 		// console.log(num1, num2, );
// 		return function (num3) {
// 			console.log(num1, num2, num3);
// 			console.log(num1 + num2 + num3);
// 		};
// 	};
// }
// sum(5)(3)(8);
// Or we can do shortcut by using fat arrow function
// const sum = (num1) => (num2) => (num3) => console.log(num1 + num2 + num3);
// sum(5)(3)(8);

// ✅ CallBack Hell 🔥
// setTimeout(() => {
// 	console.log(`1️⃣ works is done`);
// 	setTimeout(() => {
// 		console.log(`2️⃣ works is done`);
// 		setTimeout(() => {
// 			console.log(`3️⃣ works is done`);
// 			setTimeout(() => {
// 				console.log(`4️⃣ works is done`);
// 				setTimeout(() => {
// 					console.log(`5️⃣ works is done`);
// 					setTimeout(() => {
// 						console.log(`6️⃣ works is done`);
// 					}, 1000);
// 				}, 1000);
// 			}, 1000);
// 		}, 1000);
// 	}, 1000);
// }, 1000);

// ✅ AJAX 🔥
// Ajax, which initaily stood for Asynchronous JavaScript And XML.
// It is a programming practice of building complex, dynamic
// webpage using a technology known as XMLHttpRequest.

// ✅ XMLHttpRequest 🔥
// XHR objects are used to interact with servers.
// You can retrieve data from a URL without having to do a full page refresh.
// This enables a web page to update just part of a page without disrupting
// what the user is doing. XMLHttpRequest is used heavily in AJAX programming.

// ✅ Element.insertAdjacentHTML(position, text) method 🔥
// The insertAdjacentHTML() method of the Element interface parses the
// specified text as HTML or XML and inserts the resulting nodes into
// the DOM tree at a specified position.

// ✅ 4 types of Position parameter: beforebegin, afterbegin, beforeend, afterend
// 				<!-- beforebegin -->
// 				<p>
// 					<!-- afterbegin -->
// 				  		content
// 				  	<!-- beforeend -->
// 				</p>
// 				<!-- afterend -->

// 🔥 JSON 🔥
// JSON key always contain double quote("").

// ✅ Object to JSON
// JSON.stringify turns a JavaScript object into JSON text
// and stores that JSON text in a string.
// For example ❤️
// var obj = { key1: "towhid", key2: "zaman", key3: 26 }; // JS object
// var obj_to_json = JSON.stringify(obj);
// console.log(obj_to_json); // converted in JSON
// console.log(typeof obj_to_json);

// ✅ JSON to Object
// JSON.parse turns a string of JSON text into a JavaScript Object,
// For example ❤️
// using previous data obj_to_json
// var json_to_obj = JSON.parse(obj_to_json);
// console.log(json_to_obj);
// console.log(typeof json_to_obj);

// ✅ Promises 🔥
// Promises is the indication of success or failure of a asynchronous action.
// Asynchronous action can be XMLHttpRequest request or fetch request, etc.
// It has three state: pending, fulfilled and rejected
// That means Promises can be returned as these state
// 🗄️ See in detail in Project 📁 > jokes 📁 > script.js

// ✅ Async Await 🔥
// It is an alternative of Promises
// You must need to use try and catch for async await.
// 🗄️ See in detail in Project 📁 > jokes 📁 > script.js

// For normal function async can be written as:
// async function myFunc(){
//     // my code
// }

// For fat arrow function async can be written as:
// const myFunc = async () => {
// 	// my code
// };

// 🔥 String to Number 🔥

// sometimes we see that number in the format of string
// for example ❤️
// var temp = "100";
// console.log(typeof temp);
// but we need this as number
// there are several ways to achive it!

// ✅ Using the unary plus operator
// var temp = "100";
// var temp1 = +temp;
// console.log(typeof temp1);

// ✅ Usingn the Number constructor
// var temp = "100";
// var temp1 = Number(temp);
// console.log(typeof temp1);

// ✅ Using the parseFloat function
// var temp = "100";
// var temp1 = parseFloat(temp);
// console.log(typeof temp1);
