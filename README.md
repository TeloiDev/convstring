# ConvString

[![](https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg)](https://www.npmjs.com/package/convstring)
[![](https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg)](https://github.com/TeloiDev/convstring)

ConvString is a NPM package that lets you change your strings to inter alia:

- 🤖 Binary Strings
- 👥 Discord Emoji
- ✨ Change your text's font
- 🌺 And many other cool stuff

### On top of that our package allows you to create your own converters (details below)

## Why us?

- 😎 We guarantee great performance
- 🍀 ConvString is object-oriented and it allows you to create your own converter
- <img src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" align="center" width="25"> Clean Typescript code

<br/>

# Documentation

To start your journey with ConvString you need to install the package with npm.
Run `npm install convstring` in the command line of your project. Then import it using

```js
const { Convert, Font } = require("convstring");
```

#### All Convert methods:

```js
const { Convert } = require("convstring");

const conv = new Convert({"foo":"bar"});
console.log(conv.useConverter("foo"); // expected output: "bar"

console.log(Convert.toDiscordEmoji("foo"); // expected output: ":regional_indicator_f: :regional_indicator_o: :regional_indicator_o:"

console.log(Convert.toBinary("bar")); // expected output: "1100010 1100001 1110010"

console.log(Convert.toCeasarCipher("abc", 4)) // expected output: "efg" 
// second param determines the shift of letteres (default: 3)
```

<br/>

#### Are you bored with your boring regular font? We have a great thing just for YOU Introducing:

## Font class:

```js
const { Font } = require("convstring");

console.log(Font.apply("foo bar", "classic")); // expected output: "𝔣𝔬𝔬 𝔟𝔞𝔯"
```

<br/>

## Contributing

Contributions are always welcome. Especially when it comes to custom fonts. Your contribution will be accepted as long as you follow the template that is defined in a private method of `Font` class.

### Contributors:

[<img src="https://avatars.githubusercontent.com/u/72653148?s=400&u=1a38768d42fa92337fc84c36bdc156dd10438ee9&v=4" width="50" align="center" style="border-radius:50%"/>](https://github.com/TeloiDev)
