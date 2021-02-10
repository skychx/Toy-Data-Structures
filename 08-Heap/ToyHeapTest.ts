/*
 * @Author: skychx
 * @Date: 2021-02-09 20:20:41
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-10 17:48:35
 * @FilePath: /Toy-Data-Structures/08-Heap/ToyHeapTest.ts
 */
import { ToyMaxHeap } from './ToyMaxHeap';


function testHeapify(testData: number[], isHeapify: boolean): void {
    console.time('ToyMaxHeap isHeapify ' + isHeapify);

    let maxHeap: ToyMaxHeap<number>;

    if (isHeapify) {
        maxHeap = new ToyMaxHeap<number>(testData);
    } else {
        maxHeap = new ToyMaxHeap<number>(testData.length);
        for (let i = 0; i < testData.length; i++) {
            maxHeap.push(testData[i]);
        }
    }

    console.timeEnd('ToyMaxHeap isHeapify ' + isHeapify);

    let arr = [];
    for (let i = 0; i < testData.length; i++) {
        arr.push(maxHeap.pop());
    }

    for (let i = 0; i < testData.length; i++) {
        if (arr[i - 1] < arr[i]) {
            throw new Error('Error');
        }
    }
    console.log('Test MaxHeap completed.');
}



// add 耗时：43.03ms
// extractMax 耗时：270.446ms
let n = 1000000;
let arr1 = [];
let arr2 = [];

for (let i = 0; i < arr1.length; i++) {
    arr1.push(Math.random());
}
arr2 = [...arr1];
testHeapify(arr1, true);  // 0.145ms
testHeapify(arr2, false); // 0.006ms

