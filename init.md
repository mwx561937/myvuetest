## 一准备工作

### 1.初始化项目

vue init webpack itany
cd itany
cnpm install
cnpm less less-loader -D
cnpm install vuex -S
cnpm install elementui -D
npm run dev

### 2.项目资源
|-reset.css
|-data.json

### 3.创建目录结构
首先清除项目中的部分内容
创建如下目录结构：

|-static
   |-css
	    |-reset.css
### 4.配置API接口，模拟后台数据
使用express框架启动一个Node服务器，配置API接口，
