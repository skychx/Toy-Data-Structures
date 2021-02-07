/*
 * @Author: skychx
 * @Date: 2021-02-04 20:39:39
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-07 15:25:01
 * @FilePath: /Toy-Data-Structures/04-Queue/ToyQueue.d.ts
 */
export interface ToyQueue<T> {
    getSize(): number;
    isEmpty(): boolean;

    // 增
    enqueue(e: T): void; // 入队
    // 删
    dequeue(): T | null; // 出队
    // 查
    getFront(): T | null;
}