const billInput = document.getElementById("input");
const tips = document.getElementById("tips");
const total = document.getElementById("total");
const reset = document.getElementById("reset");

const sanitizeBillInput = (value) => {
  let sanitized = value.replace(/[^\d.]/g, "");

  const parts = sanitized.split(".");
  if (parts.length > 2) {
    sanitized = parts[0] + "." + parts.slice(1).join("");
  }
  const finalParts = sanitized.split(".");
  if (finalParts.length === 2) {
    sanitized = finalParts[0] + "." + finalParts[1].substring(0, 2);
  }
  return sanitized;
};
billInput.addEventListener("input", () => {
  billInput.value = sanitizeBillInput(billInput.value);
});

reset.addEventListener("click", () => {
  total.innerText = "0.00";
  billInput.value = "0.00";
});

tips.addEventListener("click", (event) => {
  let sum = 0;
  let final = 0;
  if (event.target.tagName != "BUTTON") return;
  sum =
    (parseFloat(billInput.value) *
      parseFloat(event.target.textContent.replace("%", ""))) /
    100;
  final = parseFloat(billInput.value) + sum;
  total.innerText = final.toFixed(2);
});

billInput.addEventListener("focus", function () {
  const dotIndex = billInput.value.indexOf(".");
  if (dotIndex !== -1) {
    setTimeout(() => {
      billInput.setSelectionRange(0, dotIndex);
    }, 0);
  }
});

billInput.addEventListener("blur", function () {
  if (this.value.trim() === "" || this.value === ".") {
    this.value = "0.00";
  }
});
