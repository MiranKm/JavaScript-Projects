const textArea = document.getElementById('txt');
const clearBtn = document.getElementById('clear');
const resultText = document.getElementById('result');

clearBtn.addEventListener('click', function () {
    console.log(textArea.value);
    textArea.value = '';
    textArea.focus();
});

document.querySelector('.copy').addEventListener('click', function () {
    textArea.select();
    document.execCommand('copy');
    textArea.focus();

});

document.querySelector('.paste').addEventListener('click', function () {
    navigator.clipboard.readText().then(clipText =>
        textArea.value = clipText);

    textArea.focus();
    document.execCommand("paste");
    console.log(textArea.value);
});


textArea.addEventListener('change', function (e) {

    const text = e.srcElement.value;
    const textSplit= text.trim().split(' ');

    resultText.innerText ="Result: "+textSplit.length;
    console.log(e.srcElement.value);
})
