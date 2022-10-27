const km = prompt("inserisci i Km");
const eta = prompt("inserisci età");
const costKm = 0.21;

const cost = costKm*km;

const h2Prezzo = document.getElementById("prezzo-finale")

if(eta<18){
    console.log("il costo complessivo è di " + (cost*80/100 ) + " EUR")
}
else if(eta>65){
    console.log("il costo complessivo è di " + (cost*60/100) + " EUR")
}
else{
    console.log("il costo complessivo è di " + cost + " EUR")
}