let altura = document.getElementById("altura");
let peso = document.getElementById("peso");
let resultado = document.getElementById("resultado");

//DOM
document.querySelector(".btn").addEventListener("click", e => {
  e.preventDefault();

  let n1 = peso.value;
  let n2 = altura.value ** 2;
  console.log(n1);
  console.log(n2);
  let result = (n1 / n2) * 10000;
  console.log(result);
  let classificar;
  if (result < 18.5) {
    classificar = "Abaixo do peso";
  } else if (result >= 18.5 && result <= 24.9) {
    classificar = "Peso ideal";
  } else if (result >= 25 && result <= 29.9) {
    classificar = "Levemente acima do peso";
  } else if (result >= 30 && result <= 34.9) {
    classificar = "Obesidade 1";
  } else if (result >= 35 && result <= 39.9) {
    classificar = "Obesidade 2";
  } else {
    classificar = "Obesidade 3";
  }
  resultado.value = `${Math.floor(result)} - ${classificar}`;
});
