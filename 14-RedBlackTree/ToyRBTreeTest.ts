/*
 * @Author: skychx
 * @Date: 2021-02-07 17:53:23
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-27 18:01:08
 * @FilePath: /Toy-Data-Structures/14-RedBlackTree/ToyRBTreeTest.ts
 */
import fs from 'fs';
import path from 'path';

import { BSTMap } from '../07-Map/BSTMap';
import { ToyAVLTree } from '../13-AVLTree/ToyAVLTree';
import { ToyRBTree } from './ToyRBTree';

let test0 = new BSTMap<string, number>();
let test1 = new ToyAVLTree<string, number>();
let rbTree = new ToyRBTree<string, number>();

const pap = fs.readFileSync(path.join(__dirname, '../static/pride-and-prejudice.txt'));
const papList = pap.toString().split(/\s+/);

// papList.sort();

console.log(`\n总数据量：${papList.length}\n`);


// 类型：BSTMap
// 耗时：265.859ms
// 测试数据 sort 后耗时：Maximum call stack size exceeded
console.time('BSTMap time');
for (let i = 0; i < papList.length; i++) {
    test0.add(papList[i], (test0.get(papList[i]) ?? 0) + 1);
}
for (let i = 0; i < papList.length; i++) {
    test0.has(papList[i]);
}
console.timeEnd('BSTMap time');
console.log(`BSTMap pride number: ${test0.get('pride')}`);
console.log(`BSTMap prejudice number: ${test0.get('prejudice')}`);
console.log(`BSTMap getSize(): ${test0.getSize()}\n`);

// 类型：ToyAVLTree
// 耗时：244.497ms
// 测试数据 sort 后耗时：297.526ms
console.time('ToyAVLTree time');
for (let i = 0; i < papList.length; i++) {
    test1.add(papList[i], (test1.get(papList[i]) ?? 0) + 1);
}
for (let i = 0; i < papList.length; i++) {
    test1.has(papList[i]);
}
console.timeEnd('ToyAVLTree time');
console.log(`ToyAVLTree pride number: ${test1.get('pride')}`);
console.log(`ToyAVLTree prejudice number: ${test1.get('prejudice')}`);
console.log(`ToyAVLTree size: ${test1.getSize()}\n`);

// 类型：ToyRBTree
// 耗时：251.023ms
// 测试数据 sort 后耗时：297.526ms
console.time('ToyRBTree time');
for (let i = 0; i < papList.length; i++) {
    rbTree.add(papList[i], (rbTree.get(papList[i]) ?? 0) + 1);
}
for (let i = 0; i < papList.length; i++) {
    rbTree.has(papList[i]);
}
console.timeEnd('ToyRBTree time');
console.log(`ToyRBTree pride number: ${rbTree.get('pride')}`);
console.log(`ToyRBTree prejudice number: ${rbTree.get('prejudice')}`);
console.log(`ToyRBTree size: ${rbTree.getSize()}`);

