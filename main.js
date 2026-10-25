const pantalla = document.querySelector(".screen");
const buttons = document.querySelectorAll(".button");

buttons.forEach((boton) => {
  boton.addEventListener("click", () => {
    const btnPressed = boton.textContent;

    if (boton.id === "c") {
      pantalla.textContent = "0";
      return;
    }

    if (boton.id === "backspace") {
      if (
        pantalla.textContent.length === 1 ||
        pantalla.textContent === "Error!"
      ) {
        pantalla.textContent = "0";
      } else {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
      }
      return;
    }

    if (boton.id === "result") {
      try {
        pantalla.textContent = parser(pantalla.textContent);
      } catch {
        pantalla.textContent = "Error!";
      }
      return;
    }

    if (pantalla.textContent === "0") {
      pantalla.textContent = btnPressed;
    } else {
      pantalla.textContent += btnPressed;
    }
  });
});
