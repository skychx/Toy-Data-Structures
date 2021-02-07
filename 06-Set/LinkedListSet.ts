/*
 * @Author: skychx
 * @Date: 2021-02-07 17:54:22
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-07 20:40:51
 * @FilePath: /Toy-Data-Structures/06-Set/LinkedListSet.ts
 */
import { ToySet } from './ToySet';
import { ToyLinkedList } from '../02-LinkedList/ToyLinkedList';

// BST 直接支持高层的 Set 操作
export class LinkedListSet<T> implements ToySet<T> {
    private list: ToyLinkedList<T>;
    constructor() {
        this.list = new ToyLinkedList<T>();
    }

    getSize(): number {
        return this.list.getSize();
    };

    isEmpty(): boolean {
        return this.list.isEmpty();
    };

    // O(n)
    add(e: T): void {
        if(!this.list.contains(e)) {
            this.list.addFirst(e);
        }
    }

    // O(n)
    delete(e: T): void {
        this.list.removeElement(e);
    }

    // O(n)
    has(e: T): boolean {
        return this.list.contains(e);
    }
}