def uniqueChars(str):
    char_bools = [False] * 256
    
    for character in str:
        char_code = ord(character)
        if char_bools[char_code] == True:
            return True
        else:
            char_bools[char_code] = True

    return False


print(uniqueChars('abcd')) # --> False
print(uniqueChars('abbc')) # --> True
