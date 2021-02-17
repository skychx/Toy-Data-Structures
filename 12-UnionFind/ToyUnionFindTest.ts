/*
 * @Author: skychx
 * @Date: 2021-02-16 18:56:14
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-17 14:35:22
 * @FilePath: /Toy-Data-Structures/12-UnionFind/ToyUnionFindTest.ts
 */
import { ToyUnionFind } from './ToyUnionFind';
import { QuickFindUF } from './QuickFindUF';
import { QuickUnionUF } from './QuickUnionUF';
import { UnionBySizeUF } from './UnionBySizeUF';
import { UnionByHeightUF } from './UnionByHeightUF';
import { PathCompressionUF } from './PathCompressionUF';
import { PathCompressionUF2 } from './PathCompressionUF2';

function testUF(uf: ToyUnionFind, m: number, name: string) {
    const size = uf.getSize();

    console.time(`${name} Union time`);
    for (let i = 0; i < m; i++) {
        const a = Math.floor(Math.random() * size);
        const b = Math.floor(Math.random() * size);
        uf.unionElements(a, b);
    }
    console.timeEnd(`${name} Union time`);

    console.time(`${name} Find time`);
    for (let i = 0; i < m; i++) {
        const a = Math.floor(Math.random() * size);
        const b = Math.floor(Math.random() * size);
        uf.isConnected(a, b);
    }
    console.timeEnd(`${name} Find time`);
}

const size = 10000000;
const m    = 10000000;

// size = 100000;
// m    = 100000;
// Union time: 12.517s
// Find time: 8.954ms
// const uf1 = new QuickFindUF(size);
// testUF(uf1, m, 'QuickFindUF');

// size = 100000;
// m    = 100000;
// Union time: 1.890s
// Find time: 10.010s
// const uf2 = new QuickUnionUF(size);
// testUF(uf2, m, 'QuickUnionUF');

// size = 10000000;
// m    = 10000000;
// Union time: 2.973s
// Find time:  2.875s
const uf3 = new UnionBySizeUF(size);
testUF(uf3, m, 'UnionBySizeUF');

// size = 10000000;
// m    = 10000000;
// Union time: 3.018s
// Find time:  3.178s
const uf4 = new UnionByHeightUF(size);
testUF(uf4, m, 'UnionByHeightUF');

// size = 10000000;
// m    = 10000000;
// Union time: 2.837s
// Find time:  1.786s
const uf5 = new PathCompressionUF(size);
testUF(uf5, m, 'PathCompressionUF');

// size = 10000000;
// m    = 10000000;
// Union time: 3.463s
// Find time:  2.052s
// PathCompressionUF2 内部使用了递归，相对来说会比 PathCompressionUF 的循环慢一点儿
const uf6 = new PathCompressionUF2(size);
testUF(uf6, m, 'PathCompressionUF2');

