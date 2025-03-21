x = input()
x = x[::-1]
s = x.find("0")

if s == 0:
    res = ""
    for letter in x:
        if letter == "0":
            continue
        res += letter

    print(res)
else:
    print(x)

if x == "0":
    print(x)