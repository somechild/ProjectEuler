function problem6() {
	var res1 = 0; var res2 = 0;
	for (var i = 0; i <= 100; i++) {
		res1 = res1 + (i*i);
	};
	for (var z = 0; z <= 100; z++) {
		res2 = res2 + z;
	};
	document.getElementById('problem6').childNodes[3].innerHTML =  (res2*res2) - res1;
};
document.getElementById('problem6').childNodes[3].addEventListener('click', problem6);