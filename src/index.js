import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Palindrome } from './palindrome';


$("form#test").submit(function(event) {
  event.preventDefault();
  let test = new Palindrome(parseInt($("#number").val()));
  test.sumPalindromes();
  $("#output").html(test.sum);
});