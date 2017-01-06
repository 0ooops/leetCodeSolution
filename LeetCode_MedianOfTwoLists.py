class Solution(object):
    def findMedianSortedArrays(self, A, B):
        len1 = len(A)
        len2 = len(B)

        # to make sure nums1 is shorter
        if len1 > len2:
             A, B, len1, len2 = B, A, len2, len1

        if len1 == 0:
            return (B[(len2-1)/2] + B[len2/2]) / 2.0

        lo = 0
        hi = len1
        halfLen = (len1 + len2 + 1) / 2
        while lo <= hi:
            mid1 = (lo + hi) / 2
            mid2 = halfLen - mid1

            if mid1 > 0 and A[mid1 - 1] > B[mid2]:
                hi = mid1 - 1
            elif mid1 < len1 and A[mid1] < B[mid2 - 1]:
                lo = mid1 + 1
            else:
                if mid1 == 0: leftMax = B[mid2 - 1]
                elif mid2 == 0: leftMax = A[mid1 - 1]
                else: leftMax = max(A[mid1 - 1], B[mid2 - 1])
                if (len1 + len2) % 2 == 1:
                    return leftMax

                if mid1 == len1:
                    rightMin = B[mid2]
                elif mid2 == len2:
                    rightMin = A[mid1]
                else:
                    rightMin = min(A[mid1], B[mid2])
                return (leftMax + rightMin) / 2.0