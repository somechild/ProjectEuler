function problem7() {
	var primToRet = null;
	var primeCounter = 1; //because 'two' is skipped in the computation below, and it starts with three
	var numberCounter = 2;
	while(!primToRet) {
		var z = Math.ceil(Math.sqrt(numberCounter));
		for (var a = 2; a <= z; a++) {
			if (numberCounter%a == 0) {
				break;
			}
			else if(a == z){
				primeCounter ++;
				if (primeCounter == 10001) {
					primToRet = numberCounter;
				};
				break;
			};
		};
		numberCounter ++;
	};
	document.getElementById('problem7').childNodes[3].innerHTML = primToRet;
};
document.getElementById('problem7').childNodes[3].addEventListener('click', problem7);