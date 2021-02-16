/*
 * @Author: skychx
 * @Date: 2021-02-16 11:28:30
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-16 15:34:07
 * @FilePath: /Toy-Data-Structures/10-SegmentTree/ToySegmentTree.ts
 */
export class ToySegmentTree<T> {
    private data: T[];
    private tree: Array<T>;
    private mergerFn: (a: T, b: T) => T;

    constructor(arr: T[], mergerFn: (a: T, b: T) => T) {

        this.data = [...arr];
        this.mergerFn = mergerFn;

        // 把 this.data 转换为一颗允许叶子节点为空的「满二叉树」
        this.tree = new Array<T>(this.data.length * 4);
        this.buildSegmentTree(0, 0, this.data.length - 1);
    }

    // 在 treeIndex 的位置创建表示区间 [l...r] 的线段树
    private buildSegmentTree(treeIndex: number, l: number, r: number): void {
        if (l === r) {
            this.tree[treeIndex] = this.data[l];
            return;
        }

        const leftTreeIndex: number = this.leftChild(treeIndex);
        const rightTreeIndex: number = this.rightChild(treeIndex);
        const mid: number = l + ((r - l) >> 1); // 即 (l + r) >> 2，这样做是为了防止整型溢出

        this.buildSegmentTree(leftTreeIndex, l, mid);
        this.buildSegmentTree(rightTreeIndex, mid + 1, r);

        this.tree[treeIndex] = this.mergerFn(this.tree[leftTreeIndex], this.tree[rightTreeIndex]);
    }

    /** 查 **/

    getSize(): number {
        return this.data.length;
    }

    get(index: number): T {
        if (index < 0 || index >= this.data.length)
            throw new Error('Index is illegal.');

        return this.data[index];
    }

    // 返回区间 [queryL, queryR] 的值
    query(queryL: number, queryR: number): T {
        if (
            queryL < 0 || queryL >= this.data.length ||
            queryR < 0 || queryR >= this.data.length ||
            queryL > queryR
        ) {
            throw new Error('Index is illegal.');
        }

        return this._query(0, 0, this.data.length - 1, queryL, queryR);
    }

    // 在以 treeIndex 为根的线段树中 [l...r] 的范围里，搜索区间 [queryL...queryR] 的值
    private _query(treeIndex: number, l: number, r: number, queryL: number, queryR: number): T {
        // 找到匹配的区间
        if (l === queryL && r === queryR) {
            return this.tree[treeIndex];
        }

        const leftTreeIndex: number = this.leftChild(treeIndex);
        const rightTreeIndex: number = this.rightChild(treeIndex);
        const mid: number = l + ((r - l) >> 1);

        // 查询区间全部落在左子树
        if (queryR <= mid) {
            return this._query(leftTreeIndex, l, mid, queryL, queryR);
        } else if (queryL >= mid + 1) { // 查询区间全部落在右子树
            return this._query(rightTreeIndex, mid + 1, r, queryL, queryR);
        } else { // 查询区间左右子树都有
            const leftResult: T = this._query(leftTreeIndex, l, mid, queryL, mid);
            const rightResult: T = this._query(rightTreeIndex, mid + 1, r, mid + 1, queryR);

            return this.mergerFn(leftResult, rightResult);
        }
    }

    /** 改 **/
    set(index: number, e: T): void {
        if (index < 0 || index >= this.data.length) {
            throw new Error('Index is illegal');
        }

        this.data[index] = e;
        this._set(0, 0, this.data.length - 1, index, e);
    }

    // 在以 treeIndex 为根的线段树中更新 index 的值为 e
    private _set(treeIndex: number, l: number, r: number, index: number, e: T): void {
        if (l === r) {
            this.tree[treeIndex] = e;
            return;
        }

        const leftTreeIndex: number = this.leftChild(treeIndex);
        const rightTreeIndex: number = this.rightChild(treeIndex);
        const mid: number = l + ((r - l) >> 1);

        // 在左区间
        if(index <= mid) {
            this._set(leftTreeIndex, l, mid, index, e);
        } else { // 在右区间
            this._set(rightTreeIndex, mid + 1, r, index, e);
        }

        this.tree[treeIndex] = this.mergerFn(this.tree[leftTreeIndex], this.tree[rightTreeIndex]);
    }

    // 返回完全二叉树的数组表示中，一个索引所表示的元素的左孩子节点的索引
    private leftChild(index: number): number {
        return 2 * index + 1;
    }

    // 返回完全二叉树的数组表示中，一个索引所表示的元素的右孩子节点的索引
    private rightChild(index: number): number {
        return 2 * index + 2;
    }

    toString(): string {
        let res = '';
        const length = this.tree.length;

        res += '[';
        for (let i = 0; i < length; i++) {
            if(this.tree[i] !== undefined) {
                res += this.tree[i];
            } else {
                res += 'null';
            }

            if (i !== length - 1) {
                res += ', ';
            }
        }
        res += ']';

        return res;
    }
}