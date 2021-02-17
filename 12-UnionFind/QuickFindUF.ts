/*
 * @Author: skychx
 * @Date: 2021-02-16 18:56:04
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-16 22:20:54
 * @FilePath: /Toy-Data-Structures/12-UnionFind/QuickFindUF.ts
 */
import { ToyUnionFind } from './ToyUnionFind';

export class QuickFindUF implements ToyUnionFind {
    private id: number[];

    constructor(size: number) {
        this.id = new Array(size);

        for (let i = 0; i < size; i++) {
            this.id[i] = i;
        }
    }

    getSize(): number {
        return this.id.length;
    }

    // 查看元素 p 和元素 q 是否所属一个集合
    // O(1) 复杂度，即「QuickFind」
    isConnected(p: number, q: number): boolean {
        return this.find(p) === this.find(q);
    }

    // 合并元素 p 和元素 q 所属的集合
    // O(n) 复杂度
    unionElements(p: number, q: number): void {
        const pID = this.find(p);
        const qID = this.find(q);

        if(pID === qID) {
            return;
        }

        // 合并过程需要遍历一遍所有元素, 将两个元素的所属集合编号合并
        for (let i = 0; i < this.id.length; i++) {
            if(this.id[i] === pID) {
                this.id[i] = qID;
            }
        }
    }

    // 查找元素 p 所对应的集合编号
    // O(1) 复杂度
    private find(p: number): number {
        if (p < 0 || p >= this.id.length) {
            throw new Error('p is out of bound.');
        }

        return this.id[p];
    }
}