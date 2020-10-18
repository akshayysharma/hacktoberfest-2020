 // This the solution [C++] to leetcode problem 303. Range Sum Query - Immutable

 #include<bits/stdc++.h>
 using namespace std;

 vector<int> preNums;

 NumArray(vector<int>& nums) {
     int n = nums.size();
     preNums.resize(n+1);
     for(int i=0; i<n; i++) {
         preNums[i+1] = preNums[i] + nums[i];
     }
 }

 int sumRange(int i, int j) {
     return preNums[j+1] - preNums[i];
 }

 int main(){
    vector<int>arr;
    int n,i,j;
    cin>>n;
    for(int i=0; i<n; i++){
        int data;
        cin >> data;
        arr.push_back(data);
    }
    cin >> i >> j;
    NumArray(arr);
    int res = sumRange(i, j);
    cout << res;
    return 0;
 }
