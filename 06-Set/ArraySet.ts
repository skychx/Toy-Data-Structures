/*
 * @Author: skychx
 * @Date: 2021-02-07 17:54:22
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-12 16:48:38
 * @FilePath: /Toy-Data-Structures/06-Set/ArraySet.ts
 */
import { ToySet } from './ToySet';
import { ToyArray } from '../01-Array/ToyArray';

// BST 直接支持高层的 Set 操作
export class ArraySet<T> implements ToySet<T> {
    private list: ToyArray<T>;
    constructor() {
        this.list = new ToyArray<T>();
    }

    getSize(): number {
        return this.list.getSize();
    };

    isEmpty(): boolean {
        return this.list.isEmpty();
    };

    // O(n)
    add(e: T): void {
        if (!this.list.contains(e)) {
            this.list.push(e);
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