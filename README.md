# Meteor-Memorize

This is a Meteor implementation of tcs-de's [node-cache](https://www.npmjs.com/package/node-cache) complete with unit tests.

## Implementation
Issue the command
``` meteor add valedaemon:memorize```
to include it in your project.

This package provides several defaults:

```
stdTTL: standard ttl in seconds for a cached element (0 = unlimited)
checkPeriod: the delete check interval in seconds (1800)
errorOnMissing: allow throwing an error if a cached element is not found (true)
useClones: if clones should be used (true)
```
If you want to set your own values, you can pass in defaults through Meteor.settings:
```
"memorize": {
	"stdTTL": 0,
  "checkPeriod": 120,
  "errorOnMissing": false,
  "useClones": false
}
```
To use Memorize, the following functions are available:

```
Memorize.set("key", obj, [callback]);

Memorize.get("key", [callback]);

Memorize.del("key", [callback]);
```

There are other methods available. To see them, check out [node-cache](https://www.npmjs.com/packages/node-cache).