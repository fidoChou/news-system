<template>
    <div>
      	<el-form :model="ruleForm" :rules="rules" ref="ruleForm"> 
          <el-form-item  prop="username" >
          		<el-input type="text"placeholder="用户名" v-model="ruleForm.username" auto-complete="off"></el-input>
        	</el-form-item>        
        	<el-form-item prop="password">
          		<el-input type="password" placeholder="密码" v-model="ruleForm.password" auto-complete="off"></el-input>
        	</el-form-item>
        
        	<el-form-item class="fx-v-btw">
          		<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          		<el-button @click="resetForm('ruleForm')">重置</el-button>
        	</el-form-item>
      	</el-form>
    </div>
</template>
<script>
import Storage from '../../assets/js/storage.js'
import API from '../../api/api.js'
  export default{
    name:"login",
    data(){
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        	ruleForm: {
          		password: '',
          		username:"",
        	},
        	rules: {
          		password: [
            		{ validator: validatePass, trigger: 'blur',required: true},
          		],
          		username: [
             		{ required: true, message: '请输入用户名', trigger: 'change' }
          		]
        	}
      	};
    },
    methods:{
      	submitForm(formName){
	        this.$refs[formName].validate((valid)=> {
	          	if (valid) {
	            	API.POST(`admin/auth/login`, {
	              		name : this.ruleForm.username,
	              		password: this.ruleForm.password
	            	}).
	            	then(res=>{
                  console.log(res)
	              		if(res.data.errorno<0 ){
	                		this.$message.error('用户名或密码错误')
	                		return;
	              		}else {
	                		this.$message.success("欢迎登录本系统")
                      this.$router.push({path:"/index/"})
                      this.$emit(`hideAccess`)
	                		Storage.set('userInfo',JSON.stringify(res.data.data[0]));
	               	   }
	           		})
	          	}else {
	            	this.$message.error('请正确填写表单信息');
	            	return false;
	         	}
	        });
      	},
      	resetForm(formName){
        	this.$refs[formName].resetFields();
      	}
    },
}
</script>
<style lang="less" scoped>
// @import url('../../assets/less/CV.less');
</style>