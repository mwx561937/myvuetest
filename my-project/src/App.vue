<template>
	<div id="app">
		<h1>{{msg}}</h1>
		<login></login>
		<login></login>
		<login></login>
		<login></login>
		<el-row>
			<el-button>moren</el-button>
			<el-button type="primary">主要按钮</el-button>
			<el-button type="success">主要按钮</el-button>
			<el-button type="info">主要按钮</el-button>
			<el-button type="danger">主要按钮</el-button>
		</el-row>
		<el-row>
			<el-button plain disabled>pusuanniu</el-button>
			<el-button type="primary" icon="el-icon-edit"></el-button>
			<el-button type="warning" icon="el-icon-search">搜索</el-button>
			<el-button type="danger" :loading="true">拉屎中</el-button>
			<el-button type="primary" :loading="false">拉屎已完成</el-button>
		</el-row>
		<home id="home"></home>
		<hr>
		<list id="list"></list>
	</div>
</template>

<script>
import home from './components/home.vue'
import list from './components/list.vue'
export default {
  name: 'app',
  data () {
    return {
			msg:'编码数据操作'
    }
  },
	components:{
		home,
		list
	},
	methods:{
		show(){
			alert('lashi')
		}
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: green;*/
  margin-top: 10px;
}

h1, h2 {
	text-align:left
}

#home {
	color:green
}
#list {
	color:purple
}

ul {
  list-style-type: none;
  padding: 0;
}

</style>
