let num1 = parseInt(prompt('Enter a random 1st number(1of2)'))
let num2 = parseInt(prompt('Enter a random 2nd number(2of2)'))

if (num1 > num2) {
    document.write(`${num1} is larger than ${num2}`)
} else if (num1 < num2) {
    document.write(`${num2} is larger than ${num1}`)
} else {
    document.write('No larger number as both numbers are the same')
}