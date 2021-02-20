/*
 * @Author: skychx
 * @Date: 2021-02-07 17:53:23
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-20 22:39:01
 * @FilePath: /Toy-Data-Structures/13-AVLTree/ToyAVLTreeTest.ts
 */
import fs from 'fs';
import path from 'path';

import { ToyAVLTree } from './ToyAVLTree';

let test0 = new ToyAVLTree<string, number>();

const pap = fs.readFileSync(path.join(__dirname, '../static/pride-and-prejudice.txt'));
const papList = pap.toString().split(/\s+/);


console.log(`\n总数据量：${papList.length}\n`);

// 类型：BSTMap
// 耗时：178.416ms
// 统计：23 4 13639
console.time('ToyAVLTree time');
for (let i = 0; i < papList.length; i++) {
    test0.add(papList[i], (test0.get(papList[i]) ?? 0) + 1);
}
console.timeEnd('ToyAVLTree time');
console.log(`ToyAVLTree pride number: ${test0.get('pride')}`);
console.log(`ToyAVLTree prejudice number: ${test0.get('prejudice')}`);
console.log(`ToyAVLTree size: ${test0.getSize()}`);
console.log(`ToyAVLTree isBST: ${test0.isBST()}`);
console.log(`ToyAVLTree isBalanced: ${test0.isBalanced()}\n`);

