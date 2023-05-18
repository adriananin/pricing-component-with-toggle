const toggleSwitch = document.getElementById("toggle-period");

const basicPrice = document.getElementById("basic-price");
const proPrice = document.getElementById("professional-price");
const masterPrice = document.getElementById("master-price");

toggleSwitch.addEventListener("change", function () {
  if (this.checked) {
    // If the toggle switch is checked, change the price
    basicPrice.textContent = "19.99";
    proPrice.textContent = "24.99";
    masterPrice.textContent = "39.99";
  } else {
    basicPrice.textContent = "199.99";
    proPrice.textContent = "249.99";
    masterPrice.textContent = "399.99";
  }
});
