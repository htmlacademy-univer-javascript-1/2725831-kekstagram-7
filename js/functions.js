/* eslint-disable no-unused-vars */

function checkLength(str, maxLen){
  return str.length() <= maxLen;
}

function checkPalindrom(str){
  const normStr = str.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i < normStr.length/2; i++){
    if (normStr[i] !== normStr[normStr.length-i-1]) {return false;}
  }
  return true;
}

function extractNumbers(str){
  const newStr = str.toString();
  let numStr = '';
  for (let i = 0; i < newStr.length; i++){
    if (!isNaN(parseInt(newStr[i], 10))){
      numStr += newStr[i];
    }
  }
  return parseInt(numStr, 10);
}
