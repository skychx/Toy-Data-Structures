/*
 * @Author: skychx
 * @Date: 2021-02-04 20:39:39
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-10 17:43:33
 * @FilePath: /Toy-Data-Structures/08-Heap/ToyHeap.d.ts
 */
// API 设计参考 python3 heapq
export interface ToyHeap<T> {
    getSize(): number;
    isEmpty(): boolean;

    // 增
    push(e: T): void;
    // 删
    pop(): T; // 删除最大/最小元素
    // 查
    peek(): T; // 查看最大/最小元素
    // 改
    replace(e: T): T; // 弹出并返回 heap 中最大/最小的元素，同时推入新的元素
}