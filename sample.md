# Sample Markdown

[Link to raw source](https://raw.githubusercontent.com/drawnotes/drawnotes-sample-files/master/sample.md)

Code block:

```javascript
//using chained methods
function reverseStr(s) {
  return s.split("").reverse().join("");
}

//fast method using for loop
function reverseStr(s) {
  for (var i = s.length - 1, o = ""; i >= 0; o += s[i--]) {}
  return o;
}

//fast method using while loop (faster with long strings in some browsers when compared with for loop)
function reverseStr(s) {
  var i = s.length,
    o = "";
  while (i--) o += s[i];
  return o;
}
```

Table:

| Command    | Description                                    |
| ---------- | ---------------------------------------------- |
| git status | List all new or modified files                 |
| git diff   | Show file differences that haven't been staged |
| git notes  | Add or inspect object notes                    |
