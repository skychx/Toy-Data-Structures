/*
 * @Author: skychx
 * @Date: 2021-02-27 19:07:34
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-27 20:50:40
 * @FilePath: /Toy-Data-Structures/15-HashTable/ToyHashTable.ts
 */
const capacityList = [53, 97, 193, 389, 769, 1543, 3079, 6151, 12289, 24593,
    49157, 98317, 196613, 393241, 786433, 1572869, 3145739, 6291469,
    12582917, 25165843, 50331653, 100663319, 201326611, 402653189, 805306457, 1610612741];

export class ToyHashTable<K, V> {
    private hashtable: Map<K, V>[];
    private M: number;
    private size: number;
    private initCapacity: number;
    private upperTol: number; // 扩容边界
    private lowerTol: number; // 缩容边界

    constructor(m?: number) {
        this.initCapacity = 7;
        this.upperTol = 10;
        this.lowerTol = 2;

        this.M = m ?? this.initCapacity;
        this.hashtable = new Array(this.M);
        this.size = 0;

        for (let i = 0; i < this.M; i++) {
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

    private _resize(newM: number): void {
        let newHashTable = new Array(newM);
        for (let i = 0; i < newM; i++) {
            newHashTable[i] = new Map();
        }

        const oldM = this.M;
        this.M = newM;
        for (let i = 0; i < oldM; i++) {
            let map = this.hashtable[i];
            for (let key of map.keys()) {
                newHashTable[this._hash(key)].set(key, map.get(key));
            }
        }

        this.hashtable = newHashTable;
    }

    getSize(): number {
        return this.size;
    }

    isEmpty(): boolean {
        return this.size === 0;
    }

    /** 增 **/

    add(key: K, value: V): void {
        let map = this.hashtable[this._hash(key)];

        if (map.has(key)) {
            map.set(key, value);
        } else {
            map.set(key, value);
            this.size++;

            if(this.size >= this.upperTol * this.M) {
                this._resize(2 * this.M);
            }
        }
    }

    /** 删 **/

    delete(key: K): V | null {
        let map = this.hashtable[this._hash(key)];
        let ret = null;

        if (map.has(key)) {
            ret = map.get(key) ?? null; // 这个是为了适配 ToyMap 的接口，接口返回的类型为 V | null
            map.delete(key);
            this.size--;

            if (
                (this.size < this.lowerTol * this.M) && 
                ((this.M >> 1) >= this.initCapacity)
            ) {
                this._resize(this.M >> 1);
            }
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

    get(key: K): V | null {
        return this.hashtable[this._hash(key)].get(key) ?? null; // 这个是为了适配 ToyMap 的接口，接口返回的类型为 V | null
    }
}