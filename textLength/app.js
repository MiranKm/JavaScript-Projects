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
