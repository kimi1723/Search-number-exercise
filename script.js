const arr = [
	[3, 21, 37, 40, 41, 43, 45, 52, 68],
	[73, 94, 105, 126, 127, 129],
	[133, 149, 160, 183],
	[203, 204, 212],
];

const isNumberInArrayOfArrays = (number, array) => {
	let allElementsArray = [];

	array.forEach(innerArray => {
		allElementsArray.push(...innerArray);
	});

	while ((number !== allElementsArray[0] || number !== allElementsArray[1]) && allElementsArray.length !== 0) {
		let previousAllElementsArray = allElementsArray;
		const previousArrayMiddleIndex = Math.round(previousAllElementsArray.length / 2),
			arrayMiddleIndex = Math.round(allElementsArray.length / 2);

		if (number > allElementsArray[arrayMiddleIndex]) {
			allElementsArray = [];

			previousAllElementsArray.splice(0, previousArrayMiddleIndex);
			previousAllElementsArray.forEach(el => allElementsArray.push(el));

			previousAllElementsArray = [];
		} else if (number < allElementsArray[arrayMiddleIndex]) {
			allElementsArray = [];

			previousAllElementsArray.splice(previousArrayMiddleIndex, previousAllElementsArray.length);
			previousAllElementsArray.forEach(el => allElementsArray.push(el));
		} else if (number === allElementsArray[arrayMiddleIndex] || number === allElementsArray[arrayMiddleIndex - 1]) {
			return console.log(`${number} exists`);
		} else {
			return console.log(`${number} doesnt exist`);
		}
	}
};

isNumberInArrayOfArrays(0, arr);
isNumberInArrayOfArrays(21, arr);
isNumberInArrayOfArrays(203, arr);
