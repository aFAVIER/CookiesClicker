var i = 0;
var j = 0;
var img1 = document.getElementById("img1");
var score = document.getElementById("score");
var bouton = document.getElementsByClassName("bouton");


/*bouton[0].addEventlistener("click", function(){
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
	}*/
		

img1.addEventListener("click", function(){
	i++;
		score.innerHTML = i;
	}, false);



img1.onmousedown = function() {
	img1.src = "images/cookie (copie).png";
}

img1.onmouseup = function() {
	img1.src = "images/cookie.png";
}