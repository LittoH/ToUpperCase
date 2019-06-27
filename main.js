

function rendiMaiuscolo() {

	var testoCorsivo = document.getElementById("from").value;
	document.getElementById("to").value = testoCorsivo.toUpperCase();

}

function rendiMinuscolo() {

	var testoMaiuscolo = document.getElementById("from").value;
	document.getElementById("to").value = testoMaiuscolo.toLowerCase();


}