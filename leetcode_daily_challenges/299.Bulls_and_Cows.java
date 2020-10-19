class Solution {
    public String getHint(String secret, String guess) {
        int count[] = new int[10];
        for (int i = 0; i < secret.length(); i++) {
            count[(int)(secret.charAt(i) - '0')]++;
        }
        int bulls = 0, cows = 0;
        for (int i = 0; i < guess.length(); i++) {
            int a = (int)(guess.charAt(i) - '0');
            if (guess.charAt(i) == secret.charAt(i)) {
                bulls++;
                count[a]--;
            }
        }
        for (int i = 0; i < guess.length(); i++) {
            int a = (int)(guess.charAt(i) - '0');
            if (guess.charAt(i) != secret.charAt(i)) {
                if (count[a] > 0) {
                    count[a]--;
                    cows++;
                }

            }
        }

        String result = bulls + "A" + cows + "B";
        return result;

    }
}
