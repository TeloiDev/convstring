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

  static toCeasarCipher(input: string, shift?: number): string {
    if (shift === undefined) shift = 3;
    interface StringMap {
      [key: string]: string;
    }

    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const length = alphabet.length;

    shift = shift % length;

    const firstElements = alphabet.slice(0, shift);
    const remainingElements = alphabet.slice(shift, length);

    const shiftedAlphabet = [...remainingElements, ...firstElements];
    let output = "";

    let i = 0;
    let alphabetObject: StringMap = {};

    for (const char of shiftedAlphabet) {
      alphabetObject[alphabet[i]] = char;
      i++;
    }

    for (const char of input.split("")) {
      if (alphabetObject[char] !== undefined) {
        output += alphabetObject[char];
        continue;
      }

      output += char;
    }

    return output;
  }
}

export { Convert };
