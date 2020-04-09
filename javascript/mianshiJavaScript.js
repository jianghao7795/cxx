// 防抖
function debounce(fn) {
    let tiemout = null

    return function() {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn.apply(this, arguments);
        }, 500)
    };
}

function sayHi() {
    console.log('防抖成功')
}


var inp = document.getElementById('inp');
inp.addEventListener('input', debounce(sayHi)) // 防抖

// 节流
function throttle(fn) {
    let canRun = true; // 通过闭包保存一个标记
    return function () {
        if (!canRun) return; // 在函数开头判断标记是否为true，不为true则return
        canRun = false; // 立即设置为false
        setTimeout(() => { // 将外部传入的函数的执行放在setTimeout中
          fn.apply(this, arguments);
          // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。当定时器没有执行的时候标记永远是false，在开头被return掉
          canRun = true;
        }, 500);
    };
}
function sayHi(e) {
  console.log(e.target.innerWidth, e.target.innerHeight);
}
window.addEventListener('resize', throttle(sayHi));

// 异步笔试题，请写出下面代码的运行结果
async function async1() {
    console.log('async1 start'); // 1
    await async2();
    console.log('async1 end'); // 5
}
async function async2() {
    console.log('async2'); // 2
}
console.log('script start'); //0
setTimeout(function() {
    console.log('setTimeout');
}, 0)
async1();
new Promise(function(resolve) {
    console.log('promise1'); //3
    resolve();
}).then(function() {
    console.log('promise2'); // 6
});
console.log('script end'); //4

// Set 和 Map 主要的应用场景在于 数据重组 和 数据储存

// Set 是一种叫做集合的数据结构，Map 是一种叫做字典的数据结构
//
//
//
// Vue 的父组件和子组件生命周期钩子执行顺序是什么
// 加载渲染过程 父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount->子mounted->父mounted
// 子组件更新过程 父beforeUpdate->子beforeUpdate->子updated->父updated
// 父组件更新过程 父beforeUpdate->父updated
// 销毁过程 父beforeDestroy->子beforeDestroy->子destroyed->父destroyed
