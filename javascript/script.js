var numbers = []
var number = ""
var operator = ""

function input(value) {
	if (operator !== value) {
		switch (value) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 0:
			case '.':
				if (operator !== "") {
					numbers.push(operator)
					operator = ""
				}


				if (!((document.getElementById("input_calc").innerHTML.charAt(document.getElementById("input_calc").innerHTML.length - 1) === '.') && value === '.')) {
					number += value;
					document.getElementById("input_calc").innerHTML += value
				}

				break;
			case '+':
			case '/':
			case '-':
			case '*':
				if (number !== "") {
					numbers.push(number);
					number = "";
				}

				if (operator !== "") {
					document.getElementById("input_calc").innerHTML= document.getElementById("input_calc").innerHTML.slice(0, -1)
				}

				operator = value;
				document.getElementById("input_calc").innerHTML += operator

				break;
		}
	}
}

function input_delete_all() {
	document.getElementById("input_calc").innerHTML = ""
	numbers = []
	number = ""
	operator = ""
}

function input_delete_one() {
	document.getElementById("input_calc").innerHTML= document.getElementById("input_calc").innerHTML.slice(0, -1)

	var lastElement = numbers[numbers.length - 1];
	console.log(lastElement)
}

function rechnen() {
	if (number !== "") {
		numbers.push(number)
		number = ""
	}

	var resultstring = ""
	numbers.forEach((val) => {
		resultstring += val
	})

	var result = eval(resultstring)

	document.getElementById("input_calc").innerHTML += " = " + result
}

window.addEventListener("keydown", (event) => {

});