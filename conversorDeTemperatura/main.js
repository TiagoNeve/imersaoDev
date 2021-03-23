function convertCelsius() {
    let celcius = parseFloat(document.getElementById("celcius").value)

    let resultKelvin = celcius + 273
    let resultFahrenheit = (1.8 * celcius) + 32

    document.getElementById("celcius").value = celcius
    document.getElementById("fahrenheit").value = resultFahrenheit.toFixed(3)
    document.getElementById("kelvin").value = resultKelvin.toFixed(3)
}

function convertFahrenheit() {
    let fahrenheit = parseFloat(document.getElementById("fahrenheit").value);

    let resultKelvin = 5 * ((fahrenheit - 32) / 9) + 273
    let resultCelsius = 5 * ((fahrenheit - 32) / 9)

    document.getElementById("celcius").value = resultCelsius.toFixed(3)
    document.getElementById("fahrenheit").value = fahrenheit
    document.getElementById("kelvin").value = resultKelvin.toFixed(3)
}

function convertKelvin() {
    let kelvin = parseFloat(document.getElementById("kelvin").value);

    let resultCelsius = kelvin - 273
    let resultFahrenheit = 9 * ((kelvin - 273) / 5) + 32

    document.getElementById("celcius").value = resultCelsius.toFixed(3)
    document.getElementById("fahrenheit").value = resultFahrenheit.toFixed(3)
    document.getElementById("kelvin").value = kelvin
}