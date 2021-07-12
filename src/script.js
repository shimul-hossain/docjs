var sidebar_links = [],
	default_page, el = config.el;
default_page = 1, turnOffScrollSpy = 0;
document.title = config.branding.title;
if(config.theme == "Bootstrap") {
	document.body.classList.add('bootstrapTheme')
}
if(config.theme == "Flat") {
	document.body.classList.add('flatTheme')
}
if (config.fullscreen == true) {
	document.documentElement.classList.add('hide-sidenav');
}
if (config.scrollspyStyle == "line") {
	document.body.classList.add('scrollspy_bar');
}
el.innerHTML = '<div class="linear-progress-material small" style="position:fixed;top:0;left:0;margin:0;"> <div class="bar bar1"></div> <div class="bar bar2"></div> </div>';
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		var links = xhttp.responseText;
		var converter = new showdown.Converter({
				tables: true,
				simplifiedAutoLink: true,
				tasklists: true,
				ghMentions: true,
				ghMentionsLink: true,
				strikethrough: true,
			}),
			text = '' + links + '',
			html = converter.makeHtml(links);
		if (typeof config.github !== "undefined") {
			var ghcolor = typeof config.github.color;
			el.innerHTML = '<a href="' + config.github.url + '" class="github-corner" aria-label="View source on GitHub" target="_blank"><svg width="80" height="80" viewBox="0 0 250 250" style="fill: ' + (ghcolor !== "undefined" ? config.github.color : "#151513") + '; color:#fff; position: fixed; top: 0; border: 0; right: 0;z-index:9999999999999" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a>';
		}
    else {
      el.innerHTML = "";
    }
		if (config.navbar !== true) {
			el.innerHTML += '<nav class="fake_nav"><ul><li><a href="javascript:void(0)" onclick="open_nav()" class="mobile-trigger"><i class="material-icons">menu</i></a></li></ul></nav>';
		}
		el.innerHTML += '<div class="sidebar" id="docjs_sidebar">\n <div class="header"><img src="' + config.branding.logo + '" height="50px" width="50px" class="docjs_logo"><span id="docjs_page_title" style="transition: all 0s !important">' + config.branding.title + '</span><button class="search_toggle" onclick="search_open()"><i class="material-icons">search</i></button></div>' + html + '</div>\n<div id="page_content"></div>';
		if (config.customColors == true) {
			if (typeof config.colors.sidebarColor !== undefined) {
				document.documentElement.style.setProperty("--sidebar-color", config.colors.sidebarColor);
			}
			if (typeof config.colors.navbarBackgroundColor !== undefined) {
				document.documentElement.style.setProperty("--navbar-color", config.colors.navbarBackgroundColor);
			}
			if (typeof config.colors.navbarFontColor !== undefined) {
				document.documentElement.style.setProperty("--nav-font-color", config.colors.navbarFontColor);
			}
			if (typeof config.colors.backgroundColor !== undefined) {
				document.documentElement.style.setProperty("--bg-color", config.colors.backgroundColor);
			}
      if (typeof config.colors.scrollSpyActiveColor !== undefined) {
				document.documentElement.style.setProperty("--scrollspy-active-color", config.colors.scrollSpyActiveColor);
			}
			if (typeof config.colors.fontColor !== undefined) {
				document.documentElement.style.setProperty("--font-color", config.colors.fontColor);
			}
      if (typeof config.colors.searchToggleColor !== undefined) {
				document.documentElement.style.setProperty("--search-toggle-color", config.colors.searchToggleColor);
			}
      if (typeof config.colors.bottomNavFocusColor !== undefined) {
				document.documentElement.style.setProperty("--bottom-nav-focus-color", config.colors.bottomNavFocusColor);
			}
      if (typeof config.colors.bottomNavHoverColor !== undefined) {
				document.documentElement.style.setProperty("--bottom-nav-hover-color", config.colors.bottomNavHoverColor);
			}
      if (typeof config.colors.loaderColor !== undefined) {
				document.documentElement.style.setProperty("--loader-color", config.colors.loaderColor);
			}
      if (typeof config.colors.nestedLiColor !== undefined) {
				document.documentElement.style.setProperty("--nested-li-color", config.colors.nestedLiColor);
			}
      if (typeof config.colors.nestedLiActiveColor !== undefined) {
				document.documentElement.style.setProperty("--nested-li-active-color", config.colors.nestedLiActiveColor);
			}
			if (typeof config.colors.sidebarFontColor !== undefined) {
				document.documentElement.style.setProperty("--sidebar-font-color", config.colors.sidebarFontColor);
			}
		}
		var tablinks = document.getElementById('docjs_sidebar').getElementsByTagName("a");
		var d = 0;
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].href = "#/" + tablinks[i].innerHTML.replace(/\s+/g, '-').toLowerCase();
			sidebar_links.push(tablinks[i]);
			var link_id = d++;
			tablinks[i].id = "docjs_link_" + link_id;
			tablinks[i].addEventListener('click', function () {
				docjs_open_page(this.innerHTML, this.id, this.innerHTML);
				toggle(this);
				if (document.documentElement.classList.contains('hide-sidenav')) {
					close_nav();
				}
			});
			if (window.location.hash == tablinks[i].hash) {
				default_page = tablinks[i];
			}
		}
		if (default_page !== 1) {
			default_page.click();
		} else {
			document.getElementById('docjs_link_0').click();
		}
		if (config.navbar == true) {
			var navxhttp = new XMLHttpRequest();
			navxhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					var navbar_links = "";
					var converter = new showdown.Converter({
							tables: true,
							simplifiedAutoLink: true,
							tasklists: true,
							ghMentions: true,
							ghMentionsLink: true,
							strikethrough: true,
						}),
						text = '' + navxhttp.responseText + '',
						navbar_links = converter.makeHtml(navxhttp.responseText);
					el.insertAdjacentHTML('afterbegin', '<nav id="navbar"><ul><li><a href="javascript:void(0)" onclick="open_nav()" class="mobile-trigger"><i class="material-icons">menu</i></a></li></ul>' + navbar_links + '</nav>');
					var prevScrollpos = window.pageYOffset;
					window.onscroll = function () {
						var currentScrollPos = window.pageYOffset;
						if (currentScrollPos == 0) {
							document.getElementById("navbar").style.boxShadow = "";
						} else {
							document.getElementById("navbar").style.boxShadow = "0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)";
						}
						prevScrollpos = currentScrollPos;
					};
				} else if (this.status == '404') {
					alert("Navbar couldn't be loaded - Error 404");
				}
			};
			navxhttp.open("GET", "./navbar.md", true);
			navxhttp.send();
		} else {
			document.body.classList.add('hide-nav');
		}
	}
};
xhttp.open("GET", "./sidebar.md", true);
xhttp.send();

function toggle(el) {
	var tablinks = document.getElementById('docjs_sidebar').getElementsByTagName("a");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].classList.remove('sidebar-active');
	}
	el.classList.add('sidebar-active');
}

function open_nav() {
	var sidenav = document.getElementById('docjs_sidebar');
	sidenav.style.left = 0;
	document.getElementById('sidenav-overlay').style.display = "block";
	setTimeout(function () {
		document.getElementById('sidenav-overlay').style.opacity = 1;
	}, 10);
	document.getElementById('sidenav-overlay').onclick = close_nav;
}

function close_nav() {
	var sidenav = document.getElementById('docjs_sidebar');
	sidenav.style.left = "-300px";
	document.getElementById('sidenav-overlay').style.opacity = 0;
	setTimeout(function () {
		document.getElementById('sidenav-overlay').style.display = "none";
	}, 200);
}
	var parts = window.location.search.substr(1).split("&");
	var $_GET = {};
	for (var i = 0; i < parts.length; i++) {
		var temp = parts[i].split("=");
		$_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
	}
	if (typeof $_GET['q'] !== "undefined") {
		setTimeout(function () {
			search_open();
			document.getElementById('search').value = $_GET['q'];
			document.getElementById('search').focus();
    history.pushState(null, null, window.location.href.split('?')[0] + window.location.hash);
		}, 1000);
	}
function docjs_open_page(value, element, title) {
	turnOffScrollSpy = 1;
	var page_content = document.getElementById("page_content");
	page_content.innerHTML = '<div style="padding-top:30vh;" class="container"><center><svg class="spinner" viewBox="0 0 50 50"> <circle class="spinner__path" cx="25" cy="25" r="20" fill="none" stroke-width="3"></circle> </svg></center></div>';
	var filename = value.replace(/\s+/g, '-').toLowerCase() + ".md";
	if (filename == 'home.md') {
		filename = "README.md";
	}
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			turnOffScrollSpy = 0;
			document.title = title + " | " + config.branding.title;
			history.pushState(null, null, window.location);
			var htmltext = xhttp.responseText;
			var converter = new showdown.Converter({
					tables: true,
					simplifiedAutoLink: true,
					tasklists: true,
					ghMentions: true,
					ghMentionsLink: true,
					strikethrough: true
				}),
				text = '' + htmltext + '',
				html = converter.makeHtml(htmltext);
				html.split("<script").join("&lt;script").split("<"+"/script>").join("&lt;/script&gt;");
			var elem_id_1 = parseInt(element.replace(/\D+/g, '')) + 1;
			var elem_id_2 = parseInt(element.replace(/\D+/g, '')) - 1;
			var elem_id = "docjs_link_" + elem_id_1;
			var elem_id_prev = "docjs_link_" + elem_id_2;
			if (document.getElementById(elem_id_prev)) {
				var prev_text = document.getElementById(elem_id_prev).innerHTML;
			} else {
				var prev_text = "";
			}
			if (document.getElementById(elem_id)) {
				var next_text = document.getElementById(elem_id).innerHTML;
			} else {
				var next_text = "";
			}
      if (typeof config.linkTarget !== 'undefined') {
				if (page_content.getElementsByTagName("a")) {
					var a = page_content.getElementsByTagName('a');
					for (var i = 0; i < a.length; i++) {
						a[i].target = config.linkTarget;
					}
				}
			}
			if (config.tableOfContents !== true) {
				page_content.innerHTML = "<div class=\"container\"><h1 id='page_title'></h1><hr id='hr'>" + html + "<div class='footer'><div class='row'><div class='col col-5'><div style=\"padding: 10px;\"><button class='footerBtn prev' id='prev' onclick='document.getElementById(\"" + elem_id_prev + "\").click()'><b>Previous</b><br>" + prev_text + "</button></div></div><div class='col col-5'><div style=\"padding: 10px;\"><button class='footerBtn next' id='next' onclick='document.getElementById(\"" + elem_id + "\").click()'><b>Next</b><br>" + next_text + "</button></div></div>\n</div>\n</div>\n</div>";
			} else {
				page_content.innerHTML = "<div class=\"container\"><div class='row'><div class='col col-8 m10' id='page'><h1 id='page_title'></h1><hr id='hr'>" + html + "</div><div class='col col-2 hide-on-mobile' id='table_of_contents' style='padding: 10px;position:sticky;z-index: 0;top: 0;'></div></div><div class='footer'><div class='row'><div class='col col-5'><div style=\"padding: 10px;\"><button class='footerBtn prev' id='prev' onclick='document.getElementById(\"" + elem_id_prev + "\").click()'><b>Previous</b><br>" + prev_text + "</button></div></div><div class='col col-5'><div style=\"padding: 10px;\"><button class='footerBtn next' id='next' onclick='document.getElementById(\"" + elem_id + "\").click()'><b>Next</b><br>" + next_text + "</button></div></div>\n</div>\n</div>\n</div>";
			}
			// table_of_contents
			if (config.tableOfContents == true) {
				document.getElementById('table_of_contents').innerHTML = "<br><br><br><h2 style='margin-bottom:10px;font-size: 20px'>Contents</h2>";
				var links = document.getElementById('page').querySelectorAll("h1:not(:first-child), h2, h3, h4, h5, h6");
				var d = 1;
				for (i = 0; i < links.length; i++) {
					var heading_id = d++;
					links[i].id = 'docjs_heading_' + heading_id;
					document.getElementById('table_of_contents').innerHTML += "<div class=\"table_of_contents_link\"><a href=\"javascript:void(0)\" onclick='document.getElementById(\"docjs_heading_" + heading_id + "\").scrollIntoView();' class='" + (heading_id == 1 ? "active " : "") + "table_of_contents_link_a' data-id='" + heading_id + "'>" + links[i].innerText + "</a></div>";
				}
				if (document.getElementById('table_of_contents').innerHTML !== '<br><br><br><h2 style="margin-bottom:10px;font-size: 20px">Contents</h2>') {
					window.addEventListener('scroll', function () {
						if (turnOffScrollSpy == 0) {
							var section = document.querySelectorAll(".table_of_contents_link_a");
							var headings = document.getElementById('page').querySelectorAll("h1:not(:first-child), h2, h3, h4, h5, h6");
							var window_offsetTop = window.pageYOffset;
							for (i = 0; i < headings.length; i++) {
								if (headings[i].offsetTop <= window_offsetTop + 100) {
									var a = document.getElementsByClassName('table_of_contents_link_a');
									if (a) {
										for (ai = 0; ai < a.length; ai++) {
											if (a[ai].classList.contains('active')) {
												a[ai].classList.remove('active');
											}
										}
									}
									var id = headings[i].id.replace(/\D+/g, '');
									document.querySelector('[data-id="' + id + '"]').classList.add('active');
									scrollParentToChild(document.getElementById('table_of_contents'), document.querySelector('[data-id="' + id + '"]'))
								}
							}
						}
					});
				} else {
					document.getElementById('table_of_contents').innerHTML = "";
				}
			}
			document.getElementById('page_title').innerHTML = title;
			var images = page_content.getElementsByTagName('img');
			if (images) {
				for (i = 0; i < images.length; i++) {
					images[i].tabIndex = 0;
					images[i].onkeydown = function (e) {
						if (e.keyCode === 13) {
							e.preventDefault();
							this.click();
						} else if (e.keyCode == 27) {
							e.preventDefault();
							var imgbox = document.getElementById('imagebox');
							imgbox.style.opacity = 0;
							setTimeout(function () {
								imgbox.style.display = 'none';
							}, 100);
						}
					};
					images[i].onclick = function () {
						imagebox(this);
					};
				}
			}
			if (page_content.getElementsByTagName("table")) {
				var tables = page_content.getElementsByTagName('table');
				for (var i = 0; i < tables.length; i++) {
					var _x = tables[i].outerHTML;
					tables[i].outerHTML = '<div style="width:100%;overflow-x:auto">' + _x + '</div>';
				}
			}
			if (typeof config.syntaxHighlight !== 'undefined') {
				if (page_content.getElementsByTagName("pre")) {
					var a = page_content.getElementsByTagName('pre');
					for (var i = 0; i < a.length; i++) {
						a[i].classList.add('prettyprint');
						PR.prettyPrint();
					}
				}
			}
			
			if (filename == "README.md") {
				document.getElementById('page_title').innerHTML = "";
				document.getElementById('hr').style.display = "none";
			} else {
				document.getElementById('hr').style.display = "block";
			}
			if (!document.getElementById(elem_id_prev)) {
				document.getElementById('prev').style.display = "none";
			} else {
				document.getElementById('prev').style.display = "block";
			}
			if (!document.getElementById(elem_id)) {
				document.getElementById('next').style.display = "none";
			} else {
				document.getElementById('next').style.display = "block";
			}
		} else if (this.status == '404') {
			// document.getElementById('DOCJS_PAGE_TITLE').style.display = "none";
			document.getElementById('page_content').innerHTML = "<br><br><center><h1>404</h1><p>Page Not Found</p><p><a href='javascript:void(0)' onclick='document.getElementById(\"details\").style.display = \"block\"'>Details</a></p><div id='details' style='display: none'>File requested: " + filename + "<br>Make sure that this file exists on your server</div></center>";
		}
	};
	xhttp.open("GET", config.directory + filename, true);
	xhttp.send();
}

document.head = document.head || document.getElementsByTagName('head')[0];
function changeFavicon(src) {
	var link = document.createElement('link'),
		oldLink = document.getElementById('dynamic-favicon');
	link.id = 'dynamic-favicon';
	link.rel = 'shortcut icon';
	link.href = src;
	if (oldLink) {
		document.head.removeChild(oldLink);
	}
	document.head.appendChild(link);
}
if(typeof config.customCSS !== "undefined") {
	document.head.innerHTML += "<style>\n" + config.customCSS + "\n</style>";
}
function mobile() {
	return /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
changeFavicon(config.branding.logo);
var sidenav_overlay = document.createElement('div');
sidenav_overlay.className = "sidenav-overlay";
sidenav_overlay.id = "sidenav-overlay";
document.body.appendChild(sidenav_overlay);

function filter() {
	var input, filter, ul, li, a, i, txtValue;
	input = document.getElementById('search');
	history.pushState(null, null, window.location.href.split('#')[0].split('?')[0] + "?q=" + input.value);
	filter = input.value.toUpperCase();
	ul = document.getElementById("res");
	li = ul.getElementsByTagName('li');
	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0];
		txtValue = a.textContent || a.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}
}

function search_open() {
	document.body.insertAdjacentHTML('beforeend', '<div class="popup" id="search_popup"><input id="search" autofocus autocomplete="off" placeholder="Search..." onkeyup="filter()"><div style="padding: 10px"><ul id="res"></ul></div></div><div id="search_overlay" onclick="search_close()"></div>');
	document.getElementById('search_popup').style.right = "-400px";
	document.getElementById('search_overlay').style.opacity = 0;
	setTimeout(function () {
		document.getElementById('search_popup').style.right = 0;
		document.getElementById('search_overlay').style.opacity = 1;
		document.getElementById('search').focus();
	}, 200);
	document.getElementById('search_overlay').style.display = "block";
	for (var i in sidebar_links) {
    document.getElementById('res').innerHTML += '<li><a href="javascript:void(0)" onclick=\'search_close();docjs_open_page(' + JSON.stringify(sidebar_links[i].innerHTML) + ', ' + JSON.stringify(sidebar_links[i].id) + ', ' + JSON.stringify(sidebar_links[i].innerHTML) + ')\'><b>' + sidebar_links[i].innerHTML + '</b></a></li>';
    	}
}

function search_close() {
	document.getElementById('search_popup').style.right = "-400px";
	document.getElementById('search_overlay').style.opacity = 0;
	setTimeout(function () {
		document.getElementById('search_popup').remove();
		document.getElementById('search_overlay').remove();
	}, 200);
}

function imagebox(el) {
	var src = el.src;
	var imgbox = document.getElementById('imagebox');
	imgbox.style.display = "block";
	imgbox.style.opacity = 0;
	setTimeout(function () {
		imgbox.style.opacity = 1;
	}, 100);
	var imgbox_img = document.getElementById('imagebox_img');
	imgbox_img.src = src;
	imgbox_img.style.transform = "scale(.8) translate(-50%, -50%)";
	imgbox_img.style.opacity = 0;
	setTimeout(function () {
		imgbox_img.style.transform = "scale(1) translate(-50%, -50%)";
		imgbox_img.style.opacity = 1;
	}, 200);
	document.getElementById('imagebox').addEventListener('click', function () {
		imgbox.style.opacity = 0;
		setTimeout(function () {
			imgbox.style.display = 'none';
		}, 100);
	});
}
document.body.insertAdjacentHTML('beforeend', '<div class="imagebox" id="imagebox"><img id="imagebox_img"></div>');
if ((!('innerText' in document.createElement('a'))) && ('getSelection' in window)) {
	HTMLElement.prototype.__defineGetter__("innerText", function () {
		var selection = window.getSelection(),
			ranges = [],
			str;
		for (var i = 0; i < selection.rangeCount; i++) {
			ranges[i] = selection.getRangeAt(i);
		}
		selection.removeAllRanges();
		selection.selectAllChildren(this);
		str = selection.toString();
		selection.removeAllRanges();
		for (var i = 0; i < ranges.length; i++) {
			selection.addRange(ranges[i]);
		}
		return str;
	});
}
if (!('remove' in Element.prototype)) {
	Element.prototype.remove = function () {
		if (this.parentNode) {
			this.parentNode.removeChild(this);
		}
	};
}
window.addEventListener('keyup', function(e) {
  if(e.keyCode == 78 && document.getElementById('next')) {
    document.getElementById('next').click();
  }
  if(e.keyCode == 80 && document.getElementById('prev')) {
    document.getElementById('prev').click();
  }
});
function scrollParentToChild(parent, child) {

  // Where is the parent on page
  var parentRect = parent.getBoundingClientRect();
  // What can you see?
  var parentViewableArea = {
    height: parent.clientHeight,
    width: parent.clientWidth
  };

  // Where is the child
  var childRect = child.getBoundingClientRect();
  // Is the child viewable?
  var isViewable = (childRect.top >= parentRect.top) && (childRect.bottom <= parentRect.top + parentViewableArea.height);

  // if you can't see the child try to scroll parent
  if (!isViewable) {
        // Should we scroll using top or bottom? Find the smaller ABS adjustment
        const scrollTop = childRect.top - parentRect.top;
        const scrollBot = childRect.bottom - parentRect.bottom;
        if (Math.abs(scrollTop) < Math.abs(scrollBot)) {
            // we're near the top of the list
            parent.scrollTop += scrollTop;
        } else {
            // we're near the bottom of the list
            parent.scrollTop += scrollBot;
        }
  }

}