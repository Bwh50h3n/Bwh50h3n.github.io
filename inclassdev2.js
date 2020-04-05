var countries = ["Canada","Ethiopia","Kenya","Somolia"]
var year = [2015, 2015, 2015, 2015]
var mmratio = [7,353,510,732]


document.getElementById("goal3button").onclick = clicked;

function clicked() {
	console.log("clicked");

	found = false;//flag that assumes false
	loc=-1
	value = document.getElementById("fname").value.toLowerCase();
	console.log(value);
	for (var i = countries.length - 1; i >= 0; i--) {
		countries[i]

		if (countries[i] === value){

			found = true;
			loc = i;
		}
	}

}
if (loc !== -1){
	console.log("found it")
	ptag = getElementById("Results");
	ptag.innerHTML = value + ":"+ year[loc] +":"+ mmratio[loc]
}
else {
	console.log("Have not found it")
	ptag = getElementById("Results");
	ptag.innerHTML = "NO DATA"
}