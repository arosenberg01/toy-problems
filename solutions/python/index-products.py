

# You have an array of integers, and for each index you want to find the product of every
# integer except the integer at that index.

# For example, given:

#   [1, 7, 3, 4]

# your function would return:

#   [84, 12, 28, 21]

# by calculating:

#   [7*3*4, 1*3*4, 1*7*4, 1*7*3]

def get_products_of_all_ints_except_at_index(int_array):
    products_of_all_ints_except_index = [1] * len(int_array)
    product = 1
    i = 0

    while i < len(int_array):
        products_of_all_ints_except_index[i] = product
        product *= int_array[i]
        i += 1

    product = 1
    i = len(int_array) - 1

    while i >= 0:
        products_of_all_ints_except_index[i] *= product
        product *= int_array[i]
        i -= 1


    return products_of_all_ints_except_index

print(get_products_of_all_ints_except_at_index([3, 1, 2, 5, 6, 4]))
print(get_products_of_all_ints_except_at_index([1, 7, 3, 4]))

