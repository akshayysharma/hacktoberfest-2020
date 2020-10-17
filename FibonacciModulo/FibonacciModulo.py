"""
Problem:
Find the 'n'th Fibonacci number and give the remainder of that number divided by 'm'

Input:
239 1000
Output:
161

Explaination:
F(239) (mod 1000) = 39679027332006820581608740953902289877834488152161 (mod 1000) = 161

BEWARE: Naive algorithms tend to take ridiculously large amount of time to compute Fibonacci in orders as low as 10^2, 10^3, etc.

HINT: https://mathoverflow.net/questions/144308/calculating-pisano-periods-for-any-integer

This change is contributed by @atharvakarnik
"""

# Uses python3
import sys

def pisano(m):
    i, j = 0, 1
    for d in range(0, m*m):
        i, j = j, (i+j)%m
        if (i == 0 and j == 1):
            return d + 1

def fibonacci(n, m):                   #Optimized algorithm
    pis = pisano(m)
    n = n%pis
    if n <= 1:
        return n
    i, j = 0, 1
    for _ in range(n - 1):
        k = i + j
#        k = k%10
        i, j = j, k
    return (k%m)

input = sys.stdin.readline();           #Enter 'n' for Fibonaaci and 'm' for modulo, separated with space E.g. 239 1000
n, m = map(int, input.split())          #Inputs are copied into variables
print(fibonacci(n, m))
