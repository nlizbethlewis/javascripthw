function add(numOne,numTwo){
	var plus = parseFloat(numOne) + parseFloat(numTwo),
	addString = numOne + " + " + numTwo + "= " + plus; 
	return addString; 
 }

function sub(numOne,numTwo){
	var subtract = parseFloat(numOne) - parseFloat(numTwo),
	subString = numOne + " - " + numTwo + " = " + subtract; 
	return subString; 
 }

 function mult(numOne,numTwo){
 	var multiply= parseFloat(numOne) * parseFloat(numTwo),
	multString = numOne + " * " + numTwo + " = " + multiply; 
	return multString; 
 }

 function divide(numOne,numTwo){
	var divide= parseFloat(numOne) / parseFloat(numTwo),
	divideString = numOne + " / " + numTwo + " = " + divide;
	return divideString; 
 }

function populatehtml(operation){
	var input1 = document.getElementById("firstInput").value;
	var input2 = document.getElementById("secondInput").value;
	var output = operation(input1, input2);
	document.getElementById("result").innerText += output;
}


document.getElementById('add').onclick = function(){populatehtml(add)};
document.getElementById('subtract').onclick = function(){populatehtml(sub)};
document.getElementById('multiply').onclick = function(){populatehtml(mult)};
document.getElementById('divide').onclick = function (){populatehtml(divide)};

