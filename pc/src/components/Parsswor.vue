
<template>
	<div>
		<el-form :inline="true" :model="userdata" class="demo-form-inline">
			<el-form-item label="账号">
				<el-input v-model="userdata.userid" userid="账号"></el-input>
			</el-form-item>

			<el-form-item label="密码">
				<el-input v-model="userdata.passwd" password="密码"></el-input>
			</el-form-item>

			<el-form-item>
				<el-button type="primary" @click="onSubmit">提交</el-button>
			</el-form-item>
		</el-form>

	</div>
</template>
<script>
	import Vue from 'vue'
	export default {
		name: "Parsswor",
		data() {
			return {
				userdata: {
					userid: "",
					passwd: ""
				},
				cpage: 404,
				flag:false
			};
		},
    	methods: {
			onSubmit() {
				let _this=this
				console.log(this.userdata.userid);
				console.log(this.userdata.passwd)
				//  发送Axios请求  
                console.log(this.userdata)
				this.$http.post('http://192.168.7.170:8088/user', this.userdata)
					.then((response) => {
						console.log(response.data.flag);
						this.flag = response.data.flag;
						     
						if(this.flag =='true' ) {
							//转到首页
							console.log(this.flag)
							this.$router.push('/')
							
						}	
					})
					.catch(function(error) {
						console.log(222)
						console.log(error);
					});
			}
		}
	}
	//	new Vue({
	//          el: '#app',
	//          data: function () {
	//              return { name: 'btn' }
	//          },
	//          methods: {
	//              click() {
	//                  console.log('click')
	//              },
	//              onSubmit() {
	//				console.log(22)
	//				console.log(this.userdata);
	//			},
	//          }
	//		      })
</script>

<!--Add "scoped" attribute to limit CSS to this component only-->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
	}
	
	li {
		display: inline-block;
		margin: 0 10px;
	}
	
	a {
		color: #42b983;
	}
</style>