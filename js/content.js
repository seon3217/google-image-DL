console.debug("This site is available.");
document.body.style.backgroundColor = "red"; // debug

// 受信する時はどちらもruntime
chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
    sendResponse(`recieved: ${request}`);
  });