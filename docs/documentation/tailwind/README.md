---
title: "Tailwind"
---

# Tailwind

## Get started

First we need to go into our project root folder and install our npm package

```
npm install tailwindcss postcss autoprefixer
```

If you're integrating Tailwind with a tool that relies on an older version of PostCSS, you may see an error like this:

:::danger
Error: PostCSS plugin tailwindcss requires PostCSS 8.
:::

If you run into the error mentioned above, uninstall Tailwind and re-install using the compatibility build instead:

```
npm uninstall tailwindcss postcss autoprefixer
npm install tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

Then we need to create a postcss.config.js file in our root folder with following:

```js
// postcss.config.js
module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
```

Then we need to create a tailwind.config.file in the root folder with short commando

```
npx tailwindcss init
```

:::tip
If you want to see a full config file with all utilities:

```
npx tailwindcss init --full
```

:::

or manually

```js
// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
```

Then create a css file with our @tailwind css classes:

```css
/* ./your-css-folder/styles.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Last step is to import our stylesheet in our app.js (our main file)

```js
import "tailwindcss/tailwind.css";
```

## Build your css

How you actually build your project will depend on the tools that you're using. Your framework may include a command like npm run dev to start a development server that compiles your CSS in the background, you may be running webpack yourself, or maybe you're using postcss-cli and running a command like postcss styles.css -o compiled.css.

When building for production, be sure to configure the purge option to remove any unused classes for the smallest file size:

```js
// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
```

## Using a custom CSS file

If you'd like to process any custom CSS alongside the default styles Tailwind generates, create a CSS file wherever you normally would and use the @tailwind directive to including Tailwind's base, components, and utilities styles:

```css
/* ./your-css-folder/styles.css */
@tailwind base;
@tailwind components;

.btn {
  @apply px-4 py-2 bg-blue-600 text-white rounded;
}

@tailwind utilities;
```

Then include the path to that file when building your CSS with npx tailwindcss build:

```
npx tailwindcss-cli@latest build ./src/tailwind.css -o ./dist/tailwind.css
```
