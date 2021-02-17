/*
 * @Author: skychx
 * @Date: 2021-02-16 18:56:04
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-17 14:16:57
 * @FilePath: /Toy-Data-Structures/12-UnionFind/QuickUnionUF.ts
 */
import { ToyUnionFind } from './ToyUnionFind';

export class QuickUnionUF implements ToyUnionFind {
    private parent: number[];

    constructor(size: number) {
        this.parent = new Array(size);

        for (let i = 0; i < size; i++) {
            this.parent[i] = i;
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

        this.parent[pRoot] = qRoot;
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