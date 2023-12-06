$('#run-btn').on('click', function (e) {

  console.debug("clicked");

  // chrome.runtime.sendMessageでruntime宛てにメッセージを送信
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, "Hello.", (response)=>{
      console.debug(response);
      window.close();
    });
  });
  
});

$("#jump-setting").click( ()=>{
  console.debug("setting clicked");
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.create({
      url: "brave://settings/downloads",
      index: tabs[0].index + 1
    });
  });
});

$("#readme").click( ()=>{
  console.debug("readme clicked");
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.create({
      url: "readme.html",
      index: tabs[0].index + 1
    });
  });
});