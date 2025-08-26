function gcdOfStrings(str1, str2){
if (str1 + str2 !== str2 + str1)
    return "";
 
// Helper function
const gcd = (a , b) => {
    while(b){
        [a,b] = [b, a % b];
    }
    return a;
}
const gcd_len = gcd(str1.length, str2.length);

return str1.substring(0, gcd_len);
}

module.exports = gcdOfStrings;