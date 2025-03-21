n = int(input())

zeroes = 0
for i in range(n):
    x = int(input())
    if x == 0:
        zeroes += 1

print(zeroes)