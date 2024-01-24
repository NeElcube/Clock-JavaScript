/*
------------------------------------------------------------------------------------------------------------------------------------------
Funktion für die Uhrzeit
------------------------------------------------------------------------------------------------------------------------------------------
*/

window.onload = function uhrzeit() {
    //Einlesen der Zeiz
    var jetzt = new Date(),

    //Werte auslesnen aus der jetzigen Zeit
        h = jetzt.getHours(),
        m = jetzt.getMinutes(),
        s = jetzt.getSeconds();

    //Hinzufügen einer Null zur Stunde/Minute/Sekunde, falls diese einstellig sind
    if (s < 10){
        s = '0' + s
    }
    if (m < 10){
        m = '0' + m
    }
    if (h < 10){
        h = '0' + h
    }

    //Ausgabe der aktuellen Uhrzeit
    document.getElementById('uhrzeit').innerHTML = h + ':' + m + ':' + s;
    setTimeout(uhrzeit, 500);
  }
  
/*
------------------------------------------------------------------------------------------------------------------------------------------
Funktion für den Timer
------------------------------------------------------------------------------------------------------------------------------------------
*/

let timerintervalId

function start(){
    //Einlesen der Zeit
    let stunden = Number(document.getElementById('stunden').value)
    let minuten = Number(document.getElementById('minuten').value)
    let sekunden = Number(document.getElementById('sekunden').value)

    console.log(stunden)
    
    //Begrenzung der Sekunden und Minuten auf 60
    if (sekunden > 60){
        sekunden = 60
    }
    if (minuten > 60){
        minuten = 60
    }
    

    //Ermittel der Gesamtzeit in Sekunden
    let gesamtZeit = (stunden * 60 * 60) + (minuten * 60) + sekunden

    //Hinzufügen einer Null zur Stunde/Minute/Sekunde, falls diese einstellig sind
    if (sekunden < 10){
        sekunden = '0' + sekunden
    }
    if (minuten < 10){
        minuten = '0' + minuten
    }
    if (stunden <10){
        stunden = '0' + stunden
    }

    //Ausgabe der Satrtzeit
    document.getElementById('stundenout').innerHTML = stunden
    document.getElementById('minutenout').innerHTML = minuten
    document.getElementById('sekundenout').innerHTML = sekunden

    //Starten des Zeitintervalles
    timerintervalId = setInterval(timer, 1000, gesamtZeit)
}

function timer() {
    // Lesen der aktuellen verbleibenden Zeit aus den HTML-Elementen
    let stunden = Number(document.getElementById('stundenout').innerHTML)
    let minuten = Number(document.getElementById('minutenout').innerHTML)
    let sekunden = Number(document.getElementById('sekundenout').innerHTML)

    //Berechnen der verbilbenen Gesamtzeit
    let gesamtZeit = (stunden * 60 * 60) + (minuten * 60) + sekunden

    //Überprüfen ob der Timer abgeschlossen ist
    if (gesamtZeit <= 0) {
        clearInterval(timerintervalId)
        alert("Timer expired")
    } else {
    gesamtZeit = gesamtZeit - 1
    
    //Berechnen der verblibenen Stunden, Minuten und Sekunden
    let neueStunden = Math.floor(gesamtZeit / 3600)
    let neueMinuten = Math.floor((gesamtZeit % 3600) / 60)
    let neueSekunden = gesamtZeit % 60

    //Hinzufügen einer Null zur Minute/Sekunde, falls diese einstellig sind//Hinzufügen einer Null zur Minute/Sekunde, falls diese einstellig sind
    if (neueSekunden < 10){
        neueSekunden = '0' + neueSekunden
    }
    if (neueMinuten < 10){
        neueMinuten = '0' + neueMinuten
    }
    if (neueStunden < 10){
        neueStunden = '0' + neueStunden
    }

    //Ausgabe der verblibenen Stunden, Minuten und Sekunden
    document.getElementById('stundenout').innerText = neueStunden
    document.getElementById('minutenout').innerText = neueMinuten
    document.getElementById('sekundenout').innerText = neueSekunden
    }
}

/*
------------------------------------------------------------------------------------------------------------------------------------------
Funktion für die Stoppuhr
------------------------------------------------------------------------------------------------------------------------------------------
*/

let stoppuhrintervalId

function stoppuhrstart(){
    stoppuhrintervalId = setInterval(stoppuhr, 1000)
}

function stoppuhr(){
    let stunden = Number(document.getElementById('stoppstundenout').innerHTML)
    let minuten = Number(document.getElementById('stoppminutenout').innerHTML)
    let sekunden = Number(document.getElementById('stoppsekundenout').innerHTML)

    sekunden = sekunden + 1

    if (sekunden === 60){
        minuten = minuten + 1
        sekunden = 0
    }
    if (minuten === 60){
        stunden = stunden + 1
        minuten = 0
    }

    //Hinzufügen einer Null zur Minute/Sekunde, falls diese einstellig sind
    if (sekunden < 10){
        sekunden = '0' + sekunden
    }
    if (minuten < 10){
        minuten = '0' + minuten
    }
    if (stunden <10){
        stunden = '0' + stunden
    }  

     //Ausgabe der vergangenen Stunden, Minuten und Sekunden
    document.getElementById('stoppstundenout').innerText = stunden
    document.getElementById('stoppminutenout').innerText = minuten
    document.getElementById('stoppsekundenout').innerText = sekunden
}

function stoppuhrreset(){
    clearInterval(stoppuhrintervalId)
    document.getElementById('stoppstundenout').innerText = '00'
    document.getElementById('stoppminutenout').innerText = '00'
    document.getElementById('stoppsekundenout').innerText = '00'
}

function stoppuhrstopp(){
    clearInterval(stoppuhrintervalId)
}