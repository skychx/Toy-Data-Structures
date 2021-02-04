/*
 * @Author: skychx
 * @Date: 2021-02-04 17:04:29
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-04 17:54:47
 * @FilePath: /Toy-Data-Structures/03-Stack/ToyStack.d.ts
 */
export interface ToyStack<T> {
    getSize(): number;
    isEmpty(): boolean;

    push(e: T): void;
    pop(): T | null;
    peek(): T | null;
}