async function getCurrentTab() {
  console.debug("start getting tab");
	let queryOptions = { active: true, currentWindow: true };
	let [tab] = await chrome.tabs.query(queryOptions);
	return tab;
}

$('#run-btn').on('click', function (e) {

    console.debug("clicked");

    let ctab_id = 0;
    getCurrentTab().then((tab) => {
      console.debug(`ID: ${tab.id} title: ${tab.title}`);
      ctab_id = tab.id;
    }).catch((error)=>{
      console.debug(error);
    });

    // chrome.runtime.sendMessageでruntime宛てにメッセージを送信
    let rtnPromise = chrome.tabs.sendMessage(ctab_id, {greeting: "Greeting from the content script"});
    rtnPromise
      .then(
        function (message) { // レスポンス受信時
          // messageは 受信側で sendResponse関数に渡した引数が返ってきます
          console.debug(`Received response:  ${message.response}`);
        }
      )
      .catch(
        function (error) { // エラー時
          console.debug(`Error: ${error}`);
        }
      )
    
  });