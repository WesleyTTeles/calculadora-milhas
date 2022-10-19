// >>>>>>>>>>>>>>>>>>>>> PROCESSO DE COMPRAR <<<<<<<<<<<<<<<<<<<<

// Funcao observar as mudancas do input e pegar os valores de cada mudanca.
function choiceOptionBuy() {
    const select = document.querySelector('#opttions-buy');
    valor = select.options[select.selectedIndex].value;
}

// Essa funcao primeiramente verifica se os inputs estao preenchidos, se nao estiver ele vai solicitar conforme o campo vazio.
// se estive preenchido ela ira realizar o calcula com base nos valores do input e select e mostrará o resultado em tela.
function calcBuy(){
    if (checkValueBuy() == false){
    } else {
        let vlr_pay = document.querySelector('#vlr-to-pay').value;
        let qtd_buy = document.querySelector('#qtd-to-buy').value;
        let price = (vlr_pay * 1000) / qtd_buy;
        if (valor == 1){
            if (price <= 17.50) {
                alert(`OPORTUNIDADE, milheiro saindo à ${price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} reais`);
                remov();
            } else {
                alert(`PREJUIZO, milheiro saindo à ${price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} reais`);
                remov();  
            }
        } else if (valor == 2) {
            if (price <= 20) {
                alert(`OPORTUNIDADE, milheiro saindo à ${price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} reais`);
                remov();
            } else {
                alert(`PREJUIZO, milheiro saindo à ${price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} reais`);
                remov(); 
            }
        } else if (valor == 3 || valor == 4) {
            if (price <= 24) {
                alert(`OPORTUNIDADE, milheiro saindo à ${price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} reais`);
                remov();
            } else {
                alert(`PREJUIZO, milheiro saindo à ${price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} reais`);
                remov(); 
            }
        } else {
            alert('Preecnha os Campos!')
        }
    }
}

// funcao para checar se os campos estao vazios e se estiver ele irá pedir pra preencher
function checkValueBuy(){
    let vlr_pay = document.querySelector('#vlr-to-pay').value;
    let qtd_buy = document.querySelector('#qtd-to-buy').value;
    let msg = '';

    if (vlr_pay == ''){
        msg += 'Informe o Valor Pago \n';
    }
    if (qtd_buy == ''){
        msg += 'Informe a quantidade de milha \n';
    }
    if (msg != ''){
        alert(msg);
        return false
    }
    return true;
}

// funcao para limpar os campos depois de mostrar o resultado em tela.
function remov() {
    let vlr_pay = document.querySelector('#vlr-to-pay').value = "";
    let qtd_buy = document.querySelector('#qtd-to-buy').value = "";
}

// >>>>>>>>>>>>>>>>>>>> PROCESSO DE VENDA <<<<<<<<<<<<<<<<<<
function choiceOptionSell() {
    const selectSell = document.querySelector('#opttions-sell');
    valorSell = selectSell.options[selectSell.selectedIndex].value;
    
}

function calcSell(){
    if (checkValueSell() == false) {
    } else {
        let simulation = document.querySelector('#vlr-simulations').value;
        let sell = document.querySelector('#qtd-to-sell').value;
        let priceSell = (simulation * 1000) / sell;
        if (valorSell == 1){
            if (priceSell >= 19) {
                alert(`OPORTUNIDADE, milheiro saindo à ${priceSell.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} reais`);
                remov();
            } else {
                alert(`PREJUIZO, milheiro saindo à ${priceSell.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} reais`);
                remov();  
            }
        } else if (valorSell == 2) {
            alert('Cálculo ainda nao definido, por favor tente mais tarde.');
        } else if (valorSell == 3 || valorSell == 4) {
            if (priceSell >= 27) {
                alert(`OPORTUNIDADE, milheiro saindo à ${priceSell.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} reais`);
                remov();
            } else { 
                alert(`PREJUIZO, milheiro saindo à ${priceSell.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} reais`);
                remov(); 
            }
        } else {
            alert('Preecnha os Campos!')
        }
    }
}

function checkValueSell(){
    let simulation = document.querySelector('#vlr-simulations').value;
    let sell = document.querySelector('#qtd-to-sell').value;
    let msg1 = '';

    if (simulation == ''){
        msg1 += 'Informe o Valor Pago \n';
    }
    if (sell == ''){
        msg1 += 'Informe a quantidade de milha \n';
    }
    if (msg1 != ''){
        alert(msg1);
        return false
    }
    return true;
}

function remov() {
    let simulation = document.querySelector('#vlr-simulations').value = '';
    let sell = document.querySelector('#qtd-to-sell').value = '';
}

function showBuy(){
    document.querySelector('.sell').style.display = 'none';
    document.querySelector('.buy').style.display = 'flex';
    document.querySelector('.transfer').style.display = 'none';
}
function showSell(){
    document.querySelector('.sell').style.display = 'flex';
    document.querySelector('.buy').style.display = 'none';
    document.querySelector('.transfer').style.display = 'none';
}
function showTransfer(){
    document.querySelector('.sell').style.display = 'none';
    document.querySelector('.buy').style.display = 'none';
    document.querySelector('.transfer').style.display = 'flex';
}
/*
function calcPoints() {
    let qtdPoint = document.querySelector('#qtd-points').value
    let porcent = document.querySelector('#porcent').value;
    let qtdPointNumb = parseInt(qtdPoint);
    let porcentNumb = parseInt(porcent);
    transfer = ((qtdPointNumb * porcentNumb) / 100) + qtdPointNumb;
    alert(`Você ficará com ${transfer} pontos/milhas após essa Tranferencia.`)
}
*/
function calcPoints() {
    let qtdPoint = document.querySelector('#qtd-points').value
    let porcent = document.querySelector('#porcent').value;
    let qtdPointNumb = parseInt(qtdPoint);
    let porcentNumb = parseInt(porcent);
    let priceMilhasReal = 70;
    
    priceMilhas = priceMilhasReal - ((priceMilhasReal * porcentNumb) / 100);
    valueInvest = (qtdPointNumb / 1000) * priceMilhas;
    
    alert(`Seu Valor investido é ${valueInvest.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} reais \n e o Custo do Milheiro é ${priceMilhas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} reais`)
}
