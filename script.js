const car = {
	maker : 'BMW',
	year : 2021,
	Colour : 'black',
    model : 'X4 M40i',
    exteriorColor : 'red',
    wheelSize : '20"',
    interiorColor : 'Black',
}
function findSpecifiedKey(obj, item) {
return obj.hasOwnProperty(item);	
}
console.log(findSpecifiedKey(car, 'year'))



