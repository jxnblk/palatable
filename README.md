# palatable

Generate CSS color, background-color, and border-color utilities based on an array of color values

```bash
npm install palatable
```

```js
var palatable = require('palatable');
var primary = 
var primary = palatable({ colors: ['#f00', '#008000', '#00f'] });
```

Results in:

```css
/*

  colors

*/

.red { color: #f00; }
.green { color: #008000; }
.blue { color: #00f; }

.bg-red { background-color: #f00; }
.bg-green { background-color: #008000; }
.bg-blue { background-color: #00f; }

.border-red { border-color: #f00; }
.border-green { border-color: #008000; }
.border-blue { border-color: #00f; }

```

