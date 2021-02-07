/*
 * @Author: skychx
 * @Date: 2021-02-07 17:54:22
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-07 20:44:29
 * @FilePath: /Toy-Data-Structures/06-Set/BSTSet.ts
 */
import { ToySet } from './ToySet';
import { ToyBST } from '../05-BinarySearchTree/ToyBST';

// BST 直接支持高层的 Set 操作
export class BSTSet<T> implements ToySet<T> {
    private bst: ToyBST<T>;
    constructor() {
        this.bst = new ToyBST<T>();
    }

    getSize(): number {
        return this.bst.getSize();
    };

    isEmpty(): boolean {
        return this.bst.isEmpty();
    };

    // O(h) = O(logn)
    add(e: T): void {
        this.bst.add(e);
    }

    // O(h) = O(logn)
    delete(e: T): void {
        this.bst.remove(e);
    }

    // O(h) = O(logn)
    has(e: T): boolean {
        return this.bst.contains(e);
    }
}