let frutas = new Array();
frutas[0] = "Maçã";
frutas[1] = "Banana";
frutas[2] = "Laranja";
frutas[3] = "Uva";
frutas[4] = "Manga";

console.log("Segundo elemento: \n");
console.log(frutas[frutas.length - 4])
console.log("Ultimo elemento: \n");
console.log(frutas[frutas.length - 1])

console.log("Elementos do array, com o ultimo elemento abacaxi adicionado: \n");
frutas.push("Abacaxi");

frutas.forEach(element => {
    console.log(element + '\n')
});

console.log("Elementos do array, com o primeiro elemento morango adicionado: \n");
frutas.unshift("Morango");

frutas.forEach(element => {
    console.log(element + '\n')
});

console.log("Elementos do array, tendo apagado o primeiro item: \n");
frutas.shift();
frutas.forEach(element => {
    console.log(element + '\n')
});

console.log("Elementos do array, tendo apagado o ultimo item: \n");
frutas.pop();
frutas.forEach(element => {
    console.log(element + '\n')
});

console.log("Indice do elemento Laranja: " + frutas.indexOf('Laranja'));

let frutasM = frutas.filter(function (fruta) {
    return fruta.charAt(0).toLowerCase() === 'm';
});
console.log("Frutas que começam com 'm':", frutasM);








