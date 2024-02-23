Attribute 属性

属性是作用在 Rust 语言元素上的元数据。

Rust 中的属性数量非常多。而且具有可扩展性（可自定义属性）。Rust 的属性语法遵从 `C#` 定义并标准化了的属性规范ECMA-334。

Rust 代码中随处可见属性，有时甚至会多得让人摸不着头脑。本篇是对 Rust 中的属性相关知识的简单总结。水平有限，仅起到抛砖引玉的作用。

#### **概念**

整体来讲，属性还是比较好理解的，但是需要先理解一些基本概念：

##### **Inner Attributes（内部属性） 和 Outer Attributes（外部属性）**

内部属性（Inner Attribute）是指：一个属性声明在一个元素中，对此元素（比如一般为 crate）整体生效。内部属性用 `#![]` 声明。

外部属性（Outer Attribute）是指：一个属性声明在一个元素之前，对跟在后面的这个元素生效。外部属性用 `#[]` 声明。

Rust 中，有些属性可以/只能作内部属性使用，有些属性可以/只能作外部属性使用。

##### **Meta Item Attribute Syntax**

Meta Item Attribute Syntax 实际上描述了属性语法的基本结构。

下面表格罗列了所有 Meta Item Attribute Syntax。第一列是语法样式名称，第二列是语法看起来的样子。

| Style                | Example                                           |
| :------------------- | :------------------------------------------------ |
| MetaWord             | no_std                                            |
| MetaNameValueStr     | doc = "example"                                   |
| MetaListPaths        | allow(unused, clippy::inline_always)              |
| MetaListIdents       | macro_use(foo, bar)                               |
| MetaListNameValueStr | link(name = "CoreFoundation", kind = "framework") |

我们在 Rust 代码中看到的所有属性语法都是上述五种中的一种或其组合。

##### **Active 和 insert 属性**

一个属性，要么是 active 的，要么是 insert 的。

Active 属性是指，在处理属性（预处理代码）的过程中，active 属性会将它们自己删除，留下所作用的元素。

Insert 属性是指，在处理属性（预处理代码）的过程中，insert 属性会将它们自己保留。

- `cfg` 和 `cfg_attr` 属性是 active 的。
- 当编译为 test 模式时，`test` 属性是 insert 的。编译为非 test 模式时，`test` 属性是 active 的。
- 属性宏是 active 的。
- 所有其它属性是 insert 的。

#### **属性的分类**

Rust 中的属性，可以分为以下四大类。

1. Macro attributes - 宏属性
2. Derive macro helper attributes - 派生宏辅助属性
3. Tool attributes - 工具属性
4. Built-in attributes - 内建属性

##### **Macro Attributes 宏属性**

宏属性，也叫属性宏。属于过程宏的一种。

定义过程宏的时候，使用 `#[proc_macro_attribute]`，加一个固定签名的函数（详见过程宏一章）。

```javascript
#[proc_macro_attribute]
pub fn return_as_is(_attr: TokenStream, item: TokenStream) -> TokenStream {
	item
}
```

复制

使用过程宏：

```javascript
#[return_as_is]
fn invoke() {}
```

复制

##### **Derive macro helper attributes 派生宏辅助属性**

派生宏辅助属性，听起来有点拗口，其实它是这样一个东西：

先定义派生宏

```javascript
#[proc_macro_derive(HelperAttr, attributes(helper))]
pub fn derive_helper_attr(_item: TokenStream) -> TokenStream {
TokenStream::new()
}
```

复制

看如何使用：

```javascript
#[derive(HelperAttr)]
struct Struct {
	#[helper] field: ()
}
```

复制

里面那个 `#[helper]` 就是一个派生宏辅助属性。

##### **Tool Attributes 工具属性**

工具属性。Rust 还允许外部工具定义它们自己的属性，并且在独立的命名空间下面。比如：

```javascript
// Tells the rustfmt tool to not format the following element.
#[rustfmt::skip]
struct S {
}

// Controls the "cyclomatic complexity" threshold for the clippy tool.
#[clippy::cyclomatic_complexity = "100"]
pub fn f() {}
```

复制

不过如果你想在自己的工具中定义 Tool Attribute，那就想多了。现在 `rustc` 只认识两个外部工具（及它们内部的属性）：一个是 rustfmt，另一个是 clippy。

##### **Built-in Attributes 内建属性**

4 种属性的前面两种：宏属性和派生宏辅助属性，是可以完全自定义的。后面两种：工具属性和内建属性，我们只能用，不能自定义。

Rust 内建了 14 类属性。OMG @_@!!

每一个属性都有自己的用法，有的用法还比较多，可以用到的时候，再去查阅。这里简单罗列说明一下。

- 条件编译
  - `cfg`
  - `cfg_attr`
- 测试
  - `test`
  - `ignore`
  - `should_panic`
- 派生
  - `derive`
- 宏相关
  - `macro_export`
  - `macro_use`
  - `proc_macro`
  - `proc_macro_derive`
  - `proc_macro_attribute`
- 诊断
  - `allow`, `warn`, `deny`, `forbid` - lint 相关标志开关，各种 lint 见附录。
  - `deprecated`
  - `must_use`
- ABI, 链接, 符号, 和 FFI
  - `link`
  - `link_name`
  - `no_link`
  - `repr`
  - `crate_type`
  - `no_main`
  - `export_name`
  - `link_section`
  - `no_mangle`
  - `used`
  - `crate_name`
- 代码生成
  - `inline`
  - `cold`
  - `no_builtins`
  - `target_feature`
- 文档
  - `doc`
- 预引入
  - `no_std`
  - `no_implicit_prelude`
- 模块
  - `path`
- 限制
  - `recursion_limit`
  - `type_length_limit`
- 运行时
  - `panic_handler`
  - `global_allocator`
  - `windows_subsystem`
- 语言特性
  - `feature` - 经常会碰到这里面一些陌生的 feature 名称，需要根据具体的 rustc 版本和所使用的库文档进行查阅。
- 类型系统
  - `non_exhaustive`

上面的属性中，很多属性，其内容都可以单独开一篇文章来讲解。比如，条件编译相关的属性，FFI 相关属性等。



## [内置属性的索引表](https://rustwiki.org/zh-CN/reference/attributes.html#内置属性的索引表)

下面是所有内置属性的索引表：

- 条件编译(Conditional compilation)
  - [`cfg`](https://rustwiki.org/zh-CN/reference/conditional-compilation.html#the-cfg-attribute) — 控制条件编译。
  - [`cfg_attr`](https://rustwiki.org/zh-CN/reference/conditional-compilation.html#the-cfg_attr-attribute) — 选择性包含属性。
- 测试(Testing)
  - [`test`](https://rustwiki.org/zh-CN/reference/attributes/testing.html#the-test-attribute) — 将函数标记为测试函数。
  - [`ignore`](https://rustwiki.org/zh-CN/reference/attributes/testing.html#the-ignore-attribute) — 禁止测试此函数。
  - [`should_panic`](https://rustwiki.org/zh-CN/reference/attributes/testing.html#the-should_panic-attribute) — 表示测试应该产生 panic。
- 派生(Derive)
  - [`derive`](https://rustwiki.org/zh-CN/reference/attributes/derive.html) — 自动部署 trait实现
  - [`automatically_derived`](https://rustwiki.org/zh-CN/reference/attributes/derive.html#the-automatically_derived-attribute) — 用在由 `derive` 创建的实现上的标记。
- 宏(Macros)
  - [`macro_export`](https://rustwiki.org/zh-CN/reference/macros-by-example.html#path-based-scope) — 导出声明宏（`macro_rules`宏），用于跨 crate 的使用。
  - [`macro_use`](https://rustwiki.org/zh-CN/reference/macros-by-example.html#the-macro_use-attribute) — 扩展宏可见性，或从其他 crate 导入宏。
  - [`proc_macro`](https://rustwiki.org/zh-CN/reference/procedural-macros.html#function-like-procedural-macros) — 定义类函数宏。
  - [`proc_macro_derive`](https://rustwiki.org/zh-CN/reference/procedural-macros.html#derive-macros) — 定义派生宏。
  - [`proc_macro_attribute`](https://rustwiki.org/zh-CN/reference/procedural-macros.html#attribute-macros) — 定义属性宏。
- 诊断(Diagnostics)
  - [`allow`](https://rustwiki.org/zh-CN/reference/attributes/diagnostics.html#lint-check-attributes)、[`warn`](https://rustwiki.org/zh-CN/reference/attributes/diagnostics.html#lint-check-attributes)、[`deny`](https://rustwiki.org/zh-CN/reference/attributes/diagnostics.html#lint-check-attributes)、[`forbid`](https://rustwiki.org/zh-CN/reference/attributes/diagnostics.html#lint-check-attributes) — 更改默认的 lint检查级别。
  - [`deprecated`](https://rustwiki.org/zh-CN/reference/attributes/diagnostics.html#the-deprecated-attribute) — 生成弃用通知。
  - [`must_use`](https://rustwiki.org/zh-CN/reference/attributes/diagnostics.html#the-must_use-attribute) — 为未使用的值生成 lint 提醒。
- ABI、链接(linking)、符号(symbol)、和 FFI
  - [`link`](https://rustwiki.org/zh-CN/reference/items/external-blocks.html#the-link-attribute) — 指定要与外部(`extern`)块链接的本地库。
  - [`link_name`](https://rustwiki.org/zh-CN/reference/items/external-blocks.html#the-link_name-attribute) — 指定外部(`extern`)块中的函数或静态项的符号(symbol)名。
  - [`no_link`](https://rustwiki.org/zh-CN/reference/items/extern-crates.html#the-no_link-attribute) — 防止链接外部crate。
  - [`repr`](https://rustwiki.org/zh-CN/reference/type-layout.html#representations) — 控制类型的布局。
  - [`crate_type`](https://rustwiki.org/zh-CN/reference/linkage.html) — 指定 crate 的类别(库、可执行文件等)。
  - [`no_main`](https://rustwiki.org/zh-CN/reference/crates-and-source-files.html#the-no_main-attribute) — 禁止发布 `main`符号(symbol)。
  - [`export_name`](https://rustwiki.org/zh-CN/reference/abi.html#the-export_name-attribute) — 指定函数或静态项导出的符号(symbol)名。
  - [`link_section`](https://rustwiki.org/zh-CN/reference/abi.html#the-link_section-attribute) — 指定用于函数或静态项的对象文件的部分。
  - [`no_mangle`](https://rustwiki.org/zh-CN/reference/abi.html#the-no_mangle-attribute) — 禁用对符号(symbol)名编码。
  - [`used`](https://rustwiki.org/zh-CN/reference/abi.html#the-used-attribute) — 强制编译器在输出对象文件中保留静态项。
  - [`crate_name`](https://rustwiki.org/zh-CN/reference/crates-and-source-files.html#the-crate_name-attribute) — 指定 crate名。
- 代码生成(Code generation)
  - [`inline`](https://rustwiki.org/zh-CN/reference/attributes/codegen.html#the-inline-attribute) — 内联代码提示。
  - [`cold`](https://rustwiki.org/zh-CN/reference/attributes/codegen.html#the-cold-attribute) — 提示函数不太可能被调用。
  - [`no_builtins`](https://rustwiki.org/zh-CN/reference/attributes/codegen.html#the-no_builtins-attribute) — 禁用某些内置函数。
  - [`target_feature`](https://rustwiki.org/zh-CN/reference/attributes/codegen.html#the-target_feature-attribute) — 配置特定于平台的代码生成。
  - [`track_caller`](https://rustwiki.org/zh-CN/reference/attributes/codegen.html#the-track_caller-attribute) - 将父调用位置传递给 `std::panic::Location::caller()`。
- 文档(Documentation)
  - `doc` — 指定文档。更多信息见 [The Rustdoc Book](https://doc.rust-lang.org/rustdoc/the-doc-attribute.html)。[Doc注释](https://rustwiki.org/zh-CN/reference/comments.html#doc-comments)会被转换为 `doc`属性。
- 预导入包(Preludes)
  - [`no_std`](https://rustwiki.org/zh-CN/reference/names/preludes.html#the-no_std-attribute) — 从预导入包中移除 std。
  - [`no_implicit_prelude`](https://rustwiki.org/zh-CN/reference/names/preludes.html#the-no_implicit_prelude-attribute) — 禁用模块内的预导入包查找。
- 模块(Modules)
  - [`path`](https://rustwiki.org/zh-CN/reference/items/modules.html#the-path-attribute) — 指定模块的源文件名。
- 极限值设置(Limits)
  - [`recursion_limit`](https://rustwiki.org/zh-CN/reference/attributes/limits.html#the-recursion_limit-attribute) — 设置某些编译时操作的最大递归限制。
  - [`type_length_limit`](https://rustwiki.org/zh-CN/reference/attributes/limits.html#the-type_length_limit-attribute) — 设置多态类型(polymorphic type)单态化过程中构造具体类型时所做的最大类型替换次数。
- 运行时(Runtime)
  - [`panic_handler`](https://rustwiki.org/zh-CN/reference/runtime.html#the-panic_handler-attribute) — 设置处理 panic 的函数。
  - [`global_allocator`](https://rustwiki.org/zh-CN/reference/runtime.html#the-global_allocator-attribute) — 设置全局内存分配器。
  - [`windows_subsystem`](https://rustwiki.org/zh-CN/reference/runtime.html#the-windows_subsystem-attribute) — 指定要链接的 windows 子系统。
- 特性(Features)
  - `feature` — 用于启用非稳定的或实验性的编译器特性。参见 [The Unstable Book](https://doc.rust-lang.org/unstable-book/index.html) 了解在 `rustc` 中实现的特性。
- 类型系统(Type System)
  - [`non_exhaustive`](https://rustwiki.org/zh-CN/reference/attributes/type_system.html#the-non_exhaustive-attribute) — 表明一个类型将来会添加更多的字段/变体。

```rust

#![allow(unused)]
fn main() {
// 指定 crate 名称.
#![crate_name = "projx"]

// 指定编译输出文件的类型
#![crate_type = "lib"]

// 打开一种警告
// 这句可以放在任何模块中, 而不是只能放在匿名 crate 模块里。
#![warn(non_camel_case_types)]
}
```





## 1.条件编译

针对不同的编译目标来生成不同的代码，比如在编写跨平台模块时。

- cfg
  - debug_assertions: 若没有开启编译优化时就会成立。
  - target_arch = “…”: 目标平台的CPU架构，包括但不限于x86, x86_64, mips, powerpc, arm或aarch64。
  - target_endian = “…”: 目标平台的大小端，包括big和little。
  - target_env = “…”: 表示使用的运行库，比如musl表示使用的是MUSL的libc实现, msvc表示使用微软的MSVC，gnu表示使用GNU的实现。 但在部分平台这个数据是空的。
  - target_family = “…”: 表示目标操作系统的类别，比如windows和unix。这个属性可以直接作为条件使用，如#[unix]，#[cfg(unix)]。
  - target_os = “…”: 目标操作系统，包括但不限于windows, macos, ios, linux, android, freebsd, dragonfly, bitrig, openbsd, netbsd。
  - target_pointer_width = “…”: 目标平台的指针宽度，一般就是32或64。
  - target_vendor = “…”: 生产商，例如apple, pc或大多数Linux系统的unknown。
  - test: 当启动了单元测试时（即编译时加了—test参数，或使用cargo test）。
- cfg_attr: cfg_attr(a, b)] 这表示若a成立，则这个就相当于#[cfg(b)]。

## 2.测试

- test: 指明这个函数为单元测试函数，在非测试环境下不会被编译。通过将`--test`参数传递给rustc 或使用来启用测试模式`cargo test`。
- ignore: 禁用测试功能。该ignore属性告诉测试工具不要执行该功能作为测试。在测试模式下，它仍将被编译。rustc测试工具支持该`--include-ignored`标志，以强制运行忽略的测试。
- should_panic: 指明这个单元测试函数必然会panic。该should_panic属性可以选择使用必须出现在紧急消息中的输入字符串。如果在消息中找不到该字符串，则测试将失败

## 3.派生

- derive: 编译器提供一个编译器插件叫作derive，它可以帮你去生成一些代码去实现（impl）一些特定的Trait。目前derive仅支持标准库中部分的Trait。
- automatically_derived: 用于由创建的实现的标记 derive。

## 4.宏相关

- macro_reexport: 应用于extern crate上，可以再把这些导入的宏再输出出去给别的库使用。

- macro_export: 应于在宏上，可以使这个宏可以被导出给别的库使用。

- macro_use: 把模块或库中定义的宏导出来。应用于mod上，则把此模块内定义的宏导出到它的父模块中，应用于

  ```rust
  extern crate
  ```

  上，则可以接受一个列表，

  ```rust
  #[macro_use(debug, trace)]
  extern crate log;
  则可以只导入列表中指定的宏，若不指定则导入所有的宏。
  ```

- proc_macro: 定义类似函数的宏

- proc_macro_derive: 定义一个派生宏。

- proc_macro_attribute: 定义属性宏。

## 5.诊断

- allow, warn, deny, forbid: lint 相关标志开关 (目前的Rust编译器已自带的Linter，它可以在编译时静态帮你检测不用的代码、死循环、编码风格等等)
  - allow(C): 编译器将不会警告对于C条件的检查错误。
  - deny(C): 编译器遇到违反C条件的错误将直接当作编译错误。
    - forbit(C): 行为与deny(C)一样，但这个将不允许别人使用allow(C)去修改。
    - warn(C): 编译器将对于C条件的检查错误输出警告。支持的C可以通过rustc -W help和默认设置一起找到，并记录在rustc书中。
- deprecated: 生成弃用通知。
- must_use: 为未使用的值生成lint。

## 6.ABI, 链接, 符号, 和 FFI

- link: 说明这个块需要链接一个native库，它有以下参数：
  - name - 库的名字，比如libname.a的名字是name；
  - kind - 库的类型，它包括
    - dylib - 动态链接库
    - static - 静态库
    - framework - OS X里的Framework
- link_name: 指定extern块中函数或静态变量的符号名称。
- no_link: 应用于extern crate上，表示即使我们把它里面的库导入进来了，但是不要把这个库链接到目标文件中
- repr: 控制类型布局。
- crate_type: 指定Crate的类型，有以下几种选择
  - “bin” - 编译为可执行文件；
  - “lib” - 编译为库；
  - “dylib” - 编译为动态链接库；
  - “staticlib” - 编译为静态链接库；
  - “rlib” - 编译为Rust特有的库文件，它是一种特殊的静态链接库格式，它里面会含有一些元数据供编译器使用，最终会静态链接到目标文件之中。
- no_main: Disables emitting the main symbol.
- export_name: 指定函数或静态的导出符号名称。
- link_p
- used: 强制编译器在输出目标文件中保留静态项。
- crate_name: 指定Crate的名字。如`#[crate_name = "my_crate"]`则可以让编译出的库名字为`libmy_crate.rlib`
- export_function: 用于静态变量或函数，指定它们在目标文件中的符号名。
- no_mangle: 可以应用于任意的Item，表示取消对它们进行命名混淆，直接把它们的名字作为符号写到目标文件中。
- simd: 可以用于元组结构体上，并自动实现了数值运算符，这些操作会生成相应的SIMD指令。

## 7.代码生成

- inline: 内联函数即建议编译器可以考虑把整个函数拷贝到调用者的函数体中，而不是生成一个call指令调用过去。这种优化对于短函数非常有用，有利于提高性能。
  - `#[inline]`: 建议编译器内联这个函数
  - `#[inline(always)]`: 要求编译器必须内联这个函数
  - `#[inline(never)]`: 要求编译器不要内联这个函数
- cold: 指明这个函数很可能是不会被执行的，因此优化的时候特别对待它。
- no_builtins: 禁止使用某些内置功能。
- target_feature: 配置特定于平台的代码生成。
- track_caller: 将父呼叫位置传递到`std::panic::Location::caller()`。

## 8.文档

- doc: 为这个Item绑定文档

## 9.预引入

- no_std: Removes std from the prelude.
- no_implicit_prelude: 取消自动插入`use std::prelude::*`。

## 10.模块

- path: 如声明mod a;，则寻找本文件夹下的a.rs文件，本文件夹下的a/mod.rs文件

  ```rust
  #[cfg(unix)]
  #[path = "sys/unix.rs"]
  mod sys;
  
  #[cfg(windows)]
  #[path = "sys/windows.rs"]
  mod sys;
  ```

## 11.限制

- recursion_limit 设置某些编译时操作的最大递归限制。默认rustc值为128。
- type_length_limit 设置了在单态化期间构造具体类型时进行类型替换的最大数量。默认rustc值为1048576。

## 12.运行时

- panic_handler 设置处理恐慌的功能。
- global_allocator 设置全局内存分配器。
- windows_subsystem 指定要链接的Windows子系统。

## 13.语言特性

- feature: 在非稳定版的Rust编译器中，可以使用一些不稳定的功能，比如一些还在讨论中的新功能、正在实现中的功能等。Rust编译器提供一个应用于Crate的属性feature来启用这些不稳定的功能。

## 14.类型系统

- non_exhaustive: 表示类型将来会添加更多字段/变量。

# 应用

## 应用于模块的属性

- no_implicit_prelude
- path

## 应用于crate的属性

- crate_name

- crate_type

- feature

- no_builtins: 去掉内建函数。

- no_main: 不生成main这个符号，当你需要链接的库中已经定义了main函数时会用到。

- no_start: 不链接自带的native库。

- no_std: 不链接自带的std库。

- plugin: 加载编译器插件，一般用于加载自定义的编译器插件库。

  ```
        #![plugin(foo, bar)] // 加载foo, bar两个插件
        #![plugin(foo(arg1, arg2))] // 或者给插件传入必要的初始化参数
  复制代码
  ```

- recursive_limit: 设置在编译期最大的递归层级。比如自动解引用、递归定义的宏等。默认设置是`#![recursive_limit = "64"]`

## 应用于函数的属性

- main: 把这个函数作为入口函数，替代fn main，会被入口函数（Entry Point）调用。
- plugin_registrar: 编写编译器插件时用，用于定义编译器插件的入口函数。
- start: 把这个函数作为入口函数（Entry Point），改写 start language item。不再执行标准库中的初始化流程
- test
- should_panic
- cold

## 应用于FFI的属性

- extern块可以应用以下属性

  - link_args: 指定链接时给链接器的参数，平台和实现相关。
  - link

- 在extern块里面，可以使用

  - link_name
  - linkage: 对于全局变量，可以指定一些LLVM的链接类型（ http://llvm.org/docs/LangRef.html#linkage-types ）。

- 对于enum类型，可以使用

  - repr: 目前接受C，C表示兼容C ABI。

    ```rust
      #[repr(C)]
      enum eType {
          Operator,
          Indicator,
      }
    ```

- 对于struct类型，可以使用

  - repr: 目前只接受C和packed，C表示结构体兼容C ABI，packed表示移除字段间的padding。