/*
 * @Author: skychx
 * @Date: 2021-02-04 21:01:59
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-04 22:40:48
 * @FilePath: /Toy-Data-Structures/04-Queue/ArrayQueue.ts
 */
import { ToyQueue } from './ToyQueue';
import { ToyArray } from '../01-Array/ToyArray';

// 「数组队列」dequeue 时间复杂度为 O(n)
export class ArrayQueue<T> implements ToyQueue<T> {
    private array: ToyArray<T>;

    constructor(capacity: number = 10) {
        this.array = new ToyArray<T>(capacity);
    }

    getSize(): number {
        return this.array.getSize();
    };
    isEmpty(): boolean {
        return this.array.isEmpty();
    };

    enqueue(e: T): void {
        this.array.push(e);
    };

    dequeue(): T | null {
        return this.array.shift();
    };

    getFront(): T | null {
        return this.array.getFirst();
    };

    toString(): string {
        let res: string = '\nArrayQueue: front [';
        for (let i = 0; i < this.getSize(); i++) {
            res += `${this.array.get(i)}`;
            if (i !== this.getSize() - 1) {
                res += ', ';
            }
        }
        res += '] tail\n';
        return res;
    }
}