# To Date
[js] Format time string.

### Install
```
npm install kc-todate
```

### Use
```js
var todate = require('kc-todate');
var ts = new Date().getTime();
var fmt = 'd/m/y h:i:s'; // Format (default: 'm/d/y h:i:s')
var str = todate(ts, fmt);
console.log(str);
```
