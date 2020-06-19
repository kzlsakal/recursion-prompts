/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  // No factorial if the number is negative
  if (n < 0) {
    return null;
  }
  // 0! is 1
  if (n === 0) {
    return 1;
  }
  // Keep n * (n - 1) until we reach 1 * 0!
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  // Do not mutate the input array
  let copiedArray = array.slice();
  // If there is a value at index 0, total is equal to it.
  // Otherwise, total is zero.
  let total = copiedArray[0] !== undefined ? copiedArray[0] : 0;

  // When reached to 1 item length or less, return the total
  if (copiedArray.length <= 1) {
    return total;
  }
  // Remove index 0 from the array
  copiedArray.shift();
  // Add the total to the new index zero
  copiedArray[0] = copiedArray[0] + total;
  // Run the function again with the modified array
  return sum(copiedArray);
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  // Make a copy of the array
  let copiedArray = array.slice();

  // Base case: If we have an array left with 0 length, return 0.
  if (copiedArray.length === 0) {
    return 0;
  }

  // If the first item is an array
  if (Array.isArray(copiedArray[0])) {
    // Join the items under the first item to the array
    // This also removes the first item with .shift()
    copiedArray = copiedArray.concat(copiedArray.shift(1));
    // Return the function again with the joined array
    return arraySum(copiedArray);
  }

  // Return the first item (since it is not an array) while removing the
  // first item from the array, plus the arraySum with the rest of the array
  return copiedArray.shift() + arraySum(copiedArray);
};



// 4. Check if a number is even.
var isEven = function(n) {
  let number = Math.abs(n);
  if (number === 1) {
    return false
  } else if (number === 0) {
    return true;
  }
  number -= 2;
  return isEven(number);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {

  if (n === 0) {
    return 0;
  }

  return (n > 0) ? (n - 1) + sumBelow(n - 1) : (n + 1) + sumBelow(n + 1);

};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {

  // If x is equal to y, return an empty array
  if (x === y) {
    return [];
  }

  // If x is greater than y
  if (x > y) {
    // If y is only one integer away from x, there is no number between.
    if ( y === x - 1) {
      // Return an empty array
      return[];
    }
    // Return x - 1 with concatting the recursion with x - 1
    return [ x - 1 ].concat(range(x - 1, y));
  }

  // If x is only one integer away from y, there is no number between.
  if ( x === y - 1) {
    // Return an empty array
    return[];
  }
  // Return x + 1 with concatting the recursion with x + 1
  return [ x + 1 ].concat(range(x + 1, y));
};


// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {

  // Exponent 0 always returns 1
  if (exp === 0) { return 1};

  // If a negative exponent is given, it will be 1/result.
  if (exp < 0) {
    let multiplication = exponent(base, exp * -1);
    return 1 / multiplication;
  }
  // Return multiplying recursively, deducting exp by 1 each turn.
  return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {

  // Base case 1: 2 and 1 are powers of 2
  if ( n === 2 || n === 1 ) {
    return true;
  }
  // Base case 2: If n is not an integer or is zero, return false.
  if( !Number.isInteger(n) || n === 0 ) {
    return false;
  }
  // Return the function by dividing n by 2
  return powerOfTwo(n / 2);

};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  // First time running, run the function again with the array version
  if (typeof string === 'string') {
    return reverse(string.split(''));
  }

  // If there are no letters left, return empty string.
  if (string.length === 0) {
    return '';
  }

  // Take out the last letter in the list and run the function again
  return string.pop() + reverse(string);


};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  // First time running, split the string into an array, ignoring spaces.
  // Also make it non-case-sensitive
  if (typeof string === 'string') {
    let lowerCaseString = string.toLowerCase();
    return palindrome(lowerCaseString.split(''));
  }

  // If the last and first letters do not match, return false.
  if (string[0] !== string[string.length - 1]) {
    return false;
  } else if ( string.length <= 2 ) {
    // Base case: Otherwise, when 2 or fewer letters left, return true.
    return true;
  }
  // Remove the first letter
  string.pop();
  // Remove the last letter
  string.shift();
  // Run the function again with the shortened letters list.
  return palindrome(string);
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4

// Cannot write comments inside because the test case does not want forward slash usage.
// First statement returns NaN if Mod is 0.
// Second statement returns 0 if x is 0 (part of the base case).
// Third makes y positive in case it is negative.
// Fourth one -including nested statements- is the case for negative x input. See below.
// Fifth checks if x is less than the mod and returns x.
// Sixth returns the modulo recursively by substracting y from x each turn.
var modulo = function(x, y) {
  if (y === 0) {
    return NaN;
  }

  if ( x === 0 ) {
    return 0;
  }

  if ( y < 0 ) {
    y = y - y - y;
  }

  if ( x < 0 ) {

    if ( x + y > 0 ) {
      return x;
    }

    return modulo(x + y, y);
  }

  if ( x < y ) {
    return x;
  }

  return modulo(x - y, y);
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.

// Cannot write comments inside because the test case does not want forward slash usage.
// First statement returns zero if any of the numbers is zero.
// Second statement is the best case, returns the last x when y is down to 1.
// Third statement modifies the negativity:
  // If x is positive and y is negative, makes x negative and y positive.
    // This is because x is returned recursively and it will be negative.
  // If both numbers are negative, it makes them positive.
// Last one returns the function recursively while deducting y each time.
var multiply = function(x, y) {

  if (x === 0 || y === 0) {
    return 0;
  }

  if (y === 1) {
    return x;
  }

  if ( (x > 0 && y < 0) || (x < 0 && y < 0) ) {
    x = -x;
    y = -y;
  }

  return x + multiply(x, y - 1);
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).

// No forward slashes accepted inside function so no comments there.
// 1: Return NaN if divided by zero.
// 2: Modify negatives. If the result will be negative x is negative.
// 3: If x is 0 or it is less than y, return 0.
// 4: Adding 1 each time, run the function by substracting y from x.
var divide = function(x, y) {

  if (y === 0) {
    return NaN;
  }

  if ( (x > 0 && y < 0) || (x < 0 && y < 0) ) {
    x = -x;
    y = -y;
  }

  if (x === 0 || x < y) {
    return 0;
  }

  return 1 + divide(x - y, y);
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm

// Short answer :
// var gcd = function(a, b) {
// if (x < 0 || y < 0) {
//   return null;
// }
//   if (!b) {
//       return a;
//   }
//   return gcd(b, a % b);
// };
var gcd = function(x, y) {
  // If any input is negative, null is requested as return value.
  if (x < 0 || y < 0) {
    return null;
  }
  // If the second argument is not converted to an array yet.
  if (!y.length) {
    // Make x small number, y big number.
    if (x > y) {
      let greater = x;
      x = y;
      y = greater;
    }
    // Make the second argument an array of x and y.
    y = [x , y];
  }

  // Base Case: If both of the original values return int when divided by x, return x.
  // The result can be as great as x, since it is our smaller number.
  if (Number.isInteger(y[0] / x) && Number.isInteger(y[1] / x)) {
    return x;
  }

  // Run the function recursively by deducting x each turn.
  return gcd(x - 1, y);

};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1[0] !== str2[0]) {
    return false;
  }
  if (str1.length === 0 ) {
    return true;
  }
  return compareStr(str1.slice(1), str2.slice(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  // Base case: When there is only one letter left, return the letter in an array.
  if (str.length === 1) {
    return [str[0]];
  }
  // Put the first letter in an array, then concat the next first, then the next first.
  return [str[0]].concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  // Base case: When there is only one item left in the array, return the array.
  if (array.length === 1) {
    return array;
  }
  // Put the last item in the array in an array, then concat the recursive with last item removed.
  return [array[array.length - 1]].concat(reverseArr(array.slice(0, -1)));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  // If only one item left, return the value in an array to be concatted.
  if (length === 1) {
    return [value];
  }
  // Put the value in an array, then concat the rest with the function.
  return [value].concat(buildList(value, length - 1));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  let fizzString = '';

  // Base case: when n is 1, return '1'.
  if (n <= 1) {
    return '1';
  }

  // If n mod 3 and n mod 5 are 0 return FizzBuzz
  if (n % 3 === 0 && n % 5 === 0) {
    fizzString = 'FizzBuzz';
  } else if (n % 5 === 0) {
    // If n mod 5 is 0 return Buzz
    fizzString =  'Buzz';
  } else if (n % 3 === 0) {
    // If n mod 3 is 0 return Fizz
    fizzString = 'Fizz';
  } else {
    fizzString = n.toString();
  }

  // Return concatting the arrays in reverse order
  return [].concat(fizzBuzz(n - 1), fizzString);

};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  // Make a copy of the array so that it is not mutated
  const copyOfArray = array.slice();

  // Base case: If there are no values left in the array return 0
  if (copyOfArray.length === 0) {
    return 0;
  }
  // Establish a value count for this recursion
  let valueCount = 0;
  // Update the count if the first item matches with the desired value
  if (copyOfArray[0] === value) {
    valueCount = 1;
  }
  //Remove the first item from the array
  copyOfArray.shift();
  // Call the function again with the new array
  return valueCount + countOccurrence(copyOfArray, value);

};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  // Base case: If there are no values in the array, return an empty array.
  if (array.length === 0) {
    return [];
  }
  // Make a copy of the array so that it is not mutated
  const copyOfArray = array.slice();
  // Create a binding for the function called with the first item
  let mappedItem = callback(copyOfArray[0]);
  // Remove the first item from the array
  copyOfArray.shift();
  // Return while adding each modified item to a new array
  return [].concat(mappedItem, rMap(copyOfArray, callback));
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  let count = 0;

    for (let i in obj) {
      if (i === key) {
        count++;
      }
      if (typeof obj[i] === 'object') {
        count += countKeysInObj(obj[i], key);
      }
    }

  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  let count = 0;

    for (let i in obj) {
      if (obj[i] === value) {
        count++;
      }
      if (typeof obj[i] === 'object') {
        count += countValuesInObj(obj[i], value);
      }
    }

  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (let i in obj) {
    if (typeof obj[i] === 'object') {
      replaceKeysInObj(obj[i], oldKey, newKey);
    }
    if (i === oldKey) {
      obj[newKey] = obj[oldKey];
      delete obj[oldKey];
    }
  }

  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  if (n <= 0) {
    return null;
  } else if (n === 1) {
    return [0, 1];
  } else {
    const fibos = fibonacci(n - 1);
    fibos.push(fibos[fibos.length - 2] + fibos[fibos.length - 1]);
    return fibos;
  }
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) {
    return null;
  } else if (n === 0) {
    return 0;
  } else if (n < 3) {
    return 1;
  }
  return nthFibo(n - 2) + nthFibo( n - 1);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  const copyOfArray = array.slice();

  if (copyOfArray.length === 0) {
    return [];
  }

  let word = copyOfArray.shift();
  let wordCapital = word.toUpperCase();

  return [].concat(wordCapital, capitalizeWords(copyOfArray));
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  const copyOfArray = array.slice();

  if (copyOfArray.length === 0) {
    return [];
  }

  let word = copyOfArray.shift();
  let wordCapital = word[0].toUpperCase() + word.slice(1);

  return [].concat(wordCapital, capitalizeFirst(copyOfArray));
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
