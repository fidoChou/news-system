<template>
  <div>		
    <el-dialog title="新增分类" v-model="dialogFormVisible">
		  <el-form :model="form">
		    <el-form-item label="分类名称" :label-width="formLabelWidth">
		      <el-input v-model="form.name" auto-complete="off"></el-input>
		    </el-form-item>
		  </el-form>		  
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="addNew()">确 定</el-button>
		  </div>		
		</el-dialog>
    <el-button type="primary"  @click="dialogFormVisible = true">新增分类</el-button>

  </div>
</template>
<script>
import API from '../../api/api.js'
export default {
  name: 'newcategory',
   data() {
      return {
        dialogFormVisible: false,
        form: {
          name: '',
        },
        formLabelWidth: '120px'
      };
    },
    methods: {
    	addNew: function() {
        API.POST(`admin/category`,{
          name:this.form.name
        }).then(res=>{
          if(res.data.errno==0) {
            this.$message.success(`分类${this.form.name}增添成功`);
            this.$store.dispatch(`SET_CATEGORIES`);
            this.dialogFormVisible = false;
          }

        })
    	}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.categorylist{
  width: 500px;
}
</style>