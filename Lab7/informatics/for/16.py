def all_divisors(x):
    """Prints all divisors of integer"""
    divisors = []
    for i in range(1, int(x ** 0.5) + 1):
        if x % i == 0:
            divisors.append(i)

            if i != x // i:
                divisors.append(x // i)

    divisors.sort()
    for num in divisors:
        print(num, end=' ')
        

x = int(input())
all_divisors(x)
