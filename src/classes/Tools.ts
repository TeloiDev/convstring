import { ValidFont } from "../types/ValidFont";

export class Tools {
  static createFontObject(alphabet: string[], font: string[]): void {
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

  static printFont(font: ValidFont): void {
    const fontObj = require(`../../assets/fonts/${font}.json`);
    process.stdout.write(JSON.stringify(fontObj));
  }

  static returnFont(font: ValidFont): string {
    const fontObj = require(`../../assets/fonts/${font}.json`);
    return JSON.stringify(fontObj);
  }
}
