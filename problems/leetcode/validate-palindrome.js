var isPalindrome = function (s) {

    let regex = /^[a-z0-9]+$/i;

    let left = 0, right = s.length - 1;

    // format string
    while (left < right) {
        //ab
        if (regex.test(s[left]) && regex.test(s[right]) && s[right].toLowerCase() !== s[left].toLowerCase()) {
            return false;
        }
        else if (!regex.test(s[left])) {
            left++;
        }
        else if (!regex.test(s[right])) {
            right--;
        } else {
            left++;
            right--;
        }
    }
    return true;
};

console.log(isPalindrome('a.b.!a'));