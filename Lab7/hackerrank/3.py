def merge_the_tools(string, k):
    n = len(string)
    d = int(n/k)

    for idx in range(d):
        t = string[idx * k : (idx + 1) * k]

        u = ""
        
        for c in t:
            if c not in u:
                u += c
        print(u)


if __name__ == '__main__':
    string, k = input(), int(input())
    merge_the_tools(string, k)

# s = "AABCAAADA"

# print(s[::-1])