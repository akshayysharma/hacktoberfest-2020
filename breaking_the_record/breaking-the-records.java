/*---------------------------------------------------------------------------------------------
* Description
* It must return an integer array containing the numbers of times she broke her records. 
* Index  is for breaking most points records, and index  is for breaking least points records.
* BreakingRecords has the following parameter(s): 
* - scores: an array of integers
 *--------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------------------------
* Input Format
* The first line contains an integer , the number of games.
* The second line contains n space-separated integers describing the respective 
  values of score-(0), score-(1), .... score-(n-1).
*--------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------------------------
* Output Format
* Print two space-seperated integers describing the respective numbers of times the best(highest) 
  score increased and the worst (lowest) score decreased.
*--------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------------------------
* Sample Input
* First line    : 9
* Second line   : 10 5 20 20 4 5 2 25 1
*--------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------------------------
* Sample Output
* 2 4
*--------------------------------------------------------------------------------------------*/

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int[] score = new int[n];
        for(int score_i=0; score_i < n; score_i++){
            score[score_i] = in.nextInt();
        }

        int max = score[0];
        int maxCnt = 0;
        int min = score[0];
        int minCnt = 0;
        for(int i=1;i<score.length;i++){
            if(score[i]>max){
                max = score[i];
                maxCnt++;
            }
            if(score[i]<min){
                min = score[i];
                minCnt++;
            }
        }
        System.out.print(maxCnt);
        System.out.print(" ");
        System.out.println(minCnt);
    }
}
