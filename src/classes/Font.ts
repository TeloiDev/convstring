import { ValidFont } from "../types/ValidFont";

export class Font {
  static apply(input: string, font: ValidFont): string {
    if (!input || input.length === 0) throw new Error("Param @input must be a non-empty string");

    const fontObj = require(`../../assets/fonts/${font}.json`);
    let output = "";

    for (const char of input.split("")) {
      if (fontObj[char] !== undefined) {
        output += fontObj[char];
        continue;
      }

      output += char;
    }

    if (font === "upsidedown") output = output.split("").reverse().join("");
    return output;
  }
}
