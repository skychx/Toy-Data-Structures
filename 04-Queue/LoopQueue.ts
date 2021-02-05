/*
 * @Author: skychx
 * @Date: 2021-02-04 21:26:18
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-04 23:04:55
 * @FilePath: /Toy-Data-Structures/04-Queue/LoopQueue.ts
 */
import { ToyQueue } from './ToyQueue';

// 「循环队列」可以把 ArrayQueue 的 dequeue 时间复杂度降低到 O(1)
export class LoopQueue<T> implements ToyQueue<T> {
    private data: Array<T | null>;
    private front: number;
    private tail: number;
    private size: number;

    constructor(capacity: number = 10) {
        this.data = new Array(capacity + 1); // 循环队列会浪费一个空间
        this.front = 0;
        this.tail = 0;
        this.size = 0;
    }

    // 动态修改容器大小
    private resize(newCapacity: number): void {
        let newData: Array<T | null> = new Array(newCapacity + 1);
        
        // 这里做的原因是旧的已经满了的数组，里面会有个空位的
        // 通过取余运算可以得到正确的索引
        for (let i = 0; i < this.size; i++) {
            newData[i] = this.data[(i + this.front) % this.data.length];
        }

        this.data = newData;
        this.front = 0;
        this.tail = this.size;
    }

    getCapacity(): number {
        return this.data.length - 1;
    }

    getSize(): number {
        return this.size;
    }

    isEmpty(): boolean {
        return this.front === this.tail;
    }

    enqueue(e: T): void {
        // 扩容
        if((this.tail + 1) % this.data.length === this.front) {
            this.resize(this.getCapacity() * 2);
        }

        this.data[this.tail] = e;
        this.tail = (this.tail + 1) % this.data.length;
        this.size++;
    }

    dequeue(): T | null {
        if(this.isEmpty()) {
            throw new Error('Cannot dequeue from an empty queue.');
        }

        let res = this.data[this.front];
        // this.data[this.front] = null;
        this.front = (this.front + 1) % this.data.length;
        this.size--;

        // 缩容
        if(
            this.size === this.getCapacity() >> 2 &&
            this.getCapacity() >> 1 !== 0
        ) {
            this.resize(this.getCapacity() >> 1);
        }

        return res;
    }

    getFront(): T | null {
        if(this.isEmpty()) {
            throw new Error('Queue is empty.');
        }

        return this.data[this.front];
    }

    // 格式化输出
    toString(): string {
        let res: string = `\nLoopQueue: size = ${this.size}, capacity = ${this.getCapacity()}\n`;
        res += 'front [';
        for (let i = this.front; i !== this.tail; i = (i + 1) % this.data.length) {
            res += `${this.data[i]}`;
            if ((i + 1) % this.data.length !== this.tail) {
                res += ', ';
            }
        }
        res += '] tail\n';
        return res;
    }
}