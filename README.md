# angular-lowerize-filter

AngularJS filter to convert strings to **lower case** replacing non-alphanumeric characters.

Intended to be used with [Firebase](https://www.firebase.com/) for creating named ID keys that can be indexed and queried.

## Installation

You can install the filter using [Bower](http://bower.io/):

```bash
$ bower install angular-lowerize-filter
```

Or [npm](https://www.npmjs.com/):

```bash
$ npm install angular-lowerize-filter
```

Then you have to include it in your HTML:

```html
<script src="bower_components/angular-lowerize-filter/lowerize.js"></script>
<script src="node_modules/angular-lowerize-filter/lowerize.js"></script>
```

And inject the module `puigcerber.lowerize` as a dependency of your application:

```js
angular.module('webApp', ['puigcerber.lowerize']);
```

## Usage

You can use it like any other AngularJS filter:

```html
<p>{{ input | lowerize }}</p>
```

### Example

```js
var lowerized = $filter('lowerize')('angular-lowerize-filter');
console.log(lowerized); // angularlowerizefilter
```

## Related

* [camelize](https://github.com/Puigcerber/angular-camelize-filter): 
AngularJS filter to convert strings to lower camel case replacing non-alphanumeric characters.
* [capitalize](https://github.com/Puigcerber/angular-capitalize-filter): 
AngularJS filter to capitalize sentences and specially team names.

## License

MIT © [Pablo Villoslada Puigcerber](http://pablovilloslada.com)
