/*
 * @Author: skychx
 * @Date: 2021-06-16 23:08:20
 * @LastEditors: skychx
 * @LastEditTime: 2021-06-16 23:17:25
 * @FilePath: /Toy-Data-Structures/16.Cache/LRU/LRUTest.ts
 */
import { ArrayMapLRU } from './ArrayMapLRU';
import { LinkedListMapLRU } from './LinkedListMapLRU';

let test0 = new ArrayMapLRU(2);
test0.put(1, 1);
test0.put(2, 2);
console.log('ArrayMapLRU get', test0.get(1)); //  1
test0.put(3, 3);
console.log('ArrayMapLRU get', test0.get(2)); // -1
test0.put(4, 4);
console.log('ArrayMapLRU get', test0.get(1)); // -1
console.log('ArrayMapLRU get', test0.get(3)); //  3
console.log('ArrayMapLRU get', test0.get(4)); //  4


let test1 = new LinkedListMapLRU(2);
test1.put(1, 1);
test1.put(2, 2);
console.log('LinkedListMapLRU get', test1.get(1)); //  1
test1.put(3, 3);
console.log('LinkedListMapLRU get', test1.get(2)); // -1
test1.put(4, 4);
console.log('LinkedListMapLRU get', test1.get(1)); // -1
console.log('LinkedListMapLRU get', test1.get(3)); //  3
console.log('LinkedListMapLRU get', test1.get(4)); //  4
