//creates context menu
chrome.contextMenus.create({
    title: "Remove spaces and/or convert to desktop link", 
    id: "fashionreps-remove-links",
    contexts:["selection"], 
  });

//converts link to desktop and removes spaces
chrome.contextMenus.onClicked.addListener(function (clickData) {
    let link = clickData.selectionText
    link = link.replace(/\s/g, '')
    if(link.startsWith("https://m.intl")){
      var myid = link.substring(
        link.lastIndexOf("id"), 
        link.lastIndexOf("&")
      );
      link = "https://item.taobao.com/item.htm?"+myid
    }
    chrome.tabs.create({ url: link });
});

