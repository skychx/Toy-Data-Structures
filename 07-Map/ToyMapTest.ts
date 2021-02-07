/*
 * @Author: skychx
 * @Date: 2021-02-07 17:53:23
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-07 22:44:37
 * @FilePath: /Toy-Data-Structures/07-Map/ToyMapTest.ts
 */
import fs from 'fs';
import path from 'path';

// import { BSTMap } from './BSTMap';
import { LinkedListMap } from './LinkedListMap';

let jsMap = new Map();
let test = new LinkedListMap<string, number>();
// let test2 = new LinkedListSet<string>();

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

// 类型：LinkedListMap
// 耗时：15.719s
// 统计：23 4 13639
console.time('LinkedListMap time');
for (let i = 0; i < papList.length; i++) {
    test.add(papList[i], (test.get(papList[i]) ?? 0) + 1);
}
console.timeEnd('LinkedListMap time');
console.log(`LinkedListMap pride number: ${test.get('pride')}`);
console.log(`LinkedListMap prejudice number: ${test.get('prejudice')}`);
console.log(`LinkedListMap getSize(): ${test.getSize()}\n`);

