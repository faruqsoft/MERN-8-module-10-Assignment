

//1) Write a function named calculateDifference that takes two arguments and returns the difference
// between the first and second arguments.

function calculateDifference(a, b) {
    /**
     * Calculates the difference between two numbers.
     *
     * @param {number} a - The first number.
     * @param {number} b - The second number.
     * @returns {number} - The difference between the first and second numbers (a - b).
     */
    return a - b;
}

// Example usage
console.log(calculateDifference(10, 5));  // Output: 5
console.log(calculateDifference(3, 8));   // Output: -5
console.log(calculateDifference(0, 0));   // Output: 0
console.log(calculateDifference(100, 45)); // Output: 55


//2) Write a function named isOdd that takes one argument and returns true if the number is odd,
// and false if it is not.

function isOdd(number) {
    /**
     * Checks if a number is odd.
     *
     * @param {number} number - The number to check.
     * @returns {boolean} - True if the number is odd, false if it is even.
     */
    return number % 2 !== 0; // Returns true if the number is not divisible by 2 (i.e., odd)
}

// Example usage
console.log(isOdd(5));  // Output: true
console.log(isOdd(8));  // Output: false
console.log(isOdd(13)); // Output: true
console.log(isOdd(20)); // Output: false



//3) Write a function named findMin that takes an array of numbers and returns the smallest number from the array.

    function findMin(numbers) {
    /**
     * Finds the smallest number in an array.
     *
     * @param {number[]} numbers - An array of numbers.
     * @returns {number} - The smallest number in the array.
     */
    if (numbers.length === 0) {
        return undefined; // Return undefined if the array is empty
    }

    return Math.min(...numbers); // Use the spread operator to pass array elements to Math.min()
}

// Example usage
console.log(findMin([5, 2, 8, 1, 3])); // Output: 1
console.log(findMin([10, -5, 0, 20])); // Output: -5
console.log(findMin([100, 50, 25, 10])); // Output: 10
console.log(findMin([]));              // Output: undefined



//4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array
// containing only the even numbers.

function filterEvenNumbers(numbers) {
    /**
     * Filters an array to include only even numbers.
     *
     * @param {number[]} numbers - An array of numbers.
     * @returns {number[]} - A new array containing only even numbers.
     */
    return numbers.filter(num => num % 2 === 0);
}

// Example usage
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]
console.log(filterEvenNumbers([7, 11, 13]));        // Output: []
console.log(filterEvenNumbers([10, 20, 30, 41]));   // Output: [10, 20, 30]
console.log(filterEvenNumbers([]));                // Output: []



//5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array
// sorted in descending order.

    function sortArrayDescending(numbers) {
    /**
     * Sorts an array of numbers in descending order.
     *
     * @param {number[]} numbers - An array of numbers.
     * @returns {number[]} - A new array sorted in descending order.
     */
    return [...numbers].sort((a, b) => b - a); // Create a copy and sort it
}

// Example usage
console.log(sortArrayDescending([5, 2, 8, 1, 3])); // Output: [8, 5, 3, 2, 1]
console.log(sortArrayDescending([10, -5, 0, 20])); // Output: [20, 10, 0, -5]
console.log(sortArrayDescending([]));              // Output: []


//6) Write a function named lowercaseFirstLetter that takes a string and returns the same string
// with the first letter lowercased.

function lowercaseFirstLetter(str) {
    /**
     * Converts the first letter of a string to lowercase.
     *
     * @param {string} str - The input string.
     * @returns {string} - The modified string with the first letter lowercased.
     */
    if (str.length === 0) {
        return str; // Return the empty string if the input is empty
    }

    // Combine the lowercase first letter with the rest of the string
    return str.charAt(0).toLowerCase() + str.slice(1);
}

// Example usage
console.log(lowercaseFirstLetter("Hello")); // Output: "hello"
console.log(lowercaseFirstLetter("World")); // Output: "world"
console.log(lowercaseFirstLetter("JavaScript")); // Output: "javaScript"
console.log(lowercaseFirstLetter("")); // Output: ""



//7) Write a function named findAverage that takes an array of numbers and returns the average of all elements.

function findAverage(numbers) {
    /**
     * Calculates the average of all numbers in an array.
     *
     * @param {number[]} numbers - An array of numbers.
     * @returns {number} - The average of the numbers. Returns 0 for an empty array.
     */
    if (numbers.length === 0) {
        return 0; // Avoid division by zero
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0); // Calculate the sum of all elements
    return sum / numbers.length; // Divide the sum by the number of elements
}

// Example usage
console.log(findAverage([1, 2, 3, 4, 5])); // Output: 3
console.log(findAverage([10, 20, 30]));    // Output: 20
console.log(findAverage([]));              // Output: 0



//8) Write a function named isLeapYear that takes a year as an argument and returns true if the year is a leap year,
// and false if it is not.

function isLeapYear(year) {
    /**
     * Determines if a given year is a leap year.
     *
     * @param {number} year - The year to check.
     * @returns {boolean} - True if the year is a leap year, false otherwise.
     */
    if (year % 400 == 0) {
        console.log(`${year} is a leap year.`);
        return true;
    } else if (year % 100 == 0) {
        console.log(`${year} is not a leap year.`);
        return false;
    } else if (year % 4 == 0) {
        console.log(`${year} is a leap year.`);
        return true;
    } else {
        console.log(`${year} is not a leap year.`);
        return false;
    }
}

// Example usage
console.log(isLeapYear(2024)); // Output: true
console.log(isLeapYear(1900)); // Output: false
console.log(isLeapYear(2000)); // Output: true
