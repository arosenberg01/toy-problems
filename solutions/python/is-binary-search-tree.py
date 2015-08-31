import sys
min_int = -sys.maxint - 1
max_int = sys.maxint

# recursive solution
def is_binary_search_tree(root, lower_bound = min_int, upper_bound = max_int):

    if not root:
        return True

    if root.value > upper_bound or root.value < lower_bound:
        return False

    return is_binary_search_tree(root.left, lower_bound, root.value) and \
           is_binary_search_tree(root.right, root.value, upper_bound)

