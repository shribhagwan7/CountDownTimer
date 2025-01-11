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

// Olympic countDown timer

const OlympicTimer = document.getElementById('olympic-time-box');

function OlympicTiming(){
    const date1 = new Date();
    const date2 = new Date("2028-07-14");
    const date = date2 - date1;
    const days = Math.floor(date/(1000*60*60*24));
    const hour = Math.floor((date/(1000*60*60))%24);
    const minute = Math.floor((date/(1000*60))%60);
    const second = Math.floor((date/(1000))%60);

    // timer.innerHTML = (`${days} Days: ${hour} hour: ${minute} minute: ${second} second`);

    OlympicTimer.innerHTML =
        `<span class="big">${days}</span> <span class="small">Days</span><span class="dd">:</span>
        <span class="big">${hour}</span> <span class="small">Hours</span><span class="dd">:</span>
        <span class="big">${minute}</span> <span class="small">Minutes</span><span class="dd">:</span>
        <span class="big">${second}</span> <span class="small">Seconds</span>
    `;
}

setInterval(OlympicTiming, 1000);

// ipl countDown timer

const IplTimer = document.getElementById('ipl-time-box');

function IplTiming(){
    const date1 = new Date();
    const date2 = new Date("2025-03-14");
    const date = date2 - date1;
    const days = Math.floor(date/(1000*60*60*24));
    const hour = Math.floor((date/(1000*60*60))%24);
    const minute = Math.floor((date/(1000*60))%60);
    const second = Math.floor((date/(1000))%60);
    
    IplTimer.innerHTML =
        `<span class="big">${days}</span> <span class="small">Days</span><span class="dd">:</span>
        <span class="big">${hour}</span> <span class="small">Hours</span><span class="dd">:</span>
        <span class="big">${minute}</span> <span class="small">Minutes</span><span class="dd">:</span>
        <span class="big">${second}</span> <span class="small">Seconds</span>
    `;
}

setInterval(IplTiming, 1000);

// fifa countDown timer

const FifaTimer = document.getElementById('fifa-time-box');

function FifaTiming(){
    const date1 = new Date();
    const date2 = new Date("2026-06-11");
    const date = date2 - date1;
    const days = Math.floor(date/(1000*60*60*24));
    const hour = Math.floor((date/(1000*60*60))%24);
    const minute = Math.floor((date/(1000*60))%60);
    const second = Math.floor((date/(1000))%60);
    
    FifaTimer.innerHTML =
        `<span class="big">${days}</span> <span class="small">Days</span><span class="dd">:</span>
        <span class="big">${hour}</span> <span class="small">Hours</span><span class="dd">:</span>
        <span class="big">${minute}</span> <span class="small">Minutes</span><span class="dd">:</span>
        <span class="big">${second}</span> <span class="small">Seconds</span>
    `;
}

setInterval(FifaTiming, 1000);

// college leave countDown timer

const CollegeTimer = document.getElementById('college-time-box');

function CollegeTiming(){
    const date1 = new Date();
    const date2 = new Date("2026-06-01");
    const date = date2 - date1;
    const days = Math.floor(date/(1000*60*60*24));
    const hour = Math.floor((date/(1000*60*60))%24);
    const minute = Math.floor((date/(1000*60))%60);
    const second = Math.floor((date/(1000))%60);
    
    CollegeTimer.innerHTML =
        `<span class="big">${days}</span> <span class="small">Days</span><span class="dd">:</span>
        <span class="big">${hour}</span> <span class="small">Hours</span><span class="dd">:</span>
        <span class="big">${minute}</span> <span class="small">Minutes</span><span class="dd">:</span>
        <span class="big">${second}</span> <span class="small">Seconds</span>
    `;
}

setInterval(CollegeTiming, 1000);

// placement countDown timer

const PlacementTimer = document.getElementById('placement-time-box');

function PlacementTiming(){
    const date1 = new Date();
    const date2 = new Date("2026-07-01");
    const date = date2 - date1;
    const days = Math.floor(date/(1000*60*60*24));
    const hour = Math.floor((date/(1000*60*60))%24);
    const minute = Math.floor((date/(1000*60))%60);
    const second = Math.floor((date/(1000))%60);
    
    PlacementTimer.innerHTML =
        `<span class="big">${days}</span> <span class="small">Days</span><span class="dd">:</span>
        <span class="big">${hour}</span> <span class="small">Hours</span><span class="dd">:</span>
        <span class="big">${minute}</span> <span class="small">Minutes</span><span class="dd">:</span>
        <span class="big">${second}</span> <span class="small">Seconds</span>
    `;
}

setInterval(PlacementTiming, 1000);
