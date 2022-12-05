p:before{content: "hello "}
p:after{content: "you are handsome"}

a {
  position: relative;
  display: inline-block;
  outline: none;
  text-decoration: none;
  color: #000;
  font-size: 32px;
  padding: 5px 10px;
}

a:hover::before, a:hover::after { position: absolute; }
a:hover::before { content: "\5B"; left: -10px; }
a:hover::after { content: "\5D"; right:  -10px; }

img{
	min-height: 50px;
	position: relative;
}
img:before {
	content: " ";
	display: block;
	position: absolute;
	top: -10px;
	left: 0;
	height: calc(100% + 10px);
	width: 100%;
	background-color: rgb(230, 230, 230, 0.65);
	border: 2px dotted rgb(200, 200, 200, 0.65);
	border-radius: 5px;
}
img:after{
	content: '\f127'," Broken Image of ", attr(alt);
	display: block;
	font-size: 16px;
	font-style: normal;
	font-family: FontAwesome;
	color: rgb(100,100,100);
	position: absolute;
	top: 5px;
	left: 0;
	width: 100%;
	text-align: center;
}