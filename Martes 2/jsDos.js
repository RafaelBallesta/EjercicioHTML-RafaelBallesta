const sumarNum = () => {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);

    let resultado = num1 + num2;

    document.getElementById('resultado').innerHTML = 'Resultado: '+resultado;

}