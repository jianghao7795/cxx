```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<title>rendre</title>
		<link rel="stylesheet" href="./index.css" type="text/css" />
	</head>
	<style>
		* {
			margin: 0;
			padding: 0;
		}
		.box > .item {
			width: 50px;
			height: 50px;
			background-color: bisque;
			text-align: center;
			line-height: 50px;
		}
		.box {
			display: flex;
			/* flex-direction: row; */
			/* flex-direction: row-reverse column-reverse; */
		}
	</style>
	<body>
		<div class="box">
			<div class="item">1</div>
			<div class="item">2</div>
			<div class="item">3</div>
			<div class="item">4</div>
			<div class="item">5</div>
			<div class="item">6</div>
		</div>
	</body>
</html>
```
