
// Funzione per generare un numero random tra 1 e 5
function generateRandomNumber() {
  return Math.floor(Math.random() * 5) + 1;
}


// Funzione per verificare se un numero è pari
function isEven(number) {
  return number % 2 === 0;
}


// Chiedere all'utente di scegliere pari o dispari
const userChoice = prompt("Scegli: 'pari' o 'dispari'").toLowerCase();


// Chiedere all'utente di inserire un numero tra 1 e 5
const userNumber = parseInt(prompt("Inserisci un numero tra 1 e 5:"));


// Controllare se l'input dell'utente è valido
if (isNaN(userNumber) || userNumber < 1 || userNumber > 5 || (userChoice !== "pari" && userChoice !== "dispari")) {
  console.log("Inserisci una scelta valida.");
} else {

  // Generare un numero random per il computer
  const computerNumber = generateRandomNumber();


  // Sommare i due numeri
  const sum = userNumber + computerNumber;


  // Determinare se la somma è pari o dispari
  const sumIsEven = isEven(sum);


  // Stampare i dettagli
  console.log(`Hai scelto: ${userChoice}`);
  console.log(`Il tuo numero: ${userNumber}`);
  console.log(`Numero del computer: ${computerNumber}`);
  console.log(`Somma: ${sum} (${sumIsEven ? "pari" : "dispari"})`);


  // Determinare il vincitore
  if ((sumIsEven && userChoice === "pari") || (!sumIsEven && userChoice === "dispari")) {
    console.log("Complimenti! Hai vinto!");
  } else {
    console.log("Peccato! Il computer ha vinto.");
  }
}