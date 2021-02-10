/*
 * @Author: skychx
 * @Date: 2021-02-08 16:25:17
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-10 17:48:24
 * @FilePath: /Toy-Data-Structures/08-Heap/ToyMinHeap.ts
 */
import { ToyHeap } from './ToyHeap';
import { ToyArray } from '../01-Array/ToyArray';

export class ToyMinHeap<T> implements ToyHeap<T> {
    private data: ToyArray<T>;

    constructor(params: number | T[]) {
        // 如果传入数组，直接转为堆（堆化操作）
        if (Array.isArray(params)) {
            this.data = new ToyArray<T>(params);
            if(params.length !== 1) {
                for (let i = this.parent(params.length - 1); i >= 0 ; i--) {
                    this.siftDown(i);
                }
            }
        } else {
            this.data = new ToyArray<T>(params ?? 10);
        }
    }

    getSize(): number {
        return this.data.getSize();
    }

    isEmpty(): boolean {
        return this.data.isEmpty();
    }

    // 寻找当前节点的父亲节点索引
    private parent(index: number): number {
        if(index === 0) {
            throw new Error('index-0 doesn\'t have parent.');
        }

        return (index - 1) >> 1;
    }

    // 寻找当前节点的左孩子节点索引
    private leftChild(index: number): number {
        return index * 2 + 1;
    }

    // 寻找当前节点的右孩子节点索引
    private rightChild(index: number): number {
        return index * 2 + 2;
    }

    /** 增 **/

    push(e: T): void {
        // 插入后再整理堆的顺序
        this.data.push(e);
        this.siftUp(this.data.getSize() - 1);
    }

    // 元素上浮
    private siftUp(i: number): void {
        while (
            i > 0 &&
            (this.data.get(this.parent(i)) > this.data.get(i))
        ) {
            this.data.swap(i, this.parent(i));
            i = this.parent(i);
        }
    }

    /** 查 **/

    // 寻找堆中的最大的元素
    peek(): T {
        if(this.data.isEmpty()) {
            throw new Error('Can not peek when heap is empty.');
        }

        // 最大元素就是数组的第一个元素
        return this.data.get(0);
    }

    /** 删 **/

    // 移除最大元素
    pop(): T {
        let res = this.peek();

        this.data.swap(0, this.data.getSize() - 1);
        this.data.pop();
        this.siftDown(0);

        return res;
    }

    // 元素下沉
    private siftDown(i: number): void {
        // 只有左孩子在数组内才能继续
        while (this.leftChild(i) < this.data.getSize()) {
            // 默认交换的是左孩子
            let j: number = this.leftChild(i);

            // 如果右孩子存在，且右孩子比左孩子小，我们就拿右孩子交换
            if (
                j + 1 < this.data.getSize() &&
                this.data.get(j + 1) < this.data.get(j)
            ) {
                j++;
                // j = this.rightChild(i);
            }

            // 如果 data[i] <= data[j]，说明交换到合适的位置了，直接停止下沉
            if(this.data.get(i) <= this.data.get(j)) {
                break;
            }

            this.data.swap(i, j);
            i = j;
        }
    }

    /** 改 **/

    // 取出堆中的最大元素，并且替换成元素 e
    replace(e: T): T {
        let res = this.peek();

        this.data.set(0, e);
        this.siftDown(0);

        return res;
    }
}