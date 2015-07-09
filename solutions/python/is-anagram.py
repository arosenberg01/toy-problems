def is_anagram(string_one, string_two):
    sorted_string_one = sorted(string_one)
    sorted_string_two = sorted(string_two)

    for char_one, char_two in zip(sorted_string_one, sorted_string_two):
        if char_one != char_two:
            return False

    return True

print(is_anagram('abcd', 'dbca')) # --> True
print(is_anagram('abcd', 'aabb')) # --> False
