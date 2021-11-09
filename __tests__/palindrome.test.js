import { Palindrome } from './../src/palindrome.js';

describe('Palindrome', () => {

  test('should create Palindrome checker with assigned num', () => {
    let testPal = new Palindrome(4);
    expect(testPal.num).toEqual(4);
  });
  
  test('should return false if not palindrome', () => {
    let testPal = new Palindrome(47);
    expect(testPal.isPalindrome()).toEqual(false);
  });

  test('should return true if is palindrome', () => {
    let testPal = new Palindrome(474);
    expect(testPal.isPalindrome()).toEqual(true);
  });

  test('should return true if is sum of squares', () => {
    let testPal = new Palindrome(595);
    expect(testPal.isPalindrome()).toEqual(true);
  });

  test('should return false if is not sum of squares', () => {
    let testPal = new Palindrome(594);
    expect(testPal.isPalindrome()).toEqual(true);
  });
});