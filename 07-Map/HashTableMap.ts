/*
 * @Author: skychx
 * @Date: 2021-02-27 20:43:36
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-27 20:45:02
 * @FilePath: /Toy-Data-Structures/07-Map/HashTableMap.ts
 */
import { ToyHashTable } from '../15-HashTable/ToyHashTable';
import { ToyMap } from './ToyMap';

export class HashTableMap<K, V> implements ToyMap<K, V> {
    private hashTable: ToyHashTable<K, V>;
    constructor() {
        this.hashTable = new ToyHashTable();
    }

    getSize(): number {
        return this.hashTable.getSize();
    }

    isEmpty(): boolean {
        return this.hashTable.isEmpty();
    }

    add(key: K, value: V): void {
        return this.hashTable.add(key, value);
    }

    delete(key: K): V | null {
        return this.hashTable.delete(key);
    }

    get(key: K): V | null {
        return this.hashTable.get(key);
    }

    has(key: K): boolean {
        return this.hashTable.has(key);
    }

    set(key: K, value: V): void {
        return this.hashTable.set(key, value);
    }
}