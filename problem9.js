function problem9() {
	var productToRet = 0;
			//  a     b
	var nos = [200, 200]//because I know a+b+c for this is still a ways below 1000
	function changeNos() {
		if (nos[0] == 999) {
			nos[1] ++;
			nos[0] = 1;
		}
		else
			nos[0] ++;
	}; 




	var isSum1k;

	while(!isSum1k) {
		var c = Math.sqrt(Math.pow(nos[0], 2) + Math.pow(nos[1], 2));
		if (parseInt(c) ==  c) {
			if ((nos[0] + nos[1] + c) == 1000)
				isSum1k = true;
			else
				changeNos();
		}
		else 
			changeNos();
	};

	productToRet = Math.sqrt(Math.pow(nos[0], 2) + Math.pow(nos[1], 2)) * nos[0] * nos[1];

	document.getElementById('problem9').childNodes[3].innerHTML = productToRet;
};
document.getElementById('problem9').childNodes[3].addEventListener('click', problem9);