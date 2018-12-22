<template>
	<div>
		<table width=100%>
			<tr >
				<td width=19%>序号</td>
				<td width=19%>名称</td>
				<td width=19%>流水方式</td>
				<td width=19%>描述</td>
				<td width=19%>状态</td >
				<button style="opacity:0.0;">delete</button>


			</tr>
		</table>
		<hr>
		<table width=100% border="1">
			<tr @mouseover.stop="mover($event)" @mouseleave.stop="mleave($event)" :style="attr" v-for="(item,index) in arr" >
				<td width=19%>{{item.index}}</td>
				<td width=19%>{{item.name}}</td>
				<td width=19%>{{item.key}}</td>
				<td width=19%>{{item.describ}}</td>
				<td width=19%>{{item.status}}</td>
				<td>
					<button  @click="del(index)" style="backgroundColor:red;">delete</button>
				</td>

				
			</tr>
		</table>
	</div>
</template>
<script>
import bus from './Bus.vue'
export default {
	data(){
		return{
			attr:"",
			arr:[],
			arritem:{},
			show:false
		}
	},
	methods:{
		test(e){
			//console.log('test')
			//console.log(e);
		},
		del(i){
			this.arr.splice(i,1)
		},
		mover(e){

			//console.log(e);
			if(e.target.nodeName=="BUTTON")
				e.target.parentElement.parentElement.style.backgroundColor="#a0a0a0";
			else
				e.target.parentElement.style.backgroundColor="#a0a0a0";
		},
		mleave(e){
			//console.log(e.target);
			if(e.target.nodeName=="BUTTON")
			{
				//console.log(e.target.parentElement);
				e.target.parentElement.style.backgroundColor="";
			}
			else
				e.target.style.backgroundColor="";
		}
	},
	mounted(){
		bus.$on('SendMessage',msg=>{
			//console.log(msg);
			for(var i=0;i<this.arr.length;++i) {
				if(msg.index == this.arr[i].index) {
					alert("Already existed!");
					return;
				}
			}
			this.arr.push(msg);
			//console.log(this.arritem);
		})
	}
}
</script>
<style scoped>
table{
	table-layout:fixed;
	word-wrap:break-word;
}
button{
	height:100%;
	width:100%;
}
</style>
