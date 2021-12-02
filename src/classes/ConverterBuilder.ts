import { StringOnlyObject } from "../types/StringOnlyObject";

export class ConverterBuilder {
  constructor(private args: StringOnlyObject) {
    if (!args || !Object.values(args).every((i) => typeof i === "string")) {
      throw new Error("Param @args must be a non-empty object that includes only strings");
    }
  }

  get getConverterPattern(): object {
    return this.args;
  }

  useConverter(input: string): string {
    if (!input || input.length === 0) throw new Error("Param @input must be a non-empty string");

    let output = "";

    for (const char of input.split("")) {
      this.args[char] !== undefined ? (output += this.args[char]) : (output += char);
    }

    return output;
  }
}
