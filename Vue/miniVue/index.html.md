```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>vue</title>
		<style>
			img {
				height: 100px;
				width: 100px;
			}
		</style>
		<script src="miniVue.js"></script>
	</head>
	<body>
		<div id="app">
			<h1>{{title}}</h1>
			<div>{{ animal.dog }}-vs-{{ animal.cat }}</div>
			input=><input type="text" v-model="content" />
			<div>{{content}}</div>
			v-text↓
			<div v-text="content"></div>
			v-html↓
			<div v-html="title2"></div>
			<ul>
				<li>{{first}}</li>
				<li>{{second}}</li>
			</ul>
			v-on=> <button v-on:click="handleclick">go go go</button>
			<br />
			@=> <button @click="handleclick2">改变内容</button>
			<br />
			{{content}}
			<br />
			<img v-bind:src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
			<img :src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
		</div>
	</body>
</html>
<script>
	new Vue({
		el: '#app',
		data: {
			title: '动物世界',
			animal: {
				dog: 'Jack',
				cat: 'Tom',
			},
			first: '第一5555',
			second: '第二3333',
			content: 'welcome to animal world',
			title2: '<h2>play game</h2>',
		},
		methods: {
			handleclick() {
				this.animal.dog = '汤姆';
				this.content = 'go go go';
			},
			handleclick2() {
				this.animal.dog = 'Tom';
				this.content = 'come on';
			},
		},
	});
</script>
```
