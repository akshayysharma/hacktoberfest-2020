class Solution {
public:
    vector<vector<int>> updateMatrix(vector<vector<int>>& matrix) {
        int m = matrix.size();
        int n = matrix[0].size();
        
        if(m == 0) return matrix;
        
        vector<vector <int> > arr(m,vector<int>(n,0));
        for(int i=0;i<m;++i){
            for(int j=0;j<n;++j)
                arr[i][j] = INT_MAX-1000;
        }
        
        for(int i=0;i<m;++i){
            for(int j=0;j<n;++j){
                if(matrix[i][j]==0) arr[i][j] = 0;
                else {
                    if(i > 0) arr[i][j] = min(arr[i][j],arr[i-1][j] + 1);
                    if(j > 0) arr[i][j] = min(arr[i][j],arr[i][j-1] + 1);
                }
            }
        }
        
        for(int i = m-1;i>=0;--i){
            for(int j=n-1;j>=0;--j){
                if(matrix[i][j]==0) arr[i][j] = 0;
                else {
                    if(i < m-1) arr[i][j] = min(arr[i][j],arr[i+1][j] + 1);
                    if(j < n-1) arr[i][j] = min(arr[i][j],arr[i][j+1] + 1);
                }
            }
        }
        
        return arr;
    }
};