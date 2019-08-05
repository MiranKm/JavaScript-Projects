const clockSelector = document.querySelector('.clock');

let hour,myHtml, minute, second, period, day;

setInterval(() => {
    const currentTime = new Date();
    hour = currentTime.getHours();
    minute = currentTime.getMinutes();
    second = currentTime.getSeconds();
    day = currentTime.getUTCDay();

    if (hour < 12) {
        period = 'am';
    } else period = 'pm'

     myHtml = `<p> ${day} ${hour}:${minute}:${second}:${period} </p>`;

    if (clockSelector)
        clockSelector.innerHTML = myHtml;
}, 1000);