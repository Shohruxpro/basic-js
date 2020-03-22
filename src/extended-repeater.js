module.exports = function repeater(str, options) {
    // function repeater(str, options) {
    let initial = String(str);
    str = '';
    if (options.addition === undefined) { options.addition = '' } else
        options.addition = String(options.addition);
    if (options.separator == undefined) { options.separator = '+' }
    if (options.additionSeparator == undefined) { options.additionSeparator = '|' }
    if (options.repeatTimes == undefined) { options.repeatTimes = 1 }
    if (options.additionRepeatTimes == undefined) { options.additionRepeatTimes = 1 }

    for (let i = 0; i < options.repeatTimes; i++) {
        str += initial;
        for (let j = 0; j < options.additionRepeatTimes; j++) {
            str += options.addition;
            if (j == options.additionRepeatTimes - 1)
                break;
            str += options.additionSeparator;
        }
        if (i == options.repeatTimes - 1)
            break;
        str += options.separator;
    }
    return str;
};