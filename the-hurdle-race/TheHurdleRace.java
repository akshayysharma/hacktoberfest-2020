import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class TheHurdleRace {

    static int hurdleRace(int k, int[] height) {
        int temp, res, j = 0;
        long[] arr = new long[height.length];
        
        for (int i = 0; i < height.length; i++) {
            temp = height[i] - k;
            
            if (temp > 0) {
                arr[j] = temp;
                j++;
            }
        }
        
        return res = (int) getMax(arr);
    }
    
    public static long getMax(long[] inputArray) {
        long maxValue = inputArray[0];
        for (int i = 1; i < inputArray.length; i++) {
            if (inputArray[i] > maxValue) {
                maxValue = inputArray[i];
            }
        }
        return maxValue;
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int k = in.nextInt();
        int[] height = new int[n];
        for(int height_i = 0; height_i < n; height_i++){
            height[height_i] = in.nextInt();
        }
        int result = hurdleRace(k, height);
        System.out.println(result);
        in.close();
    }
}

