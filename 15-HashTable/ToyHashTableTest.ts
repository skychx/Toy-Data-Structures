/*
 * @Author: skychx
 * @Date: 2021-02-27 19:07:34
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-27 20:12:08
 * @FilePath: /Toy-Data-Structures/15-HashTable/ToyHashTableTest.ts
 */
import fs from 'fs';
import path from 'path';

import { ToyHashTable } from './ToyHashTable';

const pap = fs.readFileSync(path.join(__dirname, '../static/pride-and-prejudice.txt'));
const papList = pap.toString().split(/\s+/);

let hashTable = new ToyHashTable<string, number>(24593);

// 类型：HashTable
// 耗时：12289 31.973ms
//      24593 35.593ms（初始化的对象多了也会耗时耗内存）
//      6151  36.377ms
//      97    39.752ms
//      53    39.271ms
console.time('HashTable time');
for (let i = 0; i < papList.length; i++) {
    hashTable.add(papList[i], (hashTable.get(papList[i]) ?? 0) + 1);
}
for (let i = 0; i < papList.length; i++) {
    hashTable.has(papList[i]);
}
console.timeEnd('HashTable time');
console.log(`HashTable pride number: ${hashTable.get('pride')}`);
console.log(`HashTable prejudice number: ${hashTable.get('prejudice')}`);
console.log(`HashTable getSize(): ${hashTable.getSize()}\n`);