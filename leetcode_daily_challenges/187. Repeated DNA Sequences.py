# Fairly ez question idk why it is medium
class Solution:
    def findRepeatedDnaSequences(self, s: str) -> List[str]:
        dict1 = {}
        lst = []
        for i in range(len(s)-9):
            if s[i:i+10] not in dict1:
                dict1[s[i:i+10]] = 1
            else:
                dict1[s[i:i+10]] += 1
        # print(dict1)
        for x in dict1:
            if dict1[x] != 1:
                lst += [x]
        return lst