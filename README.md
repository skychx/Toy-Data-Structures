<!--
 * @Author: skychx
 * @Date: 2021-02-01 16:53:21
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-05 15:02:24
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

基于 JavaScript 的 `Array` 实现。当然没有原数组强大（JS 数组里面啥都能塞，而且有 40+ 的 API），只实现了基础的「增删查改」功能。

#### API:

| 基础          | 增            | 删               | 查          | 改            |
| ------------- | ------------- | ---------------- | ----------- | ------------- |
| getSize()     | add(index, e) | remove(index)    | contains(e) | set(index, e) |
| getCapacity() | unshift(e)    | removeElement(e) | indexOf(e)  |               |
| isEmpty()     | push(e)       | shift()          | get(index)  |               |
|               |               |                  | getFirst()  |               |
|               |               |                  | getLast()   |               |




### 02.链表 ToyLinkedList

一个简单的单链表实现

#### API:

| 基础          | 增            | 删            | 查         | 改            |
| ------------- | ------------- | ------------- | ---------- | ------------- |
| getSize()     | add(index, e) | remove(index) | get(index) | set(index, e) |
| getCapacity() | addFirst(e)   | removeFirst() | getFirst() |               |
| isEmpty()     | addLast(e)    | removeLast()  | getLast()  |               |




### 03.栈 ToyStack

`ToyStack` 有两个实现：

- 基于 `ToyArray` 实现的 `ArrayStack`，在数组尾模拟栈
- 基于 `ToyLinkedList` 实现的 `LinkedListStack`，在链表头模拟栈

#### API:

| 基础      | 增      | 删    | 查     | 改   |
| --------- | ------- | ----- | ------ | ---- |
| getSize() | push(e) | pop() | peek() |      |
| isEmpty() |         |       |        |      |



#### 04.队列 ToyQueue

`ToyQueue` 有三个实现：

- 基于 `ToyArray` 实现的 `ArrayQueue`，实现最为简单，缺点是 `dequeue()` 时间复杂度为 `O(n)`
- `LoopQueue`，底层依旧是数组，但是把 `dequeue()` 时间复杂度优化为 `O(1)`
- `LinkedListQueue`，基于双链表实现的队列

#### API:

| 基础      | 增         | 删        | 查         | 改   |
| --------- | ---------- | --------- | ---------- | ---- |
| getSize() | enqueue(e) | dequeue() | getFront() |      |
| isEmpty() |            |           |            |      |

