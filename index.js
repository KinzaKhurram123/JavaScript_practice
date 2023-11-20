//  Question No : 1
// 1. Write a JavaScript program to display the current day and time in the following format?
// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

var today = new Date();

var daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Firday",
  "Saturday",
  "sunday",
];

const day = today.getDay();

console.log("Today is " + daylist[day], "Question 1");

var days = today.getDay();
var hour = today.getHours();
var minutes = today.getMinutes();
var secounds = today.getSeconds();

var ishours = hour > 12 ? "Pm" : "Am";

console.log(
  "Current Time is " + hour + ":",
  minutes + ":",
  secounds + " " + ishours,
  "Question 1"
);

// Question No 2
// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

var today = new Date();

var date = today.getDate();

var month = today.getMonth() + 1;

var year = today.getFullYear();

var today = date + "/" + month + "/" + year;

var today = date + "-" + month + "-" + year;

console.log(today, "Question 2");

// Question No 3
// 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

//semi-perimeter of triangle ABC = s = (a + b + c)/2

//area of triangle ABC = √[s × (s – a) × (s – b) × (s – c)].

var side1 = 5;
var side2 = 6;
var side3 = 7;

var s = (side1 + side2 + side3) / 2;

var area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

console.log(area, "question 3");

// Question No 4
// Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front?

var string = "w3resource";
var s = string.length;

function reverse() {
  return string.split("").reverse().join("");
}

console.log(reverse(), "Q no 4");

// Question No 5
// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

for (var y = 2014; y <= 2050; y++) {
  var date = new Date(y, 0, 1);
  if (date.getDay() === 0) {
    console.log("1st January is on " + y + " Question No 5");
  }
}

// Question No 6
// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

function checknumber(guessnumber) {
  let num = 12;
  if (num === guessnumber) {
    return "Good Work";
  } else {
    return "Not matched";
  }
}
console.log(checknumber(11), "Q no 6");

// Question No 7
// . Write a JavaScript program to calculate the days left before Christmas.

function calculate() {
  let newDate = new Date();
  let Christmas = new Date(newDate.getFullYear(), 11, 25);
  if (newDate.getMonth() === 11 && newDate.getDay() < 25) {
    let years = Christmas.setFullYear(Christmas.getFullYear() + 1);
    return years;
  } else {
    return false;
  }
}
console.log(calculate(), "Question no 7");

// Question No 8
// Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).

function calculate(num1, num2) {
  let multiply = num1 * num2;
  let divide = num1 / num2;
  console.log(multiply, "Question No 8");
  console.log(divide, "Question No 8");
}

console.log(calculate(12, 15), "Question no 8");

// Question No 9
// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

function leapyear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

console.log(leapyear(2018), "QUESTION NO 9");

// Question No 10
// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]

function Celsius(cls) {
  var tem = cls;
  var clsToFhr = (tem * 9) / 5 + 32;
  return cls, clsToFhr;
}

function Fahrenheit(fhr) {
  var tem = fhr;
  var fhrTocls = ((tem - 32) * 9) / 5;
  return fhr, fhrTocls;
}

console.log(Celsius(60), "QUESTION NO 10");
console.log(Fahrenheit(140), "QUESTION NO 10");

// Question No 11
// . Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.

function DifferneceBetweeen(num) {
  if (num <= 13) {
    return num - 13;
  } else {
    return (num - 13) * 2;
  }
}

console.log(DifferneceBetweeen(32), "Question No 11");

// QUESTION NO 12
// Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.

function SumOfIntiger(num1, num2) {
  if (num1 == num2) {
    return 3 * (num1 + num2);
  } else {
    return num1 + num2;
  }
}

console.log(SumOfIntiger(12, 10), "Question No 12");

// Question 13
// Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.
// function

function sumOfNum(num) {
  var sum = num - 19;
  if (sum <= 19) {
    return 3 * (sum - 19);
  }
}

console.log(sumOfNum(20), "Question No 13");

// Question No 14
// Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.

function checknumber(num1, num2) {
  if ((num1 || num2) === 50 || num1 + num2 === 50) return true;
}
console.log(checknumber(50, 29), "Q no 14");

// Question 15
// Write a JavaScript program to check w4ther a given integer is within 20 of 100 or 400.

function CheckingNum(num) {
  if (num <= 20) {
    console.log("Integer is within 20");
    4;
  } else {
    console.log("Integer is not within 20");
  }
  if (num <= 100) {
    console.log("Integer is within 100");
  } else {
    console.log("integer is not within 100");
  }
  if (num <= 400) {
    console.log("Integer is within 400");
  } else {
    console.log("Integer is not within 400");
  }
}
console.log(CheckingNum(375), "Q no 15");

// Question 16
// 20. Write a JavaScript program to check two given integers whether one is positive and another one is negative.

function integers(no1, no2) {
  if ((no1 < 0 && no2 < 0) || (no1 > 0 && no2 > 0)) {
    return true;
  } else {
    return false;
  }
}
console.log(integers(2, -2), "Q no 16");

// Question 17
// Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.

function checkString(string1) {
  if (string1.substring(0, 2) === "Py") {
    return true;
  } else {
    return false;
  }
}

console.log(checkString("Python"), "Q no 17");

// Question 18
// Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

function modified(start, end) {
  let string = "helloWorld";
  var modifiedString = string.slice(start, end);
  return modifiedString;
}
console.log(modified(1, -1), "Q no 18");

// Question 19
// 23. Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.
function newString(newstr) {
  let string = "heyWorld";
  let str = string.substring(1, -1);
  let midstr = str + newstr + str;
  return midstr;
}
console.log(newString("abcd"), "Q no 19");
// console.log(newString());

// Question No 20
// 25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.
function checkedNum(num) {
  if (num % 3 || num % 7) {
    return true;
  } else {
    return false;
  }
}
console.log(checkedNum(27), "Q no 20");

// Question 21
//  Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.

function AddedString(string) {
  if (string <= 1) {
    return string;
  }
  let modified = string.substring(0, string.lenght - 1);
  // let givenString = "TestingUser";
  // let modified = givenString.substring(1, -1);
  // return modified;
}
console.log(AddedString("ThisIsTesting"), "Q no 21");

// Question No 22
// 26. Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.
function Ques22(str) {
  if ((str.lenght = 3)) {
    str_len = 3;
    let givenstring = str.substring(str.length - 3);
    return givenstring + str + givenstring;
  } else {
    return false;
  }
}

console.log(Ques22("ham"), "Q no 22");

// // Question No 23
// // 27. Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.
function checkJava(given) {
  let check = given.substring(0, 4);
  if (check == "Java") {
    return true;
  } else {
    return false;
  }
}
console.log(checkJava("JavaScript"), "Q No 23");

// Question 24
// Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range
function integerVal(x, y) {
  if ((x >= 50 && x <= 99) || (y >= 50, y <= 99)) {
    return true;
  } else {
    return false;
  }
}
console.log(integerVal(25, 100), "Q no 24");

// Question 25
// Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the specified range.
function checkthreeNum(x, y, z) {
  if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99)) {
    return true;
  } else {
    return false;
  }
}

console.log(checkthreeNum(40, 56, 99), "Q no 25");

// Question No 26
// Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.

function Script(str) {
  let substr = str;
  if (substr.substring(10, 4) === "Script") {
    let sub = str.substring(0, 4);
    return sub;
  } else {
    return substr;
  }
}
console.log(Script("JavaScript"), "Q no 26");

// Question No 27
// Write a JavaScript program to find the largest of three given integers.
function checkLargestNum(x, y, z) {
  let val = 0;
  if (x > y) {
    return (val = x);
  } else {
    val = y;
  }
  if (z > val) {
    return (val = z);
  } else {
    return val;
  }
}

console.log(checkLargestNum("55", "37", "19"), "Q no 27");

// Question 28
//  Write a JavaScript program to find the closest value to 100 from two numerical values.
function closestVal(x, y) {
  let resx = x - 100;
  let resy = y - 100;
  if (resx > resy) {
    return x;
  } else {
    return y;
  }
}
console.log(closestVal(40, 70) + " Is the Closest num of 100", "Q no 28");

// Question No 29
//  Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.

function Checked(x, y) {
  if (
    (x >= 40 && x <= 60 && y >= 40 && y <= 60) ||
    (x >= 70 && x <= 70 && y >= 70 && y <= 100)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(Checked(45, 55), "Q no 29");

// Question No 30
// Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.
function findLargestNUm(x, y) {
  if ((x >= 40 && x <= 60) || (y >= 40 && y <= 60)) {
    val = 0;
    if (x > y) {
      return (val = x);
    } else {
      return (val = y);
    }
  } else {
    return "Number Is not in the range of 40 to 60";
  }
}

console.log(findLargestNUm(42, 55), "Question No 30");

// Question No 31
// Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.

function strResult(string, character) {
  if (string.length <= 4) {
    return string;
  } else {
    return "lenght of String is less then 4";
  }
}

console.log(strResult("hey", "l"), "Q No 31");

// Question No 32
//Write a JavaScript program that checks whether the last digit of three positive integers is the same.

function CheckLastDigit(x, y, z) {
  if (x > 0 && y > 0 && z > 0) {
    return x % 10 === y % 10 && y % 10 === z % 10 && x % 10 === z % 10;
  } else {
    return false;
  }
}

console.log(CheckLastDigit(12, 22, 32), "Question No 32");

// Question No 33
// Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.
function CheckingChar(str) {
  if (str.length <= 3) {
    return str.toUpperCase();
  } else {
    let start = str.substring(0, 3).toLowerCase();
    let end = str.substring(3, str.lenght).toLowerCase();
    return start + end;
  }
}

console.log(CheckingChar("Happy"), "Question No 33");

// Question no 34
// Write a JavaScript program to check a student's total marks in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam" the student will receive A+ grade and total marks must be greater than or equal to 90. If the student gets an A+ grade, return true, otherwise return false.
function MarkCheck(mark) {
  if (mark >= 89 && mark <= 100) {
    return true;
  } else {
    return false;
  }
}
console.log(MarkCheck(92), "Q no 34");

// Question no 35
// Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.
function ComputeTheSum(x, y) {
  let sum = x + y;
  if (sum >= 50 && sum <= 80) {
    return 65;
  } else {
    return 80;
  }
}

console.log(ComputeTheSum(10, 40), "Q no 35");
