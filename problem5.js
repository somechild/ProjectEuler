function problem5() {
	var numberToRet = 2520;
	var numbersBetweenTenToTwentyThatAreNotForSureDivisorsOfNumberToRet = [11, 12, 13, 14, 15, 16, 17, 18, 19]; //numbers between 10-20
	for (var i = 0; i < numbersBetweenTenToTwentyThatAreNotForSureDivisorsOfNumberToRet.length; i++) {
		if(numberToRet%numbersBetweenTenToTwentyThatAreNotForSureDivisorsOfNumberToRet[i] != 0) {
			numberToRet = numberToRet*numbersBetweenTenToTwentyThatAreNotForSureDivisorsOfNumberToRet[i];
		};
	};
	var whileIsNotDivisbleByPrimes = [2, 3, 5, 7, 11, 13, 17, 19]; //primes between 1-20
	for (var i = 0; i < whileIsNotDivisbleByPrimes.length; i++) {
		var varIsNotDivisbleAnymore = false;
		while (!varIsNotDivisbleAnymore) {
			var divided = numberToRet/whileIsNotDivisbleByPrimes[i];
			if (parseInt(divided) == divided) {
				for (var z = 1; z <= 20; z++) {
					if (divided%z !== 0) {
						varIsNotDivisbleAnymore = true;
						break;
					}
					else if(z==20) {
						numberToRet = divided;
					};
				};
			}
			else{
				varIsNotDivisbleAnymore = true;
				break;
			};
		};
	};
	document.getElementById('problem5').childNodes[3].innerHTML = numberToRet;
};
document.getElementById('problem5').childNodes[3].addEventListener('click', problem5);