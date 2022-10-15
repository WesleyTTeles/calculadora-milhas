function choiceOptionSell() {
    const select = document.querySelector('#opttions-sell');
    valor = select.options[select.selectedIndex].value;
    console.log(valor)
}

// Funcao Calculo de Compra Da Smiles
function sellSmiles() {
    let simulation = document.querySelector('#vlr-simulations').value;
    let buy = document.querySelector('#qtd-to-sell').value;
    let price = (simulation * 1000) / buy;
    if (price >= 19) {
        alert(`OPORTUNIDADE, milheiro saindo à ${price} reais`);
        remov();
    } else {
        alert(`PREJUIZO, milheiro saindo à ${price} reais`);
        remov();  
    }
}

// Funcao Calculo de Compra Da Tudo Azul
function sellTudoAzul() {
    alert('Cálculo ainda nao definido, por favor tente mais tarde.');
    // let simulation = document.querySelector('#vlr-simulations').value;
    // let sell = document.querySelector('#qtd-to-sell').value;
    // let price = (simulation * 1000) / sell;
    // if (price <= 20) {
    //     alert(`OPORTUNIDADE, milheiro saindo à ${price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    //     remov();
    // } else {
    //     alert(`PREJUIZO, milheiro saindo à ${price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    //     remov(); 
    // }
    
}

// Funcao Calculo de Compra Da Latam Pass e Latam Pass Planium/Black
function sellLatamPass() {
    let simulation = document.querySelector('#vlr-simulations').value;
    let sell = document.querySelector('#qtd-to-sell').value;
    let price = (simulation * 1000) / sell;
    if (price >= 27) {
        alert(`OPORTUNIDADE, milheiro saindo à ${price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} reais`);
        remov();
    } else { 
        alert(`PREJUIZO, milheiro saindo à ${price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} reais`);
        remov(); 
    }
}

function calcSell(){
    checkValueSell()
    if (valor == 1){
        sellSmiles();
    } else if (valor == 2) {
        sellTudoAzul();
    } else if (valor == 3 || valor == 4) {
        sellLatamPass();
    } else {
        alert('Preecnha os Campos!')
    }
}

function checkValueSell(){
    let simulation = document.querySelector('#vlr-simulations').value;
    let sell = document.querySelector('#qtd-to-sell').value;
    simulation && sell !== '' ? {} : alert('Preencha os Campos Vazios!')
}

function remov() {
    let simulation = document.querySelector('#vlr-simulations').value = '';
    let sell = document.querySelector('#qtd-to-sell').value = '';
}

function showBuy(){
    document.querySelector('.sell').style.display = 'none';
    document.querySelector('.buy').style.display = 'flex';
}
function showSell(){
    document.querySelector('.sell').style.display = 'flex';
    document.querySelector('.buy').style.display = 'none';
}