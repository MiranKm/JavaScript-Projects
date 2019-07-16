const textArea = document.getElementById('txt');
const clearBtn = document.getElementById('clear');

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