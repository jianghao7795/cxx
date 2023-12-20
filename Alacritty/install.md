Ubuntu:

```shell
apt install cmake pkg-config libfreetype6-dev libfontconfig1-dev libxcb-xfixes0-dev libxkbcommon-dev python3
```

fedora:

```shell
dnf install cmake freetype-devel fontconfig-devel libxcb-devel libxkbcommon-devel g++
```

安装rust环境

编译：

```shell
# Force support for only Wayland
cargo build --release --no-default-features --features=wayland

# Force support for only X11
cargo build --release --no-default-features --features=x11
```

增加Desktop图标

```shell
sudo cp target/release/alacritty /usr/local/bin # or anywhere else in $PATH
sudo cp extra/logo/alacritty-term.svg /usr/share/pixmaps/Alacritty.svg
sudo desktop-file-install extra/linux/Alacritty.desktop
sudo update-desktop-database
```

