/*
 * @Author: skychx
 * @Date: 2021-02-07 17:53:15
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-08 14:47:04
 * @FilePath: /Toy-Data-Structures/06-Set/ToySetTest.ts
 */
import fs from 'fs';
import path from 'path';

import { BSTSet } from './BSTSet';
import { LinkedListSet } from './LinkedListSet';

// 从耗时上看，
// jsSet * 10 = BSTSet
// BSTSet * 100 = LinkedListSet

let jsSet = new Set();
let test = new BSTSet<string>();
let test2 = new LinkedListSet<string>();

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
// 耗时：100.088ms
// 统计：getSize(): 13639
console.time('BSTSet time');
for (let i = 0; i < papList.length; i++) {
    test.add(papList[i]);
}
console.timeEnd('BSTSet time');
console.log(`BSTSet getSize(): ${test.getSize()}\n`);

// 类型：LinkedListSet
// 耗时：9.613s
// 统计：getSize(): 13639
console.time('LinkedListSet time');
for (let i = 0; i < papList.length; i++) {
    test2.add(papList[i]);
}
console.timeEnd('LinkedListSet time');
console.log(`LinkedListSet getSize(): ${test2.getSize()}\n`);
