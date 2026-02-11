# Stage之前放弃修改

如果做了修改，还没有stage（add），使用

```
git status
```

可以查看所有的改动：

- **修改：modified**
- **删除：deleted**
- **添加：Untracked**

想要放弃修改可以使用checkout命令

#### 取消 仓库所有 修改、删除

```
git checkout -f
```

此时你修改的文件和删除的文件都会被恢复，但是你***新添加的文件不会被删除\***

#### 放弃 指定文件 修改、删除

```
git checkout filename
```

#### 放弃 指定文件夹 修改、删除

```
git checkout directory
```

此时指定目录下修改的文件和删除的文件都会被恢复，但是你***新添加的文件不会被删除\***

 

#### 放弃 仓库所有 添加

```
git clean –df
```

此时该仓库下所有新添加文件将被清除, 不会对***修改***和***删除***做任何处理

#### 放弃 指定文件 添加

```
git clean filename –df
```

此时该新添加文件将被清除, 不会对***修改***和***删除***做任何处理

#### 放弃 指定文件夹 添加

```
git clean directory –df
```

此时该目录新添加文件将被清除, 不会对***修改***和***删除***做任何处理



#### git clean参数

首先我们需要认清 忽略的文件 和 未被跟踪的文件。

- 忽略的文件：.gitignore 中忽略的文件；
- 未被跟踪的文件：没有被忽略，但是还没 git add 的文件

```
git clean  -f             # 删除：未被跟踪的文件
git clean –fd             # 删除：未被跟踪的文件和文件夹
git clean –xfd            # 删除：忽略的文件、未被跟踪的文件和文件夹
git clean [-xfd] -n-n     # 会先打印一些将要删除的文件，并不执行删除动作，主要是查看是否有自己需要的不想被删除
```

####  

# [Git 放弃本地修改](https://www.cnblogs.com/qufanblog/p/7606105.html)

#### commit抹去可以使用修改后

***\*见文章《\**[\**git 放弃本地修改\**](https://www.cnblogs.com/qufanblog/p/7606105.html)\**》\****

# **Git 放弃先前提交**

要讲某一次commit抹去可以使用如下命令

**>> git reset –hard commit_hash**

执行完该命令后便将当前分支回退到commit_hash那一次提交了，在这次提交后面的所有提交都将被彻底抹去不留痕迹，为非常危险的操作

如果你想要放弃已经提交到服务器上得到提交，可以在本科执行该命令达到目的后然后强行push

**>> git push –force**

这是个更加危险的操作，因为你抹去的是服务器上的版本，你的同事可能会去买枪的哦

# [git commit之后，想撤销commit](https://www.cnblogs.com/lfxiao/p/9378763.html)

 

写完代码后，我们一般这样

git add . //添加所有文件

git commit -m "本功能全部完成"

 

执行完commit后，想撤回commit，怎么办？

 

这样凉拌：

**git reset --soft HEAD^**

 

这样就成功的撤销了你的commit

注意，仅仅是撤回commit操作，您写的代码仍然保留。

 

 

## 说一下个人理解：

HEAD^的意思是上一个版本，也可以写成HEAD~1

如果你进行了2次commit，想都撤回，可以使用HEAD~2

 

## 至于这几个参数：

## --mixed 

意思是：不删除工作空间改动代码，撤销commit，并且撤销git add . 操作

这个为默认参数,git reset --mixed HEAD^ 和 git reset HEAD^ 效果是一样的。

 

## --soft  

不删除工作空间改动代码，撤销commit，不撤销git add . 

 

## --hard

删除工作空间改动代码，撤销commit，撤销git add . 

注意完成这个操作后，就恢复到了上一次的commit状态。