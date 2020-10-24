// 1528. Shuffle String
// https : //leetcode.com/problems/shuffle-string/

// Problem Statement

// Given a string s and an integer array indices of the same length.

// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.

// Example - goto link

// Accepted Code

char *
restoreString(char *s, int *indices, int indicesSize)
{

    char *s_new = (char *)malloc(sizeof(char) * (indicesSize + 1));

    s_new[indicesSize] = '\0';

    for (int i = 0; i < indicesSize; i++)
    {
        s_new[indices[i]] = s[i];
    }
    return s_new;

    // for(int i=0; i < indicesSize; i++ ){
    //     printf("%c" , s_new[i]);
    // }
}
