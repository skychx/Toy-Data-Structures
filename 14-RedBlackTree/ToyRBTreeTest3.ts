/*
 * @Author: skychx
 * @Date: 2021-02-07 17:53:23
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-27 18:17:23
 * @FilePath: /Toy-Data-Structures/14-RedBlackTree/ToyRBTreeTest3.ts
 */
import { ToyAVLTree } from '../13-AVLTree/ToyAVLTree';
import { ToyRBTree } from './ToyRBTree';

let avl = new ToyAVLTree<number, null>();
let rbt = new ToyRBTree<number, null>();

// 测试用例
const N = 20000000;
const list: number[] = [];

for (let i = 0; i < N; i++) {
    list.push(i);
}

// 本案例只计算有序数据 add 操作
// 动态语言的时间复杂度是真的不靠谱啊。。。

// 类型：ToyAVLTree
// 耗时：7.793s
console.time('ToyAVLTree time');
for (let i = 0; i < list.length; i++) {
    avl.add(list[i], null);
}
console.timeEnd('ToyAVLTree time');

// 类型：ToyRBTree
// 耗时：9.122s
console.time('ToyRBTree time');
for (let i = 0; i < list.length; i++) {
    rbt.add(list[i], null);
}
console.timeEnd('ToyRBTree time');

