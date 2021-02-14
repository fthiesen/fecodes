# Style guide documentation

## Names and Capitalization

ID and class names should be in lowercase, with words separated by hifen.

```
#my-id
```
```
.my-class
```

HTML elements should be in lowercase.

```
body, div {
```
## Comments

Comments that refer to a closing tag should be on a separate line immediately after the closing tag.

Only C++ style comments are valid for CSS code.

```
// Comment goes here
```
## Fonts

All font sizes should be set using rem values.

```
font-size: 1.6rem;
```

## Colors

All colors should be set as SASS variables, except for black and white, that should be set by the name of the color.

```
color: $dandelion;
```
```
color: white;
```

## Folders and files

HTML files should be placed in the root folder.

```
/index.html
```

Image files should be placed in the assets folder.

```
/assets/my-image.jpg
```

CSS files should be placed in the styles folder.

```
/styles/styles.css
```

SCSS files should be placed in the sass folder inside the styles folder.

```
/styles/sass/styles.scss
```

Each HTML file should have it's own .scss file following the name convention below.

```
index.html => /styles/sass/_index.scss
```

# Project link

[Beatrice Duncan & Fernanda Thiesen - Project One](https://fernanda-bea.github.io/fernanda-beatrice-project-one/)
