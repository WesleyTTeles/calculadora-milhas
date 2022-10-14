function choiceOption() {
    const select = document.querySelector('#opttions');
    valor = select.options[select.selectedIndex].value;
}

// Funcao Calculo de Compra Da Smiles
function buySmiles() {
    let vlr_pago = document.querySelector('#vlr_simul').value;
    let qtd_buy = document.querySelector('#qtd_a_venda').value;
    let cotacao = (vlr_pago * 1000) / qtd_buy;
    if (cotacao <= 17.50) {
        alert(`OPORTUNIDADE, milheiro saindo à ${cotacao}`);
        remov();
    } else {
        alert(`PREJUIZO, milheiro saindo à ${cotacao}`);
        remov();  
    }
}

// Funcao Calculo de Compra Da Tudo Azul
function buyTudoAzul() {
    let vlr_pago = document.querySelector('#vlr_simul').value;
    let qtd_buy = document.querySelector('#qtd_a_venda').value;
    let cotacao = (vlr_pago * 1000) / qtd_buy;
    if (cotacao <= 20) {
        alert(`OPORTUNIDADE, milheiro saindo à ${cotacao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        remov();
    } else {
        alert(`PREJUIZO, milheiro saindo à ${cotacao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        remov(); 
    }
}

// Funcao Calculo de Compra Da Latam Pass e Latam Pass Planium/Black
function buyLatamPass() {
    let vlr_pago = document.querySelector('#vlr_simul').value;
    let qtd_buy = document.querySelector('#qtd_a_venda').value;
    let cotacao = (vlr_pago * 1000) / qtd_buy;
    if (cotacao <= 24) {
        alert(`OPORTUNIDADE, milheiro saindo à ${cotacao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        remov();
    } else {
        alert(`PREJUIZO, milheiro saindo à ${cotacao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        remov(); 
    }
}

function buyLatamPass() {
    let qtd_buy = document.querySelector('#qtd_a_venda').value;
    let vlr_pago = document.querySelector('#vlr_simul').value;
    let cotacao = (vlr_pago * 1000) / qtd_buy;
    if (cotacao <= 24) {
        alert(`OPORTUNIDADE, milheiro saindo à ${cotacao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        remov();
    } else {
        alert(`PREJUIZO, milheiro saindo à ${cotacao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        remov(); 
    }
}

function calcCotar(){
    check()
    if (valor == 1){
        buySmiles();
    } else if (valor == 2) {
        buyTudoAzul();
    } else if (valor == 3 || valor == 4) {
        buyLatamPass();
    } else {
        alert('Preecnha os Campos!')
    }
}


function check(){
    let vlr_pago = document.querySelector('#vlr_simul').value;
    let qtd_buy = document.querySelector('#qtd_a_venda').value;
    vlr_pago && qtd_buy !== '' ? {} : alert('Preencha os Campos Vazios!')
}

function remov() {
    let vlr_pago = document.querySelector('#vlr_simul').value = "";
    let qtd_buy = document.querySelector('#qtd_a_venda').value = "";
}

