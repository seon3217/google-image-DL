$('#run-btn').on('click', function (e) {

    console.debug("clicked");

    // chrome.runtime.sendMessageでruntime宛てにメッセージを送信
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, "Hello.", (response)=>{
        alert(response);
        window.close();
      });
    });
    
  });