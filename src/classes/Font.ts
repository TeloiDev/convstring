type ValidFont =
  | "classic"
  | "future"
  | "square"
  | "subscript"
  | "superscript"
  | "upsidedown"
  | "cursive"
  | "double-struck"
  | "circle"
  | "parenthesized";

export class Font {
  static apply(input: string, font: ValidFont): string {
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

  static configCreateFontObject(alphabet: string[], font: string[]): void {
    interface StringMap {
      [key: string]: string;
    }

    let i = 0;
    let fontObject: StringMap = {};

    for (const char of font) {
      fontObject[alphabet[i]] = char;
      i++;
    }
    process.stdout.write(JSON.stringify(fontObject) + "\n");
  }
}
