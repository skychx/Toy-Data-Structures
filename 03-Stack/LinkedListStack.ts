/*
 * @Author: skychx
 * @Date: 2021-02-04 17:05:11
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-04 18:19:38
 * @FilePath: /Toy-Data-Structures/03-Stack/LinkedListStack.ts
 */
import { ToyStack } from './ToyStack';
import { ToyLinkedList } from '../02-LinkedList/ToyLinkedList';

export class LinkedListStack<T> implements ToyStack<T> {
    private list: ToyLinkedList<T> | null;

    constructor() {
        this.list = new ToyLinkedList<T>();
    }

    getSize(): number {
        return this.list!.getSize();
    };

    isEmpty(): boolean {
        return this.list!.isEmpty();
    };

    push(e: T): void {
        this.list!.addFirst(e);
    };

    pop(): T | null {
        return this.list!.removeFirst();
    };

    peek(): T | null {
        return this.list!.getFirst();
    };

    toString(): string {
        let res: string = '\nLinkedListStack: top -> ';
        for (let i = 0; i < this.getSize(); i++) {
            res += `${this.list!.get(i)}`;
            if (i !== this.getSize() - 1) {
                res += ' -> ';
            }
        }
        res += '\n';
        return res;
    }
}
