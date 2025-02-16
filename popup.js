
function calculateAge(birthdate) {
    let birthDate = new Date(birthdate);
    let now = new Date();
    
   
    let ageMilliseconds = now - birthDate;
    

    let seconds = Math.floor(ageMilliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let years = Math.floor(days / 365.25); 


    let remainingDays = days % 365.25;
    let remainingHours = hours % 24;
    let remainingMinutes = minutes % 60;
    let remainingSeconds = seconds % 60;

    return `${years} years, ${remainingDays} days, ${remainingHours} hours, ${remainingMinutes} minutes, ${remainingSeconds} seconds`;
}


function updateAge() {
    document.getElementById("age").innerText = calculateAge("1999-10-17");
}

function formatTime(seconds) {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = Math.floor(seconds % 60);
    return `${hrs}h ${mins}m ${secs}s`;
}

function updateTimeDisplay() {
    chrome.storage.local.get(["totalTime"], (result) => {
        let timeSpent = result.totalTime || 0;
        document.getElementById("time").innerText = formatTime(timeSpent);
    });
}


setInterval(updateTimeDisplay, 1000);


updateTimeDisplay();


const quotes = [
    "Keep pushing forward! 💪",
    "Success is no accident! 🚀",
    "Dream big and dare to fail! 🌟",
    "Every day is a second chance! 🔥"
];

document.querySelector(".quote").innerText = quotes[Math.floor(Math.random() * quotes.length)];


setInterval(updateAge, 1000);


updateAge();
