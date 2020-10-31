/*
         https://leetcode.com/problems/container-with-most-water/
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines
are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the
x-axis forms a container, such that the container contains the most water.

*/

class Solution {
public:
    int area(int i,int j,int h1,int h2)
    {return h1>h2?h2*(j-i):h1*(j-i);}
    int maxArea(vector<int>& h){
        int j=h.size()-1;
        int i=0;
        int max_area=area(i,j,h[i],h[j]);
        while(i<j)
        {
            if(h[i]<=h[j])i++;
            else j--;
            int a1=area(i,j,h[i],h[j]);
            if(max_area<a1)max_area=a1;
        }
            
        return max_area;
    }
};

/*
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
In this case, the max area of water (blue section) the container can contain is 49.
Input: height = [1,1]
Output: 1

Input: height = [4,3,2,1,4]
Output: 16

Input: height = [1,2,1]
Output: 2
*/
