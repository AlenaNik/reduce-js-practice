const nums = [1, 2, 1, 1, 5, 4]

nums.reduce((acc, x) => {
  if(x !== 1) {
    acc.push(x)
  } return acc }, []) 

nums.reduce((acc, x) => 5 + x , 0)



let result = nums.reduce(function(acc, x) {
	for (x = 0; x < nums.lenght; x++) {
		return 5 + x;
	} else {
		return acc;
	}

//Así funciona filter por debajo

nums.reduce((acc, x) => {
	acc.push(x + 5)
	return acc
}, [])

num.reduce((acc, x) => {

})

let result = nums.reduce(function(sum, x) {
	if (x > 1) {
		return sum + elem;
	} else {
		Math.min(...nums)
	}
});


nums.reduce((acc, x) => Math.max(acc, x), 0 );


const num2 = [1, 2, 1, 1, 5, 4] 
nums2.reduce((acc, x) => {
	if (x  === 1 ) {
		return num2.slice(acc, x);
	} else {
		return acc
	}
},0)