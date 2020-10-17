// leetcode Challenge
// https://leetcode.com/problems/split-a-string-in-balanced-strings/

/* Problem statement

Balanced strings are those who have equal quantity of 'L' and 'R' characters.

Given a balanced string s split it in the maximum amount of balanced strings.

Return the maximum amount of splitted balanced strings.


Example 1:

Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
Example 2:

Input: s = "RLLLLRRRLR"
Output: 3
Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.
Example 3:

Input: s = "LLLLRRRR"
Output: 1
Explanation: s can be split into "LLLLRRRR".
Example 4:

Input: s = "RLRRRLLRLL"
Output: 2
Explanation: s can be split into "RL", "RRRLLRLL", since each substring contains an equal number of 'L' and 'R'
 

Constraints:

1 <= s.length <= 1000
s[i] = 'L' or 'R'

*/

// LeetCode Accepted solution

int balancedStringSplit(char *s)
{

    int point;
    int l_count = 0, r_count = 0;
    int split_count = 0;
    int ln = strlen(s);

    //   counting the first element and increment l or r count
    if (s[0] == 'R')
    {
        r_count = 1;
    }
    if (s[0] == 'L')
    {
        l_count = 1;
    }

    // looping the string
    for (int i = 1; i <= ln - 1; i++)
    {

        int current = s[i];
        if (current == 'L')
            l_count += 1;
        if (current == 'R')
            r_count += 1;

        //   printf("%d \t" , r_count );
        //   printf("%d \n" , l_count );

        if (r_count == l_count)
        {
            split_count = split_count + 1;
            //   printf(" split \n");
        }
    }

    return split_count;
}
