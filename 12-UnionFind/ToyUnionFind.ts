/*
 * @Author: skychx
 * @Date: 2021-02-16 20:40:04
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-16 20:42:43
 * @FilePath: /Toy-Data-Structures/12-UnionFind/ToyUnionFind.ts
 */
export interface ToyUnionFind {
    getSize(): number;

    // 并
    unionElements(p: number, q: number): void;
    // 查
    isConnected(p: number, q: number): boolean;
}