$liste = document.getElementById("liste");
$texte = document.getElementById("texte");
$ajouter = document.getElementById("ajouter");
$supprimer = document.getElementById("supprimer");

var tab = ["Bob", "Julien", "Roger"];

function afficherListe() {
	elements = "";
	for (var i = 0; i < tab.length; i++) {
		elements += "<li>" + tab[i] + "</li>";
		
	}
	$liste.innerHTML = elements;
}

function ajouter() {
	tab.push($texte.value);
	afficherListe();
}

function supprimer() {
	tab.pop($texte.value);
	afficherListe();
}

$ajouter.onclick = ajouter;
$supprimer.onclick = supprimer;

afficherListe();