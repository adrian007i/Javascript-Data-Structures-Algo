// https://leetcode.com/problems/count-the-number-of-consistent-strings/

var countConsistentStrings = function (allowed, words) {
    let allowed_map = {};

    for (let i = 0; i < allowed.length; i++) {
        if (!allowed_map[allowed[i]]) {
            allowed_map[allowed[i]] = true;
        }
    }

    let count = 0;

    for (let i = 0; i < words.length; i++) {

        let consistent = true;
        for (let j = 0; j < words[i].length; j++) {

            if (!allowed_map[words[i][j]]) {
                consistent = false;
                break;
            }
        }

        if (consistent)
            count++;
    }

    return count;
};
