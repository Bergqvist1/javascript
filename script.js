let alertKnapp = document.getElementById("alertKnapp");
alertKnapp.addEventListener("click",funktion);

function funktion(){
    document.getElementById("utskrift").innerHTML = "Hejsan David Wernow";
}

let knapp2 = document.getElementById("knapp2");
knapp2.addEventListener("click",funktion2);

function funktion2(){
    alert("Ajdå David, vad har du nu tryckt på :)")
}