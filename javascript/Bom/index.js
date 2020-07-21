// prompt("你叫什么？",123)//第一个参数为弹框提示语，第二个为输入框的默认值
prompt('yiyiyi', 345345)

// alert(111)alert():弹窗输出
//
// confirm("");带确定、取消的提示框，分别返回true、false
//
// close();关闭当前浏览器窗口。
//
// open();打开一个新窗口
// setTimeout();延时器，表示延时多少ms执行一个函数。
// 参数一：可以传入匿名函数，也可以传入函数名。
// 参数二：延时毫秒数
// 参数三~参数n：传给回调函数的参数。
// 例如：
// setTimeout(function(num1,num2){},2000,"haha",123);
// setInterval();定时器，表示每隔多少毫秒执行一遍，其他方法与setTimeout()完全相同。
// clearInterval和clearTimeout():分别清除定时器，延时器。

// event：事件句柄，代表事件的状态，比如事件在其中发生的元素、键盘按键的状态、鼠标的位置、鼠标按钮的状态。简单说就是事件在发生时进行的一个操作。
// 常用方法：

// onblur; 元素失去焦点。
// onchange; 域的内容被改变。
// onclick; 当用户点击某个对象时调用的事件句柄。
// onfocus; 元素获得焦点。
// onmousedown;鼠标按钮被按下。
// onmousemove;鼠标被移动。
// onmouseout;鼠标从某元素移开。
// onmouseover;鼠标移到某元素之上。
/**
 *3、History：里面封装着当前窗口成功访问过的url历史
 *
 * length; 查看浏览器的历史访问的网页的个数；
back(); 加载history列表中的前一个url
forward();加载history列表中的下一个url
go(); 加载history列表中的某个具体页面
go(0);相当于刷新页面
 */
// location:里面封装当前窗口打开的url
console.log(location);
console.log(location.href);//完整的URL路径
console.log(location.protocol);//协议名
console.log(location.hostname);//主机名
console.log(location.port);//端口号
console.log(location.host);//主机名+端口号
console.log(location.pathname);//文件路径
console.log(location.search);//从？开始的参数部分
console.log(location.hash);//从#开始的锚点部分

// screen : 显示设备的信息
//
// height;屏幕的像素高度
// width;屏幕的像素宽度
// availHeight;屏幕的像素高度减去系统部件高度之后的值(只读)
// availWidth;屏幕的像素宽度减去系统部件宽度之后的值(只读)
// availLeft;未被系统部件占用的最左侧的像素值(只读)[chrome和firefox返回0，IE不支持]
// availTop;未被系统部件占用的最上方的像素值(只读)[chrome和firefox返回0，IE不支持]


// 常用属性：
// window.scrollX，window.scrollY    滚动条 卷曲距离
// 获取浏览器组件对象
// window.locationbar        地址栏对象
// window.menubar        菜单栏对象
// window.scrollbars        窗口的滚动条对象
// window.toolbar        工具栏对象
// window.statusbar        状态栏对象
// window.personalbar        用户安装的个人工具栏对象
// 全局对象属性：
// window.document        指向 document   对象
// window.location       指向 Location对象，用于获取当前窗口的 URL 信息。它等同于 document.location 属性
// window.navigator        指向 Navigator 对象，用于获取环境信息
// window.history        指向 History 对象，表示浏览器的浏览历史
// window.localStorage        指向本地储存的localStorage 数据
// window.sessionStorage       指向本地储存的sessionStorage 数据
// window.console        指向 console 对象，用于操作控制台
// window.screen        指向 Screen 对象，表示屏幕信息
