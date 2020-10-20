// 189. Rotate Array
// https://leetcode.com/problems/rotate-array/
/* Problem:
Given an array, rotate the array to the right by k steps, where k is non-negative.
Example:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
*/
//Solution:
class Solution {
    public void rotate(int[] nums, int k) {
        if(nums.length==0 || nums==null){
            return;
        }
        int n = nums.length;
        k = k%n;               //account for complete cycle rotations
        reverse(nums,0,n-1);   //reverse complete array
        reverse(nums,0,k-1);   //reverse from 0 to k-1 index
        reverse(nums,k,n-1);   //reverse from k to end index
    }
    public void reverse(int[] nums,int s,int e){
        while(s<e){
            int t = nums[s];
            nums[s]=nums[e];
            nums[e]=t;
            s++;
            e--;
        }
    }
}
// Time complexity: O(n),  Space complexity : O(1)