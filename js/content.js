console.debug("This site is available.");
document.body.style.backgroundColor = "red"; // debug

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
  let img_url = clickImage(idiv);
  console.debug("get?");//debug
  //let img_url = abstractURL(raw_url);
  //let img_name = 
  //chrome.chrome.downloads.download(options, function (downloadId) {});

}

function clickImage(idiv) {
  let t = idiv.children("[role='button']");
  t[0].click();

  let raw_url = null;
  while (!raw_url) {
    raw_url = 
        $("[jsaction='TMn9y:cJhY7b;;cFWHmd:s370ud;'] > [role='button']")
        .attr("href");
  }

  let img_url = raw_url.substr(7, raw_url.indexOf('&'));

  return img_url;
}

function abstractURL(raw_url) {
  // index7から&の前まで

}
