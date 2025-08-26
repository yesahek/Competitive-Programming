function kidsWithCandies(candies, extraCandies) {
//     let benchmark = candies[0];
//     let result = [];
//     for (let i = 1; i < candies.length; i++){
//         if (benchmark < candies[i]) {
            
//             benchmark = candies[i];
//         }
//     }
//     for (let j = 0; j < candies.length; j++) {
//     if (candies[j] + extraCandies >= benchmark) {
//         result.push('true');
//     } else 
//         result.push('false');

//     }
// return result;
 const maxCa = Math.max(...candies);
 return candies.map (i => (i + extraCandies >= maxCa));
    
}

module.exports = kidsWithCandies;