document.getElementById("buttonleft").onclick = function() {openpage1()};

	document.getElementById("buttonright").onclick = function() {openpage2()};

	function openpage1(){
		window.open(page1);
	}

	function openpage2(){
		window.open(page2);
	}

	var bar = document.getElementsByClassName('bar');
  	for(i = 0; i < bar.length; i=i+1) {
    	bar[i].style.backgroundColor = maincolor;
  	}

  	var thinbar = document.getElementsByClassName('thinbar');
  	for(i = 0; i < thinbar.length; i=i+1) {
    	thinbar[i].style.backgroundColor = maincolor;
  	}

	var bgcon = document.getElementsByClassName('bgcontent');
  	for(i = 0; i < bgcon.length; i=i+1) {
    	bgcon[i].style.backgroundColor = maincolor;
  	}

	var topnav = document.getElementsByClassName('topnav');
  	for(i = 0; i < topnav.length; i=i+1) {
    	topnav[i].style.backgroundColor = maincolor;
  	}

  	var footer = document.getElementsByClassName('footer');
  	for(i = 0; i < footer.length; i=i+1) {
    	footer[i].style.backgroundColor = maincolor;
  	}

	document.getElementById("buttonright").style.backgroundColor = maincolor;
	document.getElementById("buttonleft").style.backgroundColor = maincolor;
	

