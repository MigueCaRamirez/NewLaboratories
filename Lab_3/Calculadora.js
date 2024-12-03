
let num1, num2;
let operacion;


function realizarOperacion(num1, num2, operacion) {
    if (operacion === "+") {
        return num1 + num2;
    } else if (operacion === "-") {
        return num1 - num2;
    } else if (operacion === "*") {
        return num1 * num2;
    } else if (operacion === "/") {
        if (num2 === 0) {
            return "Error: No se puede dividir entre 0";
        }
        return num1 / num2;
    } else {
        return "Operación no válida";
    }
}


while (true) {
    
    operacion = prompt("Ingrese la operación a realizar (+, -, *, /) o 'salir' para terminar:");
    if (operacion === "salir") {
        alert("Gracias por usar la calculadora. ¡Adiós!");
        break;
    }

    num1 = parseFloat(prompt("Ingrese el primer número:"));
    num2 = parseFloat(prompt("Ingrese el segundo número:"));


    const resultado = realizarOperacion(num1, num2, operacion);
    alert(`El resultado de la operación '${operacion}' es: ${resultado}`);
}
