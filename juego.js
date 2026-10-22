// Detector de vida: devuelve true si los puntos de vida son mayores que 0.
const stillAlive = healthPoints => healthPoints > 0;

console.log(stillAlive(10)); // true
console.log(stillAlive(0));  // false