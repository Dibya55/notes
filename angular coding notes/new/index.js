// js coding

// 1 . Find Maximum Number in Array
let arr = [1, 2, 3, 4, 5, 5, 1]
function findlargest(arr) {
    let largest = arr[0];
    for (let element of arr) {
        if (element > largest) largest = element
    }
    return largest
}

// console.log(findlargest(arr))

// --------------------------------

// 2 . Create a function that calculates the sum of all elements in an array

function findSum() {
    let sum = 0;
    for (let element of arr) {
        sum += element;
    }
    return sum;

}
// console.log(findSum(arr))


// 3 . Implement a function that removes duplicate elements from an array.

// /1st way
// function findDuplicate(arr) {
//     return [...new Set(arr)]
// }

// 2nd way
// function findDuplicate(arr) {
//     const uniqueElements = {};
//     const newArray = [];

//     for (const value of arr) {
//         if (!uniqueElements[value]) {
//             uniqueElements[value] = true;
//             console.log()
//             newArray.push(value)
//         }

//     }
//     return newArray;
// }

// 3rd way

function findDuplicate(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
}
//   console.log(findDuplicate(arr));

// 4 Write a function to reverse each word in a string.
function reverseWord(str) {

    const words = str.split(" ");
    let reverseWords = words.map(word => word.split("").reverse().join(""));
    return reverseWords.join(" ")

}

// console.log(reverseWord("hello dev"))

// 5  Write a function to find the number of characters in a string.

function findCharacters(str) {
    return str.length

}
// console.log(findCharacters("hi dibya"))



// 6 Write a function to find the maximum value from an object.
const data = {
    a: 10,
    b: 20,
    c: 15,
    d: 30
};

function findMaximum(data) {

    return Math.max(...Object.values(data))
}
// console.log(findMaximum(data))



String.prototype.repeatify = function (val) {
    if (typeof val != "number" || val < 0) {
        throw new Error("The number should be a non negative number")
    }


    let result = "";
    for (let i = 0; i < val; i++) {
        result += this
    }
    return result
}

str = "hello"
// console.log(str.repeatify(2))


// 7:Write a JavaScript program to return the count of each character in a string.

function countCharacterOfString(str) {
    const charCount = {};

    for (let char of str) {
        if (!charCount[char]) charCount[char] = 1
        else charCount[char] = charCount[char] + 1
    }
    return charCount;
}

// console.log(countCharacterOfString("hello"))

// 8  Write a JavaScript program to remove all occurrences of a specified character from a given string.

// function removeAllOccurence(str, char) {
//     let regex = new RegExp(char, 'g');
//     return str.replace(regex, "")
// }


function removeAllOccurence(str, char) {
    console.log(str.split(char))
    return str.split(char).join("")
    // return str.replaceAll(char,"")
}

// console.log(removeAllOccurence("hello world", "o")) 


// 9: to check two strings anagram or not

function areAnagrams(str1, str2) {
    // Function to sort the characters of a string
    const sortString = (str) => str.split('').sort().join('');

    // Check if sorted versions of the strings are equal
    return sortString(str1) === sortString(str2);
}

// Example usage
const string1 = "listen";
const string2 = "silent";

const result = areAnagrams(string1, string2);
// console.log(result); // Output: true

// 11 Write a JavaScript program that converts a string to camelCase.

function camelCase(str) {
    let words = str.split(/[\s,]+/)

    const camelCased = words.map((word, index) => {
        if (index === 0) return word.toLowerCase()
        else return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }).join("")
    return camelCased

}

// console.log(camelCase("Hello world, ranjan , soumya"))


// 12  Write a function to find the sum of all fruits in an array.

let fruits = [
    { name: "apple", quantity: 10 },
    { name: "banana", quantity: 5 },
    { name: "orange", quantity: 7 }
];

// function sumOfFruits(fruits) {
//     sum = 0
//     for (let fruit of fruits) {
//         sum += fruit.quantity
//     }
//     return sum;
// }

function sumOfFruits(fruits) {
    return fruits.reduce((sum, fruit) => sum + fruit.quantity, 0)
}



let totalQuantity = sumOfFruits(fruits);
// console.log(totalQuantity); // Output should be 22


// 13 Write a function to find the shortest word in a list of strings.
let numbers = [3, 8, 12, 5];
let target = 13;


function findTwoNumbersForTarget(arr, target) {
    newArr = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                newArr.push(arr[i], arr[j])
            }
        }

    }
    return newArr;

}

// this solution is not potimized , but later you can practice further.

let result1 = findTwoNumbersForTarget(numbers, target);
// console.log(result1); // Output: [8, 5]

// 14 : Write a function to find the shortest word in a list of strings. 
str = ["apple", "banana", "fig", "grape", "kiwi"]



// function findShortestWord(words) {
//     if (words.length === 0) return null; // Handle the case of an empty array

//     let shortest = words[0]; // Initialize with the first word

//     for (let i = 1; i < words.length; i++) {
//         if (words[i].length < shortest.length) {
//             shortest = words[i]; // Update shortest if current word is shorter
//         }
//     }

//     return shortest;
// }


function shortestWord(arr) {

    return arr.reduce((shortest, current) => {
        return current.length < shortest.length ? current : shortest
    })

}

// The reduce function indeed requires an initial value for the accumulator
//  if it's not provided by the array itself. When reduce is used without an initial value, 
//  it uses the first element of the array as the initial value
//  and starts iterating from the second element. Let me clarify how this works and why shortest is effectively initialized.

// console.log(shortestWord(str))

// 14:  Write a function to separate palindrome numbers from an array.

function palindromeNumbers(arr) {
    let palindromeArray = []

    arr.forEach(num => {

        let originalnum = num;
        let sum = 0, rem = 0;
        while (num > 0) {
            rem = num % 10
            sum = sum * 10 + rem
            num = Math.floor(num / 10);
        }
        console.log(sum)
        if (sum === originalnum) {
            palindromeArray.push(originalnum)
        }
    }
    )
    return palindromeArray

}

// console.log(palindromeNumbers(numArr))


function isPalindrome(num) {
    let str = num.toString();
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

function palindromeNumbers(numArr) {
    return numArr.filter(isPalindrome);
}

// Example usage
let numArr = [121, 123, 454, 789, 232];
// console.log(palindromeNumbers(numArr)); // Output: [121, 454, 232]

// 15: Write a function to return the count of characters in a string
function countCharacters(str) {
    str = str.split(" ").join("");
    console.log(str)
    let newobj = {}

    for (let i of str) {
        if (!newobj[i]) {
            newobj[i] = 1
        } else {
            newobj[i] = newobj[i] + 1
        }

    }
    return newobj
}
// console.log(countCharacters("hello world"))

// 16 find missing number 

function findMissingNumber(arr, n) {
    let totalSum = (n * (n + 1)) / 2;

    let arraySum = arr.reduce((sum, current) => {
        return sum = sum + current
    }, 0)
    return totalSum - arraySum;
}

let arr1 = [1, 2, 3, 5]
let n = 5

// console.log(findMissingNumber(arr1, n))


// 17 Write a JavaScript program to group items of an array by category

const items = [
    { name: 'Apple', category: 'Fruit' },
    { name: 'Carrot', category: 'Vegetable' },
    { name: 'Banana', category: 'Fruit' },
    { name: 'Broccoli', category: 'Vegetable' },
    { name: 'Orange', category: 'Fruit' }
];

function groupByCategory(items) {
    console.log(items)
    let newObj = {}
    for (let item of items) {
        if (!newObj[item.category]) {
            newObj[item.category] = []
        }
        newObj[item.category].push(item.name)

    }
    return newObj

}

// console.log(groupByCategory(items));
// Output: { Fruit: ['Apple', 'Banana', 'Orange'], Vegetable: ['Carrot', 'Broccoli'] }


// 18   Write a JavaScript program that takes an array of objects and returns
//  an object containing the frequency of each property across all objects.

const item = [
    { type: 'fruit', color: 'red', size: 'small' },
    { type: 'fruit', color: 'yellow', size: 'medium' },
    { type: 'vegetable', color: 'green', size: 'small' },
    { type: 'fruit', color: 'red', size: 'large' }
];

function countObjectProperties(arr) {
    let newObj = {};
    arr.forEach(obj => {
        for (let key in obj) {
            if (!newObj[key]) {
                newObj[key] = {}
                console.log(newObj)
            }
            if (!newObj[key][obj[key]]) {
                newObj[key][obj[key]] = 1
            } else {
                newObj[key][obj[key]]++
            }
        }
    })
    return newObj
}
// console.log(countObjectProperties(item))

// 19  How do you compare two objects in JavaScript, ensuring the identical order of keys?

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 2, c: 3 };


// for comparing object  keys 
function compareObjects(obj1, obj2) {
    let str1 = Object.keys(obj1).join("");
    let str2 = Object.keys(obj2).join("");
    if (str1 === str2) return true
    else return false
}

// for comparing both key and values
function compareObjects(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    for (let i = 0; i < keys1.length; i++) {
        const key = keys1[i];
        if (key !== keys2[i] || obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}


// console.log(compareObjects(obj1, obj2))


// 20   Collect books from an array of objects and return a collection of books as an array.

const item12 = [
    { type: 'book', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { type: 'movie', title: 'Inception', director: 'Christopher Nolan' },
    { type: 'book', title: '1984', author: 'George Orwell' },
    { type: 'album', title: 'Thriller', artist: 'Michael Jackson' },
    { type: 'book', title: 'To Kill a Mockingbird', author: 'Harper Lee' }
];

// Example output
// [
//     { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
//     { title: '1984', author: 'George Orwell' },
//     { title: 'To Kill a Mockingbird', author: 'Harper Lee' }
// ]

function findBooks(arr) {
    return arr.filter(item => item.type === 'book')
        .map(book => ({
            title: book.title,
            author: book.author
        }));

}

// The map function expects a single expression or value to be returned. 
// Without the parentheses,
//  JavaScript assumes a block of code is meant and will throw an error because there’s no return statement

// console.log(findBooks(item12))

// 21 Write a function that returns unique characters from a string.

function findUniqueCharacters(str) {
    const uniqueSet = new Set(str)
    return Array.from(uniqueSet).join("")
}

// console.log(findUniqueCharacters("geek"))


// 22  Write a function that takes an array of integers and returns the maximum product that
// can be obtained by multiplying any three numbers from that array.

function getMaxProductOfThree(nums) {
    // Sort the array in ascending order
    nums.sort((a, b) => a - b);

    // Calculate the product of the three largest numbers
    const product1 = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];

    // Calculate the product of the two smallest numbers (which could be negative) and the largest number
    const product2 = nums[0] * nums[1] * nums[nums.length - 1];

    // Return the maximum of the two products
    return Math.max(product1, product2);
}

// Example usage
const number1 = [1, -10, 2, 3, 5, -6, 4];
const maxProduct = getMaxProductOfThree(number1);
// console.log(maxProduct); // Output: 300`




// 23: Write a function to move all zeros to the end of the array while maintaining the relative order of the non-zero elements.
function moveZerosToEnd(arr) {
    let nonZeroIndex = 0;


    for (let i in arr) {
        if (arr[i] != 0) {
            arr[nonZeroIndex++] = arr[i]
        }

    }

    for (let i = nonZeroIndex; i < arr.length; i++) {
        arr[i] = 0
    }

    return arr;
}

// Example usage:
const input = [0, 1, 0, 3, 12];
const resulta = moveZerosToEnd(input);
// console.log(resulta);  // Output: [1, 3, 12, 0, 0]


// 24 Write a function to check if a string is a palindrome, considering only alphanumeric characters and ignoring cases.



function checkPalindome(str) {
    str = str.replaceAll(/[ ,]/g, "").toLowerCase();
    reverse = str.split("").reverse().join("").toLowerCase();
    if (str === reverse) return true;
    return false;



}
let strr1 = "A man, a plan, a canal, Panama"
// console.log(checkPalindome(strr1))


// 25 Given a sorted array and a target value, write a function to return the index \
// of the target value in the array using binary search. If the target is not found, return -1.

// without binary search , we can do it also



//  i have not not gone to the logicn,mlater have to understand


function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;  // Target found, return the index
        } else if (arr[mid] < target) {
            left = mid + 1;  // Search in the right half
        } else {
            right = mid - 1;  // Search in the left half
        }
    }

    return -1;  // Target not found
}

// Example usage
let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(binarySearch(sortedArray, 4));  // Output: 3
// console.log(binarySearch(sortedArray, 10)); // Output: -1

function search(arr, target) {

    return arr.indexOf(target);

}



let arrItems = [1, 2, 3, 4]
// console.log(search(arrItems, 4))


// 26 Write a function to return the first non-repeating character in a string. If not available, return -1.

function firstNonRepeatingCharacter(str) {
    const charCount = {};

    // Count occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first character with a count of 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return -1;  // No non-repeating character found
}

// Example usage
// console.log(firstNonRepeatingCharacter("swiss")); // Output: 'w'
// console.log(firstNonRepeatingCharacter("aabbcc")); // Output: -1


// 27:  Write a function to find the occurrence of each character in a given string

function findOccurence(str) {

    let newObj = {}

    for (let char of str) {
        if (!newObj[char]) {
            newObj[char] = 1
        } else {
            newObj[char] = newObj[char] + 1;
        }
    }
    return newObj

}
// console.log(findOccurence("hello"))

// 28 Write a function to flatten a nested array. give me only example not solution

function flattenArray(arr) {
    let result11 = [];

    for (let item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flattenArray(item));  // Recursively flatten
        } else {
            result.push(item);
        }
    }

    return result11;
}

// Example usage
const nestedArray = [1, [2, [3, [4, 5]]], 6];
// console.log(flattenArray(nestedArray));  // Output: [1, 2, 3, 4, 5, 6]


// 29 Write a JavaScript program to remove duplicate elements from an array in different ways.

// search chat gpt , you can get multiplen answers , practice accordingly

// 30 Write a program to implement currying which gives the sum of three numbers.



function curry(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }

    }

}
// console.log(curry(1)(2)(3))

// 30 find intersection of array

function intersection(array1, array2) {
    // Convert array1 to a Set for O(1) lookups
    const set1 = new Set(array1);

    // Filter array2 to include only elements that are in set1
    return array2.filter(item => set1.has(item));
}

// Example usage
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

// console.log(intersection(array1, array2));  // Output: [4, 5]

// other way

// function intersection(array1, array2) {
//     return array1.filter(item => array2.indexOf(item) !== -1);
// }

// // Example usage
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [4, 5, 6, 7, 8];
// console.log(intersection(array1, array2));  // Output: [4, 5]


// 31 Write a custom array method for finding the max and min value
// Add a max method to the Array prototype
Array.prototype.max = function () {
    if (this.length === 0) {
        return undefined;  // Handle the case for an empty array
    }
    return this.reduce((max, current) => (current > max ? current : max), this[0]);
};

// Add a min method to the Array prototype
Array.prototype.min = function () {
    if (this.length === 0) {
        return undefined;  // Handle the case for an empty array
    }
    return this.reduce((min, current) => (current < min ? current : min), this[0]);
};

// Example usage
const numberss = [3, 5, 7, 2, 8, -1];

// console.log(numberss.max());  // Output: 8
// console.log(numberss.min());  // Output: -1

// 32  Write a JavaScript program to capitalize the first letter of each word in a given string.

function capitalizeFirstLetter(str) {
    // Split the string into an array of words
    let arr = str.split(" ");

    // Iterate over each word in the array
    for (let i = 0; i < arr.length; i++) {
        // Capitalize the first letter and make the rest of the letters lowercase
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
    }

    // Join the array back into a single string with spaces in between
    return arr.join(" ");
}

let str11 = "hello world from javascript";
// console.log(capitalizeFirstLetter(str11));  // Output: "Hello World From Javascript"


// 33 Write a JavaScript program that determines whether a given string contains only unique characters or not.


function uniqueCharacters(str) {
    let uniqueCharacterobj = {}


    for (let char of str) {
        if (uniqueCharacterobj[char]) {
            return false;
        }
        else {
            uniqueCharacterobj[char] = 1
        }
    }
    return true;

}

function hasUniqueCharacters(str) {
    // Create a Set to store characters
    let charSet = new Set();

    // Iterate over each character in the string
    for (let char of str) {
        // If the character is already in the Set, return false
        if (charSet.has(char)) {
            return false;
        }
        // Add the character to the Set
        charSet.add(char);
    }

    // If no duplicates are found, return true
    return true;
}

// Example usage
let str1 = "abcdef";
// console.log(hasUniqueCharacters(str1));  // Output: true

let str2 = "hello";
// console.log(hasUniqueCharacters(str2));  // Output: false

// console.log(uniqueCharacters("hello"))

// 34  Write a JavaScript function that checks if the sum of all integers in an array equals the highest integer in that array.


function isHighestEqualToSum(arr) {

    let sum = arr.reduce((current, sum) => {
        return sum = sum + current
    }, 0)

    let sortedAarary = arr.sort((a, b) => b - a)
    if (sortedAarary[0] === sum) {
        return true
    }
    return false

}
let arrays = [12, 1, 3, 34, 2]
// console.log(isHighestEqualToSum(arrays))


// 35  Write a JavaScript program to find unique object property values , her weh have send property as arguement

function getUniquePropertyValues(arr, property) {
    // Create a Set to store unique property values
    const uniqueValues = new Set();

    // Iterate through the array and add property values to the Set
    arr.forEach(item => {
        if (item.hasOwnProperty(property)) {
            uniqueValues.add(item[property]);
        }
    });

    // Convert the Set to an array and return
    return Array.from(uniqueValues);
}

// Example usage


// console.log(getUniquePropertyValues(objects, "name"));  // Output: ["Alice", "Bob", "Charlie"]

let objects = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Alice" },
    { id: 4, name: "Charlie" }
];

// console.log(findUniqueObject(objects))

// Write a JavaScript program to find unique object property values , her weh have send property as arguement
function getUniqueFirstPropertyValues(arr) {
    // Create a Set to store unique property values
    const uniqueValues = new Set();

    // Iterate through the array
    arr.forEach(item => {
        // Get the first property key
        const firstKey = Object.keys(item)[0];
        if (firstKey) {
            uniqueValues.add(item[firstKey]);
        }
    });

    // Convert the Set to an array and return
    return Array.from(uniqueValues);
}

// Example usage


// console.log(getUniqueFirstPropertyValues(objects));  // Output: [1, 2, 3, 4]


// 35 Write a JavaScript program to return all objects with the maximum value from a given JavaScript object in js ,
//  give me example not solution


function getObjectsWithMaxValue(arr, property) {
    if (arr.length === 0) return []; // Return empty array if input is empty

    // Find the maximum value for the given property
    let maxValue = Math.max(...arr.map(item => item[property]));

    // Filter objects with the maximum value
    return arr.filter(item => item[property] === maxValue);
}

// Example usage
let itemss = [
    { id: 1, value: 5 },
    { id: 2, value: 10 },
    { id: 3, value: 10 },
    { id: 4, value: 7 }
];

// console.log(getObjectsWithMaxValue(itemss, 'value'));
// Output: [ { id: 2, value: 10 }, { id: 3, value: 10 } ]

// 36 Write a JavaScript program that takes an array of numbers and returns the sum of all numbers that are divisible by both 3 and 5.


function sumDivisibleBy3And5(arr) {
    return arr
        .filter(num => num % 3 === 0 && num % 5 === 0)  // Filter numbers divisible by both 3 and 5
        .reduce((sum, num) => sum + num, 0);            // Sum the filtered numbers
}

// Example usage
let numbers1 = [15, 30, 7, 9, 45, 20, 50];
// console.log(sumDivisibleBy3And5(numbers1)); // Output: 90


// 37  Write a JavaScript program that takes two sorted arrays of numbers and merges them into a single sorted array.


function concat(arr1, arr2) {

    console.log(arr1 + arr2)
    let sortedArray = []
    sortedArray = arr1.concat(arr2)


    // Explanation
    // Conversion to Strings:

    // When you use the + operator with arrays, JavaScript converts the arrays to strings. The Array.prototype.toString() 
    // method is called on each array, which converts the array to a comma-separated string representation.
    // Concatenation:

    // The + operator then concatenates these string representations.
    //  In the example above, array1 becomes "1,3,5,7" and array2 becomes "2,4,6,8".
    //   The result of array1 + array2 is "1,3,5,7" + "2,4,6,8", which results in "1,3,5,7,2,4,6,8".

    return sortedArray.sort((a, b) => a - b)

}

let array11 = [1, 3, 5, 7];
let array22 = [2, 4, 6, 8];

console.log(concat(array11, array22))

// 38   Write a JavaScript program that takes two objects and returns a new object with properties that exist in both input objects.


function getCommonProperties(obj1, obj2) {
    let result = {};

    // Iterate through the properties of the first object
    for (let key in obj1) {
        if (obj2.hasOwnProperty(key)) {
            result[key] = obj2[key];
        }
    }

    return result;
}

// Example usage
let object1 = { a: 1, b: 2, c: 3 };
let object2 = { b: 20, c: 30, d: 40 };

// console.log(getCommonProperties(object1, object2));


// 39  Write a JavaScript program to find duplicate numbers from an array.  


function findDuplicates(arr) {
    let counts = {};
    let duplicates = [];
    
    // Count occurrences of each number
    for (let num of arr) {
        counts[num] = (counts[num] || 0) + 1;
    }
    
    // Find numbers that occur more than once
    for (let num in counts) {
        if (counts[num] > 1) {
            duplicates.push(Number(num));
        }
    }
    
    return duplicates;
}

// Example usage
let numbersss = [1, 2, 3, 4, 2, 5, 6, 1, 7, 8, 5];
// console.log(findDuplicates(numbersss)); // Output: [1, 2, 5]

// 40  









