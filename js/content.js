console.debug("This site is available.");

// 受信する時はどちらもruntime
chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
    sendResponse(`recieved: ${request}`);

    collectImages();
  });

async function collectImages() {

  console.debug("start collectImages()");

  let search_q = editForPath($("input#REsRA").val(), '');
  let image_divs = $("[jsaction='TMn9y:cJhY7b;;cFWHmd:s370ud;']"); //最大48個入る

  //downloaditemのstateがin_progressな物が3つあった場合待機（問題なさそうなので保留）
  //setIntervalで0.5秒ごとに進行中の数調べるアロー関数をawaitさせる？
  image_divs.each(async function (index) {
    //if (index>=30) return false;//debug
    let img_url = await clickImage($(this));
    let img_name = getImageName($(this));
  
    let dl_opt = {
      filename: `${search_q}/${img_name}.jpg`, //大体jpgやろという暫定的な処置
      url: img_url,
      conflictAction: "uniquify"
    };
    startDL(dl_opt);
  })

}

function editForPath(arg_str, alt_char) {
  let forbidden_chars = /[\\\/:\*\?\"<>\|]/g;
  return arg_str.replace(forbidden_chars, alt_char);
}

function getImageName(idiv) {
  //拡張子を付けなきゃいけない
  let raw_name = idiv.children("h3").text();
  let img_name = editForPath(raw_name, ' ');
  return img_name;
}

async function clickImage(idiv) {
  let t = idiv.children("[role='button']");
  t[0].click();

  return new Promise((resolve) => {
    setTimeout(()=>{
      let raw_url = t.attr("href");
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
