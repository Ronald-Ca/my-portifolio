function fetchBitcoin() {
  fetch("https://blockchain.info/ticker")
    .then((reponse) => reponse.json()) // Pega a resposta e transforma em json
    .then((bitcoin) => {
      // Pegamos o arquivo json que está vindo da API
      const valorBitcoin = document.querySelector(".valor-bitcoin");
      valorBitcoin.innerText = "R$ " + bitcoin.BRL.sell;
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}

fetchBitcoin();
