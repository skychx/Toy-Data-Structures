/*
 * @Author: skychx
 * @Date: 2021-02-07 17:53:23
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-21 22:18:39
 * @FilePath: /Toy-Data-Structures/13-AVLTree/ToyAVLTreeTest.ts
 */
import fs from 'fs';
import path from 'path';

import { BSTMap } from '../07-Map/BSTMap';
import { ToyAVLTree } from './ToyAVLTree';

let test0 = new BSTMap<string, number>();
let test1 = new ToyAVLTree<string, number>();

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
console.log(`ToyAVLTree size: ${test1.getSize()}`);
console.log(`ToyAVLTree isBST: ${test1.isBST()}`);
console.log(`ToyAVLTree isBalanced: ${test1.isBalanced()}\n`);

for (let i = 0; i < papList.length; i++) {
    test1.delete(papList[i]);
    if (!test1.isBalanced()) {
        console.warn('ToyAVLTree delete test error');
    }
}
console.log('ToyAVLTree delete test end');

