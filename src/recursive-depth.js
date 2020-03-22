module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let res = 1;
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                let subDepth = 1;
                subDepth += this.calculateDepth(arr[i]);
                res = subDepth > res ? subDepth : res;
            }
        }
        return res;
    }
};