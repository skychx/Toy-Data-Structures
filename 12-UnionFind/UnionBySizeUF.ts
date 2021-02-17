/*
 * @Author: skychx
 * @Date: 2021-02-16 18:56:04
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-17 15:11:27
 * @FilePath: /Toy-Data-Structures/12-UnionFind/UnionBySizeUF.ts
 */
import { ToyUnionFind } from './ToyUnionFind';

// 考虑 QuickUnionUF 有可能退化为链表，这里需要减小树的高度
// // UnionBySizeUF 是基于集合中元素个数优化的（按大小求并）
export class UnionBySizeUF implements ToyUnionFind {
    private parent: number[]; // parent[i] 表示第一个元素所指向的父节点
    private sz: number[]; //     sz[i] 表示以 i 为根的集合中元素个数

    constructor(size: number) {
        this.parent = new Array(size);
        this.sz = new Array(size);

        for (let i = 0; i < size; i++) {
            this.parent[i] = i;
            this.sz[i] = 1;
        }
    }

    getSize(): number {
        return this.parent.length;
    }

    // 查看元素 p 和元素 q 是否所属一个集合
    // O(h) 复杂度
    isConnected(p: number, q: number): boolean {
        return this.find(p) === this.find(q);
    }

    // 合并元素 p 和元素 q 所属的集合
    // O(h) 复杂度, h 为树的高度
    unionElements(p: number, q: number): void {
        const pRoot = this.find(p);
        const qRoot = this.find(q);

        if (pRoot === qRoot) {
            return;
        }

        // 根据两个元素所在树的元素个数不同判断合并方向
        // 将元素个数少的集合合并到元素个数多的集合上
        if (this.sz[pRoot] < this.sz[qRoot]) {
            this.parent[pRoot] = qRoot;
            this.sz[qRoot] += this.sz[pRoot];
        }
        else { // sz[qRoot] <= sz[pRoot]
            this.parent[qRoot] = pRoot;
            this.sz[pRoot] += this.sz[qRoot];
        }
    }

    // 查找过程, 查找元素 p 所对应的集合编号
    // O(h) 复杂度, h 为树的高度
    private find(p: number): number {
        if (p < 0 || p >= this.parent.length) {
            throw new Error('p is out of bound.');
        }

        // 不断去查询自己的父亲节点, 直到到达根节点
        // 根节点的特点: parent[p] === p
        while (p !== this.parent[p]) {
            p = this.parent[p];
        }

        return p;
    }
}