function problem4() {
	// var valOne = 999;
	// var valTwo = 999; var valTwoWasDecrementedToXTen = false;
	var valThatIsPalindrome = null;
	// while(!valThatIsPalindrome) {
	// 	// if (valOne%10 !== 0 || (!valTwoWasDecrementedToXTen && valTwo%10 == 0)) {
	// 	// 	var productIsPalindromeCheckNumber = valOne*valTwo;
	// 	// 	var productIsPalindromeCheckNumberFlipped = productIsPalindromeCheckNumber.toString().split('').reverse().join('');
	// 	// 	if (parseInt(productIsPalindromeCheckNumber) == parseInt(productIsPalindromeCheckNumberFlipped)) {
	// 	// 		valThatIsPalindrome = productIsPalindromeCheckNumber;
	// 	// 		break;
	// 	// 	}
	// 	// 	else{
	// 	// 		valOne --;
	// 	// 		if (valTwo%10 == 0 && !valTwoWasDecrementedToXTen) {
	// 	// 			valTwoWasDecrementedToXTen = true;
	// 	// 		};
	// 	// 	};
	// 	// }
	// 	// else if(valTwo%10 !== 0 || valTwoWasDecrementedToXTen) {
	// 	// 	var productIsPalindromeCheckNumber = valOne*valTwo;
	// 	// 	var productIsPalindromeCheckNumberFlipped = productIsPalindromeCheckNumber.toString().split('').reverse().join('');
	// 	// 	if (parseInt(productIsPalindromeCheckNumber) == parseInt(productIsPalindromeCheckNumberFlipped)) {
	// 	// 		valThatIsPalindrome = productIsPalindromeCheckNumber;
	// 	// 		break;
	// 	// 	}
	// 	// 	else{
	// 	// 		valTwo --;
	// 	// 		valTwoWasDecrementedToXTen = false;
	// 	// 	};
	// 	// };


	// 	if (valOne.toString().length !== 3 || valTwo.toString().length !== 3) {
	// 		valThatIsPalindrome = "none";
	// 		break;
	// 	};
	// };
	for (var i = 999; i > 99; i--) {
		for (var z = 999; z > 99; z--) {
			var productIsPalindromeCheckNumber = i*z;
			var productIsPalindromeCheckNumberFlipped = productIsPalindromeCheckNumber.toString().split('').reverse().join('');
			if (parseInt(productIsPalindromeCheckNumber) == parseInt(productIsPalindromeCheckNumberFlipped)) {
				valThatIsPalindrome = valThatIsPalindrome? productIsPalindromeCheckNumber > valThatIsPalindrome? productIsPalindromeCheckNumber: valThatIsPalindrome: productIsPalindromeCheckNumber;
			};
		};
	};
	document.getElementById('problem4').childNodes[3].innerHTML = valThatIsPalindrome;
};
document.getElementById('problem4').childNodes[3].addEventListener('click', problem4);

