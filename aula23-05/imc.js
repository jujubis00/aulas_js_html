function calcularIMC(){
    peso= parseFloat(document.formulario.peso.value);
    altura= parseFloat(document.formulario.altura.value);
    resultado = (peso/(altura**2)).toFixed(2) //até 2 casas decimais 
    alert('Seu IMC é: '+ resultado);
}
