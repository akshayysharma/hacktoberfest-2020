// House Robber II
// https://leetcode.com/problems/house-robber-ii/
/* Problem :
You are a professional robber planning to rob houses along a street. Each house has a certain amount 
of money stashed. All houses at this place are arranged in a circle. 
That means the first house is the neighbor of the last one. Meanwhile, adjacent houses 
have a security system connected, and it will automatically contact the police if 
two adjacent houses were broken into on the same night.

Given a list of non-negative integers nums representing the amount of money of each house, 
return the maximum amount of money you can rob tonight without alerting the police.
Example:

Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), 
because they are adjacent houses.
*/
//Solution:
class Solution {
    public int rob(int[] nums) {
        if(nums.length==0 || nums==null){
            return 0;
        }
        if(nums.length==1){
            return nums[0];
        }
        if(nums.length==2){
            return Math.max(nums[0],nums[1]);
        }
        int[] arr1 = new int[nums.length-1];  //excluding last house
        int[] arr2 = new int[nums.length-1];  //excluding first house
        for(int i=0;i<nums.length-1;i++){
            arr1[i]=nums[i];
            arr2[i]=nums[i+1];
        }
        int ans1=solve(arr1);
        int ans2=solve(arr2);
        return Math.max(ans1,ans2);           //answer will either contain the first house or the last house
        
    }
    public int solve(int[] arr){
        int[] dp = new int[arr.length];
        dp[0]=arr[0];
        dp[1]=Math.max(arr[0],arr[1]);
        for(int i=2;i<arr.length;i++){
            dp[i]=Math.max(arr[i]+dp[i-2],dp[i-1]);
        }
        return dp[dp.length-1];
    }
}