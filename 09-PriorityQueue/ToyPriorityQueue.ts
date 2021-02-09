/*
 * @Author: skychx
 * @Date: 2021-02-04 20:39:39
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-09 22:09:11
 * @FilePath: /Toy-Data-Structures/09-PriorityQueue/ToyPriorityQueue.ts
 */
// 优先队列本质上也是队列，接口都是一致的
import { ToyQueue } from '../04-Queue/ToyQueue';
import { ToyMaxHeap } from '../08-Heap/ToyMaxHeap';

export class ToyPriorityQueue<T> implements ToyQueue<T> {
    private maxHeap: ToyMaxHeap<T>;

    constructor() {
        this.maxHeap = new ToyMaxHeap<T>(10);
    }

    getSize(): number {
        return this.maxHeap.getSize();
    }

    isEmpty(): boolean {
        return this.maxHeap.isEmpty();
    }

    getFront(): T {
        return this.maxHeap.findMax();
    }

    enqueue(e: T): void {
        this.maxHeap.add(e);
    }

    dequeue(): T {
        return this.maxHeap.extractMax();
    }
}