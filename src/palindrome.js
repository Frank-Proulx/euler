export function Palindrome(num) {
  this.num = num;
}

Palindrome.prototype.generatePalindromes = function() {
  let array = [];
  for (let i = 1; i <= this.num; i++) {
    if (i.toString() === i.toString().split("").reverse().join("")) {
      array.push(i);
    }
  }
  this.palindromes = array;
};

export function isSumOfSquares(num) {  
  let foundSum = false;
  for (let i = 1; i < num && !foundSum; i++) {
    let currentSum = 0;
    let currentDigit = i;
    while (currentSum < num) {
      currentSum += currentDigit * currentDigit;
      currentDigit++;
    }
    foundSum = currentSum === num && (currentDigit - 1) !== i;
  }
  return foundSum;
}

Palindrome.prototype.sumPalindromes = function() {
  this.generatePalindromes();
  let sum = 0;
  this.palindromes.forEach(function(element) {
    if (isSumOfSquares(element)) {
      sum += element;
    }
  });
  this.sum = sum;
};