// Assignement 1
// Edit tsconfig.json File
// rootDir: "./project/fils/typescript"
// outDir: "./dist/compiled/javascript"

// Assignment 2
function calculate(numOne: number, numTwo: number):number {
  return numOne + numTwo;
}

console.log(calculate(10, 20)); // 30
console.log(calculate("10", "20")); // We Don't Need This To Work
console.log(calculate(+true, +true)); // 2

// Assignment 3
function printInfo(valueOne: string | number , valueTwo: string | number ): string {
  return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
}

console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work

// Assignment 4
let arr: (number | boolean[] | (string | (string | number)[])[])[] = [1, [true], 23, ["hello", ["world", 1]]];

// Assignment 5
function reportErrors(username, age: number) {
	let rank = 'Professor';
	return `Username: ${username}`;
	console.log('We Will Not Reach Here');
}

console.log(reportErrors('Elzero', 40));

// Assignment 6
let nothing;
let theName: string = "Elzero";
function showMyDetails(a = "", b = "", c) {
  return `${a}${b}${c}`;
}

// Replace ???? With The Available Variables As Argument To Get The Result
console.log(showMyDetails(undefined,undefined,theName)); // Elzero

// Assignment 7
function showMsg(
	user?: number | string,
	age?: boolean | string | number,
	country?: boolean | string | number
) {
	return `${user}${age}${country}`;
}

console.log(showMsg());
console.log(showMsg('Elzero'));
console.log(showMsg('Elzero', 40));
console.log(showMsg('Elzero', '40', 'Egypt'));

// Assignment 8
// Write The Function Here
function printInConsole(...message) {
  for(let item of message) {
    console.log(`The Value Is ${item} And Type Is ${typeof item}`);
  }
  console.log('Done!')
}

// Using The Function => Do Not Edit
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));