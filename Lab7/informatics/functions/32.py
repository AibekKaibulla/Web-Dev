def min(*values):
    vals = list(values)
    vals.sort()

    return vals[0]
    
a, b, c, d = map(int, input().split())

print(min(a, b, c, d))