import { ValidFont } from "../types/ValidFont";
import { StringOnlyObject } from "../types/StringOnlyObject";
import { stdout } from "process";

export class Tools {
  static createFontObject(alphabet: string[], font: string[]): void {
    let i = 0;
    let fontObject: StringOnlyObject = {};

    for (const char of font) {
      fontObject[alphabet[i]] = char;
      i++;
    }
    stdout.write(JSON.stringify(fontObject) + "\n");
  }

  static printFont(font: ValidFont): void {
    stdout.write(this.returnFont(font) + "\n");
  }

  static returnFont(font: ValidFont): string {
    const fontObj = require(`../../assets/fonts/${font}.json`);
    return JSON.stringify(fontObj);
  }

  static printAllFonts(): void {
    stdout.write(this.returnAllFonts() + "\n");
  }

  static returnAllFonts(): string[] {
    const { readdirSync } = require("fs");

    const fonts = readdirSync(`${__dirname}/../../assets/fonts`, "UTF-8")
      .filter((file: string) => file.endsWith(".json"))
      .map((item: string) => item.substring(0, item.length - 5));

    return fonts;
  }
}
