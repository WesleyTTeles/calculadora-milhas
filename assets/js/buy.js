function choiceOptionBuy() {
    const select = document.querySelector('#opttions-buy');
    valor = select.options[select.selectedIndex].value;
}

// Funcao Calculo de Compra Da Smiles
function buySmiles() {
    let vlr_pay = document.querySelector('#vlr-to-pay').value;
    let qtd_buy = document.querySelector('#qtd-to-buy').value;
    let price = (vlr_pay * 1000) / qtd_buy;
    if (price <= 17.50) {
        alert(`OPORTUNIDADE, milheiro saindo à ${price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}} reais`);
        remov();
    } else {
        alert(`PREJUIZO, milheiro saindo à ${price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}} reais`);
        remov();  
    }
}

// Funcao Calculo de Compra Da Tudo Azul
function buyTudoAzul() {
    let vlr_pay = document.querySelector('#vlr-to-pay').value;
    let qtd_buy = document.querySelector('#qtd-to-buy').value;
    let price = (vlr_pay * 1000) / qtd_buy;
    if (price <= 20) {
        alert(`OPORTUNIDADE, milheiro saindo à ${price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} reais`);
        remov();
    } else {
        alert(`PREJUIZO, milheiro saindo à ${price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} reais`);
        remov(); 
    }
}

// Funcao Calculo de Compra Da Latam Pass e Latam Pass Planium/Black
function buyLatamPass() {
    let vlr_pay = document.querySelector('#vlr-to-pay').value;
    let qtd_buy = document.querySelector('#qtd-to-buy').value;
    let price = (vlr_pay * 1000) / qtd_buy;
    if (price <= 24) {
        alert(`OPORTUNIDADE, milheiro saindo à ${price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} reais`);
        remov();
    } else {
        alert(`PREJUIZO, milheiro saindo à ${price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} reais`);
        remov(); 
    }
}

function calcBuy(){
    checkValueBuy()
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

function checkValueBuy(){
    let vlr_pay = document.querySelector('#vlr-to-pay').value;
    let qtd_buy = document.querySelector('#qtd-to-buy').value;
    vlr_pay && qtd_buy !== '' ? {} : alert('Preencha os Campos Vazios!')
}

function remov() {
    let vlr_pay = document.querySelector('#vlr-to-pay').value = "";
    let qtd_buy = document.querySelector('#qtd-to-buy').value = "";
}

function showBuy(){
    document.querySelector('.sell').style.display = 'none';
    document.querySelector('.buy').style.display = 'flex';
}
function showSell(){
    document.querySelector('.sell').style.display = 'flex';
    document.querySelector('.buy').style.display = 'none';
}
