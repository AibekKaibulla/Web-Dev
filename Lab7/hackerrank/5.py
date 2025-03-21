# Enter your code here. Read input from STDIN. Print output to STDOUT
# No idea!
n, m = map(int, input().split())
arr = list(map(int, input().split()))
A = set(map(int, input().split()))
B = set(map(int, input().split()))

ans = 0
for i in arr:
    if i in A and i not in B:
        ans += 1
    elif i not in A and i in B:
        ans -= 1

print(ans)
