/*
 * @Author: skychx
 * @Date: 2021-02-04 17:04:55
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-04 18:14:28
 * @FilePath: /Toy-Data-Structures/03-Stack/ArrayStack.ts
 */
import { ToyStack } from './ToyStack';
import { ToyArray } from '../01-Array/ToyArray';

export class ArrayStack<T> implements ToyStack<T> {
    private array: ToyArray<T>;

    constructor(capacity: number = 10) {
        this.array = new ToyArray<T>(capacity);
    }

    getSize(): number {
        return this.array.getSize();
    };

    isEmpty(): boolean {
        return this.array.isEmpty();
    };

    push(e: T): void {
        this.array.push(e);
    };

    pop(): T {
        return this.array.pop();
    };

    peek(): T {
        return this.array.getLast();
    };

    toString(): string {
        let res: string = '\nArrayStack: [';
        for (let i = 0; i < this.getSize(); i++) {
            res += `${this.array.get(i)}`;
            if (i !== this.getSize() - 1) {
                res += ', ';
            }
        }
        res += '] top\n';
        return res;
    }
}
