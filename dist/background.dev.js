"use strict";

var totalTime = 0;
var lastActiveTime = Date.now();
chrome.storage.local.get(["totalTime"], function (data) {
  totalTime = data.totalTime || 0;
});

function updateTime() {
  var currentTime = Date.now();
  totalTime += (currentTime - lastActiveTime) / 1000;
  lastActiveTime = currentTime;
  chrome.storage.local.set({
    totalTime: totalTime
  });
}

chrome.runtime.onStartup.addListener(function () {
  lastActiveTime = Date.now();
});
chrome.runtime.onSuspend.addListener(updateTime);
chrome.windows.onFocusChanged.addListener(function (windowId) {
  if (windowId !== chrome.windows.WINDOW_ID_NONE) {
    lastActiveTime = Date.now();
  } else {
    updateTime();
  }
});
setInterval(updateTime, 1000);
//# sourceMappingURL=background.dev.js.map
