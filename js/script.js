const data = new Date("jan 17, 2023 14:00:00").getTime();
const segundo = document.querySelector("[data-segundo]");
const minuto = document.querySelector("[data-minuto]");
const hora = document.querySelector("[data-hora]");
const dia = document.querySelector("[data-dia]");

let timer = setInterval(() => {
  let tempo = new Date().getTime();

  let resultado = data - tempo;

  let dias = Math.floor(resultado / (1000 * 60 * 60 * 24));
  let horas = Math.floor(
    (resultado % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutos = Math.floor((resultado % (1000 * 60 * 60)) / (1000 * 60));
  let segundos = Math.floor((resultado % (1000 * 60)) / 1000);

  dia.innerHTML = dias;
  hora.innerHTML = horas;
  minuto.innerHTML = minutos;
  segundo.innerHTML = segundos;

  if (dia.innerHTML.length === 1) {
    dia.innerHTML = "0" + dias;
  }
  if (hora.innerHTML.length === 1) {
    hora.innerHTML = "0" + horas;
  }
  if (minuto.innerHTML.length === 1) {
    minuto.innerHTML = "0" + minutos;
  }
  if (segundo.innerHTML.length === 1) {
    segundo.innerHTML = "0" + segundos;
  }

  if (resultado < 0) {
    clearInterval(timer);
    dia.innerHTML = "00";
    hora.innerHTML = "00";
    minuto.innerHTML = "00";
    segundo.innerHTML = "00";
  }
});
