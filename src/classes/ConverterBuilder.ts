const nonStringInputError = new Error("Param @input must be a non-empty string");

export class ConverterBuilder {
  convertedFrom: string[];
  convertedTo: string[];

  constructor(args: object) {
    this.convertedFrom = Object.keys(args);
    this.convertedTo = Object.values(args);

    if (this.convertedFrom.length === 0 || this.convertedTo.length === 0 || !args)
      throw new Error("Param @args must be a non-empty object");
  }

  useConverter(input: string): string {
    if (!input || input.length === 0) throw nonStringInputError;

    const string = input;
    let output!: string;

    for (let i = 0; i < this.convertedFrom.length; i++) {
      if (i === 0) {
        output = string.replace(new RegExp(this.convertedFrom[i], "g"), this.convertedTo[i]);
      }

      output = output.replace(new RegExp(this.convertedFrom[i], "g"), this.convertedTo[i]);
    }
    return output;
  }
}
