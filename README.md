node-everest
=============

ESTful API toolchain for/with nodejs.

** NOT YET IMPLEMENTED!!!**

Command line
------------

```
everest --help
```

```
everest --document=[markdown|html] -c everest.json -d document/
```

```
everest --server=[node|java] -c everest.json -d server/
```

```
everest --client=[node|java|js] -c everest.json -d client/
```

programatic
-----------

```javascript
var everest = require('everest');

var app = express();
...

everest.configure('everest.json');

app.use('/api/docs', everest.docs());
app.use('/api/console', everest.console());
app.use('/api/', everest.server(resources));

var client = everest.client();
...
```
