import { ValidFont } from "../types/ValidFont";
import { OnlyStrings } from "../types/OnlyStrings";
import { stdout } from "process";

export class Tools {
  static createFontObject(alphabet: string[], font: string[]): void {
    let i = 0;
    let fontObject: OnlyStrings = {};

    for (const char of font) {
      fontObject[alphabet[i]] = char;
      i++;
    }
    stdout.write(JSON.stringify(fontObject) + "\n");
  }

  static printFont(font: ValidFont): void {
    const fontObj = require(`../../assets/fonts/${font}.json`);
    stdout.write(JSON.stringify(fontObj));
  }

  static returnFont(font: ValidFont): string {
    const fontObj = require(`../../assets/fonts/${font}.json`);
    return JSON.stringify(fontObj);
  }
}
