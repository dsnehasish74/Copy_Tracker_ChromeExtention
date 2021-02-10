//Creating a Context Menu
var menuItem = {
    "id": "CopyTracker",
    "title": "Copy to Copy Tracker",
    "contexts": ["selection"]
};
chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener((data)=>{
    if(data.menuItemId=="CopyTracker"){
        let copys = new Array();
        chrome.storage.sync.get(['copyTracker','limit'], function(result) {
            if(result.copyTracker!= undefined){
                copys = (result.copyTracker);
            }
            //To keep maintain the limit
            let lim = result.limit!=undefined?result.limit:10;
            let no = copys.length;
            while(no>=lim){
                copys.shift();
                no--;
            }
            copys.push(data.selectionText);
            chrome.storage.sync.set({"copyTracker": copys});
          });
    }
})

