def is_isogram(string):
    used_letters = {}

    for character in string:
        if character.isalpha():
            lower_char = character.lower()
            if lower_char in used_letters:
                # Repeat found!
                return False
            else:
                # Make record of character
                used_letters[lower_char] = 0

    # No repeats found
    return True
