/*
 * @Author: skychx
 * @Date: 2021-02-16 12:02:26
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-16 15:38:00
 * @FilePath: /Toy-Data-Structures/10-SegmentTree/ToySegmentTreeTest.ts
 */
import { ToySegmentTree } from './ToySegmentTree';

const test = new ToySegmentTree<number>([-2, 0, 3, -5, 2, -1], (a, b) => a + b);

console.log(`ToySegmentTree Test: \n${test}`);
// ToySegmentTree Test: 由此可见有大量的空间被浪费
// [-3, 1, -4, -2, 3, -3, -1, -2, 0, null, null, -5, 2, null, null, null, null, null, null, null, null, null, null, null]

console.log(test.query(0, 2)); // 1
console.log(test.query(3, 4)); // -3
console.log(test.query(2, 4)); // 0
console.log(test.query(2, 5)); // -1
console.log(test.query(0, 5)); // -3

test.set(0, 0);
console.log(`ToySegmentTree Test: \n${test}`);
// ToySegmentTree Test:
// [-1, 3, -4, 0, 3, -3, -1, 0, 0, null, null, -5, 2, null, null, null, null, null, null, null, null, null, null, null]

test.set(2, 2);
console.log(`ToySegmentTree Test: \n${test}`);
// ToySegmentTree Test:
// [-2, 2, -4, 0, 2, -3, -1, 0, 0, null, null, -5, 2, null, null, null, null, null, null, null, null, null, null, null]