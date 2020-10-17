#include<bits/stdc++.h>
using namespace std;
int LCS_Memo(string s, string t, int** arr){
	if(s.size() == 0 || t.size() == 0)
		return 0;
	int m = s.size();
	int n = t.size();

	if(arr[m][n] != -1)
		return arr[m][n];
	if(s[0] == t[0]){
		arr[m - 1][n-1] = LCS_Memo(s.substr(1), t.substr(1), arr);
		arr[m][n] = 1 + arr[m-1][n-1];
	}
	else{
		arr[m][n-1] = LCS_Memo(s, t.substr(1), arr);
		arr[m-1][n] = LCS_Memo(s.substr(1), t, arr);
		arr[m][n] = max(arr[m][n-1], arr[m-1][n]);
	}

	return arr[m][n];
}
int LCS_DP(string s, string t, int** arr){
	int m = s.size(), n = t.size();
	for(int i = 0;i<=m;i++){
		arr[i][0] = 0;
	}
	for(int i = 0;i<=n;i++){
		arr[0][i] = 0;
	}

	for(int i = 1;i<=m;i++){
		for(int j = 1;j<=n;j++){
			if(s[m-i] == t[n-j])
				arr[i][j] = 1 + arr[i-1][j-1];
			else
				arr[i][j] = max(arr[i-1][j], arr[i][j-1]);
		}
	}

	return arr[m][n];
}
int main(){
	string s, t;
	cin>>s>>t;
	int m = s.size(), n= t.size();
	int** arr = new int*[m+1];
	for(int i = 0;i<=m;i++){
		arr[i] = new int[n+1];
		for(int j = 0;j<=n;j++){
			arr[i][j] = -1;
		}
	}

	cout<<LCS_DP(s, t, arr);
}
