/*
   Letter Combinations of a Phone Number

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

*/
class Solution {
public:
    vector<string> character(int num1){
        //cout<<num;
        int base=(int)'a';
        int num=(num1-2)*3;
        switch(num1)
        {
            case 7: return{"p","q","r","s"};
            case 8: return{"t","u","v"};
            case 9: return{"w" ,"x","y","z"};
                default :return{string(1,char(num+base)),string(1,char(num+base+1)),string(1,char(num+2+base))};
        }
    }
    void combinations(string num,vector<string> &v,string str)
    {
        if(num!="")
        {
            vector<string> v1=character(int(num[0])-int('0'));
            int n=num.length()-1;
            for(int i=0;i<v1.size();i++)
            combinations(num.substr(1,n),v,str+v1[i]);
        }
        else
        {
            if(str!="")
            v.push_back(str);
        }
    }

    vector<string> letterCombinations(string digits) {
        vector<string> v;
        combinations(digits,v,"");
        return v;
    }
};

/*
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Input: digits = ""
Output: []

Input: digits = "2"
Output: ["a","b","c"]
*/
