/*
 * @Author: skychx
 * @Date: 2021-02-04 20:39:39
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-04 21:10:36
 * @FilePath: /Toy-Data-Structures/04-Queue/ToyQueue.d.ts
 */
export interface ToyQueue<T> {
    getSize(): number;
    isEmpty(): boolean;

    enqueue(e: T): void; // 入队
    dequeue(): T | null; // 出队
    getFront(): T | null;
}