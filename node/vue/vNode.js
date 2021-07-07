export class VNode{
    constructor (tag, data, children, text, ele) {
        this.data     = data;
        this.tag      = tag;
        this.children = children;
        this.text     = text;
        this.ele      = ele;
    }
}
export const createEmptyVNode = function () {
    const node = new VNode();
    node.text = '';
    return node;
}
export const createTextNode = function (val) {
    return new VNode(undefined,undefined,undefined,String(val));
}
export const cloneVnode = function (node) {
    const cloneVnode = new VNode(node.tag, node.data, node.children, node.text, node.ele);
    return cloneVnode;
}