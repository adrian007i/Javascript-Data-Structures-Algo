// https://leetcode.com/problems/integer-to-roman/

var intToRoman = function (num) {

    let final_number = "";

    //1000s
    if (num >= 1000) {
        for (let i = 0; i < Math.floor(num / 1000); i++)
            final_number += "M";
    }

    //100s
    let mod_100 = Math.floor((num % 1000) / 100)
    if (mod_100 === 4)
        final_number += "CD";
    else if (mod_100 === 9)
        final_number += "CM";
    else if (mod_100 >= 1) {
        if (mod_100 >= 5)
            final_number += "D";

        for (let i = 0; i < Math.floor((num % 1000) % 500 / 100); i++)
            final_number += "C";
    }

    //10s
    let mod_10 = Math.floor((num % 100) / 10)
    if (mod_10 === 4)
        final_number += "XL";
    else if (mod_10 === 9)
        final_number += "XC";
    else if (mod_10 >= 1) {
        if (mod_10 >= 5)
            final_number += "L";

        for (let i = 0; i < Math.floor((num % 1000) % 50 / 10); i++)
            final_number += "X";
    }

    //1s
    let mod_1 = Math.floor((num % 10))
    if (mod_1 === 4)
        final_number += "IV";
    else if (mod_1 === 9)
        final_number += "IX";
    else if (mod_1 >= 1) {
        if (mod_1 >= 5)
            final_number += "V";

        for (let i = 0; i < Math.floor((num % 1000) % 5); i++)
            final_number += "I";
    }

    return final_number;
}