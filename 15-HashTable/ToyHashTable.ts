/*
 * @Author: skychx
 * @Date: 2021-02-27 19:07:34
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-27 20:07:22
 * @FilePath: /Toy-Data-Structures/15-HashTable/ToyHashTable.ts
 */
const capacityList = [53, 97, 193, 389, 769, 1543, 3079, 6151, 12289, 24593,
    49157, 98317, 196613, 393241, 786433, 1572869, 3145739, 6291469,
    12582917, 25165843, 50331653, 100663319, 201326611, 402653189, 805306457, 1610612741];

export class ToyHashTable<K, V> {
    private hashtable: Map<K, V>[];
    private M: number;
    private size: number;

    constructor(m: number = 97) {
        this.M = m;
        this.hashtable = new Array(m);
        this.size = 0;
        for (let i = 0; i < m; i++) {
            this.hashtable[i] = new Map();
        }
    }

    private _hash(key: K): number {
        return (this._hashCode(String(key)) & 0x7fffffff) % this.M;
    }

    private _hashCode(str: string): number {
        let hash = 0;

        if (str.length === 0) {
            return 0;
        }

        for (let i = 0; i < str.length; i++) {
            hash = ((hash << 5) - hash) + str.charCodeAt(i);
            hash |= 0;
        }

        return hash;
    }

    getSize(): number {
        return this.size;
    }

    /** 增 **/

    add(key: K, value: V): void {
        let map = this.hashtable[this._hash(key)];

        if (map.has(key)) {
            map.set(key, value);
        } else {
            map.set(key, value);
            this.size++;
        }
    }

    /** 删 **/

    delete(key: K): boolean {
        let map = this.hashtable[this._hash(key)];
        let ret = false;

        if (map.has(key)) {
            map.delete(key);
            this.size--;
        }

        return ret;
    }

    /** 改 **/

    set(key: K, value: V): void {
        let map = this.hashtable[this._hash(key)];

        if(!map.has(key)) {
            throw new Error(`${key} doesn't exist!`);
        }

        map.set(key, value);
    }

    /** 查 **/

    has(key: K): boolean {
        return this.hashtable[this._hash(key)].has(key);
    }

    get(key: K): V | undefined {
        return this.hashtable[this._hash(key)].get(key);
    }
}