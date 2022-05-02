# Javascript Coding Solutions

A collection of my solutions to Javascript coding challenges.

## Code Wars

```js
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// For example: moveZeros([false,1,0,1,2,0,1,3,"a"]) --> returns[false,1,1,2,1,3,"a",0,0]

var moveZeros = function (arr) {
  let tail = []
  let head = []
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === 0) {
      tail.push(arr[i])
    } else {
      head.push(arr[i])
    }
  }
  return head.concat(tail)
};
moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])
// => [false,1,1,2,1,3,"a",0,0]
```

```js
// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// For example: 493193  =>  4 + 9 + 3 + 1 + 9 + 3 = 29  =>  2 + 9 = 11  =>  1 + 1 = 2

function digital_root(n) {
  //   checks the number is over 9, the converts the number to a string and splits the string into an array
  //   then n is assigned to zero so that we can add to it in the forOf statement
  //   each string in the array is then converted into a number and added to n. n is then checked if it is over 9
  //   if it is, the cycle continues.
  //   if it isn't, return n
  while (n > 9) {
    stringArray = n.toString().split("")
    n = 0
    for (let num of stringArray) {
      n += parseInt(num);
    }
  }
  return n
}
digital_root(493193);
// => 2
```

```js
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// For example: 'abcde' => ['ab', 'cd', 'e_']
function solution(str) {
  let splitStr = str.split("")
  if (splitStr.length % 2 === 1) {
    splitStr.push("_")
  }
  let pairs = []
  for (let i = 0; i < splitStr.length; i += 2) {
    pairs.push(splitStr.slice(i, i + 2).join(""))
  }
  return pairs
}
solution("abcdefg")
// => ["ab", "cd", "ef", "g_"]
```

```js
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples:
// [2, 4, 0, 100, 4, 11, 2602, 36] => 11 (the only odd number)
// [160, 3, 1719, 19, 11, 13, -21] => 160 (the only even number)

function findOutlier(integers){
//   add the indecies of odd and even numbers to seperate arrays.
//   check which is shorter at the end and then return that index in integers
  let oddIndecies = []
  let evenIndecies = []

  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      evenIndecies.push(i);
    } else {
      oddIndecies.push(i);
    }
  }
  if (evenIndecies.length > oddIndecies.length) {
    return integers[oddIndecies]
  } else {
    return integers[evenIndecies]
  }
}
findOutlier([2,6,8,2,-66,34,-35,66,700,1002,-84,10,4])
// => -35
```

```js
// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.

// Examples:
// 1071225 => 45

// 91716553919377 => -1

function findNb(m) {
  let vol = 1
  let level = 1
  while (vol < m) {
    level++
    vol += level ** 3
    if (vol === m) {
      return level
    } else if (vol > m) {
      return (-1)
    }
  }
  return (-1)
}
findNb(4183059834009)
// => 2022
```

```js
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

function order(words){
  let numberOrder = words.match(/\d/g)
  let splitWords = words.split(' ')
  let orderedWords = []
  orderedWords.length = splitWords.length
  for (let word of splitWords) {
  orderedWords[word.match(/\d/g) - 1] = word
  }
return orderedWords.join(' ')
}
order("d4o dru7nken sh2all w5ith s8ailor wha1t 3we a6")
// => "wha1t sh2all 3we d4o w5ith a6 dru7nken s8ailor"
```

```js
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.
// Cannot use regular expressions

// For example: "http://github.com/carbonfive/raygun" => "github"

function domainName(url) {
  const splitURL = url.split('.')
  if (url.includes('http') && url.includes('www')) {
    return splitURL[1]
  } else if (url.includes('http')) {
    return splitURL[0].split('//')[1]
  } else if (url.includes('www')) {
    return splitURL[1]
  } else {
    return splitURL[0]
  }
}
domainName("http://google.co.jp")
// => "google"
```
