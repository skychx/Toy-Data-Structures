/*
 * @Author: skychx
 * @Date: 2021-02-27 20:43:36
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-27 21:01:44
 * @FilePath: /Toy-Data-Structures/06-Set/HashTableSet.ts
 */
import { ToyHashTable } from '../15-HashTable/ToyHashTable';
import { ToySet } from './ToySet';

export class HashTableSet<T> implements ToySet<T> {
    private hashTable: ToyHashTable<T, null>;

    constructor() {
        this.hashTable = new ToyHashTable();
    }

    getSize(): number {
        return this.hashTable.getSize();
    }

    isEmpty(): boolean {
        return this.hashTable.isEmpty();
    }

    add(e: T): void {
        this.hashTable.add(e, null);
    }

    delete(e: T): void {
        this.hashTable.delete(e);
    }

    has(e: T): boolean {
        return this.hashTable.has(e);
    }
}