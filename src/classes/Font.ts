type ValidFont =
  | "classic"
  | "future"
  | "square"
  | "subscript"
  | "superscript"
  | "upsidedown"
  | "cursive"
  | "double-struck";

class Font {
  static apply(input: string, font: ValidFont): string {
    const fontArr = require(`../assets/fonts/${font}.json`);
    let output = "";

    for (const char of input.split("")) {
      if (fontArr[char] !== undefined) {
        output += fontArr[char];
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

export { Font };
