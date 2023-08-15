const leadingZero = (i) => (i < 10)? "0"+i : i;

const currentDateContainer = document.querySelector('#current-date');
const mainMessageContainer = document.querySelector('#main-message');

const currentDate = new Date();
const shoppingSundays = [
    new Date(2023, 0, 31).toDateString(),
    new Date(2023, 2, 28).toDateString(),
    new Date(2023, 3, 25).toDateString(),
    new Date(2023, 5, 27).toDateString(),
    new Date(2023, 7, 29).toDateString(),
    new Date(2023, 11, 12).toDateString(),
    new Date(2023, 11, 19).toDateString(),

]
currentDateContainer.textContent = `${currentDate.getDate()}.${leadingZero(currentDate.getMonth()+1)}.${currentDate.getFullYear()}r.`

const isShoppingSundayString  = "Dzisiejsza niedziela jest handlowa 🥳"
const isNotShoppingSundayString  = "Dzisiejsza niedziela nie jest handlowa 😥"
mainMessageContainer.textContent =  shoppingSundays.includes(currentDate.toDateString()) ? isShoppingSundayString : isNotShoppingSundayString;


