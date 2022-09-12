export function fizz(n) {
  const ERROR_MESSAGE = "Input Error";
  if (typeof n !== "number") return ERROR_MESSAGE;
  if (n <= 0) return ERROR_MESSAGE; 
  if (n % 15 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
}