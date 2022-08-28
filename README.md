# preact-icomoon

[![npm](https://img.shields.io/npm/v/preact-icomoon?color=%234fc921)](https://www.npmjs.com/package/preact-icomoon)
![npm](https://img.shields.io/npm/dw/preact-icomoon)
[![License](https://img.shields.io/badge/License-MIT-green.svg?color=%234fc921)](https://opensource.org/licenses/MIT)

It makes it very simple to use SVG icons in your `Preact` projects.

## Install

```
npm install preact-icomoon
```

```
yarn add preact-icomoon
```

## Usage

### You can try [svgps.app](https://svgps.app/) to generate `selection.json` file. 🎉

You can use the icons you selected on [IcoMoon](https://icomoon.io/app/) by downloading the `selection.json` file.

### Declare

```js
// Icon.jsx
import IcoMoon from "preact-icomoon";
import iconSet from "./selection.json";

const Icon = (props) => <IcoMoon iconSet={iconSet} {...props} />;

export default Icon;
```

#### With TypeScript

```tsx
// Icon.tsx
import IcoMoon, { IconProps } from "preact-icomoon";
import iconSet from "./selection.json";

const Icon = (props: IconProps) => <IcoMoon iconSet={iconSet} {...props} />;

export default Icon;
```

### Use

```js
import Icon from "./Icon";

<Icon icon="pencil" size={20} color="orange" />;
```

## Props List

| Name              | Type          | Default | Sample                        |
| ----------------- | ------------- | ------- | ----------------------------- |
| iconSet           | Object        | -       | "selection.json file content" |
| icon              | String        | -       | "home"                        |
| size              | Number,String | -       | "1em", 10, "100px"            |
| color             | String        | -       | "red", "#f00", "rgb(0,0,0)"   |
| style             | Object        | {...}   | { color: '#ff0'}              |
| title             | String        | -       | "Icon Title"                  |
| className         | String        | -       | "icomoon"                     |
| disableFill       | Boolean       | -       | true                          |
| removeInlineStyle | Boolean       | -       | true                          |

### Default Style

```js
{
  display: "inline-block",
  stroke: "currentColor",
  fill: "currentColor",
}
```

## iconList

You can use the iconList method to see a complete list of icons you can use.

```js
import IcoMoon, { iconList } from "preact-icomoon";

iconList(iconSet);

// sample output
[
  "document",
  "camera",
  "genius",
  "chat",
  "heart1",
  "alarmclock",
  "star-full",
  "heart",
  "play3",
  "pause2",
  "bin1",
];
```

### Related Links

- [react-icomoon](https://github.com/aykutkardas/react-icomoon)
- [vue-icomoon](https://github.com/aykutkardas/vue-icomoon)
- [svelte-icomoon](https://github.com/aykutkardas/svelte-icomoon)
