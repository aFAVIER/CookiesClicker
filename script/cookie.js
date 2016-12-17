var score1 = 0; 	
var temps = 4000;										/*Variable score*/
var ac;													/*variable de l'auto_click */
var img1 = document.getElementById("img1");					//Image cookie
var prix = document.getElementById("prix");					//Variable prix
//var prix_score = 30;
var prixCooki = 30;											//prix cookie de base
var score = document.getElementById("score");				//Affichage score
var bouton = document.getElementById("bouton");				//Bouton auto_click
var bScore = document.getElementById("bestScore");			//Affichage meilleur score
var curseur = document.getElementById("curseur");			//Curseur auto_Click
var prixMultiClic = 30;										//prix du multiclic de base
var multipl = 1;											//pour ajouter1 au score et ensuite sert pour la fonction multiclic


prix.innerHTML = "<strong>prix : 30 cookies</strong>";
prixMultiplicateur.innerHTML = "<strong>prix : 30 cookies</strong>";
multiplicateur.innerHTML = "Multiplicateur X2";

/* FONCTION JEU // FONCTION JEU // FONCTION JEU // FONCTION JEU // FONCTION JEU // FONCTION JEU // FONCTION JEU // FONCTION JEU // FONCTION JEU
 // FONCTION JEU // FONCTION JEU // FONCTION JEU // FONCTION JEU // FONCTION JEU // FONCTION JEU // FONCTION JEU // FONCTION JEU // FONCTION JEU
  // FONCTION JEU // FONCTION JEU // FONCTION JEU // FONCTION JEU // FONCTION JEU // FONCTION JEU // FONCTION JEU // FONCTION JEU // FONCTION JEU */

function clickMainAuto(){
	if (score1 >= prixCooki){
		clearInterval(ac);
		ac = setInterval("autoClick()", temps);//*Déclenche la fonction autoClick() toute les 20 je ne sais plus quoi de secondes
		score1 -= prixCooki;							//Retire 30 à la variable score1
		prixCooki = prixCooki*2;
		temps >= 10 ? temps -= 2 : temps = 10;
		prix.innerHTML = "<strong>prix : "+prixCooki+" cookies</strong>";  //Modifie le texte du prix
		bouton.removeAttribute("onClick");		//Supprime l'attribut onClick du bouton auto-click car utilisable qu'une fois

	}
}


function autoClick(){
	score1++;									//Ajoute 1 à score1
	score.innerHTML = score1;					//Affiche le score sur la page 
	if(score1++){
		curseur.style.display = "inline";		//Affiche le curseur de l'autoClick
		img1.src = "images/cookie (copie).png";	//Modifie l'image pour simuler un click
	}
	if(score1 >= prixCooki){	
			bouton.setAttribute("onClick", "clickMainAuto()");
			if(score1 === prixCooki || score1 === prixCooki + 5){
				temps >= 10 ? temps -= 2 : temps = 10;
				console.log(temps);
			}	
		}
	setTimeout(function(){						//Permet de lancer un fonction après un laps de temps choisis.
		curseur.style.display = "none";			//Cache le curseur de l'autoClick
		img1.src = "images/cookie.png";			//Modifie l'image
	}, 50);									//Se lance au bout de 100 je ne sais plus quoi de seconde.
}	

img1.addEventListener("click", function(){
		score1 = score1 + multipl;								 //Ajoute 1 à la variable de score
		score.innerHTML = score1; 				//Modifie le contenu de la balise score par score1
	}, false);




function multipleClicks(){
	if (score1 >= prixMultiClic){
			score1 -= prixMultiClic;
			multipl = multipl + 1;
			prixMultiClic = prixMultiClic *2;
			prixMultiplicateur.innerHTML = "<strong>prix : "+prixMultiClic+" cookies</strong>";
			multiplicateur.innerHTML = "Multiplicateur X"+(multipl + 1);
			bouton.removeAttribute("onClick");
	}
}
	/*Dois multiplier la valeur de score1 pour chaque cliques ce qui implique de 
	modifier la fonction du dessus pour qu'elle s'adapte à celle-ci, une condition devrait
	faire l'affaire mais la vrai question reste de savoir comment la coder.

	Ensuite à chaque click sur le bouton "Multiplicateur", le texte de celui ci doit changer
	on passerait du coup à Multiplicateur X3 puis X4 etc..

	Et on ne doit pouvoir cliquer qu'une fois par palier, donc n'oublis pas de jarter la fonction
	à chaque clicks.

	Bon Courage car moi, j'ai la flemme et du gros Boulot à accomplir !! */


function resetscore(){										/*remet tout à zéro et stop la fonction autoClick') */
	score1 = 0;
	score.innerHTML = 0;
	prixCooki = 30;
	temps = 200;
	prixMultiClic = 30;
	multipl = 1;
	bouton.setAttribute("onClick", "clickMainAuto()");		//Ajoute l'attribut onClick et lui confit la fonction clickMainAuto()
	//bouton.setAttribute("onClick", "multipleClicks()");
	multiplicateur.innerHTML = "Multiplicateur X2";
	prixMultiplicateur.innerHTML = "<strong>prix : 30 cookies</strong>";
	prix.innerHTML = "<strong>prix : 30 cookies</strong>";	 //Modifie l'affichage du prix de l'auto_click
	clearInterval(ac);										//Stop la répétition de l'auto_click
}


/* ANIMATION JEU // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU
 // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU
  // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU*/
var large = 300;
var dc;
var t = 1;

img1.addEventListener("mousedown", function() {
	img1.src = "images/cookie (copie).png";
}, false);

img1.addEventListener("mouseup", function() {
	img1.src = "images/cookie.png";
}, false);

function aniime(){
	if(large >= 250 && t === 1){
		img1.style.width = large +"px";
		img1.style.height = large +"px";
		large-= 10;
		if(large <= 250)
			t = 2;
	}
	else if(large < 300 && t === 2){
		img1.style.width = large +"px";
		img1.style.height = large +"px";
		large += 10;
		if(large >= 300){
			large = 300;
			clearInterval(dc);
			t = 1;
		}
	}
}
img1.addEventListener("click", function(){
		clearInterval(dc);
		dc = setInterval("aniime()", 2);
}, false);


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
