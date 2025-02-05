//Escreva um código que calcule a área de um círculo. Utilize uma função para realizar o cálculo.
//A função deve receber o raio como parâmetro e retornar a área.

function areaCirculo(raio){
    let area = 3.1415 * raio ** 2;
    return alert(`Área = ${area}`);
}

areaCirculo(parseFloat(prompt('Raio:')))