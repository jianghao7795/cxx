## **Clap**

[Github](https://link.zhihu.com/?target=https%3A//github.com/clap-rs/clap)
[Crates.io](https://link.zhihu.com/?target=https%3A//crates.io/crates/clap)

## **前言**

狠狠狠好用的库介绍。如果你对控制台情有独钟，必然会接触到命令行传参。 对使用者而言，一份优雅的命令列表，错误提示能增进软件的好感。 但对开发者而言，维护一份复杂的命令列表是头疼的。重复的命令行参数，随着子参数增多，不会规范管理，都会是代码难以阅读。

为了提升效率，减轻负担，我强烈推荐`clap`库。

## **介绍**

`clap`是一个简单易用，功能强大的命令行参数解析库。

## **使用**

`clap` 允许多中方式指定我们的命令行。支持常规的 Rust 方法调用、宏或者YAML配置。

## **常规调用模式**

首先介绍的是Rust代码控制命令行。

```rust
extern crate clap;

use clap::{Arg, App};

fn main() {
    let matches = App::new("MayApp")
        .version("0.1")
        .author("kayryu")
        .about("Learn use Rust Crate!")
        .arg(Arg::with_name("verbose")
            .short("v")
            .multiple(true)
            .help("verbosity level"))
        .args_from_usage("-p, --path=[FILE] 'Target file you want to change'")
        .get_matches();

    if let Some(f) = matches.value_of("path") {
        println!("path : {}", f);
    }
}
```

我们使用`version()`，`author()`和 `about()`方法，提供程序的的一般信息。`clap`会自动添加两个参数：--help和--version（或他们的简短形式-h和-V）。

运行你的可执行文件，并在跟随`--help`参数。控制台输出:

```text
MayApp 0.1
kayryu
Learn use Rust Crate!

USAGE:
    u-clap.exe [FLAGS] [OPTIONS]

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information
    -v               verbosity level

OPTIONS:
    -p, --path <FILE>    Target file you want to change
```

通过`Arg::with_name()`调用创建一个简单的命名参数。此结构有一些有用的方法，例如： *`short()`: 提供一个简短的单字母表格* `required()`: 指示参数是可选的还是必需的 *`takes_value()` 和 `default_value()` 从`--option=foo`类似的参数读取值。* `multiple()` 允许重复发生;

在参数中传入`-v`，获得详细的输出，或者-vv更加详细。

```text
cargo run --bin u-clap --
zero

cargo run --bin u-clap -- -vv
more
```

对`Arg::with_name()`方式创建命令行参数显得啰嗦，也可以用`args_from_usage`函数直接从文本信息中解析。参考代码中的`Path`例子。

`clap`也支持命令分级，如下例子（来源于`clap`提供的例子）：

```text
//
//            Top Level App (git)                         TOP
//                           |
//    -----------------------------------------
//   /             |                \          \
// clone          push              add       commit      LEVEL 1
//   |           /    \            /    \       |
//  url      origin   remote    ref    name   message     LEVEL 2
//           /                  /\
//        path            remote  local                   LEVEL 3
//
```

接下去我们在前面代码的基础上动手使用子命令。

```rust
extern crate clap;

use clap::{Arg, App, SubCommand};

fn main() {
    let matches = App::new("MayApp")
        .version("0.1")
        .author("kayryu")
        .about("Learn use Rust Crate!")
        .arg(Arg::with_name("verbose")
            .short("v")
            .multiple(true)
            .help("verbosity level"))
        .args_from_usage("-p, --path=[FILE] 'Target file you want to change'")
        .subcommand(SubCommand::with_name("test")
                        .about("does testing things")
                        .arg_from_usage("-l, --list 'lists test values'"))
        .get_matches();

    if let Some(f) = matches.value_of("path") {
        println!("path : {}", f);
    }

    if let Some(matches) = matches.subcommand_matches("test") {
        if matches.is_present("list") {
            println!("Printing testing lists...");
        } else {
            println!("Not printing testing lists...");
        }
    }
}
```

通过`.subcommand()`方法传入`SubCommand`对象。 子命令的参数构造方式和主命令一致。构造好参数后通过`.subcommand_matches()`来获取匹配的子参数。进一步，我们按照相同的方式创建多层级的命令行。

## **宏模式**

如果觉得上述构建命令行的方式还不够简洁，`clap`还提供了宏构建。

```rust
#[macro_use]
extern crate clap;

let matches = clap_app!(myapp =>
        (version: "1.0")
        (author: "Kayryu")
        (about: "Learn use Rust Crate!")
        (@arg CONFIG: -c --config +takes_value "Sets a custom config file")
        (@arg debug: -d ... "Sets the level of debugging information")
        (@subcommand test =>
            (about: "controls testing features")
            (@arg verbose: -v --verbose "Print test information verbosely")
        )
    ).get_matches();

    let config = matches.value_of("CONFIG").unwrap_or("default.conf");
    println!("Value for config: {}", config);

    if let Some(matches) = matches.subcommand_matches("test") {
        if matches.is_present("verbose") {
            println!("Printing verbosely...");
        } else {
            println!("Printing normally...");
        }
    }
```

## **yaml配置模式**

如果你觉得这部分命令行配置住在代码中显示影响了代码阅读，`clap`也支持YAML读取，就是把命令行配置放在单独文件中管理。 在使用它前，需要在依赖中开启`yaml`特性。

```text
[dependencies]
clap = { version = "2.32.0", features = ["yaml"] }
```

编写命令行配置文件`yaml.yml`:

```yaml
name: MyApp
version: "1.0"
about: Learn use Rust Crate!
author: Kayryu

args:
    - verbose:
        help: verbosity level
        short: v
        multiple: true
    - path:
        help: Target file you want to change
        short: p
        takes_value: true

subcommands:
    - test:
        about: does testing things
        args:
            - list:
                help: lists test values
                short: l
```

调用代码：

```rust
let yml = load_yaml!("yaml.yml");
let matches = App::from_yaml(yml).get_matches();

let _ = match matches.occurrences_of("verbose") {
    0 => println!("zero"),
    1 => println!("one"),
    _ => println!("more")
};

if let Some(matches) = matches.subcommand_matches("test") {
    if matches.is_present("list") {
        println!("Printing testing lists...");
    } else {
        println!("Not printing testing lists...");
    }
}
```

通过`load_yaml!`宏导入先前配置好的`yaml`文件，该文件和测试代码在同一目录。

## **错误提示**

在使用中难免会输错参数，但你不用担心，`clap`会友好地提示你正确的命令用例。如果仅是命令行的个别字母打错了，它还能做到关联提示，这点库做得实在贴心。

```text
>>>>>>
cargo run --bin u-clap test

>>>>>>
error: The subcommand 'testt' wasn't recognized
        Did you mean 'test'?

If you believe you received this message in error, try re-running with 'u-clap.exe -- testt'

USAGE:
    u-clap.exe [FLAGS] [OPTIONS] [SUBCOMMAND]

For more information try --help
```