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
  let img_url = await clickImage(idiv);
  console.debug(img_url);
  
  //let img_name = 
  //chrome.chrome.downloads.download(options, function (downloadId) {});

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

  /*raw_url = 
  $("[jsaction='TMn9y:cJhY7b;;cFWHmd:s370ud;'] > [role='button']")
  .attr("href");*/

  //let img_url = raw_url.substr(7, raw_url.indexOf('&'));

  //return img_url;
}
