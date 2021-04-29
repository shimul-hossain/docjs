window.onerror = function(msg, url, linenumber) {
    alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
    return true;
}

var el = config.el;
el.innerHTML = 'Loading...';
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var links = xhttp.responseText;
      var converter =
        new showdown.Converter({
            tables: true,
            simplifiedAutoLink: true,
            tasklists: true,
            ghMentions: true,
            ghMentionsLink: true,
            strikethrough: true,
        }),
        text = '' + links + '',
        html = converter.makeHtml(links);
      el.innerHTML = '<div class="sidebar" id="docjs_sidebar">' + html + '</div>';
        var hrefs = document.querySelectorAll('#docjs_sidebar li');
        for(let i = 0;i < hrefs.length; i++){
          alert(hrefs[i].innerHTML)
          hrefs[i].href = "#/" + hrefs[i].innerHTML.replace(/\s+/g, '-').toLowerCase();
          hrefs[i].id = "link_" + i++;
        }
    }
};
xhttp.open("POST", config.directory + "sidebar.md", true);
xhttp.send();

// var hash = window.location.hash;