/*
 * @Author: skychx
 * @Date: 2021-02-16 16:53:42
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-16 17:41:42
 * @FilePath: /Toy-Data-Structures/11-Trie/ToyTrie.ts
 */

class TrieNode {
    public isWord: boolean;
    public next: Map<string, TrieNode>;

    constructor(isWord ?: boolean) {
        this.isWord = isWord ?? false;
        this.next = new Map();
    }
}

export class ToyTrie {
    private root: TrieNode;
    private size: number;

    constructor() {
        this.root = new TrieNode();
        this.size = 0;
    }

    // 获得 Trie 中存储的单词数量
    getSize(): number {
        return this.size;
    }

    /** 增 **/

    // 向 Trie 中添加一个新的单词 word
    add(word: string): void {
        let cur: TrieNode = this.root;

        for (let i = 0; i < word.length; i++) {
            const char = word.charAt(i);

            if(cur.next.get(char) === undefined) {
                cur.next.set(char, new TrieNode());
            }
            cur = cur.next.get(char) as TrieNode;
        }

        // 添加完毕后控制节点 isWord 属性
        if(!cur.isWord) {
            cur.isWord = true;
            this.size++;
        }
    }

    /** 查 **/

    // 查询单词 word 是否在 Trie 中
    has(word: string): boolean {
        let cur: TrieNode = this.root;

        for (let i = 0; i < word.length; i++) {
            const char = word.charAt(i);

            if (cur.next.get(char) === undefined) {
                return false;
            }
            cur = cur.next.get(char) as TrieNode;
        }

        return cur.isWord;
    }

    // 查询是否在 Trie 中有单词以 prefix 为前缀
    startswith(prefix: string): boolean {
        let cur: TrieNode = this.root;

        for (let i = 0; i < prefix.length; i++) {
            const char = prefix.charAt(i);

            if (cur.next.get(char) === undefined) {
                return false;
            }
            cur = cur.next.get(char) as TrieNode;
        }

        return true;
    }
}