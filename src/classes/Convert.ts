import { ConverterBuilder } from "./ConverterBuilder";

const nonStringInputError = new Error("Param @input must be a non-empty string");

class Convert extends ConverterBuilder {
  static toDiscordEmoji(input: string): string {
    if (!input || input.length === 0) throw nonStringInputError;

    const string = input.toLowerCase();
    let convertedWords = "";

    for (let i = 0; i < string.length + 1; i++) {
      if (string.substring(i - 1, i).match(/[a-z]/i)) {
        let character = " :regional_indicator_" + string.substring(i - 1, i) + ":";

        convertedWords = convertedWords + character;
      }
    }
    return convertedWords.substring(1, convertedWords.length);
  }

  static toBinary(input: string): string {
    if (!input || input.length === 0) throw nonStringInputError;

    const string = input;
    let output = "";

    for (let i = 0; i < string.length; i++) {
      output += string[i].charCodeAt(0).toString(2) + " ";
    }
    return output;
  }
}

export { Convert };
