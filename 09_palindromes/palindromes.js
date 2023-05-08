const palindromes = function (words) {
    let punc = "!/?.-\*&^%$#@,<> ";
    
    for (let i in punc) {
        if (words.includes(punc[i])){            
            words = words.replaceAll(punc[i],'');
        }
    }
    
    words = words.toLowerCase();
    let result = false;
    for (i = 0; i < words.length; i++) {
        let first = words[i];
        let last = words[words.length - 1- i];
        if (first !== last) {
            result = false;
            break;
        }
        if (i === words.length - 1) {
            result = true;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = palindromes;
