import { OnlyStrings } from "../types/OnlyStrings";

export class ConverterBuilder {
  private converterPattern: any;
  constructor(args: OnlyStrings) {
    this.converterPattern = args;

    if (!args || !Object.values(args).every((i) => typeof i === "string")) {
      throw new Error("Param @args must be a non-empty object that includes only strings");
    }
  }

  useConverter(input: string): string {
    if (!input || input.length === 0) throw new Error("Param @input must be a non-empty string");

    let output = "";

    for (const char of input.split("")) {
      if (this.converterPattern[char] !== undefined) {
        output += this.converterPattern[char];
        continue;
      }

      output += char;
    }

    return output;
  }
}
