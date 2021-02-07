/*
 * @Author: skychx
 * @Date: 2021-02-04 20:39:39
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-07 22:13:14
 * @FilePath: /Toy-Data-Structures/07-Map/ToyMap.d.ts
 */
// 参考了 JS Map 的 API 设计：
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map
export interface ToyMap<K, V> {
    getSize(): number;
    isEmpty(): boolean;

    // 增
    add(key: K, value: V): void;
    // 删
    delete(key: K): V | null;
    // 查
    get(key: K): V | null;
    has(key: K): boolean;
    // 改（其实 set 和 add 可以合并为一个 API，但是这里为了有区分性还是分成两个）
    set(key: K, value: V): void;
}