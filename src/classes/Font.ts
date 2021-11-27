import { ValidFont } from "../types/ValidFont";
import { ConverterBuilder } from "./ConverterBuilder";

export class Font {
  static apply(input: string, font: ValidFont): string {
    if (!input || input.length === 0) throw new Error("Param @input must be a non-empty string");

    const fontObj = require(`../../assets/fonts/${font}.json`);

    const applyFont = new ConverterBuilder(fontObj).useConverter(input);

    if (font === "upsidedown") return applyFont.split("").reverse().join("");
    return applyFont;
  }
}
