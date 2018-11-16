<template>
	<div class="hello">
		<img src="../assets/a1.jpg" alt="" style="width: 100%;"/>
		<h1>最新消息</h1>
		<br />
		<br />
		<el-tabs v-model="activeName" @tab-click="handleClick">
			               <!--全部--> 
			<el-tab-pane label="全部" name="first">
				<div class="index1">
					<img :src='msg' alt="" />
					<img :src="msg1" />
				</div>
				       <!--实现分页标签-->
				<div class="block">
					<el-pagination @current-change='changePage' :current-page='currentPage' layout="prev, pager, next" :total="30">
					</el-pagination>
				</div>
				
			</el-tab-pane>
                    <!--活动售品-->
			<el-tab-pane label="活动售品" name="second">
			<div class="index1">
					<img :src='msg2' alt="" />
					<img :src="msg3" />
				</div>
				       <!--实现分页标签-->
				<div class="block">
					<el-pagination @current-change='changePage' :current-page='currentPage' layout="prev, pager, next" :total="20">
					</el-pagination>
				</div>
				
			
			</el-tab-pane>
			<el-tab-pane label="媒体报道" name="third">
				
				
			</el-tab-pane>
			<el-tab-pane label="金黄公告" name="fourth">
				
			</el-tab-pane>
		</el-tabs>

		<el-button>xxx</el-button>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				msg: require('../assets/a2.jpg'),
				msg1: require('../assets/a3.jpg'),
				msg2: require('../assets/a7.jpg'),
				msg3: require('../assets/a8.jpg'),
				activeName: 'second',
				currentPage: 1,
				//				array: [{
				//						imgUrl: require()
				//					},
				//					{
				//						imgUrl: require()
				//					}
				//				]
			}
		},

		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			},
			changePage(page) {
				this.currentPage = page;
				if(page == 1) {
					  //	this.$router.push('/one')
					this.msg = require('../assets/a2.jpg');
					this.msg1 = require('../assets/a3.jpg');
					this.msg2= require('../assets/a7.jpg'),
				  this.msg3= require('../assets/a8.jpg')
				} 
				else if(page == 2) {
					//					this.$router.push('/two')
					this.msg = require('../assets/a4.jpg');
					this.msg1 = require('../assets/a5.jpg');
					this.msg2= require('../assets/a9.jpg'),
				  this.msg3= require('../assets/a10.jpg')
				} 
				else {
					//	this.$router.push('/three')
					this.msg = require('../assets/a6.jpg');
					this.msg1 = '';
				}

				console.log(this.currentPage);
			}
		}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .index1 img{
    	width: 1200px;
    }
</style>