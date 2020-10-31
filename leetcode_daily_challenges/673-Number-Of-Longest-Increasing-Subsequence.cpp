class Solution {
public:
    int findNumberOfLIS(vector<int>& nums) {
        int n = nums.size();
        int res = 0;
        vector<int> len(n, 0); // len[i] is Length of LIS that ends with nums[i]
        vector<int> cnt(n, 0); // cnt[i] is Number of LIS that ends with nums[i]
        int max_len = 0; 
        for(int i = 0; i < n; i++){
            len[i] = 1; cnt[i] = 1; // nums[i] is always a subsequence by itself
            for(int j = 0; j < i; j++){
                if(nums[i] > nums[j]){ // nums[i] can be added to a subsequence that ends in nums[j]
                    if(len[i] == len[j] + 1){ 
                    // there was already a prev j, whose len[] was also 1 less than len[i], so we can add the cnt
                        cnt[i] += cnt[j];
                    }else if(len[i] < len[j]+1) { 
                    // len[i] hasnt been set yet and since we can append nums[i] to every LIS ending in nums[j], the cnt[i] = cnt[j]
                        len[i] = len[j] +1;
                        cnt[i] = cnt[j];
                    }
                }
            }
            if(max_len == len[i]) res += cnt[i];
            else if(len[i] > max_len) { // reset the max_len and res
                max_len = len[i];
                res = cnt[i];
            }
            
        }
        return res;
        
    }
};
