let grade = parseInt(prompt('Enter a grade between 1 and 100'))
if (grade >= 90) {
	document.write('Student received an A')
} else if (grade >= 80) {
	document.write('Student received a B')
} else if (grade >= 70) {
	document.write('Student received a C')
} else if (grade >= 60) {
	document.write('Student received a D')
} else {
	document.write('You received an F')
}