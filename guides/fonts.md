how to include custom fonts:

1. Obtain the font files: You'll need the font files in different formats, such as .ttf, .otf, .woff, or .woff2. Make sure you have the correct font files ready.

2. Include the font files in your project: Place the font files in a directory within your project's file structure.

3. Define the @font-face rule in your CSS: Use the @font-face rule to specify the font family name, font file paths, and font formats. Here's an example:

```css
@font-face {
  font-family: 'CustomFont';
  src: url('path/to/font.woff2') format('woff2'),
       url('path/to/font.woff') format('woff');
}
```

then in the styling:

```css
body {
  font-family: 'CustomFont', sans-serif;
}
```

List of fonts I have in assets:
see: https://cinni.net/?z=/font
1. 000webfont
2. bangalore
3. romance
4. PLANB