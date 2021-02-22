/*
 * @Author: skychx
 * @Date: 2021-02-22 20:43:35
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-22 20:46:20
 * @FilePath: /Toy-Data-Structures/06-Set/AVLSet.ts
 */
import { ToySet } from './ToySet';
import { ToyAVLTree } from '../13-AVLTree/ToyAVLTree';

export class AVLSet<T> implements ToySet<T> {
    private avl: ToyAVLTree<T, null>;
    constructor() {
        this.avl = new ToyAVLTree();
    }

    getSize(): number {
        return this.avl.getSize();
    }

    isEmpty(): boolean {
        return this.avl.isEmpty();
    }

    add(e: T): void {
        return this.avl.add(e, null);
    }

    delete(e: T): void {
        this.avl.delete(e);
    }

    has(e: T): boolean {
        return this.avl.has(e);
    }
}