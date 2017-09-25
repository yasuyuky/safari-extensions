safari.application.addEventListener('command', (event) => {
  if (event.command=="sort") {
    var bw = safari.application.activeBrowserWindow;
    var tabs = bw.tabs;
    tabs.sort((tabA, tabB) => {
      if (tabA.url < tabB.url) {
        return -1;
      }
      if (tabA.url > tabB.url) {
        return 1;
      }
      return 0;
    });
    if (safari.extension.settings.uniq) {
      var lastUrl = "";
      tabs.forEach((tab, i)=>{
        if (tab.url==lastUrl) {
          tab.close();
        } else {
          bw.insertTab(tab, i);
          lastUrl = tab.url;
        }
      });
    } else {
      tabs.forEach((tab, i)=>{bw.insertTab(tab, i)});
    }
  }
}, false);
