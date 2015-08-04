
# json v1.0.4 [![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

This package is stripped from [meteor/json](https://atmospherejs.com/meteor/json) and made compatible with [React Native](https://github.com/facebook/react-native).

**Note:** This package is only for client-side usage.

```js
var JSON = require('json');

JSON.stringify({ foo: 'bar' }); // '{ "foo": "bar" }'

JSON.parse('{ "foo": "bar" }'); // { foo: 'bar' }
```
