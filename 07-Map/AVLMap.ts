/*
 * @Author: skychx
 * @Date: 2021-02-22 09:00:57
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-22 09:05:55
 * @FilePath: /Toy-Data-Structures/07-Map/AVLMap.ts
 */
import { ToyAVLTree } from '../13-AVLTree/ToyAVLTree';
import { ToyMap } from './ToyMap';

export class AVLMap<K, V> implements ToyMap<K, V> {
    private avl: ToyAVLTree<K, V>;
    constructor() {
        this.avl = new ToyAVLTree();
    }

    getSize(): number {
        return this.avl.getSize();
    }

    isEmpty(): boolean {
        return this.avl.isEmpty();
    }

    add(key: K, value: V): void {
        return this.avl.add(key, value);
    }

    delete(key: K): V | null {
        return this.avl.delete(key);
    }

    get(key: K): V | null {
        return this.avl.get(key);
    }

    has(key: K): boolean {
        return this.avl.has(key);
    }

    set(key: K, value: V): void {
        return this.avl.set(key, value);
    }
}