function problem2() {
	var runnerData = {
		"currentTerm": 3,
		"prevTerm": 2,
		"termBeforePrevTerm": 1,
		"runningTotal": 2
	};
	var threeStepCounter = 1; //every third term is even in the sequence

	function incrementData() {
		runnerData.termBeforePrevTerm = runnerData.prevTerm;
		runnerData.prevTerm = runnerData.currentTerm;
		runnerData.currentTerm = runnerData.prevTerm + runnerData.termBeforePrevTerm;
	};

	while(runnerData.currentTerm <= 4000000) {
		if (threeStepCounter !== 3) {
			threeStepCounter ++;
			incrementData();
		}
		else{
			threeStepCounter = 1;
			runnerData.runningTotal = runnerData.runningTotal + runnerData.currentTerm;
			incrementData();
		};
	};
	document.getElementById('problem2').childNodes[3].innerHTML = runnerData.runningTotal;
};
document.getElementById('problem2').childNodes[3].addEventListener('click', problem2);