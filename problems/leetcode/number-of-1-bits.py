class Solution(object):
    def hammingWeight(self, n):
        total= 0
        while n:
            print(n)
            total += n % 2 
            n  = n >> 1
        
        return total

s = Solution ()       

print(s.hammingWeight( int(11111111111111111111111111111101)))
