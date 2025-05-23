```less
* {
  /* 页面初始化 清除页面元素原有的内外边距 */
  padding: 0;
  margin: 0;
}
body {
  height: 100vh;
  /* 背景渐变色 */
  background: linear-gradient(#99f, #f99);
}
body,
.navbar,
.navbar ul {
  /* 三个元素都需要弹性布局 写一块 */
  display: flex;
  justify-content: center;
  align-items: center;
}
.navbar {
  /* 相对定位 */
  position: relative;
  padding: 20px;
  border-radius: 50px;
  background-color: #fff;
}
.navbar input {
  width: 40px;
  height: 40px;
  /* 鼠标移入变小手 */
  cursor: pointer;
  /* 不透明度为0 直接变透明 */
  opacity: 0;
}
.navbar span {
  /* 绝对定位 */
  position: absolute;
  left: 25px;
  /* 现将两条线都放到一起 然后单独设置第二条线的位置 calc方法可以自动计算数值 */
  top: calc(50% - 10px);
  width: 30px;
  height: 4px;
  border-radius: 15px;
  background-color: #999;
  /* 这里在解决一个问题 现在span覆盖着复选框 我们鼠标放到span点不中复选框  写这个属性就能解决这个问题 即便鼠标放到span上点击也能够选中或者未选中复选框*/
  pointer-events: none;
  /* 收回来的时候过渡刚好相反 */
  transition: transform 0.3s ease-in-out, top 0.3s ease-in-out 0.3s;
}
/* 因为第二条线在navbar这个元素内的第三个位置 所以这里写3 */
.navbar span:nth-child(3) {
  top: calc(50% + 6px);
}
.navbar ul {
  width: 0;
  /* 溢出隐藏 */
  overflow: hidden;
  /* 现在这个盒子是扁的 待会解决这个问题 */
  /* 这个问题出现的原因是 文字被换行显示了 两个汉字竖着排列了 就撑大盒子了 */
  /* 这个属性可以让文字就在一行排列 不换行 */
  white-space: nowrap;
  transition: all 0.5s;
}
.navbar ul li {
  list-style: none;
  margin: 0 15px;
}
.navbar ul li a {
  /* 取消下划线 */
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  color: #333;
}
.navbar ul li a:hover {
  color: #fb7299;
}
/* :checked是当选中的复选框的时候 ~ 是兄弟选择器 查找同一级的ul */
.navbar input:checked ~ ul {
  width: 350px;
}
.navbar input:checked ~ span:nth-child(2) {
  top: calc(50% - 2px);
  transform: rotate(-45deg);
  background-color: #fb7299;
  /* 现在速度太快了 加个过渡 */
  /* 这是先执行top 然后.3s后执行transform */
  transition: top 0.3s ease-in-out, transform 0.3s ease-in-out 0.3s;
}
.navbar input:checked ~ span:nth-child(3) {
  top: calc(50% - 2px);
  transform: rotate(45deg);
  background-color: #fb7299;
  transition: top 0.3s ease-in-out, transform 0.3s ease-in-out 0.3s;
}
```