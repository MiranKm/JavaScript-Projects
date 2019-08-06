const clockSelector = document.querySelector('.clock');
const clockSelector2 = document.querySelector('.clock2');
const imageSlider = document.querySelector('.image-slider');

let hour, myHtml, myHtml2, minute, second, period, day;


const daysArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]

const colorsArray = [
    "#F44336",
    "#E91E63",
    "#9C27B0",
    "#673AB7",
    "#3F51B5",
    "#2196F3",
    "#03A9F4",
    "#00BCD4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#FFC107",
    "#FF9800",
    "#FF5722",
    "#795548",
    "#9E9E9E",
    "#607D8B",
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
    } else {
        myHtml2 = `<p> ${daysArray[day]} ${hour-12}:${minute}:${second}:${period}</p>`;
    }

    if (clockSelector) {
        clockSelector.innerHTML = myHtml;
        clockSelector2.innerHTML = myHtml2;
    }
    // console.log(clockSelector.firstElementChild.style.backgroundColor=colorsArray[
    //     Math.round(Math.random(0)*colorsArray.length)
    // ]);

    // console.log(clockSelector2.firstElementChild.style.);
    console.log(
        imageSlider
    );
}, 1000);