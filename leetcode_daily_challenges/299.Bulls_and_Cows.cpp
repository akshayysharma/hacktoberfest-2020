class Solution {
public:
    string getHint(string secret, string guess) {
        int arr[10] = {0}, n = secret.size(), a = 0, b = 0;
        for(int i =0;i<n;i++){
            if(secret[i] == guess[i]){
                a++;
                continue;
            }
            arr[guess[i] - '0']++;
        }
        for(int i =0;i<n;i++){
            if(secret[i] == guess[i]){
                continue;
            }
            else if(arr[secret[i] - '0'] > 0){
                b++;
                arr[secret[i]-'0']--;
            }
        }
        return to_string(a) + "A" + to_string(b) + "B";
    }
};
