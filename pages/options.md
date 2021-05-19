Options are parameters you can specify to personalize your documentation!
All options are specified in the config object 

Example: 
```javascript
const config = {
  el: document.getElementById('root'),
  directory: "./pages/",
  tableOfContents: true,
  branding: {
    title: "DocJS",
    logo: "https://img.icons8.com/fluent/2x/book.png",
  },
  syntax_highlight: true,
  github: {
    color: "#0366fc",
    url: "https://github.com/ManuTheCoder/DocJS"
  },
  custom_colors: true,
  colors: {
    sidebar_color: '#000',
  }
}
```