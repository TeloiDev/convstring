import { stdout } from "process";

type ValidFont = "classic";

class Font {
  static async apply(input: string, font: ValidFont): Promise<string> {
    let fontArr = await require(`../assets/fonts/${font}.json`);
    let output = "";

    for (const char of input.split("")) {
      if (fontArr[char] !== undefined) output += fontArr[char];
      else if (fontArr[char.toLowerCase()] !== undefined) output += fontArr[char.toLowerCase()];
      else output = output + char;
    }
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
