const sumWithoutHighestAndLowest = require('../src/sumWithoutHighestAndLowest.js');

// test cases
test('sum of all the numbers except highest and lowest', () => {
    expect(sumWithoutHighestAndLowest([6,2,1,8,10])).toBe(16)
    expect(sumWithoutHighestAndLowest([1, 1, 11, 2, 3])).toBe(5)
})