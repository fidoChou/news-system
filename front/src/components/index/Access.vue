<template>
	<aside class="access-panle fx-v-center" :class="{'show':showAccess}">
	  	<el-tabs v-model="active" class="news-accces-tab ">
	    	<el-tab-pane label="登录" name="first">
	    		<login @hideAccess="hideAccess"></login>
	    	</el-tab-pane>
	    	<el-tab-pane label="注册" name="second">
	    		<regester  @hideAccess="hideAccess"></regester>
	    	</el-tab-pane>
	  	</el-tabs>
	</aside>
</template>
<script>
import API from '../../api/api.js'
import login from './Login.vue'
import regester from './Regester.vue'
export default{
	data(){
		return {
			show : false,
			showList: false,
			active:"first"
		}
	},
	props:['showAccess'],
	methods:{
		access(){
			this.show = !this.show
		},
		showLists(){
			this.showList = !this.showList
		},
		hideAccess(){
			let res = this.$emit("hideAccess");
		}
	},
	components:{
		login,
		regester
	}

}
</script>
<style lang="less" scoped>
@import url('../../assets/less/CV.less');
.news-title{
	width: 100%;
	height: 50px;
	position: relative;
	transition: all .3s ease;
	border-bottom: 1px solid rgba(0,0,0,.25);
	box-shadow: 0 0 4px rgba(0,0,0,.25);
}

.news-accces-tab {
	margin-top: 50px;
	width: 80%;
}
.access-panle {
	width: 300px;
	background: @ColorF;
	top: 0;
	right: -300px;
	position: fixed;
	transition: all .3s ease;
	bottom: 0;
	z-index: 119;
}
.show {
    transform: translateX(-300px);
    z-index: 120;
}
.trans-left {
	transform:translateX(-300px)
}
.trans-right {
	transform:translateX(300px)	
}
.cover{
	position: fixed;
	top:0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0,0,0,.4);
}
</style>