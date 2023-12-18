

//EJERCICIO 1
let gradosC = [22, 25, 19, 30, 27, 21, 18];
let gradosF= []
for (let i = 0; i < gradosC.length; i++) {
   gradosF[i] = celsiusToFahrenheit(gradosC[i]);
}

function celsiusToFahrenheit(celsius) {
   return (celsius * 9/5) + 32;
}

console.log("Temperaturas en Celsius: " + gradosC);
console.log("Temperaturas en Fahrenheit: " + gradosF);

//EJERCICIO 2
let suma= 0;
for (let i=1; i<=10;i++){suma +=i;}
console.log (suma)

//EJERCICIO 3
let numero = prompt("Ingresa un número:");

if (esPrimo(numero)) {
    console.log(numero + " es un número primo.");
} else {
    console.log(numero + " no es un número primo.");
}

function esPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return numero !== 1;
}
//EJERCICIO 4

let fibo = [0, 1]; 
for (let i = 2; i <= 10; i++) {
  fibo[i] = fibo[i - 2] + fibo[i - 1];
  console.log(fibo[i]);
}

