/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-plusplus */
import PasswordOptions from '../interfaces/passwordOptions';
import UppercaseGenerator from './generator/uppercaseGenerator';
import LowercaseGenerator from './generator/lowercaseGenerator';
import NumberGenerator from './generator/numberGenerator';
import SymbolGenerator from './generator/symbolGenerator';
import MathRandom from './generator/mathRandom';
import type { Uppercase } from '../types/uppercase';
import type { Lowercase } from '../types/lowercase';
import type { Numbers } from '../types/numbers';
import type { Symbol } from '../types/symbol';

const GeneratePassword = (passwordOptions: PasswordOptions) => {
  const { length, uppercase, lowercase, numbers, symbols } = passwordOptions;
  let generatedPassword = '';
  let generatedCharacter: Uppercase | Lowercase | Numbers | Symbol;

  if (uppercase) {
    if (lowercase) {
      if (numbers) {
        if (symbols) {
          // Generate password with all options
          for (let i = 0; i < length; i++) {
            switch (MathRandom(4)) {
              case 1:
                generatedCharacter = UppercaseGenerator();
                break;
              case 2:
                generatedCharacter = LowercaseGenerator();
                break;
              case 3:
                generatedCharacter = NumberGenerator();
                break;
              case 4:
                generatedCharacter = SymbolGenerator();
                break;

              default:
                generatedCharacter = NumberGenerator();
                break;
            }
            generatedPassword += generatedCharacter;
          }
        } else {
          // Generate password with uppercase, lowercase and numbers
          for (let i = 0; i < length; i++) {
            switch (MathRandom(3)) {
              case 1:
                generatedCharacter = UppercaseGenerator();
                break;
              case 2:
                generatedCharacter = LowercaseGenerator();
                break;
              case 3:
                generatedCharacter = NumberGenerator();
                break;

              default:
                generatedCharacter = NumberGenerator();
                break;
            }
            generatedPassword += generatedCharacter;
          }
        }
      } else if (symbols) {
        // Generate password with uppercase, lowercase and symbols
        for (let i = 0; i < length; i++) {
          switch (MathRandom(3)) {
            case 1:
              generatedCharacter = UppercaseGenerator();
              break;
            case 2:
              generatedCharacter = LowercaseGenerator();
              break;
            case 3:
              generatedCharacter = SymbolGenerator();
              break;

            default:
              generatedCharacter = LowercaseGenerator();
              break;
          }
          generatedPassword += generatedCharacter;
        }
      } else {
        // Generate password with uppercase and lowercase
        for (let i = 0; i < length; i++) {
          switch (MathRandom(2)) {
            case 1:
              generatedCharacter = UppercaseGenerator();
              break;
            case 2:
              generatedCharacter = LowercaseGenerator();
              break;

            default:
              generatedCharacter = LowercaseGenerator();
              break;
          }
          generatedPassword += generatedCharacter;
        }
      }
    } else if (numbers) {
      if (passwordOptions.symbols) {
        // Generate password with uppercase, numbers and symbols
        for (let i = 0; i < length; i++) {
          switch (MathRandom(3)) {
            case 1:
              generatedCharacter = UppercaseGenerator();
              break;
            case 2:
              generatedCharacter = NumberGenerator();
              break;
            case 3:
              generatedCharacter = SymbolGenerator();
              break;

            default:
              generatedCharacter = SymbolGenerator();
              break;
          }
          generatedPassword += generatedCharacter;
        }
      } else {
        // Generate password with uppercase and numbers
        for (let i = 0; i < length; i++) {
          switch (MathRandom(2)) {
            case 1:
              generatedCharacter = UppercaseGenerator();
              break;
            case 2:
              generatedCharacter = NumberGenerator();
              break;

            default:
              generatedCharacter = NumberGenerator();
              break;
          }
          generatedPassword += generatedCharacter;
        }
      }
    } else if (symbols) {
      // Generate password with uppercase and symbols
      for (let i = 0; i < length; i++) {
        switch (MathRandom(2)) {
          case 1:
            generatedCharacter = UppercaseGenerator();
            break;
          case 2:
            generatedCharacter = SymbolGenerator();
            break;

          default:
            generatedCharacter = SymbolGenerator();
            break;
        }
        generatedPassword += generatedCharacter;
      }
    } else {
      // Generate password with uppercase
      for (let i = 0; i < length; i++) {
        generatedCharacter = UppercaseGenerator();
        generatedPassword += generatedCharacter;
      }
    }
  }
  return generatedPassword;
};

export default GeneratePassword;
