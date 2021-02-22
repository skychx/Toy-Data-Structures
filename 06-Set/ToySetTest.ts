/*
 * @Author: skychx
 * @Date: 2021-02-07 17:53:15
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-22 20:50:38
 * @FilePath: /Toy-Data-Structures/06-Set/ToySetTest.ts
 */
import fs from 'fs';
import path from 'path';

import { BSTSet } from './BSTSet';
import { AVLSet } from './AVLSet';
import { LinkedListSet } from './LinkedListSet';
import { ArraySet } from './ArraySet';

// 从耗时上看，
// jsSet * 10 = BSTSet
// BSTSet * 100 = LinkedListSet
// ArraySet 比较奇葩，应该是 V8 内部对 Array 有深度优化

let jsSet = new Set();
let test = new BSTSet<string>();
let avlSet = new AVLSet<string>();
let test2 = new LinkedListSet<string>();
let test3 = new ArraySet<string>();

const pap = fs.readFileSync(path.join(__dirname, '../static/pride-and-prejudice.txt'));
const papList = pap.toString().split(/\s+/);

console.log(`\n总数据量：${papList.length}\n`);

// 类型：JS Set
// 耗时：10.744ms
// 统计：getSize(): 13639
console.time('jsSet time');
for (let i = 0; i < papList.length; i++) {
    jsSet.add(papList[i]);
}
console.timeEnd('jsSet time');
console.log(`jsSet getSize(): ${jsSet.size}\n`);

// 类型：BSTSet
// 耗时：88.978ms
// 统计：getSize(): 13639
console.time('BSTSet time');
for (let i = 0; i < papList.length; i++) {
    test.add(papList[i]);
}
console.timeEnd('BSTSet time');
console.log(`BSTSet getSize(): ${test.getSize()}\n`);

// 类型：AVLSet
// 耗时：97.737ms
// 统计：getSize(): 13639
console.time('AVLSet time');
for (let i = 0; i < papList.length; i++) {
    avlSet.add(papList[i]);
}
console.timeEnd('AVLSet time');
console.log(`AVLSet getSize(): ${avlSet.getSize()}\n`);

// 类型：LinkedListSet
// 耗时：8.086s
// 统计：getSize(): 13639
console.time('LinkedListSet time');
for (let i = 0; i < papList.length; i++) {
    test2.add(papList[i]);
}
console.timeEnd('LinkedListSet time');
console.log(`LinkedListSet getSize(): ${test2.getSize()}\n`);

// 类型：ArraySet
// 耗时：2.411s
// 统计：getSize(): 13639
console.time('ArraySet time');
for (let i = 0; i < papList.length; i++) {
    test3.add(papList[i]);
}
console.timeEnd('ArraySet time');
console.log(`ArraySet getSize(): ${test3.getSize()}\n`);
