/*
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine
*/

var lista = [

    {
        varieta: "a",
        peso: 20,
        lunghezza: 7
    },

    {
        varieta: "b",
        peso: 20,
        lunghezza: 14
    },

    {
        varieta: "c",
        peso: 38,
        lunghezza: 10
    },
    {
        varieta: "d",
        peso: 80,
        lunghezza: 13
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

//Dividi in due array separati le zucchine che misurano meno o più di 15cm.

var zucchineSmall = [];
var zucchineLarge = [];

for (var i = 0; i < lista.length; i++) {
    var element = lista[i];

    if (element.lunghezza <= 15) {
        zucchineSmall.push(element)
    } else {
        zucchineLarge.push(element)
    }
}

console.log("Il gruppo di zucchine che misura più di 15cm: ", zucchineLarge);
console.log("Il gruppo di zucchine che misura meno di 15cm: ", zucchineSmall);

// Infine stampa separatamente quanto pesano i due gruppi di zucchine
var sommaZucchineSmall = 0
var sommaZucchineLarge = 0


for (var i = 0; i < zucchineLarge.length; i++) {
    sommaZucchineLarge += zucchineLarge[i].peso
}
console.log("Il gruppo di zucchine che misura più di 15cm ha come peso totale: ", sommaZucchineLarge, "g")


for (var i = 0; i < zucchineSmall.length; i++) {
    sommaZucchineSmall += zucchineSmall[i].peso
}
console.log("Il gruppo di zucchine che misura meno di 15cm ha come peso totale: ", sommaZucchineSmall, "g")

