```tex
// 虽然不是那么明显，但是 Rust 编程语言从根本上讲就是关于赋能的：无论你现在编写哪种代码，Rust 都能让你在更广泛的编程领域中比以前走得更远，更自信。
```

## Rust 数据类型

### 整数类型

# [格式化输出](https://rustwiki.org/zh-CN/rust-by-example/hello/print.html#格式化输出)

打印操作由 [`std::fmt`](https://rustwiki.org/zh-CN/std/fmt/) 里面所定义的一系列[宏](https://rustwiki.org/zh-CN/rust-by-example/macros.html)来处理，包括：

- `format!`：将格式化文本写到[字符串](https://rustwiki.org/zh-CN/rust-by-example/std/str.html)。
- `print!`：与 `format!` 类似，但将文本输出到控制台（io::stdout）。
- `println!`: 与 `print!` 类似，但输出结果追加一个换行符。
- `eprint!`：与 `print!` 类似，但将文本输出到标准错误（io::stderr）。
- `eprintln!`：与 `eprint!` 类似，但输出结果追加一个换行符。

















| 长度       | 有符号类型 | 无符号类型 |
| ---------- | ---------- | ---------- |
| 8 位       | `i8`       | `u8`       |
| 16 位      | `i16`      | `u16`      |
| 32 位      | `i32`      | `u32`      |
| 64 位      | `i64`      | `u64`      |
| 128 位     | `i128`     | `u128`     |
| 视架构而定 | `isize`    | `usize`    |