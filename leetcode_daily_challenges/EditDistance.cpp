#include<bits/stdc++.h>
using namespace std;
int EditDistance_Memo(string s, string t, int** arr){
	if(s.size() == 0 || t.size() == 0)
		return max(s.size(), t.size());

	int m = s.size();
	int n = t.size();

	if(arr[m][n] != -1)
		return arr[m][n];

	if(s[0] == t[0])
		arr[m][n] = EditDistance_Memo(s.substr(1), t.substr(1), arr);
	else{
		arr[m-1][n] = EditDistance_Memo(s.substr(1), t, arr);
		arr[m][n-1] = EditDistance_Memo(s, t.substr(1), arr);
		arr[m-1][n-1] = EditDistance_Memo(s.substr(1), t.substr(1), arr);

		arr[m][n] = 1 + min(arr[m-1][n], min(arr[m-1][n-1], arr[m][n-1]));
	}

	return arr[m][n];
}
int EditDistance_DP(string s, string t, int** ans){
	int m = s.size();
	int n = t.size();

	for(int i = 0;i<=m;i++){
		ans[i][0] = i;
	}

	for(int i = 0;i<=n;i++){
		ans[0][i] = i;
	}

	for(int i = 1; i<=m;i++){
		for(int j = 1;j<=n;j++){
			if(s[m-i] == t[n - j])
				ans[i][j] = ans[i-1][j-1];
			else{
				ans[i][j] = min(ans[i-1][j], min(ans[i][j-1], ans[i-1][j-1])) + 1;
			}
		}
	}

	return ans[m][n];
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

	cout<<EditDistance_DP(s, t, arr);
}
