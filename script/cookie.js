var score1 = 0; 	
var temps = 1000;										/*Variable score*/
var ac;													/*variable de l'auto_click */
var compteurClick = 0;									//Gere les multiples curseur
var top1 = 245;											//Emplacement des curseur
var left1 = 44;
var costumes = 0;
var tabImages = new Array;								//contiendra les curseurs additionnels
var img1 = document.getElementById("img1");					//Image cookie
var prix = document.getElementById("prix");					//Variable prix
var prixCooki = 30;											//prix cookie de base
var score = document.getElementById("score");				//Affichage score
var bouton = document.getElementById("bouton");				//Bouton auto_click
var bScore = document.getElementById("bestScore");			//Affichage meilleur score
var curseur = document.getElementsByClassName("curseur");			//Curseur auto_Click
var multiplicateur = document.getElementById("multiplicateur");
var prixMultiClic = 30;										//prix du multiclic de base
var multipl = 1;											//pour ajouter1 au score et ensuite sert pour la fonction multiclic

prix.innerHTML = "<strong>prix : 30 cookies</strong>";
prixMultiplicateur.innerHTML = "<strong>prix : 30 cookies</strong>";
multiplicateur.innerHTML = "Multiplicateur X2";

/* FONCTION JEU // FONCTION JEU // FONCTION JEU // FONCTION JEU // FONCTION JEU // FONCTION JEU // FONCTION JEU // FONCTION JEU // FONCTION JEU
 // FONCTION JEU // FONCTION JEU // FONCTION JEU // FONCTION JEU // FONCTION JEU // FONCTION JEU // FONCTION JEU // FONCTION JEU // FONCTION JEU
  // FONCTION JEU // FONCTION JEU // FONCTION JEU // FONCTION JEU // FONCTION JEU // FONCTION JEU // FONCTION JEU // FONCTION JEU // FONCTION JEU */
function bouton_color(){
	if(score1 >= prixCooki){		
		bouton.style.textShadow ="-0.07em 0 #F38200, 0.07em 0 white";
		bouton.style.color = "black";
	}
	if(score1 >= prixMultiClic){		
		multiplicateur.style.textShadow ="-0.07em 0 #F38200, 0.07em 0 white";
		multiplicateur.style.color = "black";
	}
	if(score1 <= prixCooki){		
		bouton.style.textShadow ="";
		bouton.style.color = "";
	}
	if(score1 <= prixMultiClic){		
		multiplicateur.style.textShadow ="";
		multiplicateur.style.color = "";
	}
}
function detection(){
	bouton_color();
	score1 >= prixCooki ? bouton.disabled = false : bouton.disabled = true;
	score1 >= prixMultiClic ?	multiplicateur.disabled = false : multiplicateur.disabled = true;
}
setInterval("detection()", 200);

function costume(){
	if(costumes === 0){
		img1.src = "images/PerfectCookie.png"
		costumes++;
	}
	else{
		img1.src = "images/cookie.png"
		costumes = 0;
	}
}
function clickMainAuto(){
	if (score1 >= prixCooki){			//A chaque tour, on modifie l'emplacement du futur curseur
		top1 -= 10;
		left1 -= 1;
		if(compteurClick > 0){			//Créer un curseur qu'a partir du second appel à la fonction
			images(top1, left1);
		}

		bouton_color();
		temps >= 10 ? temps -= 50 : temps = 10; //Accelere l'autoClick à chaque tour de boucle
		clearInterval(ac);				//Stop la répétition précédente
		ac = setInterval("autoClick()", temps);//*Déclenche la fonction autoClick() toute les 20 je ne sais plus quoi de secondes
		score1 -= prixCooki;					//Enleve le prix à la variable score
		score.innerHTML = score1;							
		prixCooki = prixCooki*2;				
		prix.innerHTML = "<strong>prix : "+prixCooki+" cookies</strong>";  //Modifie le texte du prix
		compteurClick ++;				//Permettra de lancer la fonction image au prochain tour de fonction
	}
}
function images(top, left){						//Fonction creatrice de curseur
	var img2 = document.createElement("img");
	img2.src ="images/hand-146959.svg";
	img2.className = "curseur";
	img2.style.position = "absolute";
	img2.width = 50;
	img2.style.height = "50px;"
	img2.style.top = top + "px";
	img2.style.left = left + "%";
	tabImages.push(img2)
	document.getElementById("cookie").appendChild(tabImages[compteurClick-1]); //Ajoute les curseurs à la page
}


function autoClick(){
	score1+=curseur.length -1;									//Ajoute autant de points qu'il y a de curseurs à score1
	score.innerHTML = score1;					//Affiche le score sur la page 
	if(score1++){
		for( i = 0; i < curseur.length; i++){
			curseur[i].style.display = "inline";		//Affiche le curseur de l'autoClick
		}	
		costumes >= 1 ? img1.src = "images/PerfectCookie.png" : img1.src = "images/cookie (copie).png";	//Modifie l'image pour simuler un click
	}
	setTimeout(function(){						//Permet de lancer une fonction après un laps de temps choisis.
		for(i = 0; i < curseur.length; i++){
			curseur[i].style.display = "none";			//Cache le curseur de l'autoClick
		}	
		costumes >= 1 ? img1.src = "images/PerfectCookie.png" : img1.src = "images/cookie.png";			//Modifie l'image
	}, 250);									//Se lance au bout de 100 je ne sais plus quoi de seconde.
}	

img1.addEventListener("click", function(){
		score1 = score1 + multipl;								 //Ajoute 1 à la variable de score
		score.innerHTML = score1; 				//Modifie le contenu de la balise score par score1
	}, false);

function multipleClicks(){
	if (score1 >= prixMultiClic){
			score1 -= prixMultiClic;
			score.innerHTML = score1;
			multipl = multipl + 1;
			prixMultiClic = prixMultiClic *2;
			prixMultiplicateur.innerHTML = "<strong>prix : "+prixMultiClic+" cookies</strong>";
			multiplicateur.innerHTML = "Multiplicateur X"+(multipl + 1);
	}	
	bouton_color();
}

function resetscore(){										/*remet tout à zéro et stop la fonction autoClick') */
	save();
	score1 = 0;
	score.innerHTML = 0;
	prixCooki = 30;
	temps = 1000;											//reinitialisation de la vitesse de base
	bouton.disabled = true;									//desactivation du bouton autoclick
	multiplicateur.disabled = true;							//desactivation du bouton Multiplicateur
	prixMultiClic = 30;
	multipl = 1;
	multiplicateur.innerHTML = "Multiplicateur X2";							//MAJ Affichage
	prixMultiplicateur.innerHTML = "<strong>prix : 30 cookies</strong>";
	prix.innerHTML = "<strong>prix : 30 cookies</strong>";				 //Modifie l'affichage du prix de l'auto_click
	compteurClick = 0;										
	top1 = 245;												//reinitialise les positions pour les futurs curseurs
	left1 = 44;
	bouton_color()
	for(i = tabImages.length -1; i >= 0; i--){				//Jarte tout les curseurs de la page
		document.getElementById("cookie").removeChild(tabImages[i]);
	}
	tabImages = new Array;									// reinitialise le tableau
	clearInterval(ac);										//Stop la répétition de l'auto_click
	
}


/* ANIMATION JEU // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU
 // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU
  // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU // ANIMATION JEU*/
var large = 300;
var dc;
var t = 1;

img1.addEventListener("mousedown", function() {
	costumes >= 1 ? img1.src = "images/PerfectCookie.png" : img1.src = "images/cookie (copie).png";
}, false);

img1.addEventListener("mouseup", function() {
	costumes >= 1 ? img1.src = "images/PerfectCookie.png" : img1.src = "images/cookie.png";
}, false);

function aniime(){
	if(large >= 250 && t === 1 && costumes === 0){
		img1.style.width = large +"px";
		img1.style.height = large +"px";
		large-= 10;
		if(large <= 250)
			t = 2;
	}
	else if(large < 300 && t === 2 && costumes === 0){
		img1.style.width = large +"px";
		img1.style.height = large +"px";
		large += 10;
		if(large >= 300){
			large = 300;
			clearInterval(dc);
			t = 1;
		}
	}
	if(large >= 250 && t === 1 && costumes >= 0){
		img1.style.width = large +"px";
		img1.style.height = large +"px";
		large-= 10;
		if(large <= 250)
			t = 2;
	}
	else if(large < 300 && t === 2 && costumes >= 0){
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

function setCookie(sName, sValue) { 

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
