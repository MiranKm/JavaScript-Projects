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


function passEvent(e) {
    const text = e.srcElement.value;
    seeResult(text)
}

function seeResult(text) {
    const textSplit = text.trim().split(' ');
    resultText.innerText = "Result: " + textSplit.length;
    console.log(textSplit.length);
}

textArea.addEventListener('change', passEvent)


document.querySelector('.see').addEventListener('click', function () {
    seeResult(textArea.value);
});