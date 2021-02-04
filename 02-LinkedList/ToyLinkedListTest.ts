/*
 * @Author: skychx
 * @Date: 2021-02-04 18:10:25
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-04 18:13:38
 * @FilePath: /Toy-Data-Structures/02-LinkedList/ToyLinkedListTest.ts
 */
import { ToyLinkedList } from './ToyLinkedList';

let test = new ToyLinkedList<number>();
test.addFirst(1);
test.addFirst(0);
test.addLast(2);
test.addLast(3);

console.log(`\n链表测试：${test}`);
console.log(`get 测试：${test.get(1)}、${test.getFirst()}、${test.getLast()}`);

test.set(3, 4);
console.log(`\n链表测试：${test}`);
console.log(`contains 测试：${test.contains(4)}`);

test.removeFirst();
test.remove(1);
test.removeLast();
console.log(`\nremove 测试：${test}`);