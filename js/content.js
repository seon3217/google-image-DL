console.debug("This site is available.");
document.body.style.backgroundColor = "red"; // debug

// 受信する時はどちらもruntime
chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
    sendResponse(`recieved: ${request}`);

    collectImages();
  });

async function collectImages() {
  console.debug("start collectImages()");
  let image_divs = $("[jsaction='TMn9y:cJhY7b;;cFWHmd:s370ud;']");

  //each使え every image next component (idiv)
  let idiv = image_divs.first();//debug
  let img_name = getImageName(idiv);
  let img_url = await clickImage(idiv);
  
  let dl_opt = {
    filename: `test/${img_name}`,
    url: img_url
  };
  startDL(dl_opt);
  //chrome.downloads.download(dl_opt).then(id=>{});
  //downloads apiはbackgroudでしか使えないらしい！

}

function getImageName(idiv) {
  return idiv.children("h3").text();
}

async function clickImage(idiv) {
  let t = idiv.children("[role='button']");
  t[0].click();

  return new Promise((resolve) => {
    setTimeout(()=>{
      let raw_url = 
        $("[jsaction='TMn9y:cJhY7b;;cFWHmd:s370ud;'] > [role='button']")
        .attr("href");
      let img_url = decodeURIComponent(raw_url.substr(15, raw_url.indexOf('&')-15));
      resolve(img_url);
    }, 100)
  })
}

function startDL(dl_opt) {
  chrome.runtime.sendMessage(dl_opt, (response)=>{
    console.debug(response);
  });
}
