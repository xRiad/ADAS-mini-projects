// How Edabit Works 
// function hello() {
// 	return "hello edabit.com"
// }

// Return the Sum of Two Numbers
// function addition(a, b) {
// 	return a + b
// }

// Convert Minutes into Seconds
// function convert(minutes) {
// 	return minutes * 60
// }

// Return the Next Number from the Integer Passed
// function addition(num) {
// 	return num + 1
// }

// Return Something to Me!
// function giveMeSomething(a) {
//   return 'something ' + a
// }

// Is the Number Less than or Equal to Zero?
// function lessThanOrEqualToZero(num) {
// 	return num <= 0 ? true : false 
// }

// Find the Perimeter of a Rectangle
// function findPerimeter(length, width) {
// 	return 2*(length + width)
// }

// Sum of Polygon Angles
// function sumPolygon(n) {
// 	return n > 2 ? (n - 2) * 180 : null
// }

// Convert Hours into Seconds
// function howManySeconds(hours) {
// 	return hours * 60 * 60
// }

// Area of a Triangle
// function triArea(base, height) {
// 	return (base * height) / 2
// }

// Convert Age to Days
// function calcAge(age) {
// 	return age * 365
// }

// Power Calculator
// function circuitPower(voltage, current) {
// 	return voltage * current
// }

// Buggy Code (Part 7)
// function swap(a, b) {
// 	c = b
// 	b = a
// 	a = c
// 	return [a, b]
// }

// Are the Numbers Equal?
// function isSameNum(num1, num2) {
// 	return num1 === num2
// }

// https://www.codewars.com/kata/56f699cd9400f5b7d8000b55/train/javascript
// function fixTheMeerkat(arr) {
// 	arr.reverse()
// 	return arr
// }

// https://www.codewars.com/kata/5dd462a573ee6d0014ce715b
// function sameCase(a, b){
// 	if ( (typeof a !== 'string' || typeof b !== 'string') || (a.match(/[a-z]/i) == null || b.match(/[a-z]/i) == null) ) {
// 	  return -1
// 	} else if ( (a === a.toUpperCase() && b === b.toUpperCase() ) || ( a === a.toLowerCase() && b === b.toLowerCase() ) ) {
// 	  return 1
// 	} else {
// 	  return 0
// 	}
// }

// How Much is True?
// Create a function which returns the number of true values there are in an array.
// function countTrue(arr) {
// 	var countTrue  = 0
// 	arr.forEach(element => {
// 		element === true ? countTrue += 1 : null
// 	});
// 	return countTrue
// }

// Find Number of Digits in Number
// Create a function that will return an integer number corresponding to the amount of digits in the given integer num.
// function num_of_digits(num) {
// 	return num.toString().length
// }

// Right Shift by Division
// The right shift operation is similar to floor division by powers of two.
// Sample calculation using the right shift operator ( >> ):
// 80 >> 3 = floor(80/2^3) = floor(80/8) = 10
// -24 >> 2 = floor(-24/2^2) = floor(-24/4) = -6
// -5 >> 1 = floor(-5/2^1) = floor(-5/2) = -3
// Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers.
// function shiftToRight(x, y) {
// 	return x / (2**y)
// }

// Seven Boom!
// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
// function sevenBoom(arr) {
// 	var boom = 'There is no Boom'
// 	arr.forEach(element => {
// 		if(element === 7) boom = 'Boom'
// 	});
// 	return boom
// }

// Oddish vs. Evenish
// Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
// function oddishOrEvenish(nums) {
// 	var arr = Array.from(String(nums), num => Number(num))
// 	return arr.reduce((acc, crVal) => acc + crVal) % 2 === 0 ? 'Evenish' : 'Oddish'
// }

// Length of a Nested Array
// Write a function that returns the total number of non-nested items in a nested array.
// var counter = 0
// function getLength(arr) {
// 	arr.forEach(element => {
//     if (Array.isArray(element)) {
//       getLength(element)
//     } else {
//       counter += 1
//     }
//   });
//   return counter
// }

// Numbers in Strings
// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.
// Bonus: Try solving this without RegEx.
// function numInStr(arr) {
//   var arr2 = []
//   nums = [0,1,2,3,4,5,6,7,8,9]
//   var controller = false
// 	arr.forEach((element) => {
//     controller = false
//     for (let index = 0; index < nums.length; index++) {
//       controller = element.includes(nums[index])
//       if (controller) break
//     }
//     controller ? arr2.push(element) : arr2.push("")
//   })
//   return arr2
// }

// *************************************************************************************************************************

// Histogram Function
// Build a function that creates histograms. Every bar needs to be on a new line and its length corresponds to the numbers in the array passed as an argument. The second argument of the function represents the character to be used for the bar.
// function histogram(arr, char) {
//     var str = ""
//     arr.forEach(element => {
//         for(let i = 0; i < element; i++) {
//             str += char
//         }
//         str += "\n"
//     });
//     return str
// }

// Basic Arithmetic Operations on a String Number
// Create a function to perform basic arithmetic operations that includes addition, subtraction, multiplication and division on a string number (e.g. "12 + 24" or "23 - 21" or "12 / 12" or "12 * 21").
// Here, we have 1 followed by a space, operator followed by another space and 2. For the challenge, we are going to have only two numbers between 1 valid operator. The return value should be a number.
// eval() is not allowed. In case of division, whenever the second number equals "0" return -1.
// function arithmeticOperation(n) {
//     var splited = n.split(" ")
//     var result = null
//     zeroDivision = null
//     switch (splited[1]) {
//         case '+':
//             result = parseInt(splited[0]) + parseInt(splited[2])
//             break;
//         case '-':
//             result = parseInt(splited[0]) - parseInt(splited[2])
//             break;
//         case '*':
//             result = parseInt(splited[0]) * parseInt(splited[2])
//             break;
//         case '/':
//             if (splited[0] === '0' || splited[2] === '0') {
//                 result = -1
//             } else result = parseInt(splited[0]) / parseInt(splited[2])
//             break;
//         default:
//             break;
//     }
//     return result
// }

// Combinations
// Create a function that takes a variable number of arguments, each argument representing the number of items in a group. The function should return the number of permutations (combinations) of choices you would have if you selected one item from each group.
// function combinations(...items) { 
//     let result = items.reduce((acc, currVal) => {
//         return acc * currVal
//     })
//     return result
// }

// Burglary Series (12): Get Vodka Bottle
// The insurance guy laughs, he's just kidding. He just needs an updated list. You just need one of those Rammstein Vodka bottles.
// Given an object with alcoholic drinks and a number, return a string with the name of the Rammstein bottle that matches the given number.
// Sample getVodkaBottle({ whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 }, 100)  ➞ "Rammstein A"
// function getVodkaBottle(obj, num) {
//     let result = null
//     for (item in obj) {
//         if (item.split(" ")[0] === "Rammstein" && obj[item] === num) {
//             result = item
//         }
//     }
//     return result
// }

// Convert "Zero" and "One" to "1" and "0"
// Create a function that takes a string as an argument. The function must return a string containing 1s and 0s based on the string argument's words. If any word in the argument is not equal to "zero" or "one" (case insensitive), you should ignore it. The returned string's length should be a multiple of 8, if the string is not a multiple of 8 you should remove the numbers in excess.
// function textToNumberBinary(str) {
// 	splited = str.split(" ")
//     innerStr = ""
//     for(word of splited) {
//         switch(word) {
//             case 'zero':
//                 innerStr += '0'
//                 break;
//             case 'one':
//                 innerStr += '1'
//                 break;
//         }
//         if (innerStr.length === 8) break;
//     }
//     return innerStr
// }

// Calculate the Total Price of Groceries
// Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price
// Several groceries:
// getTotalPrice([
//     { product: "Milk", quantity: 1, price: 1.50 },
//     { product: "Eggs", quantity: 12, price: 0.10 },
//     { product: "Bread", quantity: 2, price: 1.60 },
//     { product: "Cheese", quantity: 1, price: 4.50 }
//   ]) ➞ 10.4
// function getTotalPrice(groceries) {
//     let groceryPrices = []
// 	groceries.forEach(elem => {
//         groceryPrices.push(elem.quantity * elem.price)
//     })
//     sum = groceryPrices.reduce((acc, currVal) => {
//         return acc + currVal
//     })
//     return sum.toFixed(1)
// }

//  WORK WITH ILKIN BELOW
// let products = [
//     { product: "Milk", quantity: null, price: 1.50 },
//     { product: "Eggs", quantity: null, price: 0.10 },
//     { product: "Bread", quantity: null, price: 1.60 },
//     { product: "Cheese", quantity: null, price: 4.50 }
// ]
// let result = 0
// let product = prompt('Product daxil edin')
// let quantity = prompt('Aded daxil edin')
// function getTotalPrice2 (product, quantity) {
//     products.forEach(elem => {
//       if (elem.product.toLowerCase() === product.toLowerCase()) {
//         result = quantity * elem.price;
//       }
//     })
//     console.log(result) 
// }
// getTotalPrice2(product,quantity)
//  WORK WITH ILKIN ABOVE

// Positive Dominant
// An array is positive dominant if it contains strictly more unique positive values than unique negative values. Write a function that returns true if an array is positive dominant.
// 0 counts as neither a positive nor a negative value.
// function isPositiveDominant(arr) {
//   let arr2 = []
//   let positiveCount = 0
//   let negativeCount = 0
// 	arr.forEach(elm => {
//     if (!arr2.includes(elm) && elm !== 0) {
//       arr2.push(elm)
//       if (Math.sign(elm) === 1) {
//         positiveCount += 1
//       } else negativeCount += 1
//     }
//   })
//   return positiveCount > negativeCount
// }

// console.log('    +\n   +++\n  +++++\n +++++++\n+++++++++\n   +++\n   +++')

// Number of Boomerangs
// A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.
// [5, 5, 5] (triple identical digits) is NOT considered a boomerang because the middle digit is identical to the first and last.
// function countBoomerangs(arr) {
//   let boomerangsCount = 0
// 	for(let i = 0;i < arr.length; i++) {
//     if (arr[i - 1] === arr[i + 1] && arr[i] !== arr[i + 1]) boomerangsCount += 1 
//   }
//   return boomerangsCount
// }

// How Many Days Between Two Dates
// var date1 = new Date("April 7, 2019").getTime()
// var date2 = new Date("May 12, 2020").getTime()
// var diff = date2 - date1
// var daysDiff = diff / (1000 * 60 * 60 * 24)

// Working 9 to 5
// Write a function that calculates overtime and pay associated with overtime.
// Working 9 to 5: regular hours
// After 5pm is overtime
// Your function gets an array with 4 values:
// Start of working day, in decimal format, (24-hour day notation)
// End of working day. (Same format)
// Hourly rate
// Overtime multiplier
// Your function should spit out:
// $ + earned that day (rounded to the nearest hundreth)
// function overTime(arr) {
//   let overTimeHours = 0
//   let [startingHours, endingHours, hourlyRate, overTimeMultiplier] = arr
// 	overTimeHours = endingHours - 17 > 0 ? endingHours - 17 : null
//   let overTimeIncome = overTimeHours ? overTimeHours * hourlyRate * overTimeMultiplier : 0
//   let regularIncome = (17 - startingHours) * hourlyRate
//   let sum = overTimeIncome + regularIncome
//   return `$${sum.toFixed(2)}`
// }

// Even vs. Odds
// https://edabit.com/challenge/975ac5gm3hAwYqqjS
// function availableSpots(arr, num) {
// 	var likedSpots = 0
//   for (let i = 1; i < arr.length; i++) {
//     if (num % 2 === 0) { 
//       if (!(arr[i - 1] % 2 === 1 && arr[i] % 2 === 1)) {
//         likedSpots += 1
//       }
//     } else {
//       if (!(arr[i - 1] % 2 === 0 && arr[i] % 2 === 0)) {
//         likedSpots += 1
//       }
//     }
//   }
//   return likedSpots
// }

// console.log(availableSpots([0, 4, 3, 3], 9))

// Mutations Only: Zeroes to the End
// Write a function that moves all the zeroes to the end of an array. Do this without returning a copy of the input array.
// function zeroesToEnd(arr) {
// 	arr.forEach(element => {
//         if (element === 0) {
//             console.log(arr.indexOf(element))
//             arr.splice(arr.indexOf(element),1)
//             arr.push(0)
//         }
//     })
//     return arr
// }

// 24-Hour Time
// Write a function that receives the time in 12-hour AM/PM format and returns a string representation of the time in military (24-hour) format.
// function convertTime(str) {
// 	splited = str.split('')
//     tag = splited[splited.length - 2] + splited[splited.length - 1]
//     splited.splice(splited.length - 2, 2)
//     timeInNums = splited.join('').split(':')
//     if (tag === 'PM' && parseInt(timeInNums[0]) < 12) {
//         timeInNums[0] = parseInt(timeInNums[0]) + 12
//     } else if (tag ==='AM' && parseInt(timeInNums[0]) === 12) {
//         timeInNums[0] = '00'
//     }
//     return timeInNums.join(':')
// }

// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

// var countSheep = function (num){
//     let str = ''
//     for (let i = 1;i <= num; i++) {
//       str += `${i} sheep...`
//     }
//     return str
// }

// https://www.codewars.com/kata/534d0a229345375d520006a0/train/javascript

// function isPowerOfTwo(n){
//     var multiplication = 2
//     var boolean = false
//     if (n === 2) return true
//     if (n === 1) return true
//     while (true) {
//         multiplication =  2 * multiplication
//         if (multiplication === n) {
//             boolean = true
//             break
//         } else if (multiplication > n) {
//             boolean = false
//             break
//         }
//     }
//     return boolean
// }

// https://www.codewars.com/kata/6071ef9cbe6ec400228d9531/train/javascript

// function dotCalculator (equation) {
//   let result = 0
//   let arr = equation.split(' ')
//   let num1, sign, num2
//   [num1, sign, num2] = [arr[0].split('').length, arr[1], arr[2].split('').length]
//   switch (sign) {
//       case '+':
//       result = num1 + num2
//       break
//       case '-':
//       result = num1 - num2
//       break
//       case '*':
//       result = num1 * num2
//       break
//       case '//':
//       result = Math.floor(num1 / num2)
//       break
//   }
//   let dots = ''
//   for (let i = 0; i < result; i++) {
//     dots += '.'
//   }
//   console.log(num1,num2,result)
//   return dots
// }

// function puzzleTiles(width, height){  
//   let first = '   _( )__ '.repeat(width).trimEnd() + "\n" // Only one
//   let second = ' _|    '.repeat(width + 1).trimEnd()  + "\n" // Condition
//   let third = '(_   _ '.repeat(width) + '(_'  + "\n"
//   let fourth = ' |__( )_|'.repeat(width) + "\n"
  
//   return first + second + third + fourth
// }
