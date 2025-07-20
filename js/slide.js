let contador = 1;
document.querySelector("#radio1").checked = true;

setInterval(function () {
  proximoCard();
}, 5000);

function proximoCard() {
  contador++;
  if (contador > 6) {
    contador = 1;
  }
  document.getElementById("radio" + contador).checked = true;
}

for (let i = 1; i <= 6; i++) {
  document.getElementById("radio" + i).addEventListener("change", function () {
    if (this.checked) {
      contador = i;
    }
  });
}
