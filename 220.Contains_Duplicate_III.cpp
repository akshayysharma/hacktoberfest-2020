class Solution {
public:
    bool containsNearbyAlmostDuplicate(vector<int>& nums, int k, int t) {
         int n = nums.size();
            
          if(n == 0 || k < 0  || t < 0) return false;
        
        unordered_map<int, int> m;
        for(int i =0;i<n;i++){
            int b = nums[i]/((long)t+1);
            if(nums[i]<0)
                b--;
            //cout<<m.size() <<" "<<nums[i]<<" "<<b<<endl;
            if(m.find(b)!=m.end())
                return true;
            else{
                m[b] = nums[i];
                if(m.find(b-1)!=m.end() && (long)nums[i] - m[b-1]<=t)
                    return true;
                if(m.find(b+1)!=m.end() &&  (long)m[b+1] - nums[i]<=t)
                    return true;

                if(m.size()>k){
                    int tb = nums[i-k]/((long)t+1);
                    if(nums[i-k]<0) tb--;
                    m.erase(tb);
                }
            }
        }
        return false;
    }
};
