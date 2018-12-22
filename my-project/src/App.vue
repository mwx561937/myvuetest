<template>
	<div id="app">
		<h1>{{msg}}</h1>
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
