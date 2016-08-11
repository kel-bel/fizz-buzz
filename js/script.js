var num = prompt("Select a number", "1-100");

function playFizzbuzz(number) {
for (var i = 1; i <= number; i++) {
	if ( (i % 5) == 0 && (i % 3) == 0) {
		console.log('fizzbuzz')
	}
	else if ( (i % 3) == 0 ) {
		console.log('fizz')
	}	
	else if ( (i % 5) == 0) {
		console.log('buzz')
	}
	else {
		console.log(i)
	};
};
};

playFizzbuzz(num);