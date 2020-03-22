module.exports = function transform(arr) {
    // function transform(arr) {
    if (!Array.isArray(arr))
        throw Error;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--discard-next') {
            arr.splice(arr[i], 2);
        } else if (arr[i] === '--discard-prev' && arr[i - 1] != undefined) {
            arr.splice(arr[i - 2], 2);
        } else if (arr[i] === '--double-next') {
            arr[i] = arr[i + 1];
        } else if (arr[i] === '--double-prev' && arr[i - 1] != undefined) {
            arr[i] = arr[i - 1];
        } else {
            arr = [];
        }
    }
    if (arr.includes(undefined))
        arr.splice(undefined, 1);
    return arr;
};

// console.log(transform(['--double-next']))




// module.exports = function transform(arr) {
//     if (!Array.isArray(arr)) throw new Error;
//     const result = [];
//     for (let item = 0; item < arr.length; item++) {
//         switch (arr[item]) {
//             case '--double-next':
//                 if (item < arr.length - 1) result.push(arr[item + 1]);
//                 break;
//             case '--double-prev':
//                 if (item > 0) result.push(arr[item - 1]);
//                 break;
//             case '--discard-next':
//                 if (item < arr.length - 1) item++;
//                 break;
//             case '--discard-prev':
//                 if (arr.length > 0) result.pop();
//                 break;
//             default:
//                 result.push(arr[item])
//         }
//     }
//     return result;
// };