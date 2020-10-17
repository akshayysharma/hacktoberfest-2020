"""
This is an optimized program to compute the gratest common divisor (GCD) of 2 given non-negative numbers.
The naive approach of finding GCD consumes enormous amount of time, such approaches fail in cases of very large numbers (in order of 10^5, 10^8, etc.).
Here, I have used Euclidean algorithm to calculate GCD. Go to https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm , to read more!
This change is contributed by @atharvakarnik 
"""

# Uses python3
import sys

def gcd_optimized(a, b):
    if b == 0:
        return a
    ad = a%b                            #This is Euclidean approach to find the gcd
    return gcd_optimized(b, ad)

if __name__ == "__main__":
    input = sys.stdin.readline()        #Enter 2 numbers separated using space E.g. -> 28851538 1183019 
    a, b = map(int, input.split())      #Numbers are copied into 2 variables
    print(gcd_optimized(a, b))          #Calling the optimized function and printing returned value
