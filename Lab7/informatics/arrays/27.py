A = list(map(int, input().split()))

ans = 0
for i in range(len(A)):
    if A[i] > 0:
        ans += 1

print(ans)