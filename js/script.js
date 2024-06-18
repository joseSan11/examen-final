document.addEventListener("DOMContentLoaded", function () {
    const numeroInput = document.getElementById("numeroInput");
    const calcularButton = document.getElementById("calcularButton");
    const resultado = document.getElementById("resultado");
    const anterior = document.getElementById("anterior");
    const suma = document.getElementById("suma");

    calcularButton.addEventListener("click", function () {
        const numero = parseFloat(numeroInput.value);

        if (isNaN(numero) || numero <= 0 || numeroInput.value.trim() === "") {
            resultado.textContent = "Por favor, ingresa un número positivo válido.";
            resultado.classList.add("error");
            numeroInput.classList.add("error-border");
            numeroInput.focus();
            return;
        }

        
        let sumaTotal = 0;
        let anteriorNum = 0;

        for (let i = 0; i <= numero; i++) {
            sumaTotal += i;
            anteriorNum = i;
        }

        resultado.textContent = `La suma de los ${numero} primeros números naturales es ${sumaTotal}.`;
        anterior.textContent = `El número anterior a ${numero} es ${anteriorNum}.`;
        suma.textContent = `La suma de ${numero} y ${anteriorNum} es ${sumaTotal}.`;

        resultado.classList.remove("error");
        numeroInput.classList.remove("error-border");
    });
});
