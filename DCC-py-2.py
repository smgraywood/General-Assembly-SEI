# Prompt:
# Given a string s consisting of words and spaces, return the length of the last word in the string.

# A word is a maximal substring consisting of non-space characters only.

# Examples:
# length_of_last_word('hello world') # 5
# length_of_last_word("I'm sorry Dave, I'm afraid I can't do that") # 4
# length_of_last_word(' Face    difficult situations    and conflict head     on     ') # 2

def length_of_last_word(s):
    words = s.split()
    if words:
        return len(words[-1])
    else:
        return 0
