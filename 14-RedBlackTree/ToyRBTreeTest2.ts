/*
 * @Author: skychx
 * @Date: 2021-02-07 17:53:23
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-27 18:16:26
 * @FilePath: /Toy-Data-Structures/14-RedBlackTree/ToyRBTreeTest2.ts
 */
import { BSTMap } from '../07-Map/BSTMap';
import { ToyAVLTree } from '../13-AVLTree/ToyAVLTree';
import { ToyRBTree } from './ToyRBTree';

let bst = new BSTMap<number, null>();
let avl = new ToyAVLTree<number, null>();
let rbt = new ToyRBTree<number, null>();

// 测试用例
const N = 20000000;
const list: number[] = [];

for (let i = 0; i < N; i++) {
    list.push(Math.random());
}

// 本案例只计算 add 操作，可以看出对于随机数据 AVL 和 RedBlackTree 并不占优势

// 类型：BSTMap
// 耗时：265.859ms
console.time('BSTMap time');
for (let i = 0; i < list.length; i++) {
    bst.add(list[i], null);
}
console.timeEnd('BSTMap time');
console.log(`BSTMap getSize(): ${bst.getSize()}\n`);

// 类型：ToyAVLTree
// 耗时：1:10.930 (m:ss.mmm)
console.time('ToyAVLTree time');
for (let i = 0; i < list.length; i++) {
    avl.add(list[i], null);
}
console.timeEnd('ToyAVLTree time');
console.log(`ToyAVLTree size: ${avl.getSize()}\n`);

// 类型：ToyRBTree
// 耗时：1:18.770 (m:ss.mmm)
console.time('ToyRBTree time');
for (let i = 0; i < list.length; i++) {
    rbt.add(list[i], null);
}
console.timeEnd('ToyRBTree time');
console.log(`ToyRBTree size: ${rbt.getSize()}`);

