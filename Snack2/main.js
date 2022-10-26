// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let sum = 0; //Variabile somma

let i = 0;

while ( i < 5 ){ //Condizione che fa arrivare la variabile "i" a 5 e quando arriva ferma il ciclo
    let input = parseInt(prompt("Inserisci un numero:"));
    sum = sum + input; //Somma tra input dell' utente e variabile somma "soldatino"
    console.log(sum);

    i++
}