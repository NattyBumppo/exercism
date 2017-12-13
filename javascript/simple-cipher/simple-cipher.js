class Cipher
{
    constructor(key = null)
    {
        // console.log('constructor with key of');
        console.log(key);

        this.possible_chars = 'abcdefghijklmnopqrstuvwxyz';
        this.base_char_code = 'a'.charCodeAt(0);

        if (key === null)
        {
            this.key = this.generateNewRandomKey();
        }
        else
        {
            if (key.length === 0)
            {
                // Too short!
                throw new Error('Bad key');
            }

            // Check for bad characters
            for (let i = 0; i < key.length; i++)
            {
                if (!this.possible_chars.includes(key[i]))
                {
                    // Bad character!
                    throw new Error('Bad key');
                }
            }

            this.key = key;
        }

        
    }

    // Use key to decode string
    decode(ciphertext)
    {
        let plaintext = '';

        for (let i = 0; i < ciphertext.length; i++)
        {
            plaintext += this.decodeChar(ciphertext[i], i);
        }

        return plaintext;
    }

    decodeChar(char, idx)
    {
        let char_value = char.charCodeAt(0) - this.base_char_code;
        
        // Reduce the index into the key if it's past the bounds of the key
        idx = idx % this.key.length;
        let keychar = this.key[idx];

        let keychar_value = keychar.charCodeAt(0) - this.base_char_code;
        
        let combined_value = char_value - keychar_value;
        if (combined_value < 0)
        {
            combined_value += 26;
        }

        return String.fromCharCode(combined_value +  this.base_char_code);
    }

    // Use key to encode string
    encode(plaintext)
    {
        let ciphertext = '';

        for (let i = 0; i < plaintext.length; i++)
        {
            ciphertext += this.encodeChar(plaintext[i], i);
        }

        return ciphertext;
    }

    encodeChar(char, idx)
    {
        let char_value = char.charCodeAt(0) - this.base_char_code;

        // Reduce the index into the key if it's past the bounds of the key
        idx = idx % this.key.length;
        let keychar = this.key[idx];

        let keychar_value = keychar.charCodeAt(0) - this.base_char_code;
        
        let combined_value = char_value + keychar_value;
        combined_value %= 26;

        return String.fromCharCode(combined_value +  this.base_char_code);
    }

    generateNewRandomKey()
    {
        let key_text = '';
        let key_length = 200;

        for (let i = 0; i < key_length; i++)
        {
            key_text += this.possible_chars.charAt(Math.floor(Math.random() * this.possible_chars.length));
        }

        return key_text;
    }

    

}


module.exports = Cipher;