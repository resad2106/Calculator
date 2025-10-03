const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;
    const action = button.dataset.action;

    if (action === "clear") {
      display.value = "";
    } else if (action === "delete") {
      display.value = display.value.slice(0, -1);
    } else if (action === "calculate") {
      try {
        display.value = eval(display.value.replace(/÷/g, "/").replace(/×/g, "*"));
      } catch {
        display.value = "Error";
      }
    } else if (value) {
      display.value += value;
    }
  });
});

document.addEventListener("keydown", (e) => {
  if (/[0-9+\-*/.%]/.test(e.key)) {
    display.value += e.key;
  } else if (e.key === "Enter") {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  } else if (e.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (e.key === "Escape") {
    display.value = "";
  }
});
