function calculate() {
    const amount = document.querySelector('.amount').value;
    const tipPercent = document.querySelector('.tip').value;

    const tip = amount * (tipPercent / 100);
    const total = Number(amount) + tip;

    document.querySelector('.amountTip').value = tip;
    document.querySelector('.total').value = `${total}`;
}
document.querySelector('.calcBtn').onclick = calculate;