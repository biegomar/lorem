/**
 * A library to generate an arbitrary sequence of “lorem ipsum” texts.
 *
 * @module
 */

const loremParagraph1 = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
const wordsParagraph1 = loremParagraph1.split(" ");

/**
 * Creates a string with a certain number of words from the basic text “lorem ipsum”.
 *
 * @param countOfWords The number of words that should be generated.
 * @returns A string with the number of words from "lorem ipsum".
 */
export default function generateWords(countOfWords: number): string {
    let result: string = "";    
    let wordCounter: number = 0;

    for (let index = 0; index < countOfWords; index++) {
        result += wordsParagraph1[wordCounter];
        wordCounter++;
        if (wordCounter >= wordsParagraph1.length) {
            wordCounter = 0;
        }
        if (index < countOfWords - 1) {
            result += " ";
        }
        
    }

    return result;
  }