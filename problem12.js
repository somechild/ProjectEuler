(function() {
	function problem12() {

		document.getElementById('problem12').childNodes[3].innerHTML = "Computing... (should be less than a minute)";
		var startime = new Date().getTime() / 1000;
		setTimeout(function() {
			var trinumb = 1, testNumber = 0;


			function getTriNumber(prev, index) {
				return prev + index;
			};

			var highest = 0; var setpr = 0;
			function getTriNumberFactorsCount(no) {
				var half = Math.ceil(no/2),
				counter = !(no%2)? 4: 3,
				i = !(no%2)? 2: 3,
				j = !(no%2)? 1: 2;

				for (i; i < half; i+=j) {
					if((highest <=450 && (half - i) < 2000) || (highest > 450 && (half-i)<500)){if(counter > highest){console.log(counter, no);highest = counter;};return counter;}
					else if (!(no%i)){counter++};
				};

				return counter;
			};

			var newTest = getTriNumberFactorsCount(getTriNumber(trinumb, testNumber));

			while(trinumb < 4000) { //impossible to have a trinumber less than 4k with 500 factors
				testNumber ++;
				trinumb = getTriNumber(trinumb, testNumber);
			};
			while(newTest <= 500) {
				testNumber ++;
				trinumb = getTriNumber(trinumb, testNumber);
				newTest = getTriNumberFactorsCount(trinumb);
			};

			console.log(testNumber, trinumb, newTest)
			var endtime = new Date().getTime() / 1000;
			document.getElementById('problem12').childNodes[3].innerHTML = trinumb + " , took " + (endtime-startime) + " seconds";
		}, 0);
	};

	document.getElementById('problem12').childNodes[3].addEventListener('click', problem12);
})();