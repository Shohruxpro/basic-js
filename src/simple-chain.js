const chainMaker = {
    str: '',
    getLength() {
        return chainMaker['str'].length;
    },
    addLink(value) {
        if (arguments.length === 0)
            chainMaker['str'] += '( )';
        else if (this.str.length >= 3)
            chainMaker['str'] += `~~( ${value} )`;
        else
            chainMaker['str'] += `( ${value} )`;
        return this;
    },
    removeLink(position) {
        let strToArr = chainMaker['str'].split('~~');
        if (typeof strToArr[position - 1] == 'string') {
            strToArr.splice(position - 1, 1);
            this.str = strToArr.join('~~');
        } else {
            this.str = '';
            throw new Error('Invalid Input');
        }
        return this;
    },
    reverseChain() {
        this.str = this.str.split('~~').reverse().join('~~');
        return this;
    },
    finishChain() {
        let result = this.str;
        this.str = '';
        return result;
    }
};

module.exports = chainMaker;
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4));