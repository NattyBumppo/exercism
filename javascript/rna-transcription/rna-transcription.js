class DnaTranscriber {
    toRna(dna_string)
    {
        let rna_string = '';
    
        dna_string.array.forEach(char => {
            rna_string += this.toRnaNucleotide(dna_string[i]);
        });
    
        return rna_string;
    }
    
    toRnaNucleotide(dna_nucleotide)
    {
        // Given a DNA strand, its transcribed RNA strand is formed by replacing
        // each nucleotide with its complement:
        
        // * `G` -> `C`
        // * `C` -> `G`
        // * `T` -> `A`
        // * `A` -> `U`
    
        switch(dna_nucleotide)
        {
            case 'G':
                return 'C';
            case 'C':
                return 'G';
            case 'T':
                return 'A';
            case 'A':
                return 'U';
            default:
            // Shouldn't get here; this means the character was unknown
            throw new Error('Invalid input');
        }
    }
} 

module.exports = DnaTranscriber;