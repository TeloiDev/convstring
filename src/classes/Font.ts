import { stdout } from "process";

type ValidFont = "classic" | "future" | "square" | "subscript" | "superscript" | "upsidedown";

class Font {
  static async apply(input: string, font: ValidFont): Promise<string> {
    const fontArr = await require(`../assets/fonts/${font}.json`);
    let output = "";

    for (const char of input.split("")) {
      if (fontArr[char] !== undefined) output += fontArr[char];
      else if (fontArr[char.toLowerCase()] !== undefined) output += fontArr[char.toLowerCase()];
      else output += char;
    }

    if (font === "upsidedown") output = output.split("").reverse().join("");
    return output;
  }

  private static createFontObject(alphabet: string[], font: string[]): void {
    interface StringMap {
      [key: string]: string;
    }

    let i = 0;
    let fontObject: StringMap = {};

    for (let char of font) {
      fontObject[alphabet[i]] = char;
      i++;
    }
    stdout.write(JSON.stringify(fontObject));
  }
}

export { Font };
