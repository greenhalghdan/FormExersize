console.log("all numbers between -10 and 19")
var count = -10;

while(count <= 19) {
	console.log("count is: " + count);
	count++;
}

console.log("all even number between 10 and 40")

var count = 10;

while(count <=40) {
	console.log("Count is: " +count);
	count+= 2;
}

console.log("All odd numbers between 300 and 333")

var count = 301;

while(count <=333) {
	console.log("Count is: " + count);
	count += 2;
}

console.log("all numbers divisble by 5 and 3 between 5 and 50")

var count = 5;

while(count <= 50)	{
	if(count % 5 ===0 && count % 3 === 0 ) {
	console.log("count is " +count)
}
	count++;

}