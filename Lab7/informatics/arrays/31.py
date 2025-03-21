A = list(map(int, input().split()))
ans = A[0]
idx = 0
for i in range(len(A)):
    if A[i] > ans:
        ans = A[i]
        idx = i

print(ans, idx)