var score1 = 0; 											/*Variable score*/
var ac ;													/*variable de l'auto_click */
var img1 = document.getElementById("img1");
var prix = document.getElementById("prix").innerHTML = 30;	/*Initialise le prix à 30*/
var score = document.getElementById("score");
var bouton = document.getElementById("bouton");
var bScore = document.getElementById("bestScore");


function auto_click(){						
	if(score1 >= 30){									
		ac = setInterval("autoClick()", 20);/*Déclenche la fonction autoClick() toute les 20 je ne sais plus quoi de secondes*/
	}
}

function autoClick(){
	score1++;									/*Ajoute 1 à score1*/
	score.innerHTML = score1;					/*Affiche le score sur la page */
}	

img1.addEventListener("click", function(){
		score1++;								 /*Ajoute 1 à la variable de score*/
		score.innerHTML = score1; 				/*Modifie le contenu de la balise score par score1*/
	}, false);


img1.onmousedown = function() {
	img1.src = "images/cookie (copie).png";
}

img1.onmouseup = function() {
	img1.src = "images/cookie.png";
}

function resetscore(){				/*remet tout à zéro et stop la fonction autoClick') */
	score1 = 0;
	score.innerHTML = 0;
	clearInterval(ac);
}

function setCookie(sName, sValue) {  /*Un simple copiez collez que je n'ai pas encore étudié et compris ! */

        var today = new Date(), expires = new Date();

        expires.setTime(today.getTime() + (15*24*60*60*1000));

        document.cookie = sName + "=" + encodeURIComponent(sValue) + ";expires=" + expires.toGMTString();
}
function getCookie(sName) {
        var cookContent = document.cookie, cookEnd, i, j;
        var sName = sName + "=";
 
        for (i=0, c=cookContent.length; i<c; i++) {
                j = i + sName.length;
                if (cookContent.substring(i, j) == sName) {
                        cookEnd = cookContent.indexOf(";", j);
                        if (cookEnd == -1) {
                                cookEnd = cookContent.length;
                        }
                        return decodeURIComponent(cookContent.substring(j, cookEnd));
                }
        }       
        return null;
}
window.onbeforeunload = function(){		/*Creation d'un cookie seulement si score1 > au cookie en cours */
	if(score1 > parseInt(getCookie("high_score"))){
		setCookie("high_score", score1);
	}	
	else{
		setCookie("high_score", 0);
	}
}
bScore.innerHTML = getCookie("high_score");
