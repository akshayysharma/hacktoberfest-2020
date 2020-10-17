# Uses python3
import sys

def gcd_optimized(a, b):
    if b == 0:
        return a
    ad = a%b
    return gcd_optimized(b, ad)

if __name__ == "__main__":
    input = sys.stdin.readline()
    a, b = map(int, input.split())
    print(gcd_optimized(a, b))