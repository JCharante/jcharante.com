# jcharante.com

> A Quasar project

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ quasar dev

# build for production with minification
$ quasar build

# lint code
$ quasar lint
```


## Prism

This is a bit weird, but you need to modify vue-prism
so instead of assigning the token class, it assigns the
tokeno class. And modify the css file, to affect the tokeno
class instead of the token class. This is because of a conflict
with Quasar.
