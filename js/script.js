document.addEventListener("DOMContentLoaded", function () {
    const numeroInput = document.getElementById("numeroInput");
    const calcularButton = document.getElementById("calcularButton");
    const resultado = document.getElementById("resultado");

    calcularButton.addEventListener("click", function () {
        const numero = parseFloat(numeroInput.value);

        if (isNaN(numero) || numero <= 0 || numeroInput.value.trim() === "") {
            resultado.textContent = "Por favor, ingresa un número positivo válido.";
            resultado.classList.add("error");
            numeroInput.classList.add("error-border");
            numeroInput.focus();
            return;
        }

        // Realiza cálculos o muestra resultados según tus necesidades
        // Por ejemplo:
        const cuadrado = numero * numero;
        resultado.textContent = `El cuadrado de ${numero} es ${cuadrado}.`;
        resultado.classList.remove("error");
        numeroInput.classList.remove("error-border");
    });
});
