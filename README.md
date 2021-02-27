<!--
 * @Author: skychx
 * @Date: 2021-02-01 16:53:21
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-27 18:30:19
 * @FilePath: /Toy-Data-Structures/README.md
-->
# Toy-Data-Structures

用 TypeScript 实现的基础数据结构


## 调试

调试代码前先确保电脑全局安装了 `typescript`、`ts-node` 和 `vscode`

配置 launch.json 如下：
```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Current TS File",
            "type": "pwa-node",
            "request": "launch",
            "program": "${workspaceRoot}/node_modules/ts-node/dist/bin.js",
            "args": [
                "${relativeFile}"
            ],
            "cwd": "${workspaceRoot}",
            "sourceMaps": true,
            "resolveSourceMapLocations": [
                "${workspaceFolder}/**",
                "!**/node_modules/**"
            ],
        }
    ]
}
```

然后就可以直接用 vscode 调试 TS 代码了。



## 数据结构

### 01.数组 ToyArray

基于 JavaScript 的 `Array` 实现。当然没有原数组强大（JS 数组里面啥都能塞，而且有 30+ 的 API），只实现了基础的「增删查改」功能。

#### API:

| 基础          | 增            | 删               | 查          | 改            |
| ------------- | ------------- | ---------------- | ----------- | ------------- |
| getSize()     | add(index, e) | remove(index)    | contains(e) | set(index, e) |
| getCapacity() | unshift(e)    | removeElement(e) | indexOf(e)  |               |
| isEmpty()     | push(e)       | shift()          | get(index)  |               |
|               |               |                  | getFirst()  |               |
|               |               |                  | getLast()   |               |


<br />

### 02.链表 ToyLinkedList

一个简单的单链表实现

#### API:

| 基础          | 增            | 删            | 查         | 改            |
| ------------- | ------------- | ------------- | ---------- | ------------- |
| getSize()     | add(index, e) | remove(index) | get(index) | set(index, e) |
| getCapacity() | addFirst(e)   | removeFirst() | getFirst() |               |
| isEmpty()     | addLast(e)    | removeLast()  | getLast()  |               |


<br />

### 03.栈 ToyStack

`ToyStack` 有两个实现：

- 基于 `ToyArray` 实现的 `ArrayStack`，在数组尾模拟栈
- 基于 `ToyLinkedList` 实现的 `LinkedListStack`，在链表头模拟栈

#### API:

| 基础      | 增      | 删    | 查     | 改   |
| --------- | ------- | ----- | ------ | ---- |
| getSize() | push(e) | pop() | peek() |      |
| isEmpty() |         |       |        |      |


<br />

### 04.队列 ToyQueue

`ToyQueue` 有三个实现：

- 基于 `ToyArray` 实现的 `ArrayQueue`，实现最为简单，缺点是 `dequeue()` 时间复杂度为 `O(n)`
- `LoopQueue`，底层依旧是数组，但是把 `dequeue()` 时间复杂度优化为 `O(1)`
- `LinkedListQueue`，基于链表实现的队列

#### API:

| 基础      | 增         | 删        | 查         | 改   |
| --------- | ---------- | --------- | ---------- | ---- |
| getSize() | enqueue(e) | dequeue() | getFront() |      |
| isEmpty() |            |           |            |      |

<br />

### 05.二分搜索树 ToyBST

`ToyBST` 为二分搜索树的一个简单实现，包括**深度优先遍历**（前序/中序/后序遍历）和**广度优先遍历**（层序遍历）。

- 深度优先遍历
  - 利用**递归**实现前序/中序/后序遍历
  - 借助「**栈**」实现非递归的前序遍历
- 广度优先遍历
  - 借助「**队列**」实现层序遍历

#### API:

| 基础      | 增          | 删          | 查           | 深度优先遍历   | 广度优先遍历   |
| --------- | ---------- | ---------   | ----------  | ----------   | ----------   |
| getSize() | add(e)     | removeMin() | contains(e) | preOrder()   | levelOrder() |
| isEmpty() |            | removeMax() | minimum()   | preOrderNR() |              |
|           |            | remove(e)   | maximum()   | inOrder()    |              |
|           |            |             |             | postOrder()  |              |

<br />

### 06.集合 ToySet

`ToySet` 有两个实现：

> 有序无序有两个角度，一种是按照元素存取的顺序，一种是元素和元素之间的关系。下文的有序无序指的是后者

- **有序集合**：Set 中的元素都是有序排列的（基于搜索树实现）
  - **BSTSet**：基于 BST 二分搜索树实现，`add` `has` `delete` 时间复杂度平均为 `O(logn)`，最坏情况下退化为链表，时间复杂度变为 `O(n)`
  - **AVLSet**：基于 AVL Tree 实现，时间复杂度稳定为 `O(logn)`，根据 AVL 特性，不会退化为链表。
- **无序集合**：Set 中的元素都是无序排列的
  - **JS Set**：ES6 内置 Set，性能最优
  - **JS Object Set**：ES6 Object 模拟的 Set，只比 Set 慢一点点（根据 JS 规范，Object string key 排序是按插入顺序排序的）
  - **LinkedListSet**：基于 LinkedList 链表实现，`add` `has` `delete` 时间复杂度均为 `O(n)`
  - **ArraySet**：基于 ToyArray 动态数组实现，`add` `has` `delete` 时间复杂度均为 `O(n)`。

#### API:

| 基础       | 增         | 删        | 查         | 改   |
| --------- | ---------- | --------- | ---------- | ---- |
| getSize() | add(e)     | delete(e) | has(e)     |      |
| isEmpty() |            |           |            |      |

<br />

### 07.映射 ToyMap

> 有序无序有两个角度，一种是按照元素存取的顺序，一种是元素和元素之间的关系。下文的有序无序指的是后者

`ToyMap` 有两个实现：

- **有序映射**：Map 中的元素都是有序排列的（基于搜索树实现）
  - **BSTMap**：基于 BST 二分搜索树实现，`add` `get` `has` `delete` `set` 时间复杂度平均为 `O(logn)`，最坏情况下退化为链表，时间复杂度变为 `O(n)`
  - **AVLMap**：基于 AVL Tree 实现，时间复杂度稳定为 `O(logn)`，根据 AVL 特性，不会退化为链表。
- **无序映射**：Map 中的元素都是无序排列的
  - **JS Map**：ES6 内置 Map，性能最优
  - **JS Object Map**：ES6 Object 模拟的 Map，只比 Map 慢一点点（根据 JS 规范，Object string key 排序是按插入顺序排序的）
  - **LinkedListMap**：基于 LinkedList 链表实现，`add` `get` `has` `delete` `set` 时间复杂度均为 `O(n)`

#### API:

| 基础       | 增         | 删        | 查         | 改         |
| --------- | ---------- | --------- | ---------- | --------- |
| getSize() | add(k, v)  | delete(k) | get(k)     | set(k, v) |
| isEmpty() |            |           | has(k)     |           |

<br />

### 08.堆 ToyHeap

使用**完全二叉树**表示一个堆（二叉堆），这里实现了最大堆 `ToyMaxHeap` 和最小堆 `ToyMinHeap`。其实两者只有数值比较处相反，其它的实现逻辑完全一致。


#### API:

| 基础       | 增         | 删        | 查         | 改         |
| --------- | ---------- | --------- | --------- | ---------  |
| getSize() | push(e)    | pop()     | peek()    | replace(e) |
| isEmpty() |            |           | has(k)    |            |

<br />

### 09.优先队列 ToyPriorityQueue

本质上还是一个队列，但是出队时机和入队时机无关，需要**动态**的选择优先级最高的任务出队。

- 优先队列的**最优方案**就是用最大堆 `ToyMaxHeap` 实现，这时候入队出队的时间复杂度稳定为 `O(logn)`
- 数组实现的优先队列内部是无序的，所以出队操作需要遍历整个数组，时间复杂度为 `O(n)`


#### API:

| 基础       | 增         | 删        | 查          | 改   |
| --------- | ---------- | --------- | ---------- | ---- |
| getSize() | enqueue(e) | dequeue() | getFront() |      |
| isEmpty() |            |           |            |      |

<br />


### 10.线段树 ToySegmentTree

线段树专注于研究**区间**问题，把各个区间的值记录为一棵树，然后当成一颗允许叶子节点为 null 的「满二叉树」存储到数组里。线段树在算法竞赛里比较常见，日常运用比较少。

优点是**更新/查询**操作的时间复杂度都可以优化到 `O(logn)`，缺点是会浪费不少存储空间（极限情况下有一半的空间都会浪费）。


#### API:

| 基础       |  增  |  删  | 查           | 改            |
| --------- | ---- | ---- | ----------  | ------------  |
| getSize() |      |      | get(index)  | set(index, e) |
|           |      |      | query(l, r) |               |

<br />

### 11.字典树/前缀树 ToyTrie

顾名思义，Trie 是专门为**字典查询**这个场景设计的高级数据结构，优点就是时间复杂度可以控制在 `O(m)`，m 是字符串的长度；缺点就是空间浪费了不少（主要用来存储指针了）。


#### API:

| 基础       |  增       |  删          | 查                  | 改   |
| --------- | --------- | ------------ | ------------------ | ---- |
| getSize() | add(word) | remove(word) | has(word)          |      |
|           |           |              | startswith(prefix) |      |

<br />


### 12.并查集 ToyUnionFind

并查集是一个非常**有意思**的数据结构，可以合并/查找任意两个不相交元素的集合关系。比较典型的运用有：

- 判断一个大家族里任意两个人是否为亲戚
- 社交网络中任意两人是否为好友关系

本小节有几个经典实现：

- **QuickFindUF**: Quick Find 的并查集实现，查的时间复杂度为 `O(1)`，并的时间复杂度为 `O(n)`
- **QuickUnionUF**: Quick Union 的最简单实现，并查的时间复杂度均为 `O(h)`，h 为树的高度。具体的时间复杂度推导比较繁琐，为 `O(log*n)`（比 `O(logn)` 快，比 `O(1)` 慢）
- **UnionBySizeUF**: 考虑 QuickUnionUF 中的树有可能退化为链表，这里需要减小树的高度，通过维护一个 size 数组，将元素个数少的集合合并到元素个数多的集合上（按大小求并）
- **UnionByHeightUF**: 考虑 QuickUnionUF 中的树有可能退化为链表，这里需要减小树的高度，通过维护一个 rank 数组，将 rank 低的集合合并到 rank 高的集合上（按高度求并，这里的 rank 指树的高度）
- **PathCompressionUF**: 通过路径压缩（Path Compression）进一步降低树的高度，每次执行**查**的操作时进行路径压缩
- **PathCompressionUF2**: 通过路径压缩（Path Compression）进一步降低树的高度，这个版本是递归实现


#### API:

| 基础       | 并                  | 查                |
| --------- | ------------------  | ----------------  |
| getSize() | unionElements(p, q) | isConnected(p, q) |

<br />


### 13.AVL ToyAVLTree

AVL树得名于它的发明者 G. M. Adelson-Velsky 和 Evgenii Landis（英语：E. M. Landis），他们在1962年的论文《An algorithm for the organization of information》中公开了这一数据结构。

`ToyAVLTree` 为 AVL 的一个实现。

#### API:

| 基础      | 增          | 删          | 查           | 深度优先遍历   | 广度优先遍历   |
| --------- | ---------- | ---------   | ----------  | ----------   | ----------   |
| getSize() | add(e)     | removeMin() | contains(e) |  inOrder()   | levelOrder() |
| isEmpty() |            | removeMax() | minimum()   |              |              |
| isBST()   |            | remove(e)   | maximum()   |              |              |
| isisBalanced() |       |             |             |              |              |

<br />

### 14.红黑树 ToyRBTree

红黑树其实和 2-3 树的原理是等价的，结构很复杂，但是有着统计最优的性能。

红黑树相对于AVL树来说，牺牲了部分平衡性以换取插入/删除操作时少量的旋转操作，整体来说性能要优于AVL树。

`ToyRBTree` 只实现了红黑树的 add 操作，delete 操作暂未实现。

#### API:

| 基础      | 增          | 删              | 查           | 深度优先遍历   | 广度优先遍历   |
| --------- | ---------- | ---------       | ----------  | ----------   | ----------   |
| getSize() | add(e)     | ~~removeMin()~~ | contains(e) |  inOrder()   | levelOrder() |
| isEmpty() |            | ~~removeMax()~~ | minimum()   |              |              |
| isBST()   |            | ~~remove(e)~~   | maximum()   |              |              |
| isisBalanced() |       |                 |             |              |              |

<br />