console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result


// 1. Function to return 'Hello World!'
console.log('--- Question 1 (example) ---');

function hello(){
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());



// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
console.log('--- Question 2 ---');

function helloName(name){
  console.log('in helloName with value', name);
  if(name){
    return `Hello, ${name}!`;
  }
  else{
    return 'Hello User!';
  }
}
// Remember to call the function to test
console.log('Test helloName:', helloName('Leo Johnson'));
console.log('Test helloName:', helloName());



// 3. Function to add two numbers together & return the result
console.log('--- Question 3 ---');

function addNumbers(firstNumber, secondNumber){
  console.log('in addNumbers with values', firstNumber, 'and', secondNumber);
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log('Test addNumbers:', addNumbers(3, 3));
console.log('Test addNumbers:', addNumbers(3, -6));
console.log('Test addNumbers:', addNumbers(3, 0));



// 4. Function to multiply three numbers & return the result
console.log('--- Question 4 ---');

function multiplyThree(firstNumber, secondNumber, thirdNumber){
  console.log('in multiplyThree with values', firstNumber, secondNumber, 'and', thirdNumber);
  return firstNumber * secondNumber * thirdNumber;
}
console.log('Test multiplyThree:', multiplyThree(3, 3, 3));
console.log('Test multiplyThree:', multiplyThree(3, 3, -3));
console.log('Test multiplyThree:', multiplyThree(3, 3, 0));



// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
console.log('--- Question 5 ---');

function isPositive(number){
  console.log('in isPositive with value', number);
  if (number > 0) {
    return true;
  }
  else{
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('Test isPositive (positive):', isPositive(999));
console.log('Test isPositive (negative):', isPositive(-999));
console.log('Test isPositive (zero):', isPositive(0));



// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
console.log('--- Question 6 ---');

function getLast(array){
  console.log('in getLast with array:', array);
  if(array){
    return array[array.length - 1]
  }
  else{
    return 'undefined';
  }
}
console.log('Test getLast:', getLast([1,2,3,4,5]));



// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
console.log('--- Question 7 ---');

function find(value, array){
  console.log('in find with value:', value, 'and array:', array);
  for(let i=0; i<array.length-1; i++){
    console.log(`examining array value ${array[i]} at index ${i}.`)
    console.log(`does array value ${array[i]} match search query ${value}?`)
    if(array[i] === value){
      console.log(true);
    }
    else{
      console.log(false);
    }
    
  }
}
console.log(find(9,[3,9,27]));
// console.log(find(729,[3,9,27]));



// ----------------------
// Stretch Goals
// ----------------------



// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
console.log('--- Question 8 ---');

function isFirstLetter(letter, string){
  console.log(`in isFirstLetter with letter '${letter}' and string '${string}'`);
  console.log(`does '${letter}' match the first letter of '${string}'?`);
  if(letter === string[0]){
    return true;
  }
  else{
    return false;
  }
}
console.log(isFirstLetter('l', 'letter'));
console.log(isFirstLetter('q', 'sweater'));



// 9. Function to return the sum of all numbers in an array
console.log('--- Question 9 ---');

function sumAll(array){
  console.log('in sumAll with array:', array);
  let sum = 0;
  // TODO: loop to add items
  for (i in array){
    sum += array[i];
    console.log('adding value', array[i], 'running total:', sum);
  }
  // TODO: return the sum
  console.log('the sum of all values in the array equals:')
  return sum;
}
console.log(sumAll([1,2,3,4,5]));


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
console.log('--- Question 10 ---');

function allPositive(array){
  console.log('in allPositive with array:', array);
  let newArray = [];
  for (let i=0; i<array.length; i++){
    console.log('current array item:', array[i])
    if (array[i]>0){
      console.log(array[i], 'is positive')
      newArray.push(array[i]);
    }
    else{
      console.log(array[i], 'is not positive')
    }
    console.log('new array:', newArray)
  }
  return newArray;
}
console.log('Test allPositive:', allPositive([-3,0,3,6,9,12]));



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
console.log('--- Question 11 ---')



console.log('--- testing code ---')
// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
