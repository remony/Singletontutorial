### Why?
I wanted to use [marked](https://github.com/chjj/marked) instead of [showdown](https://github.com/coreyti/showdown) as used in [angular-markdown-directive](https://github.com/btford/angular-markdown-directive) as well as expose the option to globally set defaults.

### How?

#### A block of text:

```html
&lt;marked>
#Markdown directive
*It works!*
&lt;/marked>
```

#### Bind the markdown input to a scope variable:

```html
&lt;div marked="my_markdown">&lt;/div>
&lt;!-- Uses $scope.my_markdown -->
```

#### Include a markdown file:

```html
&lt;div marked ng-include="'README.md'">&lt;/div>
&lt;!-- Uses markdown content from README.md -->
```

#### Set default options

```js
app.config(['markedProvider', function(markedProvider) {
markedProvider.setOptions({gfm: true});
}]);

```