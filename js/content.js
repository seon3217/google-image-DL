console.debug("This site is available.");
document.body.style.backgroundColor = "red"; // debug

// 受信する時はどちらもruntime
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.debug(`Received message : ${request.greeting}`);
    setTimeout(()=>sendResponse({response: "Response from background script"}), 1000);
    return true;
  });