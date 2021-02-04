/*
 * @Author: skychx
 * @Date: 2021-02-04 18:10:33
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-04 18:16:06
 * @FilePath: /Toy-Data-Structures/03-Stack/ToyStackTest.ts
 */
import { ArrayStack } from './ArrayStack';
import { LinkedListStack } from './LinkedListStack';

let test = new ArrayStack<number>(5);
test.push(1);
test.push(2);
test.push(3);
console.log(`测试代码：${test}`);

test.pop();
console.log(`peek 测试：${test.peek()}`);
console.log(`测试代码：${test}`);


let test2 = new LinkedListStack<number>();
test2.push(1);
test2.push(2);
test2.push(3);
console.log(`测试代码：${test2}`);

test2.pop();
console.log(`peek 测试：${test2.peek()}`);
console.log(`测试代码：${test2}`);