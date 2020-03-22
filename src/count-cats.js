module.exports = function countCats(backyard) {
    // remove line with error and write your code here
    let sum = 0;
    for (let i = 0; i < backyard.length; i++) {
        for (let j = 0; j < backyard[i].length; j++) {
            if (backyard[i][j] === '^^')
                sum++;
        }
    }
    return sum;
};