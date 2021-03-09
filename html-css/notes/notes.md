# css

https://learn.shayhowe.com/html-css/getting-to-know-css/

## selectors

### primitives

\* ... all

p (etc) ... type

.className

[attributeName]

#elementID

### order

second mention takes precedence over first, third over second, etc (cascading)

```
p {color: yellow;}
p {color: green;}

will be green
```

### specificity weight

```
type  / low / 0-0-1
class and attribute / mid / 0-1-0
ID / high / 1-0-0
```

### combined selectors

https://flukeout.github.io/

https://learn.shayhowe.com/advanced-html-css/complex-selectors/

descendent

```

article h2 {...}

<h2>...</h2>
<article>
  <h2>This heading will be selected</h2>
  <div>
    <h2>This heading will be selected</h2>
  </div>
</article>
```

child

```
article > p {...}

<p>...</p>
<article>
  <p>This paragraph will be selected</p>
  <div>
    <p>...</p>
  </div>
</article>

```

general sibling `h2 ~ p {...}`

adjacent sibling `h2 + p {...}`

### specificity with combined selectors

THIS IS ANNOYING AND YOU SHOULD AVOID IT

.hotdog p = 0-1-1

.hotdog .mustard = 0-2-0

```
.hotdog .mustard {...}

.hotdog p {...}

<div class="hotdog">
  <p class="mustard"></p>
</div>

even though '.hotdog p' comes second, it's combined specificity is lower, so '.hotdog .mustard' will control
```

... BY LAYERING CLASSES

```
<a class="btn btn-danger">...</a>
<a class="btn btn-success">...</a>

.btn {
  font-size: 16px;
}
.btn-danger {
  background: red;
}
.btn-success {
  background: green;
}
```

## reset

https://perishablepress.com/a-killer-collection-of-global-css-reset-styles/

```css
* {
    vertical-align: baseline;
    font-weight: inherit;
    font-family: inherit;
    font-style: inherit;
    font-size: 100%;
    border: 0 none;
    outline: 0;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
```

## flex

https://css-tricks.com/snippets/css/a-guide-to-flexbox/

https://flexboxfroggy.com/

## grid

https://css-tricks.com/snippets/css/complete-guide-grid/

https://cssgridgarden.com/

https://gridbyexample.com/video/

### responsive

define multiple grids with media queries ... in each grid, use consistent named lines

use the named lines to position elements

similar with grid-template-areas ... media query > layout

## responsive

https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design

put this in the head ... always

`<meta name="viewport" content="width=device-width,initial-scale=1">`

## color

https://color.adobe.com/create/color-wheel

## units

https://www.freecodecamp.org/news/css-unit-guide/

## variables

https://developer.mozilla.org/en-US/docs/Web/CSS/--*

Property names that are prefixed with --, like --example-name, represent custom properties that contain a value that can be used in other declarations using the var() function.

```css
:root {
    --first-color: #16f;
    --second-color: #ff7;
}

#firstParagraph {
    background-color: var(--first-color);
    color: var(--second-color);
}
```

## pseudo-elements

https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements

a keyword added to a selector that lets you style a specific part of the selected element

```css
/* The first line of every <p> element. */
p::first-line {
    color: blue;
    text-transform: uppercase;
}
```

## pseudo-classes

https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

```css
/* Any button over which the user's pointer is hovering */
button:hover {
    color: blue;
}
```

## pre-processors

like a separate language that compiles to css

big names are SASS and LESS

big advantage seems to be `mixins` ... analagous to functions

## frameworks

usually more of a styling framework that includes js too

old school: bootstrap

new school: tailwind

# html

## html5

### objectives

-   Encouraging semantic (meaningful) markup
-   Separating design from content
-   Promoting accessibility and design responsiveness
-   Reducing the overlap between HTML, CSS, and JavaScript
-   Supporting rich media experiences while eliminating the need for plugins such as Flash or Java

### Encouraging Semantic Markup

Semantic markup means markup which has meaning

previously, common structural elements were all indicated with `<div>`. In HTML5, we have:

```
<header>
<nav>
<main>
<article>
<aside>
<section>
<footer>
```

New text-level (inline) elements have also been introduced, such as `<address>` and `<time>`

### Separating Design From Content

put your styling in CSS

### Promoting Accessibility and Design Responsiveness

following the above two principles makes it easier for blind and deaf people to use the web

### Reducing the Overlap Between HTML, CSS, and JavaScript

HTML ... Content

CSS ... Design

JS ... Interactivity

if you want to set the color of something, use CSS

if you want to change the color of something in response to a user input, use JavaScript

### Supporting rich media experiences while eliminating the need for plugins such as Flash or Java

HTML5 adds

-   support for media with `<video>` and `<audio>`
-   a defined space for drawing and graphics in JS with `<canvas>`
-   new form elements

[new tags](https://www.tutorialspoint.com/html5/html5_new_tags.htm)

## attributes

https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes

https://css-tricks.com/a-complete-guide-to-data-attributes/

there are tons of existing attributes. if you need to make one, just prefix with `data-` eg `data-myAttribute`

## div v span

`<div>`s, and `<span>`s are HTML elements that act as containers solely for styling purposes. As generic containers, they do not come with any overarching meaning or semantic value.

A `<div>` is a block-level element that is commonly used to identify large groupings of content, and which helps to build a web page’s layout and design. A `<span>`, on the other hand, is an inline-level element commonly used to identify smaller groupings of text within a block-level element.

## semantic elements

The library of elements in HTML is fairly large, with well over 100 elements available for use. Deciding which elements to use to describe different content may be difficult, but these elements are the backbone of semantics.

HTML5 introduced new structurally based elements, including the `<header>`, `<nav>`, `<article>`, `<section>`, `<aside>`, and `<footer>` elements.

All of these new elements are intended to give meaning to the organization of our pages and improve our structural semantics.

![building-structure](building-structure.png)

## images

When your site is slow, the easiest way to get it running faster is to optimize your image sizes and filetypes.

# tables

https://learn.shayhowe.com/html-css/organizing-data-with-tables/

# lists

https://learn.shayhowe.com/html-css/creating-lists/

# forms

https://learn.shayhowe.com/html-css/building-forms/
