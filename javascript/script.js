

function calculate() {

	let number1 =  parseInt(document.getElementById("input1").value)
	let number2 = parseInt(document.getElementById("input2").value)

	let operator = document.getElementById("operators").value


	let result = 0

	switch (operator) {
		case "+":
			result = number1 + number2
			break;
		case "-":
			result = number1 - number2
			break;
		case "*":
			result = number1 * number2
			break;
		case "/":
			if(number2 === 0) {
				alert("durch null darf man nicht teilen!")
			} else {
				result = number1 / number2
			}
			break;

	}

	document.getElementById("result").innerHTML = result
}







