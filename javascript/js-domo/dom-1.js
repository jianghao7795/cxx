const div1 = document.getElementById('div1') // 获取节点

const p1 = document.createElement('p') // 新建节点

p1.innerHTML = 'this is p' // 设置节点的 html

div1.appendChild(p1) // 插入节点

const div1 = document.getElementById('div2')

// dom-3
// 将频繁操作 dom 改为一次

// 频繁
const list = document.getElementById('list')
for (let i = 0; i < 10; i++) {
	const li = document.createElement('li')
	li.innerHTML = `List item ${i}`
	list.appendChild(li)
}

// 一次
const list = document.getElementById('list')

// 创建一个 文档片段
const frag = document.createDocumentFragment()

for (let i = 0; i < 10; i++) {
	const li = document.createElement('li')
	li.innerHTML = `List item ${i}`
	// 插入frag
	frag.appendChild(li)
}

list.appendChild(frag)