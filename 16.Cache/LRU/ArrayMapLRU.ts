/*
 * @Author: skychx
 * @Date: 2021-06-16 23:01:06
 * @LastEditors: skychx
 * @LastEditTime: 2021-06-16 23:20:41
 * @FilePath: /Toy-Data-Structures/16.Cache/LRU/ArrayMapLRU.ts
 */

export class ArrayMapLRU {
    caches: Map<number, number>;
    keys: number[];
    max: number;
    constructor(capacity: number) {
        this.caches = new Map<number, number>();
        this.keys = [];
        this.max = capacity;
    }

    get(key: number): number {
        const index = this.keys.indexOf(key);
        if (index > -1) {
            // 提升优先级
            this.makeRecently(index, key);

            return this.caches.get(key) as number;
        } else {
            return -1;
        }
    }

    put(key: number, value: number): void {
        const index = this.keys.indexOf(key);

        // 命中 cache
        if (index > -1) {
            // 提升优先级
            this.makeRecently(index, key);
            // 更新 value
            this.caches.set(key, value);
        } else { // chche 未被命中
            if (this.keys.length === this.max) {
                // 移除最久未被使用的元素
                this.removeLeastRecently();
            }

            // 新增元素
            this.addRecently(key, value);
        }
    }

    // 将某个 key 提升为最近使用的
    private makeRecently(index: number, key: number): void {
        this.remove(index);
        this.keys.push(key);
    }

    // 添加最近使用的元素
    private addRecently(key: number, value: number): void {
        this.caches.set(key, value);
        this.keys.push(key);
    }

    // 删除最久未使用的元素
    private removeLeastRecently(): void {
        const topIndex = this.keys[0];
        this.remove(0);
        this.caches.delete(topIndex);
    }

    // 移除 keys 中 index 位置的元素
    private remove(index: number) {
        return this.keys.splice(index, 1);
    }
}