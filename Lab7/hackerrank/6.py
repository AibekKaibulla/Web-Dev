# Enter your code here. Read input from STDIN. Print output to STDOUT
# Word order

n = int(input())
d = dict()

for _ in range(n):
    s = input()
    
    if d.get(s) is None:
        d[s] = 1
    else:
        d[s] += 1

print(len(d))

for key in d:
    print(d[key], end=' ')