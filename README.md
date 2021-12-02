[![NPM](https://nodei.co/npm/convstring.png?compact=true)](https://npmjs.org/package/convstring)
</br>
[![GitHub](https://img.shields.io/badge/Github-Link-lightgrey/endpoint?logo=github)](https://github.com/TeloiDev/convstring)

# ConvString

ConvString is a NPM package that lets you change your strings to inter alia:

- 🤖 Binary Strings
- 👥 Discord Emoji
- 🎭 Zalgo Text
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
const { Convert, Font, ConverterBuilder, Tools } = require("convstring");
```

#### All Convert methods:

```js
const { Convert, ConverterBuilder } = require("convstring");

const conv = new ConverterBuilder({"foo":"bar"});
console.log(conv.useConverter("foo"); // expected output: "bar"

console.log(Convert.toDiscordEmoji("foo"); // expected output: ":regional_indicator_f: :regional_indicator_o: :regional_indicator_o:"

console.log(Convert.toBinary("bar")); // expected output: "1100010 1100001 1110010"

console.log(Convert.toCeasarCipher("abc", 4)) // expected output: "efg"
// second param determines the shift of letteres (default: 3)

console.log(Convert.toZalgo("foo bar baz", 6 { up: true, down: true, middle: true })); // Expected output: "foo bar baz" with glitching chars
// second param represent the level of craziness of returned string
// third param are options (self-explanatory)
```

<br/>

#### Are you bored with your boring regular font? We have a great thing just for YOU Introducing:

## Font class:

```js
const { Font } = require("convstring");

console.log(Font.apply("foo bar", "classic")); // expected output: "𝔣𝔬𝔬 𝔟𝔞𝔯"
```

## You can find a list of all available fonts [here](https://github.com/TeloiDev/convstring/blob/master/FONTS.md).

<br/>

## Contributing

Contributions are always welcome. Especially when it comes to custom fonts. Your font contribution will be accepted as long as you follow the template that is defined in a `createFontObject` method of `Tools` class. For any major changes open an issue first and describe what you want to achieve.

### Contributors:

[<img src="https://avatars.githubusercontent.com/u/72653148?s=400&u=1a38768d42fa92337fc84c36bdc156dd10438ee9&v=4" width="50" align="center" style="border-radius:50%"/>](https://github.com/TeloiDev)
