/*
 * @Author: skychx
 * @Date: 2021-02-04 18:10:25
 * @LastEditors: skychx
 * @LastEditTime: 2021-06-16 22:54:43
 * @FilePath: /Toy-Data-Structures/02-LinkedList/ToyLinkedListTest.ts
 */
import { ToyLinkedList } from './ToyLinkedList';
import { DLNode, ToyDoubleLinkedList } from './ToyDoubleLinkedList';


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

let test2 = new ToyDoubleLinkedList<number[]>();
test2.addFirst(new DLNode([1, 1]));
test2.addLast(new DLNode([2, 2]));
test2.addLast(new DLNode([3, 3]));
test2.addFirst(new DLNode([0, 0]));

console.log(`\n双向链表测试：${test2}`); // ↼ null ⇌ 0,0 ⇌ 1,1 ⇌ 2,2 ⇌ 3,3 ⇌ null ⇀

test2.removeFirst();
test2.removeLast();
console.log(`\n双向链表 remove 测试：${test2}`); // ↼ null ⇌ 1,1 ⇌ 2,2 ⇌ null ⇀

console.log(`\n双向链表 contains 测试：${test2.contains([1, 1])}`);
