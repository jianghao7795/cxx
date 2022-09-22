* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #453a94;
}
li {
  list-style: none;
}

.box {
  width: 1000px;
  height: 320px;
  margin: 200px auto;
  overflow: hidden;
  transition: all 0.5s;
}

.box li {
  float: left;
  width: 200px;
  height: 320px;
  transition: all 0.5s;
}

.box li text {
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: 16px;
  color: #fff;
  width: 100%;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background-color: #eee;
}

.box:hover li {
  width: 64px;
}

.box li:hover {
  width: 640px;
}
