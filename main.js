const students = ['Katy', 'Jackie', 'Sean', 'Nathan'];
// console.log(students.length); got 4

// ACCESSING ITEMS IN ARRAY************
//console.log(students[1]);  //Jackie shows
//console.log(students[students.length - 1]); //Nathan - since length is 4, but array index starts at 0

students[0] = 'Matthew';
// console.log(students);

const valuePrinter = (array, index) => {
  return array[index];

}

// console.log(valuePrinter(students, 1));

// findName accepts an array and a string
const findName = (array) => {
 return array.includes('Greg');
}

console.log(findName(students));
