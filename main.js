// Funcao Calculo de Compra Da Smiles
function buySmiles() {
    let vlr_pago = document.querySelector('#vlr_simul').value;
    let qtd_buy = document.querySelector('#qtd_a_venda').value;
    let warningBuy = document.querySelector('#warningbuy');
    let cotacao = (vlr_pago * 1000) / qtd_buy;

    if (cotacao <= 17.50) {
        warningBuy.innerHTML = `OPORTUNIDADE, <br> milheiro saindo à ${cotacao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
    } else {
        warningBuy.innerHTML = `PREJUIZO, <br> milheiro saindo à ${cotacao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
    }
}
// Funcao Calculo de Compra Da Tudo Azul
function buyTudoAzul() {
    let vlr_pago = document.querySelector('#vlr_simul').value;
    let qtd_buy = document.querySelector('#qtd_a_venda').value;
    let warningBuy = document.querySelector('#warningbuy');
    let cotacao = (vlr_pago * 1000) / qtd_buy;

    if (cotacao <= 20) {
        warningBuy.innerHTML = `OPORTUNIDADE, <br> milheiro saindo à ${cotacao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
    } else {
        warningBuy.innerHTML = `PREJUIZO, <br> milheiro saindo à ${cotacao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
    }
}
// Funcao Calculo de Compra Da Latam Pass e Latam Pass Planium/Black
function buyLatamPass() {
    let vlr_pago = document.querySelector('#vlr_simul').value;
    let qtd_buy = document.querySelector('#qtd_a_venda').value;
    let warningBuy = document.querySelector('#warningbuy');
    let cotacao = (vlr_pago * 1000) / qtd_buy;

    if (cotacao <= 24) {
        warningBuy.innerHTML = `OPORTUNIDADE, <br> milheiro saindo à ${cotacao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
    } else {
        warningBuy.innerHTML = `PREJUIZO, <br> milheiro saindo à ${cotacao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
    }
}

function choiceOption() {
    const select = document.querySelector('#opttions');
    valor = select.options[select.selectedIndex].value;
    if (valor == 1) {
        buySmiles();
    }
    if (valor == 2) {
        buyTudoAzul();
    }
    if (valor == 3 || valor == 4) {
        buyLatamPass();
    }
}





