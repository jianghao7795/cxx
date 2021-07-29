传统的盒模型display+position+float方案针对一些特殊的布局较考验程序员的功力，比如`垂直居中`（还记得面试官第一个问题就是：骚年，茴字有几种写法？垂直居中有几种方法？）。

###### 1、Flex布局全属性介绍

如果一个元素指定了`display:flex`，我们就说这个元素指定了Flex布局（弹性布局），并且称它为`容器`，容器内的子元素成为`item项`，后面都这么称呼他们。任何元素都能指定为Flex布局，行内元素可以通过`display:inline-flex`来指定。指定了Flex布局后，容器的所有子元素的`float`、`clear`和`vertical-align`属性都将失效。
 对于下面的html：
 `<div class="box">`
   `<div class="item1"></div>`
   `<div class="item2"></div>`
   `<div class="item3"></div>`
 `</div>`
 容器指定了Flex布局后，总共只有下面6个属性可搭配使用：
 `.box {`
   `display: flex;`
   `flex-direction: row（默认） | row-reverse | column | column-reverse;`
   `flex-wrap: nowrap（默认） | wrap | wrap-reverse;`
   `flex-flow: <flex-direction> || <flex-wrap>（仅仅是前面两个属性的简写形式，可先忽略）;`
   `justify-content: flex-start（默认） | flex-end | center | space-between | space-around | space-evenly;`
   `align-items: flex-start | flex-end | center | baseline | stretch（默认）;`
   `align-content: flex-start | flex-end | center | space-between | space-around | stretch（默认）;`
 `}`
 `flex-direction`：定义了主轴的方向。
 `flex-wrap`：如果一条轴线排不下，item项换行的方式。
 `justify-content`：定义了item项在主轴上的对齐方式。
 `align-items`：定义了item项在副轴上的对齐方式。
 `align-content`：定义了多根轴线的对齐方式。如果item项只有一根轴线，该属性不起作用。
 讨论6个属性前，先要了解Flex布局的隐藏概念`主轴`和`副轴`，很简单，它们表示容器内item项的排列方向。主轴默认为水平从左到右，副轴默认为垂直从上到下。没错，主轴的方向就是通过`flex-direction`属性设置的，Flex布局没有设置副轴的属性，所以，设置主轴为水平`row`时，副轴自动变为垂直`column`，反之，设置主轴为垂直`column`时，副轴自动变为水平`row`。

###### 1.1 flex-direction属性

表示主轴的方向。
 `.box{`
   `flex-direction：row | row-reverse | column | column-reverse;`
 `}`
 有4个可选值：
 `1、row`：主轴从左到右。
 `2、row-reverse`：主轴从右到左。
 `3、column`：主轴从上到下。
 `4、column-reverse`：主轴从下到上。
 假设容器共有5个item项，效果如下图，注意：指定了Flex布局后item项之间是没有间隔的：

![img](https:////upload-images.jianshu.io/upload_images/11084043-7329d38b2e3cb091.png?imageMogr2/auto-orient/strip|imageView2/2/w/949/format/webp)



###### 1.2 justify-content属性

表示item项在主轴上的对齐方式。
 `.box {`
   `justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;`
 `}`
 有6个可选值：
 `1、flex-start`：主轴头对齐。主轴是row则为左对齐，主轴是column则为顶部对齐。
 `2、flex-end`：主轴尾对齐。同上。
 `3、center`：居中。
 `4、space-between`： 两端对齐，item项之间的间隔相等。
 `5、space-around`：每个item项两侧的间隔相等。所以，item项之间的间隔比item项与边框的间隔大一倍。
 `6、space-evenly;`：等分对齐。item之间的间隔和item与边框的间隔一致。
 假设容器共有5个item项，效果如下：

![img](https:////upload-images.jianshu.io/upload_images/11084043-68864fed1a02da61.png?imageMogr2/auto-orient/strip|imageView2/2/w/915/format/webp)



![img](https:////upload-images.jianshu.io/upload_images/11084043-6e783b86d5f2a170.png?imageMogr2/auto-orient/strip|imageView2/2/w/907/format/webp)


 主轴为row-reverser和column-reverse两个就不展示了。



###### 1.3 align-items属性

表示items项在副轴方向上的对齐方式。刚开始直接上手弹性布局的时候，快被它搞糊涂了，justify-content是主轴对齐方式，很自然的想到align-content是副轴对齐方式，对仗工整啊，可align-items才是对齐方式，align-content有这个属性，却是别的含义。
 `.box {`
   `align-items: flex-start | flex-end | center | baseline | stretch（默认值）;`
 `}`
 有5个可选值：
 `1、flex-start`：副轴头对齐。副轴是row则为左对齐，副轴是column则为顶部对齐。
 `2、flex-end`：副轴尾对齐。同上。
 `3、center`：居中。
 `4、baseline`：以各个 item项的第一行文字的基线对齐。
 `5、stretch`：如果item项未设置高度或设为auto，将占满整个容器的高度。
 假设容器共有3个尺寸不一的item项，效果如下：

![img](https:////upload-images.jianshu.io/upload_images/11084043-4f5032fb1111b77a.png?imageMogr2/auto-orient/strip|imageView2/2/w/934/format/webp)



###### 1.4 flex-wrap和align-content属性

flex-wrap表示items项在主轴方向上的换行方式。
 align-content表示多根轴线时的对齐方式，如果只有一根轴线（不换行）则此属性无效。
 `.box {`
   `flex-wrap: nowrap（默认值） | wrap | wrap-reverse;`
   `align-content: flex-start | flex-end | center | space-between | space-around | stretch（默认值）;`
 `}`
 `1、nowrap`：不换行，item项总宽度超出容器宽度时，item项会被压缩。
 `2、wrap`：换行，且第一行在最上面。
 `3、wrap-reverse`：换行，且第一行在最下面。
 `align-content`和`align-items`可选值的意义相同，只是没有`space-baseline`值。
 假设容器共有11个尺寸不一的item项，效果如下：

![img](https:////upload-images.jianshu.io/upload_images/11084043-791376244a4f5d4f.png?imageMogr2/auto-orient/strip|imageView2/2/w/917/format/webp)


 设置换行后11个item项被分成了两行，因此就有了两条主轴，align-content就是来设置这两条主轴的对齐方式，当主轴为水平方向时效果如下：

![img](https:////upload-images.jianshu.io/upload_images/11084043-e75cfd57d9d25ae3.png?imageMogr2/auto-orient/strip|imageView2/2/w/918/format/webp)