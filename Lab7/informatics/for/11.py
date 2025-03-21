import math

a = int(input())
b = int(input())

for i in range(a, b + 1):
    mul = math.floor(math.sqrt(i))

    if (mul * mul == i):
        print(i, end=' ')
    