//   Anagram
/*
let str = "army";
let str1 = "west";

function isAnagram(str, str1) {
    str = str.replace(/\W/g, '').toLowerCase().split('').sort().join('')
    str1 = str1.replace(/\W/g, '').toLowerCase().split('').sort().join('')
    console.log(str, str1);
    return (str === str1)
}
console.log(isAnagram('ar$#%m%y^', 'm$#a$#r$%y'));
console.log(isAnagram('ws$t#%e%^', ' t$#s$w$%e'));
*/



//  Fizz Buzz
/*
const fizzBuzz = (number) => {
    let out = [];
    for (let i = 1; i <= number; i++) {

             if (i % 6 === 0) out.push('fizzbuzz')
        else if (i % 2 === 0) out.push('fizz')
        else if (i % 3 === 0) out.push('buzz')
        else out.push(i)

    }
    return out;
}
console.log(fizzBuzz(12));
*/


//  Get first no
/*
let n=523.252;
 let firstNum = parseInt(n.toString().slice(0,1));
console.log(firstNum);              // 5

//get last number
// let clear = Math.trunc(n);
// console.log(clear);

let lastNum = parseInt(Math.trunc(n).toString().slice(-1))
console.log(lastNum);               //3

let decimalNum = parseInt(n.toString().split('.').slice(-1).join(''))
console.log(decimalNum);             //252
*/



//  Palindrome
/*
function isPalindrome(str) {
    const string1 = str;
    console.log(string1);
    const string2 = string1.split("").reverse().join('')
    console.log(string2);
    const result = (string1 === string2);
    return result
}
console.log(isPalindrome("madam"))              // any text 
*/




//Fetch using w/o Async and Await


// function randomUser(){
try {

    fetch('https://randomuser.me/api/')
        .then(response => {
            console.log(response);
            return response.json();
        }).then(resolve => console.log(resolve))
} catch (error) {
    console.error(error);
}
// }
// randomUser();

