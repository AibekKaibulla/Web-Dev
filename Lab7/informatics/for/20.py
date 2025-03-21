binary = input()
size = len(binary) - 1

decimal = 0

for bit in binary:
    if bit == "1":
        decimal += (2 ** size)
    
    size -= 1

print(decimal)