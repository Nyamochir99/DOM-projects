const input = document.getElementById("input");
const backspace = document.getElementById("backspace");
const clear = document.getElementById("clear");
const percentage = document.getElementById("percentage");
const huvaah = document.getElementById("huvaah");
const urjih = document.getElementById("urjih");
const hasah = document.getElementById("hasah");
const sum = document.getElementById("sum");
const nemehHasah = document.getElementById("nemehHasah");
const dot = document.getElementById("dot");
const tentsuu = document.getElementById("tentsuu");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const history = document.getElementById("history");

const scrollToRight = () => {
  input.scrollLeft = input.scrollWidth;
};
const scrollHistory = () => {
  history.scrollLeft = history.scrollWidth;
};

let hariu = false;

one.addEventListener("click", () => {
  let tiirsen = input.value;
  let tiirsenLast = tiirsen.slice(0, -1);
  if (/[+/%x-]0$/.test(input.value)) {
    input.value = tiirsenLast + "1";
  } else {
    if (input.value === "0") {
      input.value = "1";
    } else {
      input.value += "1";
    }
  }
  scrollToRight();
});
two.addEventListener("click", () => {
  let tiirsen = input.value;
  let tiirsenLast = tiirsen.slice(0, -1);
  if (/[+/%x-]0$/.test(input.value)) {
    input.value = tiirsenLast + "2";
  } else {
    if (input.value === "0") {
      input.value = "2";
    } else {
      input.value += "2";
    }
  }
  scrollToRight();
});
three.addEventListener("click", () => {
  let tiirsen = input.value;
  let tiirsenLast = tiirsen.slice(0, -1);
  if (/[+/%x-]0$/.test(input.value)) {
    input.value = tiirsenLast + "3";
  } else {
    if (input.value === "0") {
      input.value = "3";
    } else {
      input.value += "3";
    }
  }
  scrollToRight();
});
four.addEventListener("click", () => {
  let tiirsen = input.value;
  let tiirsenLast = tiirsen.slice(0, -1);
  if (/[+/%x-]0$/.test(input.value)) {
    input.value = tiirsenLast + "4";
  } else {
    if (input.value === "0") {
      input.value = "4";
    } else {
      input.value += "4";
    }
  }
  scrollToRight();
});
five.addEventListener("click", () => {
  let tiirsen = input.value;
  let tiirsenLast = tiirsen.slice(0, -1);
  if (/[+/%x-]0$/.test(input.value)) {
    input.value = tiirsenLast + "5";
  } else {
    if (input.value === "0") {
      input.value = "5";
    } else {
      input.value += "5";
    }
  }
  scrollToRight();
});
six.addEventListener("click", () => {
  let tiirsen = input.value;
  let tiirsenLast = tiirsen.slice(0, -1);
  if (/[+/%x-]0$/.test(input.value)) {
    input.value = tiirsenLast + "6";
  } else {
    if (input.value === "0") {
      input.value = "6";
    } else {
      input.value += "6";
    }
  }
  scrollToRight();
});
seven.addEventListener("click", () => {
  let tiirsen = input.value;
  let tiirsenLast = tiirsen.slice(0, -1);
  if (/[+/%x-]0$/.test(input.value)) {
    input.value = tiirsenLast + "7";
  } else {
    if (input.value === "0") {
      input.value = "7";
    } else {
      input.value += "7";
    }
  }
  scrollToRight();
});
eight.addEventListener("click", () => {
  let tiirsen = input.value;
  let tiirsenLast = tiirsen.slice(0, -1);
  if (/[+/%x-]0$/.test(input.value)) {
    input.value = tiirsenLast + "8";
  } else {
    if (input.value === "0") {
      input.value = "8";
    } else {
      input.value += "8";
    }
  }
  scrollToRight();
});
nine.addEventListener("click", () => {
  let tiirsen = input.value;
  let tiirsenLast = tiirsen.slice(0, -1);
  if (/[+/%x-]0$/.test(input.value)) {
    input.value = tiirsenLast + "9";
  } else {
    if (input.value === "0") {
      input.value = "9";
    } else {
      input.value += "9";
    }
  }
  scrollToRight();
});
zero.addEventListener("click", () => {
  if (/[+/%x-]$/.test(input.value)) {
    input.value += "0";
  } else if (/[+/%x-]0$/.test(input.value)) {
    input.value += "";
  } else {
    if (input.value === "0") {
      input.value = "0";
    } else {
      input.value += "0";
    }
  }
  scrollToRight();
});
dot.addEventListener("click", () => {
  if (input.value === "") {
    input.value = "0.";
  } else {
    if (input.value.includes(".")) {
      input.value += "";
    } else {
      input.value += ".";
    }
  }
  scrollToRight();
});
nemehHasah.addEventListener("click", () => {
  if (
    input.value.includes("+") ||
    input.value.includes("x") ||
    input.value.includes("%") ||
    input.value.includes("/")
  ) {
    return;
  } else {
    if (input.value.startsWith("-")) {
      if (input.value.split("-").length - 1 > 1) {
        return;
      } else if (input.value === "-") {
        input.value += "";
      } else {
        input.value = input.value.slice(1);
      }
    } else if (input.value.split("-").length - 1 > 1) {
      return;
    } else if (input.value === "") {
      input.value = "";
    } else {
      input.value = "-" + input.value;
    }
  }
  scrollToRight();
});
clear.addEventListener("click", () => {
  input.value = "";
});
backspace.addEventListener("click", () => {
  input.value = input.value.slice(0, -1);
  scrollToRight();
});
percentage.addEventListener("click", () => {
  let tilt = input.value;
  let lastTwo = tilt.slice(-2);
  if (input.value === "-") {
    input.value = "";
  } else if (
    input.value.endsWith("+") ||
    input.value.endsWith("-") ||
    input.value.endsWith("x") ||
    input.value.endsWith("/") ||
    input.value.endsWith("%")
  ) {
    if (
      tilt.endsWith("-") &&
      (lastTwo.startsWith("+") ||
        lastTwo.startsWith("x") ||
        lastTwo.startsWith("/") ||
        lastTwo.startsWith("%"))
    ) {
      input.value = tilt.slice(0, -2) + "%";
    } else {
      input.value = input.value.slice(0, -1) + "%";
    }
  } else if (input.value === "") {
    input.value += "";
  } else {
    input.value += "%";
  }
  scrollToRight();
});
huvaah.addEventListener("click", () => {
  let tilt = input.value;
  let lastTwo = tilt.slice(-2);
  if (input.value === "-") {
    input.value = "";
  } else if (
    input.value.endsWith("+") ||
    input.value.endsWith("-") ||
    input.value.endsWith("x") ||
    input.value.endsWith("/") ||
    input.value.endsWith("%")
  ) {
    if (
      tilt.endsWith("-") &&
      (lastTwo.startsWith("+") ||
        lastTwo.startsWith("x") ||
        lastTwo.startsWith("/") ||
        lastTwo.startsWith("%"))
    ) {
      input.value = tilt.slice(0, -2) + "/";
    } else {
      input.value = input.value.slice(0, -1) + "/";
    }
  } else if (input.value === "") {
    input.value += "";
  } else {
    input.value += "/";
  }
  scrollToRight();
});
urjih.addEventListener("click", () => {
  let tilt = input.value;
  let lastTwo = tilt.slice(-2);
  if (input.value === "-") {
    input.value = "";
  } else if (
    input.value.endsWith("+") ||
    input.value.endsWith("-") ||
    input.value.endsWith("x") ||
    input.value.endsWith("/") ||
    input.value.endsWith("%")
  ) {
    if (
      tilt.endsWith("-") &&
      (lastTwo.startsWith("+") ||
        lastTwo.startsWith("x") ||
        lastTwo.startsWith("/") ||
        lastTwo.startsWith("%"))
    ) {
      input.value = tilt.slice(0, -2) + "x";
    } else {
      input.value = input.value.slice(0, -1) + "x";
    }
  } else if (input.value === "") {
    input.value += "";
  } else {
    input.value += "x";
  }
  scrollToRight();
});
sum.addEventListener("click", () => {
  let tilt = input.value;
  let lastTwo = tilt.slice(-2);
  if (input.value === "-") {
    input.value = "";
  } else if (
    input.value.endsWith("+") ||
    input.value.endsWith("-") ||
    input.value.endsWith("x") ||
    input.value.endsWith("/") ||
    input.value.endsWith("%")
  ) {
    if (
      tilt.endsWith("-") &&
      (lastTwo.startsWith("+") ||
        lastTwo.startsWith("x") ||
        lastTwo.startsWith("/") ||
        lastTwo.startsWith("%"))
    ) {
      input.value = tilt.slice(0, -2) + "+";
    } else {
      input.value = input.value.slice(0, -1) + "+";
    }
  } else if (input.value === "") {
    input.value += "";
  } else {
    input.value += "+";
  }
  scrollToRight();
});
hasah.addEventListener("click", () => {
  if (input.value.endsWith("-")) {
    input.value += "";
  } else {
    input.value += "-";
  }
  scrollToRight();
});
tentsuu.addEventListener("click", () => {
  let tenc = input.value;
  let tiirchlee = tenc.slice(0, -1);
  let blyat;
  if (tenc === "" || tenc === "-") {
    return;
  }
  let tiltProMax = tenc.startsWith("-") ? tenc.slice(1) : tenc;
  if (!/[+/%x-]/.test(tiltProMax)) {
    return;
  }
  // let boliyoo = /[+/%x-]$/.test(tenc) ? tenc.slice(0, -1) : tenc;
  // let boliiPls = boliyoo.startsWith("-") ? boliyoo.slice(1) : boliyoo;
  if (/[+/%x-]$/.test(tenc)) {
    return;
  }

  if (tenc.includes("x")) {
    tenc = tenc.replaceAll("x", "*");
  }
  if (tiirchlee.includes("x")) {
    tiirchlee = tiirchlee.replaceAll("x", "*");
  }
  if (/[+/%x-]/.test(input.value)) {
    if (tenc.includes("%")) {
      if (tenc.endsWith("%")) {
        let huviToo = tenc.split("%").length - 1;
        if (huviToo > 1) {
          blyat = "0";
        } else {
          blyat = eval(tenc.replace("%", "*0.01"));
        }
      } else {
        blyat = "0";
      }
    } else if (tenc === "") {
      blyat = "";
    } else {
      let tiirelttt = eval(tenc);
      blyat = Number.isInteger(tiirelttt) ? bodolt : parseFloat(tiirelttt.toFixed(5));
    }
  } else {
    return;
  }
  if (!isFinite(blyat)) {
    return;
  }
  history.innerText = input.value;
  history.classList.remove("hidden");
  input.value = blyat;
  hariu = true;
  scrollToRight();
  scrollHistory();
});

history.addEventListener("click", () => {
  input.value = history.innerText;
  history.classList.add("hidden");
  scrollToRight();
});

// keyboard support

const keyMap = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  ".": "dot",
  ",": "dot",
  "+": "sum",
  "-": "hasah",
  "*": "urjih",
  "/": "huvaah",
  "%": "percentage",
  Enter: "tentsuu",
  "=": "tentsuu",
  Backspace: "backspace",
  Escape: "clear",
  Delete: "clear",
};

document.querySelectorAll(".button").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.id !== "tentsuu") {
      history.classList.add("hidden");
    }
  });
});

window.addEventListener("keydown", (event) => {
  const buttonId = keyMap[event.key];
  // if (typeof buttonId === "string")
  if (buttonId) {
    event.preventDefault();
    const btn = document.getElementById(buttonId);
    if (buttonId !== "tentsuu") {
      history.classList.add("hidden");
    }

    btn.classList.add("kbsup");
    btn.click();
  }
});

window.addEventListener("keyup", (event) => {
  const buttonId = keyMap[event.key];
  if (buttonId) {
    const btn = document.getElementById(buttonId);
    btn.classList.remove("kbsup");
  }
});
