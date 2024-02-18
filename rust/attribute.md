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