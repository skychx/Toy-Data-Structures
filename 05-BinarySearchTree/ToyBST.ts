/*
 * @Author: skychx
 * @Date: 2021-02-06 18:13:27
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-06 21:46:41
 * @FilePath: /Toy-Data-Structures/05-BinarySearchTree/ToyBST.ts
 */
// 这里把 null 也看成树节点
type Node<T> = TreeNode<T> | null;

class TreeNode<T> {
    e: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;

    constructor(e: T) {
        this.e = e;
        this.left = null;
        this.right = null;
    }

    toString(): string {
        return String(this.e);
    }
}

export class ToyBST<T> {
    root: TreeNode<T> | null;
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

    /** 增 **/

    // 向以node为根的二分搜索树中插入元素e，递归算法
    private _add(node: Node<T>, e: T): Node<T> {
        if (node === null) {
            this.size++;
            return new TreeNode(e);
        }

        if (e < node.e) {
            node.left = this._add(node.left, e);
        } else if (e > node.e) {
            node.right = this._add(node.right, e);
        }

        return node;
    }

    add(e: T): void {
        this.root = this._add(this.root, e);
    }

    /** 查 **/

    contains(e: T): boolean {
        return this._contains(this.root, e);
    }

    // 看以node为根的二分搜索树中是否包含元素e, 递归算法
    private _contains(node: Node<T>, e: T): boolean {
        if (node === null) {
            return false;
        }

        if (e < node.e) {
            return this._contains(node.left, e);
        } else if (e > node.e) {
            return this._contains(node.right, e);
        } else {
            return true;
        }
    }

    // 查找 BST 中最小的元素
    minimum(): T {
        if(this.size === 0) {
            throw new Error('BST is empty');
        }

        let minNode = this._minimum(this.root);
        return minNode!.e;
    }

    private _minimum(node: Node<T>): Node<T> {
        if(node!.left === null) {
            return node;
        }

        return this._minimum(node!.left);
    }

    // 查找 BST 中最大的元素
    maximum(): T {
        if (this.size === 0) {
            throw new Error('BST is empty');
        }

        let minNode = this._maximum(this.root);
        return minNode!.e;
    }

    private _maximum(node: Node<T>): Node<T> {
        if (node!.right === null) {
            return node;
        }

        return this._maximum(node!.right);
    }

    /** 删 **/

    // 删除最小的节点
    removeMin(): T {
        let res = this.minimum();
        this.root = this._removeMin(this.root);
        return res;
    }

    // 删除掉以node为根的二分搜索树中的最小节点
    // 返回删除节点后新的二分搜索树的根
    private _removeMin(node: Node<T>): Node<T> {
        if(node!.left === null) {
            let rightNode = node!.right;
            node!.right = null;
            this.size--;

            return rightNode;
        }

        node!.left = this._removeMin(node!.left);
        return node;
    }

    // 删除最大的节点
    removeMax(): T {
        let res = this.maximum();
        this.root = this._removeMax(this.root);
        return res;
    }

    // 删除掉以node为根的二分搜索树中的最大节点
    // 返回删除节点后新的二分搜索树的根
    private _removeMax(node: Node<T>): Node<T> {
        if (node!.right === null) {
            let leftNode = node!.left;
            node!.left = null;
            this.size--;

            return leftNode;
        }

        node!.right = this._removeMax(node!.right);
        return node;
    }

    /** 遍历 **/

    // 前序遍历
    // 打印二叉树
    preOrder(): void {
        this._preOrder(this.root);
    }

    private _preOrder(node: Node<T>) {
        if (node === null) {
            return;
        }

        console.log(node.e);
        this._preOrder(node.left);
        this._preOrder(node.right);
    }

    // 利用「栈」进行非递归的前序遍历
    // 比递归实现复杂
    preOrderNR(): void {
        if(this.root === null) {
            return;
        }

        let stack: Array<TreeNode<T>> = [];
        
        stack.push(this.root);

        while (stack.length) {
            let cur = stack.pop();
            console.log(cur!.e);

            if(cur!.right !== null) {
                stack.push(cur!.right);
            }
            if (cur!.left !== null) {
                stack.push(cur!.left);
            }
        }
    }

    // 中序遍历
    // 直接输出排序后的结果
    inOrder(): void {
        this._inOrder(this.root);
    }

    private _inOrder(node: Node<T>) {
        if (node === null) {
            return;
        }

        this._inOrder(node.left);
        console.log(node.e);
        this._inOrder(node.right);
    }

    // 后序遍历
    // 为二分搜索树释放内存
    postOrder(): void {
        this._postOrder(this.root);
    }

    private _postOrder(node: Node<T>) {
        if (node === null) {
            return;
        }

        this._postOrder(node.left);
        this._postOrder(node.right);
        console.log(node.e);
    }

    // 层序遍历
    // 借助「队列」实现广度优先遍历
    // 广度优先遍历意义在于**更快**的找到问题的解，即无权图的「最短路径」问题
    levelOrder(): void {
        if (this.root === null) {
            return;
        }

        let queue: Array<TreeNode<T>> = [];

        queue.push(this.root);
        
        while (queue.length) {
            let cur = queue.shift();
            console.log(cur!.e);

            if (cur!.left !== null) {
                queue.push(cur!.left);
            }
            if (cur!.right !== null) {
                queue.push(cur!.right);
            }
        }
    }

    // 打印树结构
    toString(): string {
        let res = '';
        res = this.generateString(this.root, 0, res);
        return res;
    }

    // 生成以 node 为根节点，深度为depth的描述二叉树的字符串
    private generateString(node: Node<T>, depth:number, res: string): string {
        if (node === null) {
            res += this.generateDepthString(depth) + 'null\n';
            return res;
        }

        res += this.generateDepthString(depth) + String(node.e) + '\n';
        res = this.generateString(node.left, depth + 1, res);
        res = this.generateString(node.right, depth + 1, res);

        return res;
    }

    private generateDepthString(depth: number): string {
        let res = '';
        for (let i = 0; i < depth ; i++) {
            if(i === depth -1) {
                res += '├── ';
            } else {
                res += '│   ';
            }
        }

        return res;
    }
}