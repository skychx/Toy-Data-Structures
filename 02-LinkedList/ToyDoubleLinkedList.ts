/*
 * @Author: skychx
 * @Date: 2021-06-16 22:02:31
 * @LastEditors: skychx
 * @LastEditTime: 2021-06-16 22:49:39
 * @FilePath: /Toy-Data-Structures/02-LinkedList/ToyDoubleLinkedList.ts
 */
import isEqual from 'lodash/isEqual';


// 双向链表单节点
export class DLNode<T> {
    e: T | null;
    prev: DLNode<T> | null;
    next: DLNode<T> | null;

    constructor(e?: T) {
        this.e = e ?? null;
        this.prev = null;
        this.next = null;
    }

    toString(): string {
        return String(this.e);
    }
}

export class ToyDoubleLinkedList<T> {
    head: DLNode<T>;
    tail: DLNode<T>;
    size: number;
    constructor() {
        // 虚拟头尾节点
        this.head = new DLNode();
        this.tail = new DLNode();

        this.head.next = this.tail;
        this.tail.prev = this.head;

        this.size = 0;
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    /** 增 **/

    addLast(node: DLNode<T>) {
        // 先把 node 挂载到最后面
        node.prev = this.tail.prev;
        node.next = this.tail;

        // 然后修改 tail 指向（这里顺序不能颠倒）
        this.tail.prev!.next = node;
        this.tail.prev = node;

        this.size++;
    }

    addFirst(node: DLNode<T>) {
        // 先把 node 挂载到最前面
        node.prev = this.head;
        node.next = this.head.next;

        // 然后修改 tail 指向（这里顺序不能颠倒）
        this.head.next!.prev = node;
        this.head.next = node;

        this.size++;
    }

    /** 删 **/

    removeNode(node: DLNode<T>) {
        node.prev!.next = node.next;
        node.next!.prev = node.prev;

        this.size--;
    }

    removeFirst() {
        if (this.head.next === this.tail) {
            return null;
        }

        const first = this.head.next;
        this.removeNode(first as DLNode<T>);

        return first;
    }

    removeLast() {
        if (this.tail.prev === this.head) {
            return null;
        }

        const last = this.tail.prev;
        this.removeNode(last as DLNode<T>);

        return last;
    }

    /** 查 **/

    getFirst(): DLNode<T> | null {
        if (this.head.next === this.tail) {
            return null;
        }

        return this.head.next;
    }

    getLast(): DLNode<T> | null {
        if (this.tail.prev === this.head) {
            return null;
        }

        return this.tail.prev;
    }

    contains(value: T): boolean {
        let cur = this.head.next;

        while (cur !== null) {
            if (isEqual(value, cur.e)) {
                return true;
            }
        }

        return false;
    }

    /** 格式化 **/
    toString(): string {
        let res = '\n↼ null ⇌ ';

        let cur = this.head.next;
        while (cur !== null) {
            res += `${cur} ⇌ `;
            cur = cur.next;
        }
        res = res.substring(0, res.length - 2);
        res += '⇀';

        return res;
    }
}