/*
 * @Author: skychx
 * @Date: 2021-02-07 17:53:23
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-08 14:45:56
 * @FilePath: /Toy-Data-Structures/07-Map/ToyMapTest.ts
 */
import fs from 'fs';
import path from 'path';

import { BSTMap } from './BSTMap';
import { LinkedListMap } from './LinkedListMap';

// 从耗时上看，
// jsMap * 10 = BSTMap
// BSTMap * 100 = LinkedListMap

let jsMap = new Map();
let test0 = new BSTMap<string, number>();
let test1 = new LinkedListMap<string, number>();

const pap = fs.readFileSync(path.join(__dirname, '../static/pride-and-prejudice.txt'));
const papList = pap.toString().split(/\s+/);


console.log(`\n总数据量：${papList.length}\n`);

// 类型：JS Map
// 耗时：16.683ms
// 统计：23 4 13639
console.time('jsMap time');
for (let i = 0; i < papList.length; i++) {
    jsMap.set(papList[i], (jsMap.get(papList[i]) ?? 0) + 1);
}
console.timeEnd('jsMap time');
console.log(`jsMap pride number: ${jsMap.get('pride')}`);
console.log(`jsMap prejudice number: ${jsMap.get('prejudice')}`);
console.log(`jsMap getSize(): ${jsMap.size}\n`);

// 类型：BSTMap
// 耗时：178.416ms
// 统计：23 4 13639
console.time('BSTMap time');
for (let i = 0; i < papList.length; i++) {
    test0.add(papList[i], (test0.get(papList[i]) ?? 0) + 1);
}
console.timeEnd('BSTMap time');
console.log(`BSTMap pride number: ${test0.get('pride')}`);
console.log(`BSTMap prejudice number: ${test0.get('prejudice')}`);
console.log(`BSTMap getSize(): ${test0.getSize()}\n`);

// 类型：LinkedListMap
// 耗时：15.719s
// 统计：23 4 13639
console.time('LinkedListMap time');
for (let i = 0; i < papList.length; i++) {
    test1.add(papList[i], (test1.get(papList[i]) ?? 0) + 1);
}
console.timeEnd('LinkedListMap time');
console.log(`LinkedListMap pride number: ${test1.get('pride')}`);
console.log(`LinkedListMap prejudice number: ${test1.get('prejudice')}`);
console.log(`LinkedListMap getSize(): ${test1.getSize()}\n`);

