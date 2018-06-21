// Sum all the numbers of the array except the highest and the lowest number
// If the highest and lowest numbers appear more than once, exclude ALL occurrences
//
// e.g. sumWithoutHighestAndLowest([6, 2, 1, 8, 10]) => 16
// e.g. sumWithoutHighestAndLowest([1, 1, 11, 2, 3]) => 5

const sumWithoutHighestAndLowest = array => {
	const maxNum = Math.max(...array);
	const minNum = Math.min(...array);
	var newArr = array.filter(num =>  num != maxNum);
	newArr = newArr.filter(num =>  num != minNum);
	return newArr.reduce((a,b) => a+b,0)
};

module.exports = sumWithoutHighestAndLowest;
