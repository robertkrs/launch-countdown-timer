// function timerSegundo(segundo, minuto, hora, dia) {
//   segundo.innerHTML = parseInt(segundo.innerHTML);
//   segundo.innerHTML -= 1;
//   if (segundo.innerHTML > 0) {
//     setTimeout(() => {
//       timerSegundo(segundo, minuto, hora, dia);
//     }, "1000");
//   } else {
//     timerMinuto(segundo, minuto, hora, dia);
//   }
// }

// function timerMinuto(segundo, minuto, hora, dia) {
//   minuto.innerHTML = parseInt(minuto.innerHTML);
//   minuto.innerHTML -= 1;
//   segundo.innerHTML = 60;

//   if (minuto.innerHTML == 0) {
//     timerHora(segundo, minuto, hora, dia);
//   } else {
//     setTimeout(() => {
//       timerSegundo(segundo, minuto, hora, dia);
//     }, "1000");
//   }
// }

// function timerHora(segundo, minuto, hora, dia) {
//   hora.innerHTML = parseInt(hora.innerHTML);
//   hora.innerHTML -= 1;
//   minuto.innerHTML = 59;
//   if (hora.innerHTML == 0) {
//     timerDia(segundo, minuto, hora, dia);
//   } else {
//     setTimeout(() => {
//       timerSegundo(segundo, minuto, hora, dia);
//     }, "1000");
//   }
// }

// function timerDia(segundo, minuto, hora, dia) {
//   dia.innerHTML = parseInt(dia.innerHTML);
//   dia.innerHTML -= 1;
//   hora.innerHTML = 23;
//   if (dia.innerHTML == 0) {
//     console.log("YEES");
//   } else {
//     setTimeout(() => {
//       timerSegundo(segundo, minuto, hora, dia);
//     }, "1000");
//   }
// }
// setTimeout(() => {
//   timerSegundo(segundo, minuto, hora, dia);
// }, "1 second");
