<!-- ## How does this work?  -->
This **single page** documentation uses simple AJAX requests based on the innerHTML of the links (with whitespaces trimmed). For example, for the page titled "Getting Started" in "sidebar.md", all you need to do to start writing content is creating a file named "GettingStarted.md" and start writing! This documentation is supported in IE11 and above. This code is also open source, you can modify it as you like!

**UPDATE: To enable CSS variables, please use a polyfill! Code below:**
```

<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="./src/style.css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <script src="https://cdn.jsdelivr.net/npm/css-vars-ponyfill@2"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  </head>
  <body>
    <div id="app"></div>
    <script>
      const docjs = {
        domain: window.location.href.split("#")[0],
        directory: window.location.href.split("#")[0],
        lightTheme: true,
        dynamicTitle: true,
        hideSearch: false,
        theme: 'Material',
        element: 'app',
        title: 'DocJS',
        logo: 'https://img.icons8.com/color/2x/documents.png',
        bottom_nav: true,
        navbar: true,
        repo: 'https://github.com/manuthecoder/docjs',
        // copyToClipboard: true
        // bottom_menu: false
      }
      cssVars({
        // Options...
      });
    </script>
    <script src="./src/markdown.js"></script>
    <script src="./src/app.js"></script>
  </body>
</html>
```
## Features
* Sidebar links 
* Dark mode 
* Bottom navigation
* Link to GitHub
* Single-page app!
* Load content via AJAX
* Loaders while content loads
* Auto titles
* Github corner icon
* Search
* **Markdown and bi-directional HTML mode**
## Quick Start 
### CDN
```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ManuTheCoder/docjs/docs/src/style.css">
<script src="https://cdn.jsdelivr.net/gh/ManuTheCoder/docjs/docs/src/app.js"></script>
<script src="https://cdn.jsdelivr.net/gh/ManuTheCoder/docjs/docs/src/markdown.js"></script>
```
Note that all files are required

style.css - Basic styling

app.js - Renders the app

markdown.js - Applies markdown and bi-directional HTML formatting
### HTML template
```

<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="./src/style.css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <script src="https://cdn.jsdelivr.net/npm/css-vars-ponyfill@2"></script>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <div id="app"></div>
    <script>
      window.onerror = function(msg, url, linenumber) {
        alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
        return true;
      }
      const docjs = {
        domain: window.location.href.split("#")[0],
        directory: window.location.href.split("#")[0],
        lightTheme: true,
        dynamicTitle: true,
        hideSearch: false,
        theme: 'Material',
        element: 'app',
        title: 'DocJS',
        logo: 'https://img.icons8.com/color/2x/documents.png',
        bottom_nav: true,
        navbar: true,
        repo: 'https://github.com/manuthecoder/docjs',
        // copyToClipboard: true
        // bottom_menu: false
      }
      cssVars({
        // Options...
      });
    </script>
    <script src="./src/markdown.js"></script>
    <script src="./src/app.js"></script>
  </body>
</html>
```
## What you'll need to do
* Download this repository and store it in the src folder (File structure below!)
* Find a hosting provider, for this one, we're using GitHub to host our site. Some other choices are: 
  * Repl.it
  * Vercel
  * Netlify
  * InfinityFree
* Create these files:  (Readme is treated as the home page)
```
... (Home directory)
└── docs
    ├── README.md
    ├── index.html
    ├── sidebar.md
    ├── navbar.md
    ├── Page1.md
    └── src
        ├── app.js
        ├── markdown.js
        └── style.css
```
* In index.html, insert this
```

<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="./src/style.css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <script src="https://cdn.jsdelivr.net/npm/css-vars-ponyfill@2"></script>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <div id="app"></div>
    <script>
      window.onerror = function(msg, url, linenumber) {
        alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
        return true;
      }
      const docjs = {
        domain: window.location.href.split("#")[0],
        directory: window.location.href.split("#")[0],
        lightTheme: true,
        dynamicTitle: true,
        hideSearch: false,
        theme: 'Material',
        element: 'app',
        title: 'DocJS',
        logo: 'https://img.icons8.com/color/2x/documents.png',
        bottom_nav: true,
        navbar: true,
        repo: 'https://github.com/manuthecoder/docjs',
        // copyToClipboard: true
        // bottom_menu: false
      }
      cssVars({
        // Options...
      });
    </script>
    <script src="./src/markdown.js"></script>
    <script src="./src/app.js"></script>
  </body>
</html>

```
* In sidebar.md, insert this code
```
* [Home](#)
* [Page 1](#)
```
* In navbar.md, insert this code
```
* [View on GitHub](https://github.com/your-repo-here)
```
* In README.md, insert this code
```
### Home
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
```
* In Page1.md, insert this code 
```
### Page 1 
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
```
* Great, now you're done! Now load index.html!