# POC-04-Fletcher-

## Contexto
Criamos uma página web com Js, html e css que mostra os valores reais das criptos moedas( Bitcoin e Ethereum). Para isso usamos o Flecher do JavaScript.

### API 
Pegamos a API CoinGecko.
<img src="coingecko.svg" width="200px" heigth="300px">

### Codigo 

Primeiro criamos uma função assincrona, para não ser executada da forma normal do começo ao fim.

```javascript

  async function fetchCryptoPrices() {
  
```
