function problem10() {
	var sumToRet = 0;
	
	var primeTestNo = 2000000;



	function primeTestFuncn(a) {

		if (a%2==0)
			return a==2;
		else if (a%3 == 0)
			return a==3;


		var o = Math.sqrt(a);

		for (var i = 5; i <= o; i+= 6) {
			
			if (a%i == 0)
				return false;
			else if ((a%(i+2)) == 0)
				return false;
		
		};


		return true;
	};



	while(primeTestNo > 1) {
		if(primeTestFuncn(primeTestNo))
			sumToRet += primeTestNo;
		primeTestNo --;
	};



	document.getElementById('problem10').childNodes[3].innerHTML = sumToRet;
};
document.getElementById('problem10').childNodes[3].addEventListener('click', problem10);