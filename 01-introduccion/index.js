console.log("\n\n");

// Variables

var nombre = "Leyendas Urbanas";
var fecha = 2021;
var peso = 2.5;
var activo = true;
var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var capitales = {
    españa: "Madrid"
};

var nulo = null;
var sinDefinir;

console.log(nombre);
console.log(typeof nombre + "\n");
console.log(fecha);
console.log(typeof fecha + "\n");
console.log(peso);
console.log(typeof peso + "\n");
console.log(activo);
console.log(typeof activo + "\n");
console.log(numeros);
console.log(typeof numeros + "\n");
console.log(capitales);
console.log(typeof capitales + "\n");
console.log(nulo);
console.log(typeof nulo + "\n");
console.log(sinDefinir);
console.log(typeof sinDefinir + "\n");

// Scopes

var mayorScope = 2;

const constante = 9.81;

if (true) {
    let menorScope = 1;

    console.log("Dentro del IF:");
    console.log("MAYOR: " + mayorScope);
    console.log("MENOR: " + menorScope);
}

console.log("Fuera del IF:");
console.log("MAYOR: " + mayorScope);
//console.log("MENOR: " + menorScope); // Error

//constante = 10; // Error

// Operadores
console.log("\n");

var a = 2;
var b = 5;
var c = true;

console.log(a < 2);
console.log("\n");

console.log(a <= 2);
console.log("\n");

console.log(a == 2);
console.log("\n");

console.log(a == b);
console.log("\n");

console.log(a <= b);
console.log("\n");

console.log(a > b);
console.log("\n");

console.log(!c);
console.log("\n");

console.log(!c == true);
console.log("\n");

console.log(a++);
console.log("\n");

// Condicionales

if (a < b) {
    console.log("A es menor a B");
} else if (a == b) {
    console.log("A es igual a B");
} else {
    console.log("A no es menor a B");
}

if (a == 2) {
    console.log("A es 2");
} else {
    console.log("A no es 2, es " + a);
}

switch (a) {
    case 0:
        console.log("0) a es " + 0);
        break;
    case 1:
        console.log("1) a es " + 1);
        break;
    case 2:
        console.log("2) a es " + 2);
        break;
    default: 
        console.log("Default) a es " + a);
}

// Bucles
console.log("\n");

for (let i = 0; i < 10; i++) {
    console.log("Estamos en la i = " + i);
    console.log("Numero en el array: " + numeros[i]);
    console.log("\n");
}

var j = 0;
while (j < 20) {
    console.log("Todavía j (" + j + ") no es mayor o igual a 20.");
    j++;
}
console.log("j ya es mayor o igual a 20.");
console.log("\n");

for (let num of numeros) {
    console.log("Un numero: " + num);
}