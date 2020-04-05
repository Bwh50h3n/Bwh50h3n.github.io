list = [4,7,9,10,11];

sum = 0

for(i=0; i<list.length; i=i+1){
	sum = sum+ list[i];
}

console.log(sum)


great5sum = 0

for(i=0; i<list.length; i=i+1){
	if (list[i] >5)
		great5sum=great5sum+list[i]
}

console.log(great5sum)

list = [4,7,9,10,11];

evensum=0

for(i=0; i<list.length; i=i+1){
	if (list[i]%2===0){
		evensum=evensum+list[i]
	}
}

console.log(evensum)


list = [4,7,9,10,11];

digitsum=0

strlist= list.toString().split('');

listnum = strlist.filter(e => e !== ',');

console.log(listnum)

for(i=0; i<listnum.length; i=i+1){
	digitsum += parseInt(listnum.charAt(i), 10);
}

console.log(digitsum)

for(i=0; i<listnum.length; i=i+1){
	digitsum=digitsum+listnum.charAt(i);
}

list = ["cat","dog","fish","monkey","cattle"]
value= "cat"

for (var i = list.length - 1; i >= 0; i--) {
	if (list[i] === value)
		console.log("true")
}