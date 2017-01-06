/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    arr = s.split("");
    newArr = [];
    maxLength = 1;
    maxLo = 0;
    maxHi = 0;

    if (arr.length === 0 || arr.length === 1) {
        return s;
    }

    for (var p = 0; p <= 2 * arr.length; p++) {
        if (p % 2 == 0) {
            newArr.push("#");
        } else {
            newArr.push(arr[parseInt(p/2)]);
        }
    }

    for (var i = 2; i < newArr.length - 2; i++) {
        hi = lo = i;
        while (newArr[lo] == newArr[hi]) {
            lo--;
            hi++;
            if (lo < 0 || hi > newArr.length)
                break;
        }
        if (hi - lo - 1 > maxLength) {
            maxLength = hi - lo - 1;
            maxLo = lo + 1;
            maxHi = hi;
        }
    }
    return s.substring(maxLo/2, maxHi/2);
};