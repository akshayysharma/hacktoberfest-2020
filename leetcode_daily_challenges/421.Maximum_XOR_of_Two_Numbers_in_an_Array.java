
/*
Problem Statement:
Given an integer array nums, return the maximum result of nums[i] XOR nums[j], where 0 ≤ i ≤ j < n.

Input: nums = [3,10,5,25,2,8]
Output: 28
Explanation: The maximum result is 5 XOR 25 = 28.

*/

class Solution {
    public int findMaximumXOR(int[] nums) {
        int mask = 0, max = 0;
        for (int i = 31; i >= 0; i--) {
            mask = mask | 1 << i;
            HashSet < Integer > set = new HashSet < > ();
            for (int num: nums)
                set.add(mask & num);
            int temp = max | 1 << i;
            for (int num: set) {
                if (set.contains(num ^ temp)) {
                    max = temp;
                    break;
                }
            }
        }
        return max;
    }
}
