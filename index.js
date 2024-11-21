const caixaDeTexto = document.getElementById("caixaDeTexto");

const paraFahrenheit = document.getElementById("paraFahrenheit");

const paraCelsius = document.getElementById("paraCelsius");

const resultado = document.getElementById("resultado");

let temperatura;

function conversor() {
    if(paraFahrenheit.checked){
        temperatura = Number(caixaDeTexto.value);
        resultado.textContent = (temperatura * 1.8 + 32) + "°F"       
    }
    else if(paraCelsius.checked){
        temperatura = Number(caixaDeTexto.value);
        resultado.textContent = ((5 * (temperatura - 32) / 9).toFixed(2)) + "°C";
    }
    else {
        resultado.textContent = "Selecione uma unidade de conversão!"
    }
}
