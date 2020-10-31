class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        if len(nums) == 0:
            return []

        res = []
        start = nums[0]
        for i in range(0, len(nums)):
            
            if i >= len(nums)-1 or not nums[i+1] == nums[i]+1:
                # The next element doesn't exist or will not be part of the current range
                if start == nums[i]:
                    # The range only has one element
                    res.append(str(start))
                else:
                    # The range is from "start" to nums[i]
                    res.append(str(start)+"->"+str(nums[i]))
                if i < len(nums)-1:
                    # Reset the start value
                    start = nums[i+1]
        return res
