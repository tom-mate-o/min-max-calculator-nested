# <img alt="Min-Max-Value Interpolation" src="src/assets/img/social-share.png" />

A tool that calculates the CSS clamp formula to interpolate between two values in a given viewport range.
I created a [GitHub Fork](https://github.com/tom-mate-o/min-max-calculator-nested) and adapted the calculator to output the clamp function nested with a calc function. This allows [me](https://github.com/tom-mate-o) to use it in a Joomla/YooTheme environment with SASS.

> The original project is by [9elements](https://9elements.com) and was created by [Nesim](https://nes.im/) and [Nils](https://twitter.com/supremebeing09). It can be found [here](https://min-max-calculator.9elements.com/).

> Made with [Astro](https://astro.build), [Svelte](https://svelte.dev) and [PostCSS](https://postcss.org).

## Local setup

### Install dependencies

```sh
yarn install
```

### Start server

```sh
yarn dev
```

> Done! the server is accessible at http://localhost:4321

## Deployment

```sh
yarn build
```

The output will be in the `dist` folder.
