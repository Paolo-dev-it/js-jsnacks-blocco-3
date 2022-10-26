// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
// Interrompi il ciclo appena il nome è stato trovato.

let names = ["Paolo", "Elia", "Giuseppe", "Elisa"] //Nomi nella lista

let input = prompt("Qual'è il tuo nome?");//Input nome dell'utente

let x = false; //Variabile soldatino

let i = 0;

while ( i < names.length ){ //Durata del ciclo inferiore alla lunghezza dell'arrai (4)

    if (input == names[i]){ //Se l'input dell'utente è uguale ai valori dell' Array 

        x = true; //Imposto il valore della variabile soldatino in true
        break;

    } else {
        x = false; //Imposto il valore della variabile soldatino in false
    }

    i++;
}

if ( x == true ){ //Dico alla variabile soldatino cosa deve fare quando è impostata su true

    document.getElementById("text").innerHTML = `Benvenuto!`
    console.log("Benvenuto!")

} else { //Dico alla variabile soldatino cosa deve fare quando è impostata su false

    document.getElementById("text").innerHTML = `Non puoi entrare!`
    console.log("Non puoi entrare!")
    
}