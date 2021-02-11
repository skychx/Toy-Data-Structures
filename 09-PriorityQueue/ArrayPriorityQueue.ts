/*
 * @Author: skychx
 * @Date: 2021-02-11 15:09:49
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-11 15:24:15
 * @FilePath: /Toy-Data-Structures/09-PriorityQueue/ArrayPriorityQueue.ts
 */
import { ToyQueue } from '../04-Queue/ToyQueue';

// 因为实现思路比较简单，这里没有使用 ToyArray
export class ArrayPriorityQueue<T> implements ToyQueue<T> {
    private list: T[];

    constructor() {
        this.list = [];
    }

    getSize(): number {
        return this.list.length;
    }

    isEmpty(): boolean {
        return this.list.length === 0;
    }

    // O(1)
    enqueue(e: T): void {
        this.list.push(e);
    }

    // O(n)
    dequeue(): T {
        if (this.isEmpty()) {
            throw new Error('list is empty');
        }

        let maxItemIndex = 0;

        // 找到最大元素的下标
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i] > this.list[maxItemIndex]) {
                maxItemIndex = i;
            }
        }

        // JS 一个 API 多用的弊端：语义不明，谁知道 splice 函数是用来删元素的呢。。。
        return this.list.splice(maxItemIndex, 1)[0];
    }

    // O(1)
    getFront(): T {
        if(this.isEmpty()) {
            throw new Error('list is empty');
        }
        return this.list[0];
    }
}