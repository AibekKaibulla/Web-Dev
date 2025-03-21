def min_divisor(x):
    """Finds minimal divisor of integer"""
    for i in range(2, int(x ** 0.5) + 1):
        if x % i == 0:
            return i
        
    return x


x = int(input())

print(min_divisor(x))