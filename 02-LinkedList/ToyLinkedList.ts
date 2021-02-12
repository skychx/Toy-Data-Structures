/*
 * @Author: skychx
 * @Date: 2021-02-03 22:10:00
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-12 18:08:23
 * @FilePath: /Toy-Data-Structures/02-LinkedList/ToyLinkedList.ts
 */
import { isEqual } from 'lodash';

// 这里把 null 也看成树节点
export type Node<T> = LinkedNode<T> | null;
export type E<T> = T | null;

// 链表单节点
export class LinkedNode<T> {
    e: E<T>;
    next: Node<T>;

    constructor(e?: T, next?: Node<T>) {
        this.e = e ?? null;
        this.next = next ?? null;
    }

    toString(): string {
        return String(this.e);
    }
}

export class ToyLinkedList<T> {
    private dummyHead: Node<T>;
    private size: number;

    constructor() {
        // dummyHead：虚拟头节点、表头
        this.dummyHead = new LinkedNode();
        this.size = 0;
    }

    getSize(): number {
        return this.size;
    }

    isEmpty(): boolean {
        return this.size === 0;
    }

    /** 增 **/

    // 在链表的index(0-based)位置添加新的元素 e
    // 在链表中不是一个常用的操作
    add(index: number, e: T): void {
        if(index < 0 || index > this.size) {
            throw new Error('Add failed. Illegal index.');
        }

        let prev = this.dummyHead;
        for (let i = 0; i < index; i++) {
            prev = prev!.next;
        }

        let node = new LinkedNode(e);
        node.next = prev!.next;
        prev!.next = node;
        // prev!.next = new LinkedNode(e, prev!.next);

        this.size++;
    } 

    addFirst(e: T): void {
        this.add(0, e);
    } 

    addLast(e: T): void {
        this.add(this.size, e);
    }

    /** 删 **/

    remove(index: number): E<T> {
        if (index < 0 || index >= this.size) {
            throw new Error('Remove failed. Illegal index.');
        }

        // 找到待删除节点 retNode 之前的一个节点
        let prev = this.dummyHead;
        for (let i = 0; i < index; i++) {
            prev = prev!.next;
        }

        let retNode = prev!.next;
        prev!.next = retNode!.next;
        retNode!.next = null;
        this.size--;

        return retNode!.e;
    }

    removeFirst(): E<T> {
        return this.remove(0);
    }

    removeLast(): E<T> {
        return this.remove(this.size - 1);
    }

    removeElement(e: T): void {
        let prev = this.dummyHead;

        while (prev!.next !== null) {
            if (isEqual(prev!.next.e, e)) {
                break;
            }
            prev = prev!.next;
        }

        if(prev!.next !== null) {
            let delNode = prev!.next;
            prev!.next = delNode.next;
            delNode.next = null;
            this.size--;
        }
    }

    /** 查 **/

    get(index: number): E<T> {
        if (index < 0 || index >= this.size) {
            throw new Error('Get failed. Illegal index.');
        }

        // 注意这里是从索引 0 开始遍历的
        let cur = this.dummyHead!.next;
        for (let i = 0; i < index; i++) {
            cur = cur!.next;
        }
        return cur!.e;
    }

    getFirst(): E<T> {
        return this.get(0);
    }

    getLast(): E<T> {
        return this.get(this.size - 1);
    }

    contains(e: T): boolean {
        // 从第一个元素开始遍历
        let cur = this.dummyHead!.next;
        while (cur !== null) {
            if (isEqual(cur.e, e)) {
                return true;
            }
            cur = cur.next;
        }
        return false;
    }

    /** 改 **/

    // 这个操作在链表里并不常见
    set(index: number, e: T): void {
        if (index < 0 || index >= this.size) {
            throw new Error('Set failed. Illegal index.');
        }

        // 注意这里是从索引 0 开始遍历的
        let cur = this.dummyHead!.next;
        for (let i = 0; i < index; i++) {
            cur = cur!.next;
        }
        cur!.e = e;
    }

    /** 格式化 **/
    toString(): string {
        let res = '\n';

        let cur = this.dummyHead!.next;
        while (cur !== null) {
            res += `${cur} -> `;
            cur = cur.next;
        }
        res += 'NULL';

        return res;
    }
}
