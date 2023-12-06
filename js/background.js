chrome.runtime.onMessage.addListener((dl_opt, sender, sendResponse)=>{
    if (dl_opt.filename) {
      sendResponse(`Recieved ${dl_opt.filename}`);
      chrome.downloads.download(dl_opt);
    }
  });