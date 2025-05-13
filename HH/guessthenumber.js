let targetNumber=
Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess =
    parseInt(document.getElementById("guessInput").value);
    const message =
    document.getElementById("message");
    attempts++;

document.getElementById("attemptCount").textContent = attempts;

console.log('Mēģinājums');
    if (isNaN(guess) || guess < 1 || guess > 100 ) {
        alert(
        "Lūdzu ievadi skaitli no 1 līdz 100.");
        message.textContent =
        "Lūdzu ievadi skaitli no 1 līdz 100."
        return;
    }
if (guess === targetNumber) {
    message.textContent =
    'Apsveicu! Tu uzminēji skaitli!';
}
else if (guess < targetNumber) {
    message.textContent =
    "Skaitlis ir lielāks!";
}
else {
    message.textContent =
    "Skaitlis ir mazāks!";
} }
