var switchUrl = (event) => {
  var tab = event.target.browserWindow.activeTab;
  var urlParts = tab.url.split('/');
  console.log(tab, urlParts);
  if (urlParts[3]=='pdf') {
    var articleID = urlParts[4].split('.').slice(0,2).join('.');
    var absUrl = urlParts.slice(0, 3).concat(['abs', articleID]).join('/')
    tab.url = absUrl;
  } else if (urlParts[3]=='abs') {
    var pdfFile = urlParts[4]+'.pdf';
    var pdfUrl = urlParts.slice(0, 3).concat(['pdf', pdfFile]).join('/')
    tab.url = pdfUrl;
  }
}

safari.application.addEventListener('command', (event) => {
  if (event.command === 'switch') switchUrl(event);
}, false);
