function isPalindrome(word) {
  // Write your algorithm here
  if(typeof word == 'string'){
    //convert to lowercase
    const lowerCaseWord = word.toLowerCase()
    //reverse word
    const reverseWord = lowerCaseWord.split('').reverse().join('')
    //compare the original lowercase vs reversed word
    // const compareWord = () => lowerCaseWord === reverseWord ? true : false
    // return compareWord
    return lowerCaseWord === reverseWord
  }else{
    console.log('Enter string')
  }
}

/* 
  Add your pseudocode here
  -should ensure the word input is a string
  -should convert the word input into all lowercase or all uppercase
  -should reverse the word input and compare to see if the reversed string === original string(word input)
  -if it is then print true otherwise false
*/

/*
  Add written explanation of your solution here
  -isPalindrome is a function which will receive one argument as a string and check if once the string
  is reversed, the reversed string is the same as the original string and it is of the same length.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log('Expecting: true');
  console.log('=>', isPalindrome('Mum'))

  console.log("");

  console.log('Expecting: true');
  console.log('=>', isPalindrome('abBa'))

  console.log("");

  console.log('Expecting: false');
  console.log('=>', isPalindrome('ab'))

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}
console.log(isPalindrome("abBa"));  // Expecting: true
console.log(isPalindrome("robot"));  // Expecting: false

module.exports = isPalindrome;
