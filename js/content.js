console.debug("This site is available.");
document.body.style.backgroundColor = "red"; // debug

//set DL option (choose directory)

// 受信する時はどちらもruntime
chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
    sendResponse(`recieved: ${request}`);

    collectImages();
  });

function collectImages() {
  console.debug("start collectImages()");
  let image_divs = $("[jsaction='TMn9y:cJhY7b;;cFWHmd:s370ud;']");
  //each使え every image next component (idiv)
  let idiv = image_divs.first();//debug
  let raw_url = clickImage(idiv);
  console.debug("get?");//debug
  //let img_url = abstractURL(raw_url);
  //let img_name = 
  //chrome.chrome.downloads.download(options, function (downloadId) {});

}

function clickImage(idiv) {
  let t = idiv.children("[role='button']");
  t[0].click();

  let raw_url = null;
  let startMsec = new Date();
  //while (new Date()-startMsec < 1000);
  while (!raw_url) {
    raw_url = 
        $("[jsaction='TMn9y:cJhY7b;;cFWHmd:s370ud;'] > [role='button']")
        .attr("href");
  }
  return raw_url;
}

function abstractURL(raw_url) {
  // 
}