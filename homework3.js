//A function that takes at least three arguments and returns the result of some set of operations using those arguments 
const func = function (operator, num1, num2) {
    if (operator === "*") {
        return num1 * num2;
    } else if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "/") {
        return num1 / num2;
    }
}

//A function that takes no arguments and returns something 
const error404 = function () {
    return "File not found.";
}

//A function that takes arguments, does something but does not return anything
const print = function (message) {
    console.log(message);
}

//A function called fullName that takes as argument first name and last name 
//and returns the full name of the person (first name concatenated with last name with a space in between)
const fullName = function (fname, lname) {
    return fname + " " + lname;
}

//A function that takes three strings and returns the string that is the longest
const longestString = function (str1, str2, str3) {
    if(str1.length>=str2.length) {
        if(str1.length>str3length) {
            return str1;
        }
    } else if (str2.length>str3.length) {
        return str2;
    } 
        return str3;
     
}

//A function that takes two numbers and returns 0 if they are equal 
//1 if the first is larger and -1 if the second is larger 
const ineqaulity = function(num1, num2) {
    if(num1===num2) {
        return 0;
    } else if(num1>num2) {
        return 1;
    }  return -1;
    
}

//A function that takes three inputs and returns the first truethy value
const truethy = function(input1, input2, input3) {
    if (input1) {
        return input1;
    } else if (input2) {
        return input2;
    } else if (input3) {
        return input3;
    }
}