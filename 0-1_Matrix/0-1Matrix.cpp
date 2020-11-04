/*
Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.

 

Example 1::

Input:
[[0,0,0],
 [0,1,0],
 [0,0,0]]

Output:
[[0,0,0],
 [0,1,0],
 [0,0,0]]
Example 2:

Input:
[[0,0,0],
 [0,1,0],
 [1,1,1]]

Output:
[[0,0,0],
 [0,1,0],
 [1,2,1]]
 

Note:

The number of elements of the given matrix will not exceed 10,000.
There are at least one 0 in the given matrix.
The cells are adjacent in only four directions: up, down, left and right.

*/


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
