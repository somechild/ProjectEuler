function problem3() {
	var thisIsTheVal;
	var valToFindLargestPrimeFactorOf = 600851475143;

	for (var i = 2; i < parseInt(valToFindLargestPrimeFactorOf*0.5); i++) {
		if (thisIsTheVal) {
			break;
		};
		var divided = valToFindLargestPrimeFactorOf/i;
		if (divided == parseInt(divided)) {
			if (((divided*divided)-1)%24 == 0) {
				var z = Math.ceil(Math.sqrt(divided));
				for (var a = 2; a <= z; a++) {
					if (divided%a == 0) {
						break;
					}
					else if(a == (z)){
						thisIsTheVal = divided;
						break;
					};
				};
			};
		};
	};

	document.getElementById('problem3').childNodes[3].innerHTML = thisIsTheVal;
};
document.getElementById('problem3').childNodes[3].addEventListener('click', problem3);