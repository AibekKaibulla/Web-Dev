def num_of_divisors(x):
    """Returns number of all divisors of integer"""
    divisors = []
    for i in range(1, int(x ** 0.5) + 1):
        if x % i == 0:
            divisors.append(i)

            if i != x // i:
                divisors.append(x // i)

    return len(divisors)        

x = int(input())
print(num_of_divisors(x))
