export function isPangram(sentence: string): boolean {
  
    const lettersSet = new Set<string>();
  
    const lowerSentence = sentence.toLowerCase();
    for (const char of lowerSentence) {
    
        if (char >= 'a' && char <= 'z') {
            lettersSet.add(char);
        }
    }
    return lettersSet.size === 26;
}