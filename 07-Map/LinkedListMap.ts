/*
 * @Author: skychx
 * @Date: 2021-02-07 21:13:09
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-07 22:38:28
 * @FilePath: /Toy-Data-Structures/07-Map/LinkedListMap.ts
 */
import { isEqual } from 'lodash';
import { ToyMap } from './ToyMap';

// 链表单节点
export class LinkedNode<K, V> {
    key: K | null;
    value: V | null;
    next: LinkedNode<K, V> | null;

    constructor(key?: K, value?: V, next?: LinkedNode<K, V> | null) {
        this.key = key ?? null;
        this.value = value ?? null;
        this.next = next ?? null;
    }

    toString(): string {
        return ('{ ' + String(this.key) + ': ' + String(this.value) + ' }');
    }
}

// 基于链表实现的 Map
export class LinkedListMap<K, V> implements ToyMap<K, V> {
    private dummyHead: LinkedNode<K, V>;
    private size: number;

    constructor() {
        // dummyHead：虚拟头节点
        this.dummyHead = new LinkedNode();
        this.size = 0;
    }

    getSize(): number {
        return this.size;
    }

    isEmpty(): boolean {
        return this.size === 0;
    }

    // 根据 key 返回 LinkedNode
    private getNode(key: K): LinkedNode<K, V> | null {
        let cur = this.dummyHead.next;
        while (cur !== null) {
            if (isEqual(cur!.key, key)) {
                return cur;
            }
            cur = cur!.next;
        }
        return null;
    }

    /** 增 **/

    // 在链表的index(0-based)位置添加新的元素 e
    // 在链表中不是一个常用的操作
    add(key: K, value: V): void {
        let node = this.getNode(key);
        if(node === null) {
            this.dummyHead.next = new LinkedNode<K, V>(key, value, this.dummyHead.next);
            this.size++;
        } else {
            node.value = value;
        }
    }

    /** 删 **/

    delete(key: K): V | null {
        let prev = this.dummyHead;

        while (prev!.next !== null) {
            if (isEqual(prev!.next.key, key)) {
                break;
            }
            prev = prev!.next;
        }

        if (prev!.next !== null) {
            let delNode = prev!.next;
            prev!.next = delNode.next;
            delNode.next = null;
            this.size--;
            return delNode.value;
        }

        return null;
    }

    /** 查 **/

    get(key: K): V | null {
        let node = this.getNode(key);
        return node === null ? null : node.value;
    }

    has(key: K): boolean {
        return this.getNode(key) === null;
    }

    /** 改 **/

    set(key: K, newValue: V): void {
        let node = this.getNode(key);

        if(node === null) {
            throw new Error(key + ' doesn\'t exist!');
        }

        node.value = newValue;
    }

    /** 格式化 **/
    toString(): string {
        let res = '\n';

        let cur = this.dummyHead!.next;
        while (cur !== null) {
            res += `${cur} -> `;
            cur = cur.next;
        }
        res += 'NULL';

        return res;
    }
}
