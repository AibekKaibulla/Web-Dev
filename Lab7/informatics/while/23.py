n = int(input())

ans = 0
found = False

for i in range(2, int(n ** 0.5) + 1):
    while n % i == 0:
        ans = i
        found = True
        break
    
    if found is True:
        break


if ans == 0:
    print(n)
else:
    print(ans)