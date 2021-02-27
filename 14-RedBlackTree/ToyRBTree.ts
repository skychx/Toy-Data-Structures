/*
 * @Author: skychx
 * @Date: 2021-02-07 21:13:20
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-27 17:52:58
 * @FilePath: /Toy-Data-Structures/14-RedBlackTree/ToyRBTree.ts
 */

/**
 * 红黑树性质
 * 
 * 1.每个节点要不是红色，要不是黑色
 * 2.根节点为黑色
 * 3.每一个叶子节点（最后的空节点）为黑色
 * 4.如果一个节点为红色，那么它的孩子节点都是黑色
 * 5.从任意一个节点到叶子节点，经过的黑色节点是一样的（因为红黑树是一颗*黑平衡树*）
 */

// 这里把 null 也看成树节点
type Node<K, V> = TreeNode<K, V> | null;

const RED = true;
const BLACK = false;

class TreeNode<K, V> {
    key: K;
    value: V;
    left: Node<K, V>;
    right: Node<K, V>;
    color: boolean;

    constructor(key: K, value: V) {
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
        this.color = RED; // 红黑树默认新节点为 RED
    }

    toString(): string {
        return ('{ ' + String(this.key) + ': ' + String(this.value) + ' }');
    }
}

export class ToyRBTree<K, V> {
    root: Node<K, V>;
    size: number;

    constructor() {
        this.root = null;
        this.size = 0;
    }

    getSize(): number {
        return this.size;
    }

    isEmpty(): boolean {
        return this.size === 0;
    }

    // 判断节点的颜色
    private _isRed(node: Node<K, V>): boolean {
        // 红黑树性质 3
        if (node === null) {
            return BLACK;
        }
        return node.color;
    }

    //   node                     x
    //  /   \     左旋转         /  \
    // T1   x   --------->   node   T3
    //     / \              /   \
    //    T2 T3            T1   T2
    private _leftRotate(node: Node<K, V>): Node<K, V> {
        let x = node!.right;

        // 左旋转
        node!.right = x!.left;
        x!.left = node;

        x!.color = node!.color;
        node!.color = RED;

        return x;
    }

    //     node                   x
    //    /   \     右旋转       /  \
    //   x    T2   ------->   y   node
    //  / \                       /  \
    // y  T1                     T1  T2
    private _rightRotate(node: Node<K, V>): Node<K, V> {
        let x = node!.left;

        // 右旋转
        node!.left = x!.right;
        x!.right = node;

        x!.color = node!.color;
        node!.color = RED;

        return x;
    }

    // 颜色翻转
    private _flipColors(node: Node<K, V>): void {
        node!.color = RED;
        node!.left!.color = BLACK;
        node!.right!.color = BLACK;
    }

    /** 增 **/

    // 向红黑树中添加新的元素
    add(key: K, value: V): void {
        this.root = this._add(this.root, key, value);
        this.root!.color = BLACK;
    }

    // 向以 node 为根的红黑树中插入元素 e，递归算法
    private _add(node: Node<K, V>, key: K, value: V): Node<K, V> {
        if (node === null) {
            this.size++;
            return new TreeNode(key, value); // 默认插入红色节点
        }

        if (key < node.key) {
            node.left = this._add(node.left, key, value);
        } else if (key > node.key) {
            node.right = this._add(node.right, key, value);
        } else {
            node.value = value;
        }

        // 维护红黑树特性

        if(this._isRed(node!.right) && !this._isRed(node!.left)) {
            node = this._leftRotate(node);
        }

        if (this._isRed(node!.left) && this._isRed(node!.left!.left)) {
            node = this._rightRotate(node);
        }

        if (this._isRed(node!.left) && this._isRed(node!.right)) {
            this._flipColors(node);
        }

        return node;
    }

    /** 查 **/

    has(key: K): boolean {
        return this.getNode(this.root, key) !== null;
    }

    get(key: K): V | null {
        let node = this.getNode(this.root, key);

        return node === null ? null : node.value;
    }

    // 返回以 node 为根节点的二分搜索树中，key 所在的节点
    private getNode(node: Node<K, V>, key: K): Node<K, V> {
        if (node === null) {
            return null;
        }

        if (key < node.key) {
            return this.getNode(node.left, key);
        } else if (key > node.key) {
            return this.getNode(node.right, key);
        } else {
            return node;
        }
    }

    private _minimum(node: Node<K, V>): Node<K, V> {
        if (node!.left === null) {
            return node;
        }

        return this._minimum(node!.left);
    }

    /** 删 **/

    // 删除掉以node为根的二分搜索树中的最小节点
    // 返回删除节点后新的二分搜索树的根
    private _removeMin(node: Node<K, V>): Node<K, V> {
        if (node!.left === null) {
            let rightNode = node!.right;
            node!.right = null;
            this.size--;

            return rightNode;
        }

        node!.left = this._removeMin(node!.left);
        return node;
    }

    // 删除元素为 e 的节点
    delete(key: K): V | null {
        let node = this.getNode(this.root, key);

        if (node !== null) {
            this.root = this._remove(this.root, key);
            return node.value;
        }

        return null;
    }

    // 删除掉以node为根的二分搜索树中值为e的节点, 递归算法
    // 返回删除节点后新的二分搜索树的根
    _remove(node: Node<K, V>, key: K): Node<K, V> {
        if (node === null) {
            return null;
        }

        if (key < node.key) {
            node.left = this._remove(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = this._remove(node.right, key);
            return node;
        } else { // key === node.key

            // 左子树为空，直接用右子树替代 node 节点
            if (node.left === null) {
                let rightNode = node.right;
                this.size--;

                // 删除 node 节点
                node.right = null;

                return rightNode;
            }

            // 右子树为空，直接用左子树替代 node 节点
            if (node.right === null) {
                let leftNode = node.left;
                this.size--;

                // 删除 node 节点
                node.left = null;

                return leftNode;
            }

            // 左右子树均不为空【核心代码】

            // 找到比 待删除节点「大」的「最小节点」（即待删除节点「右子树」的「最小节点」）
            // 然后用这个节点替换待删除节点的位置
            let successor = this._minimum(node.right);

            // successor 接管 node 节点的左子树，接管删除「最小节点」后的 node 节点右子树
            // 注意这里的 right left 赋值顺序不能调换，要不然会有循环引用
            // 解释：因为此时 successor 和「最小节点」指向同一个引用，如果先执行 successor!.left = node.left，
            //    这时候「最小节点」的 left 就会指向 node.left，导致数据结构错乱，如果这时候再执行 _removeMin(node.right)，
            //    就会导致删除的是 node.left 里的最小节点，导致与目的不一致
            successor!.right = this._removeMin(node.right); // 注意 _removeMin 中已经进行了 size-- 操作
            successor!.left = node.left;

            // 删除 node 节点
            node.left = null;
            node.right = null;

            return successor;
        }
    }

    /** 改 **/

    set(key: K, newValue: V): void {
        let node = this.getNode(this.root, key);

        if (node === null) {
            throw new Error(key + ' doesn\'t exist!');
        }

        node.value = newValue;
    }

    // 打印树结构
    toString(): string {
        let res = '';
        res = this.generateString(this.root, 0, res);
        return res;
    }

    // 生成以 node 为根节点，深度为depth的描述二叉树的字符串
    private generateString(node: Node<K, V>, depth: number, res: string): string {
        if (node === null) {
            res += this.generateDepthString(depth) + 'null\n';
            return res;
        }

        res += this.generateDepthString(depth) + String(node) + '\n';
        res = this.generateString(node.left, depth + 1, res);
        res = this.generateString(node.right, depth + 1, res);

        return res;
    }

    private generateDepthString(depth: number): string {
        let res = '';
        for (let i = 0; i < depth; i++) {
            if (i === depth - 1) {
                res += '├── ';
            } else {
                res += '│   ';
            }
        }

        return res;
    }
}