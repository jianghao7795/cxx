# lazyvim 快捷键

2025-08-15 BaiXie [#快捷操作](https://blog.tanc.fun:9999/tags/kuai-jie-cao-zuo) [#IDE](https://blog.tanc.fun:9999/tags/ide) [#lazvim](https://blog.tanc.fun:9999/tags/lazvim)

# 🚀 LazyVim 快捷键速查表（2025-08-13）

> 本文档基于 **LazyVim v12** 默认键位生成，保留官方风格并补充常用自定义。
> 直接在 Neovim 中按 `<leader>?` 可调出交互式键位图（`which-key`）。

------

## 📁 目录

1. [全局 / 系统](https://blog.tanc.fun:9999/archives/VJ3xduAu#全局--系统)
2. [文件与缓冲区](https://blog.tanc.fun:9999/archives/VJ3xduAu#文件与缓冲区)
3. [窗口与标签](https://blog.tanc.fun:9999/archives/VJ3xduAu#窗口与标签)
4. [搜索与替换](https://blog.tanc.fun:9999/archives/VJ3xduAu#搜索与替换)
5. [代码编辑](https://blog.tanc.fun:9999/archives/VJ3xduAu#代码编辑)
6. [代码导航](https://blog.tanc.fun:9999/archives/VJ3xduAu#代码导航)
7. [Git 操作](https://blog.tanc.fun:9999/archives/VJ3xduAu#git-操作)
8. [调试 (DAP)](https://blog.tanc.fun:9999/archives/VJ3xduAu#调试-dap)
9. [终端](https://blog.tanc.fun:9999/archives/VJ3xduAu#终端)
10. [LSP & 诊断](https://blog.tanc.fun:9999/archives/VJ3xduAu#lsp--诊断)
11. [Lazy 插件管理](https://blog.tanc.fun:9999/archives/VJ3xduAu#lazy-插件管理)
12. [自定义补充](https://blog.tanc.fun:9999/archives/VJ3xduAu#自定义补充)

------

## 全局 / 系统

| 按键         | 说明                  |
| :----------- | :-------------------- |
| `<leader>qq` | 退出 Neovim           |
| `<leader>qQ` | 强制退出              |
| `<leader>qa` | 退出所有缓冲区        |
| `<leader>ui` | 打开 LazyVim 设置面板 |
| `<leader>l`  | 打开 Lazy 插件管理器  |
| `<leader>fn` | 新建空缓冲区          |
| `<leader>ft` | 打开浮动终端          |
| `<leader>xx` | 切换拼写检查          |
| `<leader>xX` | 全局拼写检查          |

------

## 文件与缓冲区

| 按键         | 说明                      |
| :----------- | :------------------------ |
| `<leader>ff` | 模糊查找文件（Telescope） |
| `<leader>fg` | 查找当前字符串            |
| `<leader>fw` | 查找光标单词              |
| `<leader>fb` | 显示所有缓冲区            |
| `<leader>fd` | 诊断列表                  |
| `<leader>fR` | 最近文件                  |
| `<leader>fC` | 命令历史                  |
| `<leader>fT` | 主题切换                  |
| `<leader>fc` | 颜色高亮组                |
| `<leader>fn` | 新建文件                  |
| `<leader>fs` | 保存文件                  |
| `<leader>fS` | 全部保存                  |
| `<leader>fr` | 重命名文件                |
| `<leader>fm` | 移动文件                  |
| `<leader>fy` | 复制文件路径              |
| `<leader>fY` | 复制文件相对路径          |
| `<leader>fd` | 删除文件                  |
| `<leader>fD` | 移动到废纸篓              |
| `<leader>fp` | 粘贴文件                  |
| `<leader>fP` | 粘贴并重命名              |
| `<leader>fo` | 打开文件                  |
| `<leader>fO` | 打开文件夹                |
| `<leader>fN` | 新建文件夹                |

------

## 窗口与标签

| 按键           | 说明               |
| :------------- | :----------------- |
| `<leader>w`    | 窗口前缀           |
| `<leader>ww`   | 切换到当前窗口     |
| `<leader>wd`   | 关闭窗口           |
| `<leader>w-`   | 水平分割           |
| `w             | `                  |
| `<leader>wm`   | 最大化窗口         |
| `<leader>wh`   | 移动到左边窗口     |
| `<leader>wj`   | 移动到下方窗口     |
| `<leader>wk`   | 移动到上方窗口     |
| `<leader>wl`   | 移动到右边窗口     |
| `<leader>wt`   | 新建标签页         |
| `<leader>wT`   | 移动缓冲区到新标签 |
| `<leader>w[`   | 前一个标签         |
| `<leader>w]`   | 下一个标签         |
| `<leader>w1-9` | 跳到第 N 个标签    |

------

## 搜索与替换

| 按键         | 说明                |
| :----------- | :------------------ |
| `/<pattern>` | 普通搜索            |
| `* / #`      | 光标单词前 / 后搜索 |
| `<leader>sr` | 全局替换（Spectre） |
| `<leader>sR` | 当前文件替换        |
| `<leader>ss` | 模糊查找符号        |
| `<leader>sS` | 模糊查找工作区符号  |
| `<leader>sc` | 清除搜索高亮        |

------

## 代码编辑

| 按键         | 说明             |
| :----------- | :--------------- |
| `<leader>a`  | 全选             |
| `<leader>y`  | 复制到系统剪贴板 |
| `<leader>p`  | 粘贴系统剪贴板   |
| `<leader>d`  | 剪切到系统剪贴板 |
| `<leader>u`  | 撤销             |
| `<leader>U`  | 重做             |
| `<leader>`   | 注释 / 取消注释  |
| `<leader>gc` | 注释行           |
| `<leader>gb` | 注释块           |
| `<leader>ca` | LSP 代码操作     |
| `<leader>cr` | LSP 重命名       |
| `<leader>cf` | LSP 格式化       |
| `<leader>ca` | LSP 代码动作     |
| `<leader>cs` | LSP 排序 import  |

------

## 代码导航

| 按键         | 说明                |
| :----------- | :------------------ |
| `gd`         | 跳转到定义          |
| `gD`         | 声明                |
| `gr`         | 引用                |
| `gi`         | 实现                |
| `gy`         | 类型定义            |
| `]d`         | 下一个诊断          |
| `[d`         | 上一个诊断          |
| `]t`         | 下一个 TODO         |
| `[t`         | 上一个 TODO         |
| `<leader>gt` | 打开 TODO Telescope |
| `<leader>gr` | 打开引用 Telescope  |
| `<leader>gs` | 打开符号 Telescope  |

------

## Git 操作

| 按键         | 说明             |
| :----------- | :--------------- |
| `<leader>gg` | LazyGit 浮动窗口 |
| `<leader>gb` | 切换 blame 行    |
| `<leader>gB` | 打开 blame 窗口  |
| `<leader>gd` | 查看 diff        |
| `<leader>gD` | 查看全部 diff    |
| `<leader>gh` | 查看文件历史     |
| `<leader>gl` | 查看行历史       |
| `<leader>gs` | Git 状态面板     |
| `<leader>gc` | 提交             |
| `<leader>gp` | Push             |
| `<leader>gP` | Pull             |
| `<leader>gr` | Rebase           |

------

## 调试 (DAP)

| 按键         | 说明            |
| :----------- | :-------------- |
| `F5`         | 开始 / 继续     |
| `F9`         | 切换断点        |
| `F10`        | Step Over       |
| `F11`        | Step Into       |
| `Shift+F11`  | Step Out        |
| `<leader>dO` | 打开 DAP 控制台 |
| `<leader>du` | 切换 DAP UI     |
| `<leader>de` | 计算表达式      |
| `<leader>dr` | 运行到光标      |
| `<leader>dl` | 运行最后会话    |

------

## 终端

| 按键                | 说明            |
| :------------------ | :-------------- |
| `<leader>ft`        | 浮动终端        |
| `<leader>fT`        | 水平终端        |
| `<leader>fv`        | 垂直终端        |
| `<C-\>`             | 打开 / 关闭终端 |
| `<Esc>`（终端模式） | 返回普通模式    |

------

## LSP & 诊断

| 按键         | 说明       |
| :----------- | :--------- |
| `K`          | 悬停文档   |
| `<leader>ca` | 代码动作   |
| `<leader>cr` | 重命名     |
| `<leader>cf` | 格式化     |
| `<leader>cd` | 行诊断     |
| `<leader>cD` | 工作区诊断 |
| `]d`         | 下一个诊断 |
| `[d`         | 上一个诊断 |

------

## Lazy 插件管理

| 按键         | 说明      |
| :----------- | :-------- |
| `<leader>l`  | 打开 Lazy |
| `<leader>ll` | 同步插件  |
| `<leader>lu` | 更新插件  |
| `<leader>lc` | 清理插件  |
| `<leader>ls` | 插件搜索  |
| `<leader>lp` | 插件日志  |

------

## 自定义补充（可选）

在你的 `~/.config/nvim/lua/config/keymaps.lua` 追加：

```lua
-- 快速切换主题
vim.keymap.set("n", "<leader>tt", function()
  require("telescope.builtin").colorscheme({ enable_preview = true })
end, { desc = "Telescope 主题切换" })

-- 快速注释
vim.keymap.set("v", "<leader>/", "gc", { remap = true, desc = "注释选中" })
```