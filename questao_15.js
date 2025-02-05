function somarNumeros(numero1, numero2) {
    return numero1 + numero2;
}
  

function exibirResultado(resultado) {
    console.log(resultado);
}

function calcularEExibir() {
    let primeiroNumero = parseFloat(prompt('Digite o primeiro número:'));
    let segundoNumero = parseFloat(prompt('Digite o segundo número:'));
  
    let soma = somarNumeros(primeiroNumero, segundoNumero);
  
    exibirResultado(soma);
  }
  
  calcularEExibir();
  alert('Questão 15 executada no console');