import { fizz } from "./fizz";

test("Fizz: 3 and 5 both", () => {
  expect(fizz(15)).toBe("FizzBuzz");
  expect(fizz(30)).toBe("FizzBuzz")
})

test("Fizz: 3", () => {
  expect(fizz(3)).toBe("Fizz");
  expect(fizz(9)).toBe("Fizz");
})

test("Fizz: 5", () => {
  expect(fizz(10)).toBe("Buzz");
  expect(fizz(5)).toBe("Buzz");
})

test("Fizz: Input error", () => {
  const error = "Input Error"
  expect(fizz(0)).toBe(error);
  expect(fizz(-1)).toBe(error);
  expect(fizz('1')).toBe(error);
  expect(fizz(false)).toBe(error);
})