const pantalla = document.querySelector(".screen");
const buttons = document.querySelectorAll(".button");

buttons.forEach((boton) => {
  boton.addEventListener("click", () => {
    const btnPressed = boton.textContent;

    if (pantalla.textContent === "0") {
      pantalla.textContent = btnPressed;
    } else {
      pantalla.textContent += btnPressed;
    }
  });
});
