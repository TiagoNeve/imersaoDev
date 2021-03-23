
function dolarToReal() {
    var dolar = document.getElementById("inputDolar").value;
    var valorEmDolar = parseFloat(dolar);

    var resultado = valorEmDolar * 5.51;

    document.getElementById("inputReal").value = resultado.toFixed(2);
}

function realToDolar() {
    var real = document.getElementById("inputReal").value;
    var valorEmReal = parseFloat(real);

    var resultado = valorEmReal / 5.51;

    document.getElementById("inputDolar").value = resultado.toFixed(2);
}
