/*
 * @Author: skychx
 * @Date: 2021-06-16 23:00:51
 * @LastEditors: skychx
 * @LastEditTime: 2021-06-16 23:07:26
 * @FilePath: /Toy-Data-Structures/16.Cache/LRU/LinkedListMapLRU.ts
 */
import { DLNode, ToyDoubleLinkedList } from '../../02-LinkedList/ToyDoubleLinkedList';

// https://leetcode-cn.com/problems/lru-cache/
export class LinkedListMapLRU {
    cache: ToyDoubleLinkedList<number[]>;
    map;
    capacity;
    constructor(capacity: number) {
        this.cache = new ToyDoubleLinkedList<number[]>();
        this.map = new Map<number, DLNode<number[]>>();
        this.capacity = capacity;
    }

    get(key: number): number {
        if (this.map.has(key)) {
            this.makeRecently(key);

            return this.map.get(key)!.e![1];
        }

        return -1;
    }

    put(key: number, value: number): void {
        if (this.map.has(key)) {
            // 删除再添加
            this.deleteKey(key);
            this.addRecently(key, value);

            // 直接提升并改值
            // this.makeRecently(key);
            // this.map.get(key).e[1] = value;

            return;
        }

        if (this.cache.getSize() === this.capacity) {
            this.removeLeastRecently();
        }

        this.addRecently(key, value);
    }

    // 将某个 key 提升为最近使用的
    private makeRecently(key: number): void {
        const node = this.map.get(key) as DLNode<number[]>;

        // 先从链表中删除这个节点
        this.cache.removeNode(node);
        // 重新插到队尾
        this.cache.addLast(node);
    }

    // 添加最近使用的元素
    private addRecently(key: number, value: number): void {
        const node = new DLNode([key, value]);

        // 链表尾部就是最近使用的元素
        this.cache.addLast(node);
        // 在 map 中添加 key 的映射
        this.map.set(key, node);
    }

    // 删除某一个 key 对应的 node
    private deleteKey(key: number): void {
        const node = this.map.get(key) as DLNode<number[]>;

        this.cache.removeNode(node);
        this.map.delete(key);
    }

    // 删除最久未使用的元素
    private removeLeastRecently() {
        const node = this.cache.removeFirst() as DLNode<number[]>;

        this.map.delete(node.e![0]);
    }
}