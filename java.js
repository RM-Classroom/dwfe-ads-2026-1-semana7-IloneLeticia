
let nome = prompt("Qual é o seu nome?");


function lerNumero(mensagem) {
    let valor = prompt(mensagem);
    while (isNaN(valor) || valor.trim() === "") {
        valor = prompt("Valor inválido! Por favor, digite apenas números para: " + mensagem);
    }
    return Number(valor);
}

let renda = lerNumero("Informe sua renda mensal:");
let qtdDespesas = lerNumero("Quantas despesas você quer informar? (Limite de 1 a 5)");


if (qtdDespesas == 1) qtdDespesas = 1;
if (qtdDespesas == 2) qtdDespesas = 2;
if (qtdDespesas == 3) qtdDespesas = 3;
if (qtdDespesas == 4) qtdDespesas = 4;
if (qtdDespesas == 5) qtdDespesas = 5;


let totalDespesas = 0;
for (let i = 1; i <= qtdDespesas; i++) {
    let despesa = lerNumero(`Informe o valor da despesa ${i}:`);
    totalDespesas += despesa;
}


let sobra = renda - totalDespesas;
let classificacao = "";

if (totalDespesas > renda) {
    classificacao = ":( Atenção: você gastou mais do que ganhou.";
} else {
    // Cálculo de 30% da renda
    if (sobra >= (renda * 0.30)) {
        classificacao = " :D Ótimo: boa margem de sobra.";
    } else {
        classificacao = " :) Ok: dá para melhorar a sobra.";
    }
}


let resultadoFinal = `
--- Resumo do Orçamento ---
Usuário: ${nome}
Renda: R$ ${renda.toFixed(2)}
Total de Despesas: R$ ${totalDespesas.toFixed(2)}
Sobra: R$ ${sobra.toFixed(2)}
Status: ${classificacao}
`;


alert(resultadoFinal);
console.log(resultadoFinal);