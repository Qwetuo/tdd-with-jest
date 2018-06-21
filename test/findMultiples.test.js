const findMultiples = require("../src/findMultiples");

// write test cases to ensure findMultiples() works as expected
test('find multiples of base until its limit', () => {
    expect(findMultiples(2, 6)).toEqual([2,4,6])
    expect(findMultiples(2, 11)).toEqual([2,4,6,8,10])
    expect(findMultiples(5, 24)).toEqual([5,10,15,20])
})
