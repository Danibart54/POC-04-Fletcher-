# POC-04-Fletcher-

## Contexto
Criamos uma página web com Js, html e css que mostra os valores reais das criptos moedas( Bitcoin e Ethereum). Para isso usamos o Flecher do JavaScript.

<img src="poc04.PNG">

### API 

<img src="coingecko.svg" width="200px" heigth="300px">

Pegamos a API CoinGecko.


### Codigo 

Primeiro criamos uma função assincrona, para não ser executada da forma normal do começo ao fim.

```javascript

  async function fetchCryptoPrices() {
  
```

Pegamos a url da API guardamos no const, usamos o await para indicar que o JS deve esperar a resposta da API seja recebida antes de continuar com a execução do código.
O fetch é usado para fazer a requisição HTTP para a URL da API.Ele retorna uma Promise (uma promessa). E usamos o .json para converter a resposta em um objeto JavaScript depois que a resposta é recebida.

```javascript
    const response = await fetch(url);
    const prices = await response.json();

```

Aqui armazenamos os dados na div para ser mostradas e facil de estilizar. No final pegamos os valores na API que contem os valores em dolares e reais.

```javascript
const bitcoinCard = document.createElement('div');
bitcoinCard.classList.add('box');
 bitcoinCard.innerHTML = `
            <h2>Bitcoin (BTC)</h2>
            <p>Preço em Dólares (USD): $${prices.bitcoin.usd}</p>
            <p>Preço em Reais (BRL): R$${prices.bitcoin.brl}</p>
        `;
priceDisplay.appendChild(bitcoinCard);
```

Fizemos a mesma coisa para o Ethereum.

```javascript
const ethereumCard = document.createElement('div');
        ethereumCard.classList.add('box');
        ethereumCard.innerHTML = `
            <h2>Ethereum (ETH)</h2>
            <p>Preço em Dólares (USD): $${prices.ethereum.usd}</p>
            <p>Preço em Reais (BRL): R$${prices.ethereum.brl}</p>
        `;
        priceDisplay.appendChild(ethereumCard);
```


E por fim, usamos o fetch para executar tudo imediatamente após a página ser carregada, buscando e exibindo os preços das criptomoedas automaticamente e atualizados se tudo der certo.
```javascript
fetchCryptoPrices();
```
