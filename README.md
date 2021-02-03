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