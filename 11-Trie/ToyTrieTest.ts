/*
 * @Author: skychx
 * @Date: 2021-02-16 16:53:50
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-16 17:32:11
 * @FilePath: /Toy-Data-Structures/11-Trie/ToyTrieText.ts
 */
import fs from 'fs';
import path from 'path';

import { ToyTrie } from './ToyTrie';

let jsSet = new Set();
let trie = new ToyTrie();

const pap = fs.readFileSync(path.join(__dirname, '../static/pride-and-prejudice.txt'));
const papList = pap.toString().split(/\s+/);

console.log(`\n总数据量：${papList.length}\n`);

// 类型：JS Set
// 耗时：11.588ms
// 统计：getSize(): 13639
console.time('jsSet time');
for (let i = 0; i < papList.length; i++) {
    jsSet.add(papList[i]);
}
console.timeEnd('jsSet time');
console.log(`jsSet getSize(): ${jsSet.size}\n`);


// 类型：ToyTrie
// 耗时：56.043ms
// 统计：getSize(): 13639
console.time('ToyTrie time');
for (let i = 0; i < papList.length; i++) {
    trie.add(papList[i]);
}
console.timeEnd('ToyTrie time');
console.log(`ToyTrie getSize(): ${trie.getSize()}\n`);