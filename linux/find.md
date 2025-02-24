`find`是一个在Linux系统中非常强大的命令行搜索工具，它可以在指定目录下递归搜索文件或文件夹，匹配名称或按属性查找等。

`find`的基本语法如下：

```bash
find [path] [expression]
```

- `path`：表示从哪个目录开始查找，例如`/`表示从根目录开始，`.`表示从当前目录开始
- `expression`：用来匹配寻找的具体条件。

以下是一些基本的使用示例：

1. 从当前目录开始搜寻文件名为`file.txt`的文件：

```bash
find . -name "file.txt"
```

2. 在 `/home`目录下搜寻名称以`.txt`结尾的文件：

```bash
find /home -name "*.txt"
```

3. 在 `/home` 目录下查找大于1M（1048576字节）的文件：

```bash
find /home -type f -size +1048576c
```

4. 查找修改时间在24小时之内的文件：

```bash
find /home -mtime 0
```
`mtime`是以天为单位的，`0`代表在当前时间向前不超过24小时的文件。

5. 查找访问时间在10分钟之内的文件：

```bash
find /home -amin -10
```

6. 查找属于用户 `username` 的文件：

```bash
find /home -user username
```

7. 根据文件权限搜索，例如查找有可执行权限的文件：

```bash
find /home -perm /u=x
```

`find` 命令具有丰富的选项和表达式，可以组合多个条件进行精确搜索。需要注意的是，它默认是递归搜索的，如果查找范围较大，请加限制条件以降低搜索时间。

## **1. `find` 命令：文件查找**

`find` 用于在目录树中递归搜索文件，并根据名称、类型、时间、大小等条件过滤结果。

### **基础语法**

```bash
find [路径] [匹配条件] [操作]
```

### **常见用法**

#### **(1) 按名称查找文件**

```bash
find /path/to/search -name "filename.txt"   # 精确匹配文件名（区分大小写）
find . -iname "file*.txt"                   # 不区分大小写，支持通配符（* ?）
```

#### **(2) 按类型查找**

```bash
find /var/log -type f           # 查找普通文件（f）
find ~ -type d                  # 查找目录（d）
find /dev -type l               # 查找符号链接（l）
```

#### **(3) 按时间过滤**

```bash
find /home -mtime -7        # 修改时间在7天内的文件
find /tmp -atime +30        # 访问时间超过30天的文件
find . -newer reference.txt # 比 reference.txt 更新的文件
```

#### **(4) 按大小过滤**

```bash
find /var -size +10M        # 大于10MB的文件
find . -size -500k          # 小于500KB的文件
find / -size +1G            # 查找大文件（谨慎使用！）
```

#### **(5) 结合操作处理文件**

```bash
find . -name "*.log" -delete             # 删除所有.log文件（谨慎！）
find /tmp -type f -exec rm -f {} \;      # 删除/tmp下所有普通文件
find ~ -name "*.jpg" -exec cp {} /backup \;  # 复制所有jpg到备份目录
```

#### **(6) 组合条件**

```bash
find . -name "*.py" -and -size +1k   # 查找大于1KB的Python文件
find / -user root -or -group admin   # 查找属于root用户或admin组的文件
```

------

## **2. `grep` 命令：文本搜索**

`grep` 用于在文件或输入流中搜索匹配指定模式（正则表达式）的文本行。

### **基础语法**

```bash
grep [选项] "搜索模式" [文件/目录]
```

### **常见用法**

#### **(1) 基本文本搜索**

```bash
grep "error" log.txt        # 在log.txt中搜索包含"error"的行
grep -i "warning" file.log  # 忽略大小写（-i）
grep -v "success" data.csv  # 反向搜索（显示不匹配的行）
```

#### **(2) 正则表达式**

```bash
grep "^start" file.txt      # 匹配以"start"开头的行
grep "end$" file.txt        # 匹配以"end"结尾的行
grep "a[bc]c" file.txt     # 匹配"abc"或"acc"
grep -E "apple|banana"      # 扩展正则（匹配"apple"或"banana"）
```

#### **(3) 递归搜索目录**



```bash
grep -r "TODO" /project/src    # 递归搜索目录中的文本（-r）
grep -R --include="*.py" "def" # 仅在.py文件中搜索"def"
grep -R --exclude="*.tmp" "key" # 排除.tmp文件
```

#### **(4) 显示上下文**

bash

复制

```bash
grep -C 3 "pattern" file   # 显示匹配行及其前后3行
grep -B 2 "pattern" file   # 显示匹配行及前2行
grep -A 4 "pattern" file   # 显示匹配行及后4行
```

#### **(5) 其他实用选项**

bash

复制

```bash
grep -n "pattern" file     # 显示匹配行的行号
grep -c "pattern" file     # 统计匹配行数
grep -l "pattern" *.log    # 仅显示包含匹配项的文件名
grep -L "pattern" *.log    # 显示不包含匹配项的文件名
```

------

## **3. `find` 和 `grep` 组合使用**

两者结合可实现更复杂的搜索逻辑：

#### **(1) 查找文件并搜索内容**

bash

复制

```bash
find /var/log -name "*.log" -exec grep "error" {} \;  # 在所有.log文件中搜索"error"
find . -type f -name "*.conf" | xargs grep "port=8080"  # 使用管道传递结果
```

#### **(2) 过滤后压缩文件**

bash

复制

```bash
find /backup -name "*.tar.gz" -mtime +30 -exec gzip {} \; # 压缩30天前的备份
```

#### **(3) 快速清理临时文件**

bash

复制

```bash
find /tmp -type f -name "*.tmp" -mtime +7 -delete
```

------

## **常用选项速查表**

### **`find` 主要选项**

| 选项      | 说明                        |
| :-------- | :-------------------------- |
| `-name`   | 按文件名匹配                |
| `-type`   | 按文件类型（f/d/l）过滤     |
| `-mtime`  | 按修改时间过滤（天）        |
| `-size`   | 按文件大小过滤（+10M, -1G） |
| `-exec`   | 对匹配文件执行命令          |
| `-delete` | 删除匹配的文件              |

### **`grep` 主要选项**

| 选项      | 说明                    |
| :-------- | :---------------------- |
| `-i`      | 忽略大小写              |
| `-v`      | 反向匹配                |
| `-r`/`-R` | 递归搜索目录            |
| `-n`      | 显示行号                |
| `-l`/`-L` | 显示匹配/不匹配的文件名 |
| `-E`      | 使用扩展正则表达式      |

------

## **示例场景**

bash

复制

```bash
# 查找所有超过100MB的日志文件并列出详细信息
find /var/log -type f -name "*.log" -size +100M -exec ls -lh {} \;

# 搜索当前目录及子目录的Python文件中是否包含"import requests"
grep -rn --include="*.py" "import requests" .

# 删除7天前创建的临时文件（谨慎操作！）
find /tmp -type f -name "*.tmp" -mtime +7 -delete

# 在JSON文件中查找包含"error_code"的行，并显示行号
grep -n "error_code" *.json
```

------

掌握 `find` 和 `grep` 的组合使用，可以高效完成文件管理和文本分析任务！使用前建议通过 `man find` 或 `man grep` 查看完整文档。