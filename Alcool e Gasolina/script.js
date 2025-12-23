function calcularMelhorPreco() {
                
    //validar campos
    let precoAlcool = document.getElementById('alcool').value
    let precoGasolina = document.getElementById('gasolina').value

    if (precoAlcool == '' || precoGasolina == '') {
        alert ("Insira os preços")
    } else {
        let resultado = precoAlcool / precoGasolina 
        if (resultado >= 7.0) {
            document.getElementById('resultado').innerHTML = "Melhor utilizar gasolina"
        } else {
            document.getElementById('resultado').innerHTML = "Melhor utilizar álcool"
        }
    }
}