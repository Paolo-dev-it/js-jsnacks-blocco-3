// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array,
// ognuno formato da 10 numeri casuali da 1 a 100.
// Ogni volta che ne crei uno, stampalo.

let N = parseInt(prompt("Inserisci un numero:")); //Numero che inserisce l'utente che mi dirà il numero di array che si creeranno

let i = 0;

while ( i < N){

    let array = []; //Ad ogni ciclo si crea un array vuoto. Se ne creano tanti quanti il numero che inserisce l'utente

    console.log(array);
   
    let x = 0;

    while( x < 10 ){ //All'interno degli array vuoti faccio apparire 10 numeri randomici

        let randomNumber = Math.floor(Math.random()* 100 ); //Funzione che mi crea i numeri random
        array.push(randomNumber); //Funzione che aggiunge i numeri random all'interno degli array vuoti creati in precedenza
        console.log(randomNumber);
        
        
        x++;
    }

    const lista = document.getElementById('lista'); //Prendo l'id dell' ul dell'html
    const li = document.createElement("li"); //Creo gli elementi li che andrò a inserire sull'ul in seguito con l'append
    li.innerHTML = array; //Aggiungo gli array con i 10 numeri randomici e li vedo a schermo
    lista.append(li);//Aggiungo gli "li" all'interno dell'ul

    i++;    
} 