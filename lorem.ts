export function words(numberOfWords: number): string {
    let result: string = "";
    const lorem: string = "lorem";

    for (let index = 0; index < numberOfWords; index++) {
        result += lorem;
        if (index < numberOfWords - 1) {
            result += " ";
        }
        
    }

    return result;
  }