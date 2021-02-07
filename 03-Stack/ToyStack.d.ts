/*
 * @Author: skychx
 * @Date: 2021-02-04 17:04:29
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-07 15:25:16
 * @FilePath: /Toy-Data-Structures/03-Stack/ToyStack.d.ts
 */
export interface ToyStack<T> {
    getSize(): number;
    isEmpty(): boolean;

    // 增
    push(e: T): void;
    // 删
    pop(): T | null;
    // 查
    peek(): T | null;
}