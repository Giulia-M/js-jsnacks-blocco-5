/*
Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà,
peso e lunghezza. Calcola quanto pesano tutte le zucchine.
*/
var lista = [

    {
        varieta: "a",
        peso: 50,
        lunghezza: 7
    },

    {
        varieta: "b",
        peso: 60,
        lunghezza: 14
    },

    {
        varieta: "c",
        peso: 78,
        lunghezza: 26
    },
    {
        varieta: "d",
        peso: 80,
        lunghezza: 30
    },
    {
        varieta: "e",
        peso: 90,
        lunghezza: 35
    },
    {
        varieta: "f",
        peso: 95,
        lunghezza: 40
    },
    {
        varieta: "g",
        peso: 70,
        lunghezza: 25
    },
    {
        varieta: "h",
        peso: 65,
        lunghezza: 20
    },
    {
        varieta: "i",
        peso: 60,
        lunghezza: 15
    },
    {
        varieta: "l",
        peso: 55,
        lunghezza: 10
    },
]

var pesoTotale = 0;

for (var i = 0; i < lista.length; i++) {
    
    var element = lista[i];

    console.log("il peso di ciascuna zucchina è: ", element.peso)
    pesoTotale += element.peso
  

}
console.log("Il peso totale di tutte le zucchine è ", pesoTotale, "g")