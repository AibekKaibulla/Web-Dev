v = int(input())
t = int(input())

s = 109

stop = (v * t) % s
stop = (s + stop) % s

print(stop)