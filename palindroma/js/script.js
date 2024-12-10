
// Funzione per verificare se una parola è palindroma
function isPalindrome(word) {
    // Convertire la parola in minuscolo per evitare problemi di maiuscole/minuscole
    const normalizedWord = word.toLowerCase();


    // Invertire la parola
    let reversedWord = "";
    for (let i = normalizedWord.length - 1; i >= 0; i--) {
        reversedWord += normalizedWord[i];
    }


    // Confrontare la parola normale con quella invertita
    return normalizedWord === reversedWord;
}


// Chiedere all'utente di inserire una parola
const userWord = prompt("Inserisci una parola per verificare se è palindroma:");


// Controllare se la parola è palindroma
if (isPalindrome(userWord)) {
    console.log(`La parola "${userWord}" è palindroma!`);
} else {
    console.log(`La parola "${userWord}" non è palindroma.`);
}
