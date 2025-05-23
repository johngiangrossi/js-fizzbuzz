console.log('FizzBuzz');

/*
Consegna:
Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
*/

/*
-stampare i numeri da 1 a 100
-SE i numeri sono sia multipli di 3 che di 5
    -stampo la parola 'FizzBuzz'
-ALTRIMENTI SE i numeri sono multipli di 3
    -stampo la parola 'Fizz'
-ALTRIMENTI SE i numeri sono multipli di 5
    -stampo la parola 'Buzz'
*/

// ciclo for con log dei numeri da 1 a numero inserito dall'utente

const rangeNum = Math.abs(parseInt(prompt('inserire un numero intero')),10);  //number | NaN

for (let i = 1; i <= rangeNum; i++) {
    let result = i
    if (((i % 3) === 0) && ((i % 5) === 0)) {
        result = 'FizzBuzz';
    } else if ((i % 3) === 0) {
        result = 'Fizz';
    } else if ((i % 5) === 0) {
        result = 'Buzz';
    }
    console.log(`i = ${i} => ${result}
-------------------------`);
};

console.log('fine ciclo');


/*
// ciclo for con log dei numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    let result = i
    if (((i % 3) === 0) && ((i % 5) === 0)) {
        result = 'FizzBuzz';
    } else if ((i % 3) === 0) {
        result = 'Fizz';
    } else if ((i % 5) === 0) {
        result = 'Buzz';
    }
    console.log(`i = ${i} => ${result}
-------------------------`);
};

console.log('fine ciclo');
*/