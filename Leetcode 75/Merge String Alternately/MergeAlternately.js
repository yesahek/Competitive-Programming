
function mergeAlternately(word1, word2) {
    const len = Math.max(word1.length, word2.length);
    let result = "";
    for (let i = 0; i < len; i++) {

        if (i < word1.length) result += word1[i];
        if (i < word2.length) result += word2[i];

    }
    return result;

};


// function mergeAlternately(word1, word2) {
//     let pointer1 = 0;
//     let pointer2 = 0;
//     let mergedWord = "";

//     while (pointer1 < word1.length || pointer2 < word2.length){
//         if (pointer1 < word1.length) {
//             mergedWord += word1[pointer1];
//         }
//         if (pointer2 < word2.length){
//             mergedWord += word2[pointer2];
//         }
//         pointer1++;
//         pointer2++;

//     }
//     return mergedWord;
// }





module.exports = mergeAlternately; 