/*
 * @Author: skychx
 * @Date: 2021-02-06 18:00:14
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-06 21:46:10
 * @FilePath: /Toy-Data-Structures/05-BinarySearchTree/ToyBSTTest.ts
 */
import { ToyBST } from './ToyBST';

let test = new ToyBST<number>();

test.add(5);
test.add(3);
test.add(6);
test.add(8);
test.add(4);
test.add(2);

console.log(`\nBST 结构：\n${test}`);

// console.log('\n前序遍历');
// test.preOrder();
// console.log('\n');
// test.preOrderNR();

// console.log('\n中序遍历');
// test.inOrder();

// console.log('\n后序遍历');
// test.postOrder();

// console.log('\n层序遍历');
// test.levelOrder();

console.log('\n最大元素：', test.maximum());
console.log('\n最小元素：', test.minimum());
test.removeMin();
console.log(`\nBST 结构：\n${test}`);
test.removeMin();
console.log(`\nBST 结构：\n${test}`);
