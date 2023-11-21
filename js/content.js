console.debug("This site is available.");

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.debug(`Received message : ${request.greeting}`);
    sendResponse({response: "Response from background script"});
  });