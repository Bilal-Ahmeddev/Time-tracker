let totalTime = 0;
let lastActiveTime = Date.now();


chrome.storage.local.get(["totalTime"], (data) => {
    totalTime = data.totalTime || 0;
});


function updateTime() {
    let currentTime = Date.now();
    totalTime += (currentTime - lastActiveTime) / 1000; 
    lastActiveTime = currentTime;
    chrome.storage.local.set({ totalTime });
}


chrome.runtime.onStartup.addListener(() => {
    lastActiveTime = Date.now();
});

chrome.runtime.onSuspend.addListener(updateTime);

chrome.windows.onFocusChanged.addListener((windowId) => {
    if (windowId !== chrome.windows.WINDOW_ID_NONE) {
        lastActiveTime = Date.now();
    } else {
        updateTime();
    }
});


setInterval(updateTime, 1000);
