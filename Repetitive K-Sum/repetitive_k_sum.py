# https://www.hackerrank.com/challenges/repeat-k-sums/problem - Link to the problem on Hacker rank

'''
Problem Statement :

Alice thinks of a non-decreasing sequence of non-negative integers and wants Bob to guess it by providing him the set of all its K-sums with repetitions.

What is this? Let the sequence be {A[1], A[2], ..., A[N]} and K be some positive integer that both Alice and Bob know. Alice gives Bob the set of all possible values that can be genereated by this - A[i1] + A[i2] + ... + A[iK], where 1 ≤ i1 ≤ i2 ≤ ... ≤ iK ≤ N. She can provide the values generated in any order she wishes to. Bob's task is to restore the initial sequence.

Consider an example. Let N = 3 and K = 2. The sequence is {A[1], A[2], A[3]}. The sequence of its 2-sums with repetitions is {A[1] + A[1], A[1] + A[2], A[1] + A[3], A[2] + A[2], A[2] + A[3], A[3] + A[3]}. But its elements could be provided in any order. For example any permutation of {2, 3, 4, 4, 5, 6} corresponds to the sequence {1, 2, 3}.


Input Format :

The first line of the input contains an integer T denoting the number of test cases.
The description of T test cases follows.
The first line of each test case contains two space separated integers N and K.
The second line contains the sequence Si of all K-sums with repetitions of the sequence Alice initially thought of.


Constraints :

1 <= T <= 10^5
1 <= N <= 10^5
1 <= K <= 10^9
2 <= Si <= 10^18


Output Format :

For each test case, output a single line containing the space separated list of elements of the non-decreasing sequence Alice thinks of. If there are several possible outputs you can output any of them.

'''

# Code :

from itertools import combinations_with_replacement as cwr

if __name__ == '__main__':
    for _ in range(int(input())):
        n, k = list(map(int, input().rstrip().split()))
        a = sorted(list(map(int, input().rstrip().split())))
        values = [a[0]//k]
        combinations = {}
        for i in a[1:]:
            if combinations.setdefault(i,0) > 0:
                combinations[i] -= 1
            else:
                combinations[i] -= 1
                new_val = i - (values[0]*(k-1))
                for j in range(k):
                    for new_comb in map(lambda x: (k-j)*new_val + sum(x), cwr(values, j)):
                        combinations[new_comb] = combinations.get(new_comb, 0) + 1
                values.append(new_val)
        print(*values)



'''
Sample Input :
3
1 3
3
2 2
12 34 56
3 2
2 3 4 4 5 6

Sample Output :
1
6 28
1 2 3
'''
