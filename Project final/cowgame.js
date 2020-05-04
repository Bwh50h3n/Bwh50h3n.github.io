	var numpress = 0
	var explain1 = "Here we can see that there are 6 lighning bolts of energy"
	var explain2 = "A Cow comes over<br>MOO MOO<br/> Munch Munch"
	var explain25 = "<br>MOO MOO<br/> *The Cow is eating"
	var explain3 = "The Cow burns energy to stay alive"
	var explain4 = "now you are left with only 1 lightning bolt of energy which you can get from eating the Cow"
	var explain5 = "You just lost 5 lighning bolts worth of energy (not stonks)"

	function seq1(){
		console.log(numpress)
		document.getElementById("Cowbtn").innerHTML = "Start"
		document.getElementById("explaination").innerHTML = explain1;
		document.getElementById("interactive").style.backgroundImage = "url('websiteimages/Cowgrassenergy1.png')";
	}

	function seq2(){
		console.log(numpress)
		document.getElementById("Cowbtn").innerHTML = "Next"
		document.getElementById("explaination").innerHTML = explain2;
		document.getElementById("interactive").style.backgroundImage = "url('websiteimages/Cowgrassenergy2.png')";
		setTimeout(function(){
			document.getElementById("interactive").style.backgroundImage = "url('websiteimages/Cowgrassenergy3.png')";
			setTimeout(function(){
				document.getElementById("interactive").style.backgroundImage = "url('websiteimages/Cowgrassenergy4.png')";
				setTimeout(function(){
					document.getElementById("interactive").style.backgroundImage = "url('websiteimages/Cowgrassenergy4.5.png')";
					document.getElementById("explaination").innerHTML = explain25;
				}, 500);

			}, 500);
		}, 500);
	}

	function seq3(){
		console.log(numpress)
		document.getElementById("explaination").innerHTML = explain3;
		setTimeout(function(){
				document.getElementById("interactive").style.backgroundImage = "url('websiteimages/Cowgrassenergy5.png')";
				setTimeout(function(){
					document.getElementById("interactive").style.backgroundImage = "url('websiteimages/Cowgrassenergy6.png')";
				}, 1000);

			}, 1000);
	}

	function seq4(){
		console.log(numpress)
		document.getElementById("explaination").innerHTML = explain4;
	}

	function seq5(){
		console.log(numpress)
		document.getElementById("Cowbtn").innerHTML = "Back"
		document.getElementById("explaination").innerHTML = explain5;
		document.getElementById("interactive").style.backgroundImage = "url('websiteimages/not_stonks.png')";
		numpress=numpress-5
	}
	function play(){
		numpress = numpress+1
		if(numpress === 1) {
		seq1()
		}
		if(numpress === 2) {
		seq2()
		}
		if(numpress === 3) {
		seq3()
		}
		if(numpress === 4) {
		seq4()
		}
		if(numpress === 5) {
		seq5()
		}
	}

	document.getElementById("interactive").style.backgroundImage = "url('websiteimages/Cowgrassenergy1.png')";