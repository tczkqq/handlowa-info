const leadingZero = (i) => (i < 10)? "0"+i : i;

const currentDateContainer = document.querySelector('#current-date');
const mainMessageContainer = document.querySelector('#main-message');

const currentDate = new Date();
const shoppingSundays = [
    new Date(2023, 0, 29).toDateString(),
    new Date(2023, 3, 2).toDateString(),
    new Date(2023, 3, 30).toDateString(),
    new Date(2023, 5, 25).toDateString(),
    new Date(2023, 7, 27).toDateString(),
    new Date(2023, 11, 17).toDateString(),
    new Date(2023, 11, 24).toDateString(),
    new Date(2024, 0, 28).toDateString(),
    new Date(2024, 2, 24).toDateString(),
    new Date(2024, 3, 28).toDateString(),
    new Date(2024, 7, 25).toDateString(),
    new Date(2024, 11, 15).toDateString(),
    new Date(2024, 11, 22).toDateString()
]
currentDateContainer.textContent = `${currentDate.getDate()}.${leadingZero(currentDate.getMonth()+1)}.${currentDate.getFullYear()}r.`

const isShoppingSundayString  = "Dzisiejsza niedziela jest handlowa 🥳"
const isNotShoppingSundayString  = "Dzisiejsza niedziela nie jest handlowa 😥"
mainMessageContainer.textContent =  shoppingSundays.includes(currentDate.toDateString()) ? isShoppingSundayString : isNotShoppingSundayString;


