// const timer = document.getElementById('time');

// // function timing(){
// //     const now = new Date();
// //     const indianTime = now.toLocaleTimeString();
// //     timer.innerHTML = indianTime;
// // }

// // arrow function

// const timing = () => {
//     const now = new Date();
//     const indianTime = now.toLocaleTimeString();
//     timer.innerHTML = indianTime;
// }

// // har ek second me time update hoga through setInterval

// setInterval(timing,1000);

// // control CSS through JS

// // timer.style.fontSize = "100px";
// // timer.style.height = "100vh";
// // timer.style.display = "flex";
// // timer.style.justifyContent = "center";
// // timer.style.alignItems = "center";


// clock

const secondHand = document.getElementById('second-hand');
const minuteHand = document.getElementById('minute-hand');
const hourHand = document.getElementById('hour-hand');

function clockTick(){
    const date = new Date();
    const seconds = date.getSeconds() / 60;
    const minutes = (seconds + date.getMinutes()) / 60;
    const hours = (minutes + date.getHours()) / 12;

    rotateClockHand(secondHand, seconds);
    rotateClockHand(minuteHand, minutes);
    rotateClockHand(hourHand, hours);
}

function rotateClockHand(element, rotation){
    element.style.setProperty('--rotate', rotation * 360);
}

setInterval(clockTick, 1000);

// header click functionality

// Event listeners for all sections
document.getElementById('olympic').addEventListener('click', function (e) {
    e.preventDefault();
    showOnlyContent('olympic-content');
});

document.getElementById('ipl').addEventListener('click', function (e) {
    e.preventDefault();
    showOnlyContent('ipl-content');
});

document.getElementById('fifa').addEventListener('click', function (e) {
    e.preventDefault();
    showOnlyContent('fifa-content');
});

document.getElementById('college').addEventListener('click', function (e) {
    e.preventDefault();
    showOnlyContent('college-leave-content');
});

document.getElementById('placement').addEventListener('click', function (e) {
    e.preventDefault();
    showOnlyContent('placement-content');
});

// Function to display only the selected content and hide specific divs
function showOnlyContent(contentId) {
    // Hide the 'content' and 'timerClock' divs
    document.querySelector('.content').classList.add('hidden');
    document.querySelector('.timerClock').classList.add('hidden');

    // Hide all content in the #header-content-area
    const allContents = document.querySelectorAll('#header-content-area > div');
    allContents.forEach(content => content.classList.add('hidden'));

    // Show the selected content
    const selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.classList.remove('hidden');
    }

    const re = document.getElementById('header-content-area');

    // re.style.backgroundColor = 'gray';
    re.style.width = '100%';
}


// CountDownTimer function for all

function initializeCountdownTimer(elementId, targetDate) {
    const timerElement = document.getElementById(elementId);

    function updateTimer() {
        const now = new Date();
        const target = new Date(targetDate);
        const timeRemaining = target - now;

        if (timeRemaining <= 0) {
            timerElement.innerHTML =
                `<span class="big">0</span> <span class="small">Days</span>
                <span class="big">0</span> <span class="small">Hours</span>
                <span class="big">0</span> <span class="small">Minutes</span>
                <span class="big">0</span> <span class="small">Seconds</span>`;
            return; // Stop updating if the target date has passed
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
        const seconds = Math.floor((timeRemaining / 1000) % 60);

        timerElement.innerHTML =
            `<span class="big">${days}</span> <span class="small">Days</span><span class="dd">:</span>
             <span class="big">${hours}</span> <span class="small">Hours</span><span class="dd">:</span>
             <span class="big">${minutes}</span> <span class="small">Minutes</span><span class="dd">:</span>
             <span class="big">${seconds}</span> <span class="small">Seconds</span>`;
    }

    // Update the timer every second
    setInterval(updateTimer, 1000);
    updateTimer(); // Initial call to display immediately
}

// Initialize all countdown timers

initializeCountdownTimer('olympic-time-box', '2028-07-14');
initializeCountdownTimer('ipl-time-box', '2025-03-14');
initializeCountdownTimer('fifa-time-box', '2026-06-11');
initializeCountdownTimer('college-time-box', '2026-06-01');
initializeCountdownTimer('placement-time-box', '2026-07-01');

