"use strict";

const result = document.querySelector(".result");
const input = document.querySelector(".input");
const clearBtn = document.querySelector(".clear-btn");
const checkBtn = document.querySelector(".solve-btn");

function checkPolindrome(text) {
  // Preprocess text to remove non-alphanumeric characters
  text = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const reversedText = text.split("").reverse().join("");
  return text === reversedText;
}

function handleCheck() {
  const userInput = input.value.trim();

  // Basic validation to check if input is empty
  if (!userInput) {
    result.style.color = "red";
    result.textContent = "Please enter some text.";
    return;
  }

  const isPalindrome = checkPolindrome(userInput);
  result.textContent = isPalindrome
    ? "Yes! It's a palindrome."
    : "It is not a palindrome.";
}

checkBtn.addEventListener("click", handleCheck);
