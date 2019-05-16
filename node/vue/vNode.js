class VNode{
    constructor (tag, data, children, text, ele) {
        this.data     = data;
        this.tag      = tag;
        this.children = children;
        this.text     = text;
        this.ele      = ele;
    }
}
const createEmptyVNode = function () {
    const node = new VNode();
    node.text = '';
    return node;
}
const createTextNode = function (val) {
    return new VNode(undefined,undefined,undefined,String(val));
}
const cloneVnode = function (node) {
    const cloneVnode = new VNode(node.tag, node.data, node.children, node.text, node.ele);
    return cloneVnode;
}