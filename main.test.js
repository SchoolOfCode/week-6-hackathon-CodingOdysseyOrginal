import { test, expect, describe } from "vitest";
import { captainsCode } from "./main.js";

describe("Decoding the Space Captain's Secret Code", () => {
  test('should reverse the secret message "eviL gnol dna repsorp"', () => {
    expect(captainsCode("eviL gnol dna repsorp")).toBe("Live long and prosper");
  });

  test('should reverse the secret message "yaM eht ecroF eb htiw uoy"', () => {
    expect(captainsCode("yaM eht ecroF eb htiw uoy")).toBe("May the Force be with you");
  });
  
  test('should decode test message "uoy llahs ton ssap"', () => {
    expect(captainsCode("uoy llahs ton ssap")).toBe("you shall not pass");
  });
  
  test("should throw an error if input is an array", () => {
    expect(() => captainsCode(["uoy llahs ton ssap"])).toThrow("Input must be a string, not an array.");
  });

});























//SOLUTION













// export function captainsCode(code) {
//     // Check if the input is an array
//     if (Array.isArray(code)) {
//       throw new Error("Input must be a string, not an array.");
//     }
  
//     // Decode the captain's message by reversing each word
//     const words = code.split(' ');
//     const decodedWords = words.map(word => word.split('').reverse().join(''));
  
//     // Return the decoded message
//     return decodedWords.join(' ');
//   }
