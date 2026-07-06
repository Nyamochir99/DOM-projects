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

const formatResult = (value) => {
  const num = Number(value);
  if (!Number.isFinite(num)) return String(value);

  const decimalLength = (() => {
    const str = num.toString();
    if (str.includes("e")) return 6;
    const decimal = str.split(".")[1];
    return decimal ? decimal.length : 0;
  })();

  const rounded = Math.round(num * 1e5) / 1e5;

  if (decimalLength <= 5) {
    return String(rounded).replace(/\.?0+$/, "") || "0";
  }

  return rounded.toFixed(5).replace(/0+$/, "").replace(/\.$/, "");
};

const getLastSegment = (value) => {
  let lastIndex = -1;
  const start = value.startsWith("-") ? 1 : 0;
  for (let i = start; i < value.length; i++) {
    if ("+x/%".includes(value[i]) || (value[i] === "-" && i > start)) {
      lastIndex = i;
    }
  }
  return value.slice(lastIndex + 1);
};

const hasTrailingOperator = (value) => {
  if (value.endsWith("%")) return false;
  if (/[+x/]$/.test(value)) return true;
  if (!value.endsWith("-")) return false;

  const before = value.slice(0, -1);
  if (before === "" || before === "-") return true;

  const lastChar = before.slice(-1);
  return "+x/%".includes(lastChar) || /[0-9.]/.test(lastChar);
};

let hariu = false;

const startDigitInput = (digit) => {
  if (hariu) {
    input.value = digit;
    hariu = false;
    history.classList.add("hidden");
    scrollToRight();
    return true;
  }
  return false;
};

const startOperatorInput = () => {
  if (hariu) {
    hariu = false;
    history.classList.add("hidden");
  }
};

one.addEventListener("click", () => {
  if (startDigitInput("1")) return;
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
  if (startDigitInput("2")) return;
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
  if (startDigitInput("3")) return;
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
  if (startDigitInput("4")) return;
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
  if (startDigitInput("5")) return;
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
  if (startDigitInput("6")) return;
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
  if (startDigitInput("7")) return;
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
  if (startDigitInput("8")) return;
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
  if (startDigitInput("9")) return;
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
  if (hariu) {
    input.value = "0";
    hariu = false;
    history.classList.add("hidden");
    scrollToRight();
    return;
  }
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
  if (hariu) {
    input.value = "0.";
    hariu = false;
    history.classList.add("hidden");
    scrollToRight();
    return;
  }
  if (input.value === "") {
    input.value = "0.";
  } else if (getLastSegment(input.value).includes(".")) {
    input.value += "";
  } else {
    input.value += ".";
  }
  scrollToRight();
});
nemehHasah.addEventListener("click", () => {
  if (
    input.value.includes("+") ||
    input.value.includes("x") ||
    input.value.includes("%") ||
    input.value.includes("/") ||
    /(?<=[0-9])-/.test(input.value)
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
  hariu = false;
  history.classList.add("hidden");
});
backspace.addEventListener("click", () => {
  hariu = false;
  input.value = input.value.slice(0, -1);
  scrollToRight();
});
percentage.addEventListener("click", () => {
  startOperatorInput();
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
  startOperatorInput();
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
  startOperatorInput();
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
  startOperatorInput();
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
  startOperatorInput();
  if (input.value.endsWith("-")) {
    input.value += "";
  } else {
    input.value += "-";
  }
  scrollToRight();
});
tentsuu.addEventListener("click", () => {
  let tenc = input.value;
  let blyat;
  if (tenc === "" || tenc === "-") {
    return;
  }
  let tiltProMax = tenc.startsWith("-") ? tenc.slice(1) : tenc;
  if (!/[+/%x-]/.test(tiltProMax)) {
    return;
  }
  if (hasTrailingOperator(tenc)) {
    return;
  }

  if (tenc.includes("x")) {
    tenc = tenc.replaceAll("x", "*");
  }
  if (/[+/%x-]/.test(input.value)) {
    try {
      if (tenc.includes("%")) {
        if (tenc.endsWith("%")) {
          let huviToo = tenc.split("%").length - 1;
          if (huviToo > 1) {
            input.value = "Error";
            hariu = true;
            return;
          }
          blyat = eval(tenc.replace("%", "*0.01"));
        } else {
          input.value = "Error";
          hariu = true;
          return;
        }
      } else if (tenc === "") {
        return;
      } else {
        blyat = eval(tenc);
      }
    } catch {
      input.value = "Error";
      hariu = true;
      return;
    }
  } else {
    return;
  }
  if (!isFinite(blyat)) {
    input.value = "Error";
    hariu = true;
    return;
  }
  history.innerText = input.value;
  history.classList.remove("hidden");
  input.value = formatResult(blyat);
  hariu = true;
  scrollToRight();
  scrollHistory();
});

history.addEventListener("click", () => {
  input.value = history.innerText;
  history.classList.add("hidden");
  hariu = false;
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
