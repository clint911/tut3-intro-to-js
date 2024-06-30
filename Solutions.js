//@Ans 1: Getting the divide button and modulus button and assigning them variables
const divBtn = document.getElementById('divideBtn');
const modBtn = document.getElementById('modulusBtn');

//solution to task 2
function subFn(num1, num2) {
  const subVal = num1 - num2;
  return subVal;
}
//solution to task 6
function subLarger(num1, num2) {
  if (num1 > num2) {
    const subVal = num1 - num2;
    return subVal;
  } else if (num2 > num1) {
    const subVal = num2 - num1;
    return subVal;
  }
  else {
    return 0;
  }
}
//solution to task 3
function multFn(num1, num2) {
  const multVal = num1 * num2;
  return multVal;
}
//solution to task 4
function divFn(num1, num2) {
  const divVal = num1 / num2;
  return divVal;
}
//solution to task 7
function checkedDiv(num1, num2) {
  if (num2 === 0) {
    return 0;
  }
  else {
    const checkedDivVal = num1 / num2;
    return checkedDivVal;
  }
}

//solution to task 5
function findRemainder(num1, num2) {
const remVal = num1 % num2;
  return  remVal;
}

//solution to task 8
function performChecks(num1, num2) {
  if (num1 === 0 | num2 === 0) {
 return 0;
  }
   const checkedDivVal = num1 / num2;
  return checkedDivVal;
}

//solution to task 9
function helloPrinter() {
console.log("Hello World");
}

//solution to task 10
function retHello(){
let greeterStr = "Hello world";
  return greeterStr;
}
