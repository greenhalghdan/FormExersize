console.log("Print all numbers between -10 and 19");
for(var count = -10; count <= 19; count++)	{
	console.log(count);
}

// console.log("Print all even number between 10 and 40");
// for(var count = 10; count <= 40; count+=2)	{
// 	console.log(count);
}

console.log("Print all even number between 10 and 40");
for(var count = 10; count <= 40; count+=1)	{
	if(count % 2 === 0)
	console.log(count);
}

console.log("Print all odd numbers between 300 and 333");
for(var count = 300; count <= 333; count++){
 	if(count % 2 !== 0) 
 	console.log(count);
}

console.log("Print all numbers divisble by 5 and 3 between 5 and 50")
	for(var count = 5; count <= 50; count++){
		if(count % 5 === 0 && count % 3 === 0)
			console.log(count);
	}
