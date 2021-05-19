The syntaxHighlight variable turns on syntax highlighting for code blocks

```
// ...
syntaxHighlight: true,
// ...
```
However, you MUST include the following CDN in your index.html file: 

```
<script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"></script>
```

## Examples

### HTML
```
<!DOCTYPE html>
<html>
	<head>
		<title>Hello, world!</title>
	</head>
	<body>
		Hello, world!
	</body>
</html>

```
### CSS 
```
body {
	padding: 10px;
	color: gray;
	font-family: Arial
}
```

### JavaScript

```
var x = {
	foo: true, 
	bar: false,
}
```

### PHP
```
<?php
 echo "Hello, World!"; 
?>
```

### Python
```
print("Hello World!")
```

### Markdown

```
* [Link 1](#)
* [Link 2](#)
* [Link 3](#)

```

### Other Languages
All languages are supported in prettyprint!