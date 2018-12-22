<template>
	<div id="he">
		序号：
		<input type="text" v-model="arritem.index">
		名称：
		<input type="text" v-model="arritem.name">
		流水方式：
		<input type="text" v-model="arritem.key">
		描述：
		<input type="text" v-model="arritem.describ">
		状态：
		<input type="text" v-model="arritem.status">
		&nbsp;&nbsp;&nbsp;
		<button @click="insert" style="backgroundColor:green;fontSize:20px">insert</button><br>
	</div>
</template>
<script>
import bus from './Bus.vue'
export default{
	data(){
		return {
			arritem:{},
			index:1
		}
	},
	created(){
		this.arritem.index=this.index;
	},
	methods:{
		insert(){
			bus.$emit('SendMessage',this.arritem);
			//console.log(this.arritem)
			this.arritem={};
			this.index+=1;
			this.arritem.index=this.index;
		},
		demo(){
			console.log(bus)
		}
	}
}
</script>
<style scoped>
/*div{
	text-align:center
}*/
</style>
