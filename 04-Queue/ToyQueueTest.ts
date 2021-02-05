/*
 * @Author: skychx
 * @Date: 2021-02-04 21:13:53
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-05 20:56:02
 * @FilePath: /Toy-Data-Structures/04-Queue/ToyQueueTest.ts
 */
import { ArrayQueue } from './ArrayQueue';
import { LoopQueue } from './LoopQueue';
import { LinkedListQueue } from './LinkedListQueue';

let test1 = new ArrayQueue<number>();
for (let i = 0; i < 10; i++) {
    test1.enqueue(i);
    console.log(`测试代码：${test1}`);

    if (i % 3 === 2) {
        test1.dequeue();
        console.log(`测试代码：${test1}`);
    }
}

console.log('-----------------------------');

let test2 = new LoopQueue<number>();
for (let i = 0; i < 10 ; i++) {
    test2.enqueue(i);
    console.log(`测试代码：${test2}`);

    if (i % 3 === 2) {
        test2.dequeue();
        console.log(`测试代码：${test2}`);
    }
}

console.log('-----------------------------');

let test3 = new LinkedListQueue<number>();
for (let i = 0; i < 10; i++) {
    test3.enqueue(i);
    console.log(`测试代码：${test3}`);

    if (i % 3 === 2) {
        test3.dequeue();
        console.log(`测试代码：${test3}`);
    }
}
