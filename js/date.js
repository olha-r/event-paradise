const minDate = document.getElementById("date");
const currentDate = new Date();
const day = currentDate.getDate();

if (day < 10) {
    day = `0${day}`;
}
const month = currentDate.getMonth();

if (month < 10) {
    month = `0${month}`;
}
const year = currentDate.getFullYear();
const today = `${year}-${month + 1}-${day}`;

minDate.setAttribute("min", today);