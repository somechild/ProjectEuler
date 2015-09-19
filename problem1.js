function problem1() {
	var runningTotal = 0;
	for (var i = 1; i < 1000; i++) {
		if (i%3 == 0 || i%5 == 0) {
			runningTotal = runningTotal + i;
		};
	};
	document.getElementById('problem1').childNodes[3].innerHTML = runningTotal;
};
document.getElementById('problem1').childNodes[3].addEventListener('click', problem1);