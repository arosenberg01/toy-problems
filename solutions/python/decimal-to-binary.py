from pythonds.basic.stack import Stack

def divide_by_two(decimal):
    stack = Stack()

    while decimal > 0:
        remainder = decimal % 2
        stack.push(remainder)
        decimal = decimal // 2

    binary = ''
    while not stack.isEmpty():
        binary += str(stack.pop())

    return binary

print(divide_by_two(42))
