const firstNonConsecutiveNumber = require("../src/firstNonConsecutiveNumber");

// write test cases to ensure firstNonConsecutiveNumber() works as expected
test('function find the first element of array that is not consecutive', () => {
    expect(firstNonConsecutiveNumber([1, 3])).toBe(3)
    expect(firstNonConsecutiveNumber([1, 2, 4, 5, 6])).toBe(4)
    expect(firstNonConsecutiveNumber([-1, 0, 1, -10])).toBe(-10)
    expect(firstNonConsecutiveNumber([1, 2, 3, 4, 5, 6])).toBeNull
})