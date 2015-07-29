# Write a function that return whether or not the input string has balanced parantheses
# Balanced:
#   '((()))'
#   '(()())'
# Not balanced:
#   '((()'
#   '())('
#
# Hard mode: deal with (), {}, and []
#
# Balanced:
#   '{{([][])}()}'
#   '[[{{(())}}]]'
#   '[][][](){}'
#
# Not balanced:
#   '([)]'
#   '((()]))'
#   '[{()]'


class Stack():
    def __init__(self):
        self.storage = []

    def push(self, value):
        self.storage.append (value)

    def pop(self):
        return self.storage.pop()

    def peek(self):
        return self.storage[len(self.storage) - 1]

    def size(self):
        return len(self.storage)

    def isEmpty(self):
        return self.storage == []

    def seeStack(self):
        return self.storage


def is_balanced(parens):
    stack = Stack()

    while len(parens) > 0:
        # print(stack.seeStack())

        current_paren = parens[0:1]

        if current_paren == ')':
            if stack.size() > 0 and stack.peek() == '(':
                stack.pop()
            else:
                return False
        else:
            stack.push(current_paren)

        parens = parens[1:]

    return stack.size() == 0

print(is_balanced('((()))')) # --> True
print(is_balanced('(()())')) # --> True
print(is_balanced('((()')) # --> False
print(is_balanced('())(')) # --> False

def matches(open,close):
    opens = "([{"
    closers = ")]}"
    return opens.index(open) == closers.index(close)

def is_balanced_hard(parens):
    stack = Stack()
    opening_parens = '([{'
    index = 0

    while index < len(parens):
        current_paren = parens[index]
        index += 1

        if current_paren in opening_parens:
            stack.push(current_paren)
        else:
            top = stack.pop()

            if not matches(top, current_paren):
                return False

    return stack.size() == 0


print(is_balanced_hard('{{([][])}()}')) # --> True
print(is_balanced_hard('[[{{(())}}]]')) # --> True
print(is_balanced_hard('[][][](){}')) # --> True
print(is_balanced_hard('([)]')) # --> False
print(is_balanced_hard('((()]))')) # --> False
print(is_balanced_hard('[{()]')) # --> False









