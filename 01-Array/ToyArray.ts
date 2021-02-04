/*
 * @Author: skychx
 * @Date: 2021-02-03 22:10:00
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-04 18:13:02
 * @FilePath: /Toy-Data-Structures/01-Array/ToyArray.ts
 */
import { isEqual } from 'lodash';

// ToyArray 目前只支持同类型的子元素
export class ToyArray<T> {
    private size: number;
    private data: T[];

    constructor(capacity: number = 10) {
        this.data = new Array(capacity);
        this.size = 0;
    }

    // 将数组空间的容量变成 newCapacity 大小
    private resize(newCapacity: number): void {
        const newData: T[] = new Array(newCapacity);

        for (let i = 0; i < this.size; i++)
            newData[i] = this.data[i];
        this.data = newData;
    }

    // 获取数组中的元素个数
    getSize(): number {
        return this.size;
    }

    // 获取数组的容量
    getCapacity(): number {
        return this.data.length;
    }

    // 返回数组是否为空
    isEmpty(): boolean {
        return this.size === 0;
    }

    /** 增 **/

    // 在 index 索引的位置插入一个新元素 e
    add(index: number, e: T) {
        if (index < 0 || index > this.size) {
            throw new Error('add failed. Require index >= 0 and index <= size');
        }

        // 扩容
        if (this.size === this.data.length) {
            this.resize(2 * this.data.length);
        }

        for (let i = this.size - 1; i >= index; i--) {
            this.data[i + 1] = this.data[i];
        }
        this.data[index] = e;
        this.size++;
    }

    // 向开头添加一个元素
    unshift(e: T): number {
        this.add(0, e);

        return this.getSize();
    }

    // 向末尾添加一个元素
    push(e: T): number {
        this.add(this.size, e);

        return this.getSize();
    }

    /** 删 **/

    // 从数组中删除 index 位置的元素, 返回删除的元素
    remove(index: number): T {
        if (index < 0 || index >= this.size) {
            throw new Error('Remove failed. Index is illegal.');
        }

        const res: T = this.data[index];

        for (let i = index + 1; i < this.size; i++) {
            this.data[i - 1] = this.data[i];
        }
        this.size--;

        // 缩容（防止复杂度震荡，这里除以 4）
        // 因为 JS number 的整数是用 double 模拟的，所以 this.data.length 为奇数时会做除法会 出现小数
        // 这里用 >> 2 替代了 / 4，也可以用 Math.floor(this.data.length / 4) 替代
        if (this.size === this.data.length >> 2 && this.data.length >> 1 !== 0) {
            this.resize(this.data.length >> 1);
        }

        return res;
    }

    // 从数组中删除元素 e
    removeElement(e: T): void {
        const index = this.indexOf(e);
        this.remove(index);
    }

    // 删除第一个元素，并返回该元素的值
    shift(): T {
        return this.remove(0);
    }

    // 删除最后一个元素，并返回该元素的值
    pop(): T {
        return this.remove(this.size - 1);
    }

    /** 查 **/

    // 查找数组中是否有元素 e
    contains(e: T): boolean {
        for (let i = 0; i < this.size; i++) {
            if (isEqual(this.data[i], e)) {
                return true;
            }
        }
        return false;
    }

    // 返回数组中给定元素 e 的第一个索引，未找到则返回 -1
    indexOf(e: T): number {
        for (let i = 0; i < this.size; i++) {
            if (isEqual(this.data[i], e)) {
                return i;
            }
        }
        return -1;
    }

    // 获取 index 索引位置的元素
    get(index: number): T {
        if (index < 0 || index >= this.size) {
            throw new Error('Get failed. Index is illegal.');
        }
        return this.data[index];
    }

    getFirst(): T {
        return this.data[0];
    }

    getLast(): T {
        return this.data[this.size - 1];
    }

    /** 改 **/

    // 获取 index 索引位置的元素
    set(index: number, e: T): void {
        if (index < 0 || index >= this.size) {
            throw new Error('Set failed. Index is illegal.');
        }
        this.data[index] = e;
    }

    /** 格式化 **/

    // 格式化输出
    toString(): string {
        let res: string = `\nToyArray: size = ${this.size}, capacity = ${this.data.length}\n`;
        res += '[';
        for (let i = 0; i < this.size; i++) {
            res += `${this.data[i]}`;
            if (i !== this.size - 1) {
                res += ', ';
            }
        }
        res += ']\n';
        return res;
    }
}
