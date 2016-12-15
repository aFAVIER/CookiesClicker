var i = 0;
var j = 0;
var img = document.getElementById("img1");
var score = document.getElementById("score");
var bouton = document.getElementsByClassName("bouton");

bouton.addEventlistener("click", function(){
		j++;
	}, false);

function scores(){
	if(j === j+=1){
		i = i *10;
		score.innerHTML = i;
	}
	else {
		i++;
		score.innerHTML = i;
	}
		

img.addEventListener("click", scores(), false);


