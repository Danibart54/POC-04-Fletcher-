//Função Assíncrona fetchCryptoPrices()
async function fetchCryptoPrices() { //Essa palavra "async" transforma a função em uma função assíncrona
    const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd,brl';//Esta URL guarda o endereço da API da CoinGecko

    // "ids=bitcoin" e "ethereum" solicita os preços de Bitcoin e Ethereum.
    // já"vs_currencies=usd,brl" é para mostrar os valores dos preços em dolar(USD) e real(BRL).
    
    try {// execução 
        const response = await fetch(url); // await é usado indica que o JavaScript deve esperar até que a resposta da API seja recebida antes de continuar com a execução do código
        // fetch é usado para fazer a requisição HTTP para a URL da API.Ele retorna uma Promise (uma promessa).
        const prices = await response.json();// usa ".json()" para converter a resposta em um objeto JavaScript depois que a resposta é recebida
        
        const priceDisplay = document.getElementById('preço');
        //O "priceDisplay" armazena o elemento HTML com o id="preço" onde sera insirido as informções dos preços da criptos eIsso permite que altere o conteúdo dessa parte da página dinamicamente.

        
        priceDisplay.innerHTML = '';
        // Nessa parte "limpa" qualquer conteúdo que já possa estar dentro do elemento crypto-prices antes de inserir novos dados , para garantir que os novos preços sejam exibidos corretamente, sem sobrepor dados antigos.


        // exibe o preço do bitcoin 
        const bitcoinCard = document.createElement('div');// Cria uma nova div para no HTML para exibir as informações do bitcoin 
        bitcoinCard.classList.add('box');// essa parte vai adicinar a classe "box" ao elemento div , para estilização do CSS.
        // a crase é usada para inserir valores dinâmicos de variáveis dentro de um bloco de HTML. 
        // "${prices.bitcoin.usd}" e "${prices.bitcoin.brl}" são alores que serao obtidos pela API (price) que contem os valores em dolares e reais 
        bitcoinCard.innerHTML = `
            <h2>Bitcoin (BTC)</h2>
            <p>Preço em Dólares (USD): $${prices.bitcoin.usd}</p>
            <p>Preço em Reais (BRL): R$${prices.bitcoin.brl}</p>
        `;
        priceDisplay.appendChild(bitcoinCard);//Aqui vai adicionar as resposta do bitcoin na parte de "preço"
        
        
        // aqui é a mesma coisa mas esse busca valores do Ethereum , tantode dolar e real 
        const ethereumCard = document.createElement('div');
        ethereumCard.classList.add('box');
        ethereumCard.innerHTML = `
            <h2>Ethereum (ETH)</h2>
            <p>Preço em Dólares (USD): $${prices.ethereum.usd}</p>
            <p>Preço em Reais (BRL): R$${prices.ethereum.brl}</p>
        `;
        priceDisplay.appendChild(ethereumCard);

    
    } catch (error) {// caso não encontre o era desejado aplica usa essa função de erro
        console.error('Erro na buscar dos dados: ', error);
    }
}
fetchCryptoPrices();// por final nesse trecho vai executa tudo imediatamente após a página ser carregada, buscando e exibindo os preços das criptomoedas automaticamente e atualizados se tudo der certo .