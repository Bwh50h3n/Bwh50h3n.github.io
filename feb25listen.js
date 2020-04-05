console.log("Feb 25")
var groceries = ["apples", "bannanas", "pears", "potatos"]
var amount = [4,6,2,4]
document.getElementById("click me").onclick = clicked; 

function clicked() {
	var value = document.getElementById("fname").value
	for (var i = groceries.length - 1; i >= 0; i--) {
		if (value === groceries[i]){
			console.log("you need "+amount[i]+groceries[i]);
			document.getElementById("result").innerHTML = "you need "+ " " +amount[i]+groceries[i];
		}
	}
}