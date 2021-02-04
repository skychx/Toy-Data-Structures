/*
 * @Author: skychx
 * @Date: 2021-02-04 18:10:10
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-04 18:12:51
 * @FilePath: /Toy-Data-Structures/01-Array/ToyArrayTest.ts
 */
import { ToyArray } from './ToyArray';

// 测试代码
let test = new ToyArray<number>(5);
test.push(1);
test.push(2);
test.push(3);
test.push(4);
test.push(5);
console.log(`测试代码：${test}`);

// 扩容测试
test.add(1, 6);
console.log(`扩容测试：${test}`);

// 测试复杂度振荡
test.remove(2);
console.log(`测试复杂度振荡：${test}`);

// 缩容测试
test.pop();
test.pop();
test.pop();
console.log(`缩容测试：${test}`);

let test2 = new ToyArray<object>(5);
test2.push({ a: 1 });
test2.push({ b: 2 });
console.log('indexOf 测试：', test2.indexOf({ b: 2 }));

console.log(`对象 isEqual 测试：${test2}`);