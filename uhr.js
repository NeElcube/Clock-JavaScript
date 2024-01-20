let timerintervalId

function start(){
    //Einlesen der Zeit
    let stunden = Number(document.getElementById('stunden').value)
    let minuten = Number(document.getElementById('minuten').value)
    let sekunden = Number(document.getElementById('sekunden').value)
    
    //Begrenzung der Sekunden und Minuten auf 60
    if (sekunden > 60){
        sekunden = 60
    }
    if (minuten > 60){
        minuten = 60
    }

    //Ermittel der Gesamtzeit in Sekunden
    let gesamtZeit = (stunden * 60 * 60) + (minuten * 60) + sekunden

    //Ausgabe der Satrtzeit
    document.getElementById('stundenout').innerHTML = stunden
    document.getElementById('minutenout').innerHTML = minuten
    document.getElementById('sekundenout').innerHTML = sekunden

    //Starten des Zeitintervalles
    timerintervalId = setInterval(timer, 1000, gesamtZeit);
}

function timer() {
    // Lesen der aktuellen verbleibenden Zeit aus den HTML-Elementen
    let stunden = Number(document.getElementById('stundenout').innerText);
    let minuten = Number(document.getElementById('minutenout').innerText);
    let sekunden = Number(document.getElementById('sekundenout').innerText);

    //Berechnen der verbilbenen Gesamtzeit
    let gesamtZeit = (stunden * 60 * 60) + (minuten * 60) + sekunden;

    //Überprüfen ob der Timer abgeschlossen ist
    if (gesamtZeit <= 0) {
        clearInterval(timerintervalId);
        alert("Timer abgelaufen");
    } else {
    gesamtZeit = gesamtZeit - 1;
    
    //Berechnen der verblibenen Stunden, Minuten und Sekunden
    let neueStunden = Math.floor(gesamtZeit / 3600);
    let neueMinuten = Math.floor((gesamtZeit % 3600) / 60);
    let neueSekunden = gesamtZeit % 60;

    //Ausgabe der verblibenen Stunden, Minuten und Sekunden
    document.getElementById('stundenout').innerText = neueStunden;
    document.getElementById('minutenout').innerText = neueMinuten;
    document.getElementById('sekundenout').innerText = neueSekunden;
    }
}