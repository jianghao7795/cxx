# htop使用详解--史上最强（没有之一）

在管理进程时通常要借助一些工具，比较常用的就是ps和top了；不过CentOS还为我们提供了一个更加强大的工具htop，下面就来了解一下此工具的使用方法。一、安装htop     htop工具在epel源中提供，请自行配置epel源，也可以直接下载htop的源码包进行安装。 二、htop的界面操作    htop跟top一样，也是打开一个实时的监控界面，直接输入htop命令打开如下图所示界面：

![img](https://ask.qcloudimg.com/http-save/yehe-1751832/bmy64z1bxd.png)

​    在上图中将输出的界面划分成了四个区域，其中：        上左区：显示了CPU、物理内存和交换分区的信息；        上右区：显示了任务数量、平均负载和连接运行时间等信息；        进程区域：显示出当前系统中的所有进程；        操作提示区：显示了当前界面中F1-F10功能键中定义的快捷功能。            F1：显示帮助信息；

![img](https://ask.qcloudimg.com/http-save/yehe-1751832/vorbmhlllm.png)

​            F2：配置界面中的显示信息；

![img](https://ask.qcloudimg.com/http-save/yehe-1751832/t094exmi4x.png)

​            我们可以根据自己的需要修改显式模式以及想要显示的内容，比如：以LED的形式显示CPU的使用情况，并且在左边的区域添加hostname，在右边的区区域添加clock；

![img](https://ask.qcloudimg.com/http-save/yehe-1751832/6ui1h9usef.png)

​            我们也可以自定义进程区域中的显示内容：

![img](https://ask.qcloudimg.com/http-save/yehe-1751832/j2evrazxe4.png)

​            F3：进程搜索；

![img](https://ask.qcloudimg.com/http-save/yehe-1751832/kse67o6603.png)

​            F4：进程过滤器；            从上面的结果可以看出search和filter的区别：            search会将光标定位到符合条件的进程上，通过F3键进行逐个查找；而filter会直接将符合条件的进程筛选出来。            search和filter都使用ESC键来取消功能。            F5：显示进程树；

![img](https://ask.qcloudimg.com/http-save/yehe-1751832/1icpa49ook.png)

​            F6：排序；

![img](https://ask.qcloudimg.com/http-save/yehe-1751832/4ifmf3ynf7.png)

​            F7：减小nice值；            F8：增加nice值；                直接修改光标选取的进程的nice值：

![img](https://ask.qcloudimg.com/http-save/yehe-1751832/5hrcoq45f3.png)

​            F9：杀掉指定进程；

![img](https://ask.qcloudimg.com/http-save/yehe-1751832/a4xs1lpqvq.png)

​            F10：退出htop。    空格键：用于标记选中的进程，用于实现对多个进程同时操作；

![img](https://ask.qcloudimg.com/http-save/yehe-1751832/4klnv8z12m.png)

​    U：取消所有选中的进程；    s：显示光标所在进程执行的系统调用；        下面显示的为init的系统调用信息：    l：显示光标所在进程的文件列表; 

![img](https://ask.qcloudimg.com/http-save/yehe-1751832/w2pmrv4gjd.png)

​    I：对排序的结果进行反转显示；        例如，对PPID进行排序后，按‘I’键将会对PPID的排序结果进行反向排序。    a：绑定进程到指定的CPU；    u：显示指定用户的进程；

![img](https://ask.qcloudimg.com/http-save/yehe-1751832/czzpq3i68t.png)

​    M：按照内存使用百分比排序，对应MEM%列；    P：按照CPU使用百分比排序，对应CPU%列；    T：按照进程运行的时间排序，对应TIME+列；    K：隐藏内核线程；    H：隐藏用户线程；    #：快速定位光标到PID所指定的进程上。       三、htop相关选项    -d：设置刷新时间，单位为秒；     -C：设置界面为无颜色；

![img](https://ask.qcloudimg.com/http-save/yehe-1751832/95u3r5e4z5.png)

​    -u：显示指定用户的进程；

![img](https://ask.qcloudimg.com/http-save/yehe-1751832/gxwx2bp6op.png)

![img](https://ask.qcloudimg.com/http-save/yehe-1751832/zefhs5731r.png)

​    -s：以指定的列排序；

![img](https://ask.qcloudimg.com/http-save/yehe-1751832/qn85hxar4o.png)

![img](https://ask.qcloudimg.com/http-save/yehe-1751832/j5bphqei5u.png)