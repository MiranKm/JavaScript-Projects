const clockSelector = document.querySelector('.clock');
const clockSelector2 = document.querySelector('.clock2');

let hour, myHtml, minute, second, period, day;


const daysArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]


setInterval(() => {
    const currentTime = new Date();
    hour = currentTime.getHours();
    minute = currentTime.getMinutes();
    second = currentTime.getSeconds();
    day = currentTime.getUTCDay();

    if (hour < 12) {
        period = 'am';
    } else period = 'pm'

    myHtml = `<p> ${daysArray[day]} ${hour}:${minute}:${second}:${period}</p>`;
    if (hour > 12) {

        myHtml2 = `<p> ${daysArray[day]} ${hour-12}:${minute}:${second}:${period}</p>`;
    }

    if (clockSelector) {
        clockSelector.innerHTML = myHtml;
        clockSelector2.innerHTML = myHtml2;


    }
}, 1000);