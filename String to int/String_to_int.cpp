/*
8. String to Integer (atoi)
Implement atoi which converts a string to an integer.
The function first discards as many whitespace characters as necessary until the first non-whitespace character is found.
Then, starting from this character takes an optional initial plus or minus sign followed by as many numerical digits as
possible, and interprets them as a numerical value.
The string can contain additional characters after those that form the integral number, which are ignored and have no
effect on the behavior of this function.
If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence
exists because either str is empty or it contains only whitespace characters, no conversion is performed.
If no valid conversion could be performed, a zero value is returned.

*/

class Solution {
public:
    int myAtoi(string s) {
        char data;
        int sign=0;
        int num=0;
        int n=s.length();
        for(int i=0;i<n;i++)
        {
            data=s[i];
            if(data==' '&&sign==0);
            else if ((data=='-'||data=='+')&&sign==0)
            {
                sign=1;
                if(data=='-')sign=-1;
            }
            else if(data>=int('0')&&data<=int('9'))
            {
                if(sign==0)sign=1;
                int value=int(data)-int('0');
                if(sign==1)
                {
                    if (num<(INT_MAX/10)||(num==(INT_MAX/10)&&value<8))num=num*10+value;
                    else return INT_MAX;
                }
                else{
                    if (num>(INT_MIN/10)||(num==(INT_MIN/10)&&value<9))num=num*10-value;
                    else return INT_MIN;
                }
            }
            else return num;
        }
        return num;

    }
};
/*
Input: str = "42"
Output: 42

Input: str = "   -42"
Output: -42
Explanation: The first non-whitespace character is '-', which is the minus sign.
Then take as many numerical digits as possible, which gets 42.

Input: str = "4193 with words"
Output: 4193
Explanation: Conversion stops at digit '3' as the next character is not a
numerical digit.
*/
