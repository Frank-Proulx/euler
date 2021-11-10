import { Palindrome } from './../src/palindrome.js';
import { isSumOfSquares } from './../src/palindrome.js';

describe('Palindrome', () => {

  test('should create Palindrome checker with assigned num', () => {
    let testPal = new Palindrome(4);
    expect(testPal.num).toEqual(4);
  });
  
  test('should generate palindromes not palindrome', () => {
    let testPal = new Palindrome(101);
    testPal.generatePalindromes();
    expect(testPal.palindromes).toEqual([1,2,3,4,5,6,7,8,9,11,22,33,44,55,66,77,88,99,101]);
  });

  test('should return true if is sum of squares', () => {
    expect(isSumOfSquares(595)).toEqual(true);
  });

  test('should return false if is not sum of squares', () => {
    expect(isSumOfSquares(594)).toEqual(false);
  });

  test('should add sum of qualifying palindromes to Palindrome', () => {
    let testPal = new Palindrome(1000);
    testPal.sumPalindromes();
    expect(testPal.sum).toEqual(4164);
  });
});