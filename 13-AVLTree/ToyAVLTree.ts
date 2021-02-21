/*
 * @Author: skychx
 * @Date: 2021-02-07 21:13:20
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-21 22:15:05
 * @FilePath: /Toy-Data-Structures/13-AVLTree/ToyAVLTree.ts
 */
// 这里把 null 也看成树节点
type Node<K, V> = TreeNode<K, V> | null;

class TreeNode<K, V> {
    key: K;
    value: V;
    left: Node<K, V>;
    right: Node<K, V>;
    height: number;

    constructor(key: K, value: V) {
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }

    toString(): string {
        return ('{ ' + String(this.key) + ': ' + String(this.value) + ' }');
    }
}

export class ToyAVLTree<K, V> {
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

    // 判断该二叉树是否是一棵二分搜索树
    isBST(): boolean {
        let keys: K[] = [];
        this._inOrder(this.root, keys);

        for (let i = 1; i < keys.length ; i++) {
            if (keys[i - 1] > keys[i]) {
                return false;
            }
        }

        return true;
    }

    // 判断该二叉树是否是一棵平衡二叉树
    isBalanced(): boolean {
        return this._isBalanced(this.root);
    }

    // 判断以 Node 为根的二叉树是否是一棵平衡二叉树，递归算法
    private _isBalanced(node: Node<K, V>): boolean {
        if(node === null) {
            return true;
        }

        let balanceFactor: number = this._getBalanceFactor(node);
        if (Math.abs(balanceFactor) > 1) {
            return false;
        }

        return this._isBalanced(node.left) && this._isBalanced(node.right);
    }

    // 中序遍历
    private _inOrder(node: Node<K, V>, keys: K[]) {
        if(node === null) {
            return;
        }

        this._inOrder(node.left, keys);
        keys.push(node.key);
        this._inOrder(node.left, keys);
    }

    // 获得 node 节点的高度
    private _getHeight(node: Node<K, V>): number {
        if(node === null) {
            return 0;
        }
        return node.height;
    }

    // 获得节点 node 的平衡因子
    private _getBalanceFactor(node: Node<K, V>): number {
        if (node === null) {
            return 0;
        }
        return this._getHeight(node.left) - this._getHeight(node.right);
    }

    // 对节点 y 进行向右旋转操作，返回旋转后新的根节点 x
    // T1 < z < T2 < x < T3 < y < T4
    //
    //        y                              x
    //       / \                           /   \
    //      x   T4     向右旋转 (y)        z     y
    //     / \       - - - - - - - ->    / \   / \
    //    z   T3                       T1  T2 T3 T4
    //   / \
    // T1   T2
    private _rightRotate(y: Node<K, V>): Node<K, V> {
        let x = y!.left;
        let T3 = x!.right;

        // 向右旋转
        x!.right = y;
        y!.left = T3;

        // 更新height
        y!.height = Math.max(this._getHeight(y!.left), this._getHeight(y!.right)) + 1;
        x!.height = Math.max(this._getHeight(x!.left), this._getHeight(x!.right)) + 1;

        return x;
    }

    // 对节点 y 进行向左旋转操作，返回旋转后新的根节点 x
    // T1 < y < T2 < x < T3 < z < T4
    //
    //    y                             x
    //  /  \                          /   \
    // T1   x      向左旋转 (y)       y     z
    //     / \   - - - - - - - ->   / \   / \
    //   T2  z                     T1 T2 T3 T4
    //      / \
    //     T3 T4
    private _leftRotate(y: Node<K, V>): Node<K, V> {
        let x = y!.right;
        let T2 = x!.left;

        // 向右旋转
        x!.left = y;
        y!.right = T2;

        // 更新height
        y!.height = Math.max(this._getHeight(y!.left), this._getHeight(y!.right)) + 1;
        x!.height = Math.max(this._getHeight(x!.left), this._getHeight(x!.right)) + 1;

        return x;
    }

    /** 增 **/

    add(key: K, value: V): void {
        this.root = this._add(this.root, key, value);
    }

    // 向以 node 为根的二分搜索树中插入元素 e，递归算法
    private _add(node: Node<K, V>, key: K, value: V): Node<K, V> {
        if (node === null) {
            this.size++;
            return new TreeNode(key, value);
        }

        if (key < node.key) {
            node.left = this._add(node.left, key, value);
        } else if (key > node.key) {
            node.right = this._add(node.right, key, value);
        } else {
            node.value = value;
        }

        // 更新 height
        node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));

        // 计算平衡因子
        let balanceFactor: number = this._getBalanceFactor(node);

        // 维护平衡
        // LL
        if (balanceFactor > 1 && this._getBalanceFactor(node.left) >= 0) {
            return this._rightRotate(node);
        }

        // RR
        if (balanceFactor < -1 && this._getBalanceFactor(node.right) <= 0) {
            return this._leftRotate(node);
        }

        // LR
        if (balanceFactor > 1 && this._getBalanceFactor(node.left) < 0) {
            node.left = this._leftRotate(node.left);
            return this._rightRotate(node);
        }

        // RL
        if (balanceFactor < -1 && this._getBalanceFactor(node.right) > 0) {
            node.right = this._rightRotate(node.right);
            return this._leftRotate(node);
        }

        return node;
    }

    /** 查 **/

    has(key: K): boolean {
        return this._getNode(this.root, key) !== null;
    }

    get(key: K): V | null {
        let node = this._getNode(this.root, key);

        return node === null ? null : node.value;
    }

    // 返回以 node 为根节点的二分搜索树中，key 所在的节点
    private _getNode(node: Node<K, V>, key: K): Node<K, V> {
        if (node === null) {
            return null;
        }

        if (key < node.key) {
            return this._getNode(node.left, key);
        } else if (key > node.key) {
            return this._getNode(node.right, key);
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
        let node = this._getNode(this.root, key);

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

        let retNode: Node<K, V>;

        if (key < node.key) {
            node.left = this._remove(node.left, key);
            retNode = node;
        } else if (key > node.key) {
            node.right = this._remove(node.right, key);
            retNode = node;
        } else { // key === node.key

            // 左子树为空，直接用右子树替代 node 节点
            if (node.left === null) {
                let rightNode = node.right;
                this.size--;

                // 删除 node 节点
                node.right = null;

                retNode = rightNode;

            // 右子树为空，直接用左子树替代 node 节点
            } else if (node.right === null) {
                
                let leftNode = node.left;
                this.size--;

                // 删除 node 节点
                node.left = null;

                retNode = leftNode;

            // 左右子树均不为空【核心代码】
            } else {
                // 找到比 待删除节点「大」的「最小节点」（即待删除节点「右子树」的「最小节点」）
                // 然后用这个节点替换待删除节点的位置
                let successor = this._minimum(node.right);

                // successor 接管 node 节点的左子树，接管删除「最小节点」后的 node 节点右子树
                // 注意这里的 right left 赋值顺序不能调换，要不然会有循环引用
                // 解释：因为此时 successor 和「最小节点」指向同一个引用，如果先执行 successor!.left = node.left，
                //    这时候「最小节点」的 left 就会指向 node.left，导致数据结构错乱，如果这时候再执行 _removeMin(node.right)，
                //    就会导致删除的是 node.left 里的最小节点，导致与目的不一致
                // successor!.right = this._removeMin(node.right); // 注意 _removeMin 中已经进行了 size-- 操作
                successor!.right = this._remove(node.right, successor!.key); // ⚠️ 这里有改动
                successor!.left = node.left;

                // 删除 node 节点
                node.left = null;
                node.right = null;

                retNode = successor;
            }
        }

        if (retNode === null) {
            return null;
        }

        // 更新 height
        retNode.height = 1 + Math.max(this._getHeight(retNode.left), this._getHeight(retNode.right));

        // 计算平衡因子
        let balanceFactor: number = this._getBalanceFactor(retNode);

        // 维护平衡
        // LL
        if (balanceFactor > 1 && this._getBalanceFactor(retNode.left) >= 0) {
            return this._rightRotate(retNode);
        }

        // RR
        if (balanceFactor < -1 && this._getBalanceFactor(retNode.right) <= 0) {
            return this._leftRotate(retNode);
        }

        // LR
        if (balanceFactor > 1 && this._getBalanceFactor(retNode.left) < 0) {
            retNode.left = this._leftRotate(retNode.left);
            return this._rightRotate(retNode);
        }

        // RL
        if (balanceFactor < -1 && this._getBalanceFactor(retNode.right) > 0) {
            retNode.right = this._rightRotate(retNode.right);
            return this._leftRotate(retNode);
        }

        return retNode;
    }

    /** 改 **/

    set(key: K, newValue: V): void {
        let node = this._getNode(this.root, key);

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