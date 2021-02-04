/*
 * @Author: skychx
 * @Date: 2021-02-03 22:10:00
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-04 16:40:55
 * @FilePath: /Toy-Data-Structures/02-LinkedList/ToyLinkedList.ts
 */
import { isEqual } from 'lodash';

// 链表单节点
class LinkedNode<T> {
    e: T | null;
    next: LinkedNode<T> | null;

    constructor(e?: T, next?: LinkedNode<T> | null) {
        this.e = e ?? null;
        this.next = next ?? null;
    }

    toString(): string {
        return String(this.e);
    }
}

class ToyLinkedList<T> {
    private dummyHead: LinkedNode<T> | null;
    private size: number;

    constructor() {
        // dummyHead：虚拟头节点
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

    remove(index: number): T | null {
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

    removeFirst(): T | null {
        return this.remove(0);
    }

    removeLast(): T | null {
        return this.remove(this.size - 1);
    }

    /** 查 **/

    get(index: number): T | null {
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

    getFirst(): T | null {
        return this.get(0);
    }

    getLast(): T | null {
        return this.get(this.size - 1);
    }

    contains(e: T): boolean {
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

    set(index: number, e: T) {
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

let test = new ToyLinkedList<number>();
test.addFirst(1);
test.addFirst(0);
test.addLast(2);
test.addLast(3);

console.log(`\n链表测试：${test}`);
console.log(`get 测试：${test.get(1)}、${test.getFirst()}、${test.getLast()}`);

test.set(3, 4);
console.log(`\n链表测试：${test}`);
console.log(`contains 测试：${test.contains(4)}`);

test.removeFirst();
test.remove(1);
test.removeLast();
console.log(`\nremove 测试：${test}`);