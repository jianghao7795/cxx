卸载

/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/HomebrewUninstall.sh)"

```shell
# 
```

```bash
# 显示 Homebrew 本地的 Git 仓库
$ brew --repo

# 显示 Homebrew 安装路径
$ brew --prefix

# 显示 Homebrew Cellar 路径
$ brew --cellar

# 显示 Homebrew Caskroom 路径
$ brew --caskroom

# 缓存路径
$ brew --cache
```

使用 `brew search` 命令可以看到「Formulae」和「Casks」两类

- **Formulae**：一般是那些命令行工具、开发库、字体、插件等不含 GUI 界面的软件。
- **Casks**：是指那些含有 GUI 图形化界面的软件，比如 Chrome、FireFox 等。

```bash
$ brew search google

==> Formulae
aws-google-auth                          google-sparsehash
google-authenticator-libpam              google-sql-tool
google-benchmark                         googler
google-go                                googletest
google-java-format

==> Casks
google-ads-editor
google-analytics-opt-out
google-backup-and-sync
...
```

### Homebrew 常用命令

**检查**

用于检查 Homebrew 当前配置是否合理，或者某些包存在的问题等。

```bash
$ brew doctor
```

**搜索**

支持模糊搜索。

```bash
$ brew search <keyword>
```

**更新包**

```bash
$ brew upgrade                  # 更新所有已安装的包
$ brew upgrade <package-name>   # 更新指定包
```

**列出已安装的包**

```bash
$ brew list                     # 所有的软件，包括 Formulae  和 Cask
$ brew list --formulae          # 所有已安装的 Formulae
$ brew list --cask              # 所有已安装的 Casks
$ brew list <package-name>      # 列举某个 Formulate 或 Cask 的详细路径
```

**列出可更新的包**

```bash
$ brew outdated
```

**锁定某个不想更新的包**

```bash
$ brew pin <package-name>       # 锁定指定包
$ brew unpin <package-name>     # 取消锁定指定包
```

**清理旧包**

```bash
$ brew cleanup                  # 清理所有旧版本的包
$ brew cleanup <package-name>   # 清理指定的旧版本包
$ brew cleanup -n               # 查看可清理的旧版本包
```

**查看已安装包的依赖**

```bash
$ brew deps --installed --tree
```

**查看包的信息**

```bash
$ brew info <package>           # 显示某个包信息
$ brew info                     # 显示安装的软件数量、文件数量以及占用空间
```