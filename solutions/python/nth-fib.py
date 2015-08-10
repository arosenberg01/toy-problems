
def fib_recursive(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib_recursive(n-1) + fib_recursive(n-2)

print(fib_recursive(0))
print(fib_recursive(1))
print(fib_recursive(2))
print(fib_recursive(3))
print(fib_recursive(4))
print(fib_recursive(5))

class Fib_Memo:
    def __init__(self):
        self.memo = {}

    def fib(self, n):
        if n < 0:
            raise Exception("Index was negative")

        elif n in [0, 1]:
            return n

        if n in self.memo:
            return self.memo[n]

        result = self.fib(n-1) + self.fib(n-2)

        self.memo[n] = result

        return result

fib = Fib_Memo()
# print(fib.fib(0))
# print(fib.fib(1))
# print(fib.fib(2))
# print(fib.fib(3))
# print(fib.fib(4))
print(fib.fib(5))

def fib_iterative(n):
    if n < 0:
        raise Exception("Index was negative")

    elif n in [0, 1]:
        return n

    prev = 0
    prev_prev = 1

    for _ in range(n):
        current = prev + prev_prev
        prev_prev = prev
        prev = current

    return current

print(fib_iterative(5))
