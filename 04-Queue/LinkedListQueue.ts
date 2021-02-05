/*
 * @Author: skychx
 * @Date: 2021-02-04 21:25:22
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-05 20:55:04
 * @FilePath: /Toy-Data-Structures/04-Queue/LinkedListQueue.ts
 */
import { ToyQueue } from './ToyQueue';
import { LinkedNode } from '../02-LinkedList/ToyLinkedList';

// 用双向链表实现队列
// 链表尾 enqueue，链表头 dequeue
export class LinkedListQueue<T> implements ToyQueue<T> {
    private head: LinkedNode<T> | null;
    private tail: LinkedNode<T> | null;
    private size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    getSize(): number {
        return this.size;
    }

    isEmpty(): boolean {
        return this.size === 0;
    }

    enqueue(e: T): void {
        // tail 为 null 表示这是个空链表
        if(this.tail === null) {
            this.tail = new LinkedNode<T>(e);
            this.head = this.tail;
        } else {
            this.tail.next = new LinkedNode<T>(e);
            this.tail = this.tail.next;
        }
        this.size++;
    }

    dequeue(): T | null {
        if(this.isEmpty()) {
            throw new Error('Cannot dequeue from an empty queue.');
        }

        let retNode = this.head as LinkedNode<T>;
        this.head = this.head!.next;
        retNode.next = null;

        // 处理出队后链表为空的情况
        if(this.head === null) {
            this.tail = null;
        }

        return retNode.e;
    }

    getFront(): T | null {
        if (this.isEmpty()) {
            throw new Error('Queue is empty.');
        }

        return this.head!.e;
    }

    toString(): string {
        let res = '\nQueue: front ';

        let cur = this.head;
        while (cur !== null) {
            res += `${cur} -> `;
            cur = cur.next;
        }
        res += 'NULL tail';

        return res;
    }
}