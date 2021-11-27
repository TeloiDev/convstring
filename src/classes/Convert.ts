import { ConverterBuilder } from "./ConverterBuilder";
import { ZalgoOptions } from "../types/ZalgoOptions";
import { CrazinessRange } from "../types/ZalgoCraziness";
import { OnlyStrings } from "../types/OnlyStrings";

const nonStringError = new Error("Param @input must be a non-empty string");

export class Convert {
  static toDiscordEmoji(input: string): string {
    if (!input || input.length === 0) throw nonStringError;

    const string = input.toLowerCase();
    let convertedWords = "";

    for (let i = 0; i < string.length + 1; i++) {
      if (string.substring(i - 1, i).match(/[a-z]/i)) {
        let character = " :regional_indicator_" + string.substring(i - 1, i) + ":";

        convertedWords += character;
      }
    }

    return convertedWords.substring(1, convertedWords.length);
  }

  static toBinary(input: string): string {
    if (!input || input.length === 0) throw nonStringError;

    let output = "";

    for (let i = 0; i < input.length; i++) {
      output += input[i].charCodeAt(0).toString(2) + " ";
    }

    return output;
  }

  static toCeasarCipher(input: string, shift = 3): string {
    if (!input || input.length === 0) throw nonStringError;

    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const length = alphabet.length;

    shift = shift % length;

    const firstElements = alphabet.slice(0, shift);
    const remainingElements = alphabet.slice(shift, length);

    const shiftedAlphabet = [...remainingElements, ...firstElements];

    let i = 0;
    let alphabetObject: OnlyStrings = {};

    for (const char of shiftedAlphabet) {
      alphabetObject[alphabet[i]] = char;
      i++;
    }

    const output = new ConverterBuilder(alphabetObject).useConverter(input);

    return output;
  }

  static toZalgo(input: string, craziness: CrazinessRange, options: ZalgoOptions): string {
    // TODO: Optimise? less loops?
    if (!input || input.length === 0) throw nonStringError;

    const zalgoUp = require("../../assets/zalgoChars/up.json");
    const zalgoDown = require("../../assets/zalgoChars/down.json");
    const zalgoMiddle = require("../../assets/zalgoChars/middle.json");

    let output = "";
    const randomElement = (arr: string[]): number => Math.floor(Math.random() * arr.length);
    const crazinessRange = (max: number): number => Math.floor(Math.random() * max) * craziness;

    for (let i = 0; i < input.length; i++) {
      if (this.isZalgoChar(input.substring(i, i + 1), [zalgoUp, zalgoDown, zalgoMiddle])) continue;

      // Add normal characters
      output += input.substring(i, i + 1);

      // Add zalgo characters
      if (options.up === true) {
        for (let j = 0; j < crazinessRange(8); j++) {
          output += zalgoUp[randomElement(zalgoUp)];
        }
      }
      if (options.down === true) {
        for (let j = 0; j < crazinessRange(8); j++) {
          output += zalgoDown[randomElement(zalgoDown)];
        }
      }
      if (options.middle === true) {
        for (let j = 0; j < crazinessRange(4); j++) {
          output += zalgoMiddle[randomElement(zalgoMiddle)];
        }
      }
    }

    return output;
  }

  private static isZalgoChar(char: string, zalgoArrs: string[]): boolean {
    for (const arr of zalgoArrs) {
      for (let i = 0; i < arr.length; i++) {
        if (char === arr[i]) return true;
      }
    }
    return false;
  }
}
