class Solution(object):
    def lengthOfLongestSubstring(self, s):
        start = maxLength = 0
        dict = {}
        
        for i in range(len(s)):
            if s[i] in dict and dict[s[i]] >= start:
                start = dict[s[i]] + 1
            else:
                maxLength = max(maxLength, i - start + 1)
            dict[s[i]] = i
        return maxLength
        