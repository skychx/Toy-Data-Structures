/*
 * @Author: skychx
 * @Date: 2021-02-04 20:39:39
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-07 15:19:36
 * @FilePath: /Toy-Data-Structures/06-Set/ToySet.d.ts
 */
// 参考了 JS Set 的 API 设计：
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set
export interface ToySet<T> {
    getSize(): number;
    isEmpty(): boolean;

    // 增
    add(e: T): void;
    // 删
    delete(e: T): void;
    // 查
    has(e: T): boolean;
}