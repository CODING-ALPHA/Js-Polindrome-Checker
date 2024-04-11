# Palindrome Checker

- This is a simple Javascript palindrome checker that allows you to enter text and see if it reads the same backward as forward (ignoring non-alphanumeric characters and case).

## How to Use

- Clone or download the repository.
- Open the HTML file (e.g., index.html) in your web browser.
  -Enter text in the input field.
- Click the "Check" button.

## Result

- The result will be displayed below the input field, indicating whether the entered text is a palindrome or not.

### Example

- If you enter "Race car", the result will be "Yes! It's a palindrome."

## Technical Details

##### The code uses JavaScript to process the entered text and determine if it's a palindrome. Here's a breakdown of the functionality:

- Input Handling: The code retrieves the user's input from the input field.
- Preprocessing: The text is converted to lowercase and non-alphanumeric characters are removed to ensure case-insensitive and symbol-ignoring palindrome checking.
- Reversal: The text is split into characters, reversed, and joined back into a string.
- Comparison: The original text is compared with the reversed text to determine if they are the same.
- Output: The result (palindrome or not) is displayed on the page.

## Further Enhancements

-You can improve the code to handle punctuation and spaces differently based on your preference.
Error handling can be added to gracefully handle invalid input (e.g., displaying a message if the user enters numbers or special characters that aren't handled).
