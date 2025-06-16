const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const targetDate = new Date("July 9, 2025 20:00:00").getTime();

function animateChange(el, newValue) {
    if (el.innerText !== newValue.toString().padStart(2, "0")) {
        el.parentElement.classList.add("animate");
        setTimeout(() => el.parentElement.classList.remove("animate"), 200);
    }
    el.innerText = newValue.toString().padStart(2, "0");
}

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        document.getElementById("countdown-timer").innerHTML = "🎂 È il momento della festa! 🎉";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    animateChange(daysEl, days);
    animateChange(hoursEl, hours);
    animateChange(minutesEl, minutes);
    animateChange(secondsEl, seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);
