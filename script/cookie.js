var score1 = 0; 											/*Variable score*/
var ac ;													/*variable de l'auto_click */
var img1 = document.getElementById("img1");					//Image cookie
var prix = document.getElementById("prix");					//Varibale prix
var score = document.getElementById("score");				//Affichage score
var bouton = document.getElementById("bouton");				//Bouton auto_click
var bScore = document.getElementById("bestScore");			//Affichage meilleur score
var curseur = document.getElementById("curseur");			//Curseur auto_Click

prix.innerHTML = "<strong>prix : 30 cookies</strong>";


function auto_click(){						
	if(score1 >= 30){									
		ac = setInterval("autoClick()", 200);/*Déclenche la fonction autoClick() toute les 20 je ne sais plus quoi de secondes*/
		score1 -= 30;							//Retire 30 à la variable score1
		prix.innerHTML = "<strong>prix : 100 cookies</strong>";  //Modifie le texte du prix
		bouton.removeAttribute("onclick");		//Supprime l'attribut onClick du bouton auto-click car utilisable qu'une fois
		bouton.setAttribute("onClick", "auto_clickX2()");
	}
}
function auto_clickX2(){
	if(score1 >= 100){									
		ac = setInterval("autoClick()", 100);/*Déclenche la fonction autoClick() toute les 20 je ne sais plus quoi de secondes*/
		score1 -= 100;							//Retire 30 à la variable score1
		prix.innerHTML = "<strong>prix : 300 cookies</strong>";  //Modifie le texte du prix
		bouton.removeAttribute("onclick");		//Supprime l'attribut onClick du bouton auto-click car utilisable qu'une fois
		bouton.setAttribute("onClick", "auto_clickX3()");
	}
}
function auto_clickX3(){
	if(score1 >= 300){									
		ac = setInterval("autoClick()", 50);/*Déclenche la fonction autoClick() toute les 20 je ne sais plus quoi de secondes*/
		score1 -= 300;							//Retire 30 à la variable score1
		prix.innerHTML = "<strong>Indisponible</strong>";  //Modifie le texte du prix
		bouton.removeAttribute("onClick");		//Supprime l'attribut onClick du bouton auto-click car utilisable qu'une fois
	}
}
function autoClick(){
	score1++;									/*Ajoute 1 à score1*/
	score.innerHTML = score1;					/*Affiche le score sur la page */
	if(score1++){
		curseur.style.display = "block";		//Affiche le curseur de l'autoClick
		img1.src = "images/cookie (copie).png";	//Modifie l'image por simuler un click
	}
	setTimeout(function(){						//Permet de lancer un fonction après un laps de temps choisis.
		curseur.style.display = "none";			//Cache le curseur de l'autoClick
		img1.src = "images/cookie.png";			//Modifie l'image
	}, 100);									//Se lance au bout de 100 je ne sais plus quoi de seconde.
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
	bouton.setAttribute("onClick", "auto_click()");		//Ajoute l'attribut onClick et lui confit la fonction auto_click()
	prix.innerHTML = "<strong>prix : 30 cookies</strong>"; //Modifie l'affichage du prix de l'auto_click
	clearInterval(ac);									//Stop la répétition de l'auto_click
}


/*SAUVEGARDE SAUVEGARDE SAUVEGARDE SAUVEGARDE SAUVEGARDE SAUVEGARDE SAUVEGARDE SAUVEGARDE SAUVEGARDE SAUVEGARDE SAUVEGARDE
 SAUVEGARDE SAUVEGARDE SAUVEGARDE SAUVEGARDE SAUVEGARDE SAUVEGARDE SAUVEGARDE SAUVEGARDE SAUVEGARDE SAUVEGARDE SAUVEGARDE
  SAUVEGARDE SAUVEGARDE SAUVEGARDE SAUVEGARDE SAUVEGARDE SAUVEGARDE SAUVEGARDE SAUVEGARDE SAUVEGARDE SAUVEGARDE SAUVEGARDE */

function setCookie(sName, sValue) {  /*Un simple copiez collez que je n'ai pas encore étudié et compris ! */

        var today = new Date(), expires = new Date();

        expires.setTime(today.getTime() + (5*24*60*60*1000));

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function save(){
	if(score1 > parseInt(getCookie("high_score"))){      //Compare le score en cours avec celui enregistré dans high_score
		setCookie("high_score", score1);				//Modifie high_score
	}
	if(!getCookie("high_score")){						//Si high_score n'existe pas, alors on le créé
		setCookie("high_score", 0);
	}

	bScore.innerHTML = getCookie("high_score");	//Affiche high_score
}
var autoSave = setInterval("save()", 60000); // Sauvegarde automatique toute les minutes

window.onbeforeunload = function(){	//Sauvegarde dès que l'événement de fermeture de fenetre est détecté
	save();
}
	
bScore.innerHTML = getCookie("high_score");	//Affiche high_score sur la page