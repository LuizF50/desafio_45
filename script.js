document.getElementById("calcular").addEventListener("click", function() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultadoDiv = document.getElementById("resultado");

    if (isNaN(numero) || numero < 1 || numero > 10000) {
        resultadoDiv.innerHTML = "<p style='color:red;'>Por favor, insira um número válido entre 1 e 10,000.</p>";
        return;
    }

    let soma = 0;
    let operacao = "Números mágicos encontrados: ";

    for (let i = 1; i <= numero; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            soma += i;
            operacao += `${i} `;
        }
    }

    operacao += `<br>Soma mágica necessária para acalmar o dragão: ${soma}`;
    resultadoDiv.innerHTML = `<p>${operacao}</p>`;
});

document.getElementById("reiniciar").addEventListener("click", function() {
    document.getElementById("numero").value = "";
    document.getElementById("resultado").innerHTML = "";
});
