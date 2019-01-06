import login from './login.vue'
export default{
	install:function(Vue){
		//Vue.component('组件的名字'，这个是变量)
		Vue.component('login',login)
	}
}
