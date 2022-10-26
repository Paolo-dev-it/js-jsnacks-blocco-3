// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50. 

let empty = []; //Array vuoto

let sum = 0; //Variabile "soldatino"

let i = 0;

while (sum < 50){ //La mia condizione è che il ciclo while lavora fino a quando la somma degli input è minore di 50
    
    let input = parseInt(prompt("Inserisci un numero:")); //Prompt dove l'utente inserisce il suo numero
    sum = sum + input; //Effettuo la somma di 0 + input dell'utente
    empty.push(sum); //Aggiungo all'array vuoto i valore dell'utente fino a quando non arrivo a 50
    console.log(empty);
    i++
    
}