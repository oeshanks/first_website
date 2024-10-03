class Click {
  constructor(amt) {
    this.updateTotal(amt);
  }

  updateTotal(amt) {
    if (isNaN(amt) || amt === null) return; // Handle invalid input from the prompt

    const totalElement = document.getElementById("total");
    const currentTotal = parseInt(totalElement.innerHTML, 10);
    totalElement.innerHTML = currentTotal + amt;
  }
}
