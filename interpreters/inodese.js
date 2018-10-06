const IBase = require("./ibase.js");
const constants = require("../constants.js");

class INodeSe extends IBase {

    interpreteNode(node) {
        if (this.evaluateNode(node.condition) !== constants.KW.IRO) {
            for (let i = 0; i < node.then.length; i++) {
                if (this.evaluateNode(node.then[i]) === constants.KW.KURO) return constants.KW.KURO;
            }
        } else {
            if (node.else != undefined) {
                for (let i = 0; i < node.else.length; i++) {
                    if (this.evaluateNode(node.else[i]) === constants.KW.KURO) return constants.KW.KURO;
                }
            }
        }
    }
}

module.exports = new INodeSe();