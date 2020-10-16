function berechneDreisatz() {
    const zahl1 = document.getElementById('zahl-1').value;
    const zahl2 = document.getElementById('zahl-2').value;
    const zahl3 = document.getElementById('zahl-3').value;

    const resultat = zahl3 * zahl2 / zahl1;

    document.getElementById('solution').value = resultat;
}

const calculate = document.getElementById('calculate');

calculate.onclick = berechneDreisatz;