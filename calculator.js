//functions to fetch dom
const addButton = document.getElementById('addBtn');
const subButton = document.getElementById('subBtn');
const multButton = document.getElementById('multBtn');


const num1 = document.querySelector.innerHtml('num1');
const num2 = document.querySelector.innerHtml('num2');
//@Task1: Get the Divide button {divideBtn}  & Modulus button {modulusBtn} and assign them variable names

//performing operations using functions
//implementing addition function
function additionFn(num1, num2) {
  const addedVal = num1 + num2;
  return addedVal;
}
//@Task2: Implement subtraction function based on the above

//@Task3: Implement multiplication function based on the above

//@Task4: Implement division function based on the above


//@Task5: Implement modulus/ remainder function based on the above

//Task6: Reimplement subtraction function to subtract the number that is bigger between num1 & num2; HINT: use if statements to check for the larger one  and subtract the smaller one

//Task7: Lets make this interesting, division by zero is null, reimplement task4 to ensure num2 our divisor is always non-zero {HINT: use if statements to return a zero every time that num2 is zero}

//Task8: This is a little harder but hold on, implement a function checkParams that performs division but ensures that neither num1 nor num2 is zero

/**@Task9: Enough about operators, write a function helloPrinter that prints Hello world to the screen
 * **/
function helloPrinter(){
//add logic to display hello world to the screen here
}
//@Task 10: Create a function that returns a string "Hello world" when called, note that it does not display but returns the string instead
function retHello() {
//add logic to return the string Hello world
}

//Lets take a look at arrays: an array can contain numbers or strings
//example of array of numbers
const numArr = [1, 2, 3, 4, 5];
//However, how do you display all the elements in an array, use a simple for loop.
for (let i of numArr) {
  if (i < numArr.length) {
  i++;
  console.log(i);
  }
}
//the for loop starts by declaring an iterable element i supposed to go through the array called numArr, the if statement then checks whether i has reached the end of the array,if not it increases the index of i which ensures it goes over to the next element, and every time we are doing this, the element in the ith position is displayed by the console.log

//MegaChallenge: will be updated on noted completion

