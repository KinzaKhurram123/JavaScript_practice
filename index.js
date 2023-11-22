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

var firstformat = date + "/" + month + "/" + year;

var secoundformat = date + "-" + month + "-" + year;

console.log(firstformat, secoundformat, "Question 2");

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

function reverse(string) {
  let newstr = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newstr += string[i];
  }
  return newstr;
}
console.log(reverse("w3resource"), "Q no 4");

// Question No 5
// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
function checkSunday() {
  for (var y = 2014; y <= 2050; y++) {
    var date = new Date(y, 0, 1);
    if (date.getDay() === 0) {
      console.log("1st January is on " + y + " Question No 5");
    }
  }
}
checkSunday();

// Question No 6
// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

function checknumber(guessnumber) {
  let num = 7;
  if (num === guessnumber) {
    return "Good Work";
  } else {
    return "Not matched";
  }
}
console.log(checknumber(5), "Q no 6");

// Question No 7
// . Write a JavaScript program to calculate the days left before Christmas.

function calculateDays() {
  let newDate = new Date();
  let Christmas = new Date(newDate.getFullYear(), 11, 25);
  if (newDate.getMonth() === 11 && newDate.getDay() < 25) {
    let years = Christmas.setFullYear(Christmas.getFullYear() + 1);
    return years;
  } else {
    return false;
  }
}
console.log(calculateDays(), "Question no 7");

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

console.log(SumOfIntiger(12, 12), "Question No 12");

// Question 13
// Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.
// function

function sumOfNum(num) {
  var currentNumber = 19;
  if (num > 19) return 3 * (currentNumber - 19);
  else return currentNumber - 19;
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
  console.log("nummm", num, (20 * 100) / 100, (20 * 400) / 100);
  if (num === (20 * 100) / 100 || num === (20 * 400) / 100) {
    console.log("Integer is within 20 of 100 or 400  Qno 15");
  } else {
    console.log("Integer is not  within 20 of 100 or 400  Qno 15");
  }
}
CheckingNum(80);

// Question 16
// 20. Write a JavaScript program to check two given integers whether one is positive and another one is negative.

function integers(no1, no2) {
  if ((no1 < 0 && no2 > 0) || (no1 > 0 && no2 < 0)) {
    return true;
  } else {
    return false;
  }
}
console.log(integers(-2, 2), "Q no 16");

// Question 17
// Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.

function checkString(string1) {
  if (string1.substring(0, 2) === "Py") {
    return string1;
  } else {
    return "py" + string1;
  }
}

console.log(checkString("java"), "Q no 17");

// Question 18
// Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

function modified(str, position) {
  let num1 = str.substring(0, position);
  let num2 = str.substring(position + 1, str.lenght);
  return num1 + num2;
}
console.log(modified("JavaScript", 2), "Q no 18");
// wrong

// Question 19
// 23. Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.

function newString(newstr) {
  let array = newstr.split("");
  let temp = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = temp;
  return array.join("");
}
console.log(newString("abcd"), "Q no 19");

// Question No 20
// 25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

function checkedNum(num) {
  if (num % 3 === 0 || num % 7 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(checkedNum(62), "Q no 20");

// Question 21
//  Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.

function AddedString(string) {
  if (string <= 1) {
    return string;
  }
  let modified = string.substring(0, 1);
  let addSrting = string.substring(1, string.lenght);
  return modified + addSrting + modified;
}
console.log(AddedString("ThisIsTesting"), "Q no 21");

// Question No 22
// 26. Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.

function Ques22(str) {
  if (str.length >= 3) {
    let givenstring = str.substring(str.length - 3);
    return givenstring + str + givenstring;
  } else {
    return false;
  }
}

console.log(Ques22("kinza"), "Q no 22");

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
console.log(integerVal(25, 80), "Q no 24");

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
console.log(Script("jascript"), "Q no 26");

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

console.log(checkLargestNum(2, 7, 19), "Q no 27");

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
    if (x > y) return x;
    else return y;
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
// incomplete

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

// Question No 36
// 40. Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.

function CheckDiffernce(x, y) {
  if (x == 8 || y == 8) {
    return true;
  }
  if (x + y == 8 || x - y == 8) {
    return true;
  } else {
    return false;
  }
}

console.log(CheckDiffernce(4, 12), "Question No 36");

// Question No 37
// 41. Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.

function CheckNum(x, y, z) {
  if (x == y && y == z) {
    return 30;
  } else if (x == y || y == z || z == x) {
    return 40;
  } else return 20;
}
console.log(CheckNum(8, 8, 8), "Q no 37");

// Question No 38
// Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

function CheckModes(x, y, z) {
  if (y > x && z > y) {
    return "Strict Mode";
  } else if (x > y || x == y) {
    return "Soft Mode";
  } else {
    return undefined;
  }
}
console.log(CheckModes(10, 15, 31), "Q No 38");
console.log(CheckModes(22, 20, 31), "Q No 38");

// Question No 39
// Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.

function CheckRightMostDigit(p, q, r) {
  let check = p % 10 === q % 10 || p % 10 === r % 10 || q % 10 === r % 10;
  return check;
}
console.log(CheckRightMostDigit(10, 23, 36), "Q no 39");
//again

// Question No 40
// Write a JavaScript program to check from three given integers whether a number is greater than or equal to 20. It is less than the others

function greaterthen(x, y, z) {
  return (
    (x >= 20 && (x < y || x < z)) ||
    (y >= 20 && (y < x || y < z)) ||
    (z >= 20 && (z < y || z < x))
  );
}

console.log(greaterthen(20, 40, 20), "Q no 40");

// Question No 41
// Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15.

function Differnece(x, y) {
  if (x == 15 || y == 15 || x + y == 15 || x - y == 15) {
    return true;
  } else {
    return false;
  }
}
console.log(Differnece(7, 9), "Q no 41");

// Question No 42
// Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.

function checkedNum(num) {
  if (num % 7 === 0 || num % 11 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(checkedNum(62), "Q no 42");

// Question No 43
// Write a JavaScript program to check whether a given number exists in the range 40..10000.
// For example 40 presents in 40 and 4000

function checkGivenNumber(num) {
  if (num >= 40 && num <= 10000) {
    return true;
  } else {
    return false;
  }
}

console.log(checkGivenNumber(80));

// Question No 43
// Write a JavaScript program to reverse a given string.

function ReverseString(str) {
  let newstr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newstr += str[i];
  }
  return newstr;
}

console.log(ReverseString("JavaScript"), "Q No 43");

// Question No 44
// Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.

function replace(str) {
  let str_len = str.substring(0, 1);
  let str_len2 = str.substring(1, str.lenght);
  return str_len2 + str_len;
}

console.log(replace("Kinza"), "Q no 44");

// Question No 45
// Write a JavaScript program to capitalize the first letter of each word in a given string.

function capitalizeLetter(str) {
  let str_len = str.substring(0, 1).toUpperCase();
  let str_len2 = str.substring(1, str.lenght);

  return str_len + str_len2;
}
console.log(capitalizeLetter("hello"), "Q no 45");

// Question No 46
// Write a JavaScript program to convert letters of a given string alphabetically.

function Converting(str) {
  let str_sort = str.split("").sort().join("");
  return str_sort;
}
console.log(Converting("hello"), "Q no 46");

// Question No 47
// Write a JavaScript program to count the number of vowels in a given string.

function CountVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let apha of str.toLowerCase()) {
    if (vowels.includes(apha)) {
      count++;
    }
  }
  return count;
}
console.log(CountVowels("Apple"), "Q no 47");

// Question 48
// Write a JavaScript program to check whether a given string contains an equal number of p's and t's.

function CheckString(str) {
  let countT = 0;
  let countP = 0;
  for (let i = 0; i < str.lenght; i++) {
    if (str[i] === "t" || str[i] === "T") {
      countT++;
    } else if (str[i] === "p" || str[i] === "P") {
      countP++;
    }
  }
  return countP === countT;
}
console.log(CheckString("CheckPTs"), "Q No 48");

// Question No 49
// Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas.

function FormatedString(x, y) {
  let divideresult = (x / y).toLocaleString();
  return divideresult;
}
console.log(FormatedString(80, 6), "Question no 49");

// Question No 50
// Write a JavaScript program to create one string of specified copies (positive numbers) of a given string.

// function specifiedString(str) {}

// Question No 51
// Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above.
function CopyString(str) {
  if (str.length >= 3) {
    let strcopy = str.substring(str.length - 3);
    return strcopy + strcopy + strcopy;
  }
}
console.log(CopyString("KinzaKhurram"), "Question no 51");

// Question nO 52
// Write a JavaScript program to extract the first half of a even string.

function ExtractedString(str) {
  if (str.length % 2 === 0) {
    let extractedstr = str.slice(0, str.length / 2);
    return extractedstr;
  } else {
    return "string is not even";
  }
}
console.log(ExtractedString("banana"), "Question no 52");

// Question No 53
// Write a JavaScript program to create a new string without the first and last characters of a given string.
function NewString(str) {
  let updated = str.substring(1, str.length - 1);
  return updated;
}
console.log(NewString("hello"), "Question No 53");

// Question no 54
// Write a JavaScript program to concatenate two strings except for their first character.
function concatenateStrings(str1, str2) {
  let spliced = str1.slice(1) + str2.slice(1);
  return spliced;
}

console.log(concatenateStrings("hello", "world"), "Question No 54");

// Question No 55
// Write a JavaScript program to move the last three characters to the start of a given string. The string length must be greater than or equal to three.

function MoveCharacters(str) {
  if (str.length >= 3) {
    let str1 = str.substring(str.length - 3);
    let str2 = str.slice(0, -3);
    return str1 + str2;
  }
}

console.log(MoveCharacters("indexJs"), "Ouestion No 55");

// Question No 56
// Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater than or equal to three

function OddString(str) {
  if (str.length % 2 !== 0) {
    let m = str.slice(str.length / 3);
    console.log(m, "sdkjagsdkaksgdk");
    let extractedstr = str.slice(0, str.length / 3);
    return extractedstr;
  }
}
console.log(OddString("strings"), "Question no 56");
// Question 57
// Write a JavaScript program to concatenate two strings and return the result. If the length of the strings does not match, then remove the characters from the longer string.
