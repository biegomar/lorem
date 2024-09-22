/**
 * A library to generate an arbitrary sequence of “lorem ipsum” texts.
 *
 * ```ts
 * import generateWords, * as mod from "@biegomar/lorem";
 *
 * if (import.meta.main) {
 *  console.log("Example text:", generateWords(10)); // Example text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
 *  // -- OR -- 
 *  console.log("Example text:", mod.default(2)); // Example text: Lorem ipsum
 * }
 * ```
 * @module
 */

const loremParagraph1: string =
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
const wordsParagraph1: string[] = loremParagraph1.split(" ");

/**
 * Creates a string with a certain number of words from the basic text “lorem ipsum”.
 *
 * @param countOfWords The number of words that should be generated.
 * @returns A string with the number of words from "lorem ipsum".
 */
export default function generateWords(countOfWords: number): string {
    const result: string[] = [];

    for (let index = 0; index < countOfWords; index++) {
        result.push(wordsParagraph1[index % wordsParagraph1.length]);        
    }

    return result.join(" ");
}
