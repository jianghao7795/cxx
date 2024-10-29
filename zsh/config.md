Apple 宣布在macOS 10.15 Catalina 以后默认shell是zsh。
 zsh的默认提示比较复杂：显示[用户名]@[主机名] [当前路径]:  %



```dart
armin@Calypso: ~ %
```

大多数情况我们都是单用户在自己本机使用，所以每一行都展示[用户名]@[主机名]是没必要的
 我认为们只需要当前路径就足够了。

> 你或者可以争辩说，当你经常向不同的主机打开多个终端窗口，提示中的主机名很有用。但是提示是由远程shell 及其在远程主机上的配置文件定义的。



```undefined
~ %
```

那么我们来看看怎么配置。

### 基本提示配置

基本zsh提示配置的工作方式类似于bash，只是它使用不同的语法。所以你可能搜到过其他文章讲怎么配置，但是复制过来发现都是乱的，因为那是bash的配置语法。

zsh使用变量PS1来存储默认提示，也可以用变量名PROMPT和prompt代替PS1，后面我都使用PROMPT。
 PROMPT写进你的`~.zshrc`文件中，然后执行`source .zshrc`它将会在所有zsh shell窗口生效。



```bash
export PROMPT='%n@%m %1~ %#  '
```

当我们什么都不配置的时候默认是`%n@%m %1~ %#`

![img](https:////upload-images.jianshu.io/upload_images/3826155-807b45641ee4f06a.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)



其中:

- `%n`  是当前用户名

- `%m` 是当前主机名的第一元素

- ```
  %1~
  ```

   是当前目录，不过会自动将用户目录替换为

  ```
  ~
  ```

  ![img](https:////upload-images.jianshu.io/upload_images/3826155-b31fa4272fbdffb1.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

- ```
  %#
  ```

   我测试发现是zsh的默认提示符号

  ```
  %
  ```

  ,当具有超级用户权限时会显示

  ```
  #
  ```

  。

  ![img](https:////upload-images.jianshu.io/upload_images/3826155-0b97521af2e34d9f.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

我想要的效果怎么配置已经很明显了，只保留`%~ %#`就可以了

> `%1~` 替换为`%~` 是为了展示完整路径

![img](https:////upload-images.jianshu.io/upload_images/3826155-e0ea46b3cb7e02f8.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

### 进阶配置

在提示中添加一点颜色、字体加粗更具有可读性
 直接看看我最终配置:`'%F{13}%~ %F{50}%B%# %f%b'`

![img](https:////upload-images.jianshu.io/upload_images/3826155-ccd5867faa26be13.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)



- `%F{color}` 是配置颜色，{}中color是256色的颜色值，也可以使用`black，red，green，yellow，blue，magenta，cyan和white`等常用色。
- `%f` 表示后面恢复默认颜色。
- `%B` 粗体 。
- `%b` 表示后面恢复默认子重。

#### 附录：

##### shell中256配色表

![img](https:////upload-images.jianshu.io/upload_images/3826155-baba696917b2edbd.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

shell中256配色表