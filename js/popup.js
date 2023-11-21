$('#run-btn').on('click', function (e) {

    console.debug("clicked");

    // chrome.runtime.sendMessageでruntime宛てにメッセージを送信
    chrome.runtime.sendMessage({
      greeting: "Greeting from the content script"
    }).then(
      function (message) { // レスポンス受信時
        // messageは 受信側で sendResponse関数に渡した引数が返ってきます
        console.debug(`Received response:  ${message.response}`);
      },
      function (error) { // エラー時
        console.debug(`Error: ${error}`);
      }
    )
  });