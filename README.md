# BEM! BEM!

## Install
`npm install bembem --save-dev`

---

## Usage

### Gulp.js

Demo project available at <https://github.com/hipstergoat/bembem-demo>

In order to use absolute include paths with Gulp.js you must add the `./node_modules/bembem` path into both sass _(includePaths)_ and pug _(basedir)_ options:

`gulpfile.js`

```javascript
// styles
gulp.task('styles', () => {
    gulp.src('./src/**/*.scss')
        .pipe($.sass({
            includePaths: ['./src', './node_modules/bembem'] // for absolute includes
        }).on('error', $.sass.logError))
        .pipe(gulp.dest(pathDist));
});

// views
gulp.task('views', () => {
    gulp.src(['!./src/**/_*.pug', './src/**/*.pug'])
        .pipe($.pug({
            basedir: './node_modules/bembem' // for absolute includes
        }))
        .pipe(gulp.dest(pathDist));
});
```

Then include mixins into your Sass styles and Pug views:

`component.styles.scss`
```scss
@import "bembem"; // include bembem mixins
// Prefix will be add in ANY class name. This is NOT required
@include prefix("item") {
    @include block("menu") {
        float: left;
        // This modifier only works for the Block "menu"
        @include modifier("right") {
            float: right;
        }
        // The elements are included inside of a Block to have a context
        @include element("item") {
            float: left;
        }
        @include element("button") {
            display: block;
            padding: 10px;
            color: black;
            &:hover {
                background-color: black;
                color: white;
            }
            // This is a modifier of the element "button"
            @include modifier("active") {
                background-color: red;
            }
        }
    }
}
```

`component.view.pug`
```scss
include /bembem // include bembem mixins

- var $prefix = 'item-'

+bem_scope({prefix: $prefix})
	+block.UL.menu
		+element.LI.item
			+element.A.button(href="#", title="") Button 1
		+element.LI.item
			+element.A.button._active(href="#", title="") Button 2
		+element.LI.item
			+element.A.button(href="#", title="") Button 3
```

---
## Resources
- BEM: https://en.bem.info/methodology/key-concepts/
- Jade: http://jade-lang.com/
- Sass: http://sass-lang.com/
- Bemto: https://github.com/kizu/bemto