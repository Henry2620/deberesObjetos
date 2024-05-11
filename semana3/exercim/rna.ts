export function toRna(dna: string): string {
    const mapping: { [key: string]: string } = {
        'G': 'C',
        'C': 'G',
        'T': 'A',
        'A': 'U'
    };
    let rna = '';
    for (let i = 0; i < dna.length; i++) {
        const nucleotide = dna[i]; 
        if (mapping[nucleotide]) {
            rna += mapping[nucleotide];
        } else {
            throw new Error('Invalid input DNA.');
        }
    }
    return rna;
}