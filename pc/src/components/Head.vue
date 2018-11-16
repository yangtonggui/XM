<template>
	<div id="head">
		<img src="../assets/aa.jpg" />
		<hr />
		
		<div class="nav">
			
			<ul>
				<li class="aa">
					
					<span @click="index">最新消息</span>
					<div>
						<li></li>
						<li></li>
						<li></li>
					</div>
				</li>
				
				<li class="aa">
					<span>商品资讯</span>
					<div class="hiden">
					   <ul>
						<li><a href="#">饮品</a></li>
						<li><a href="#">咖啡精品</a></li>
						<li><a href="#">西点</a></li>
						<li><a href="#">器具</a></li>
						<li><a href="#">季节限定</a></li>
						<li><a href="#">外汇售后</a></li>
					</ul>
					</div>
				</li>
				<li class="aa">
					<span>寻找金黄</span>
					<div class="hiden">
					  <ul>
						<li><a href="#">门市调查</a></li>
					  </ul>
					</div>
				</li>
				
				<li class="aa">
					<span>加盟售后	</span>
					<div class="hiden">
						<a href="#"></a>
					</div>
				
				</li>
				<li class="aa">
					<span>金藏庄园</span>
					<div class="hiden">
						<li><a href="#">影音售后</a></li>
						<li><a href="#">售后365</a></li>
					</div>
				</li>
				<li class="aa">
					<span>会员售后</span>
					<div class="hiden">
						<li><a href="#">加入会员</a></li>
						<li><a href="#">会员反馈</a></li>
						<li><a href="#">会员条款</a></li>
					</div>
0				</li>
				<li class="aa">
					<span>联络我们</span>
					<div class="hiden">
						<li><a href="#">售后服务</a></li>
						<li><a href="#">联系我们</a></li>
						<li><a  @click="go">常见问题</a></li>
					</div>
				</li>
			</ul>
		</div>
		<hr />
	</div>
</template>

<script>
	 export default{
	 	name:'Head',
	 	methods:{
	 		go(){
	 			this.$router.push('/conmmon')
	 		},
	 		index(){
	 			this.$router.push('/')
	 		}
	 	}
	 }
</script>
 
<style scoped>
	*{
		padding: 0;
		margin: 0;
	}
	li{
		list-style: none;
	}
	#head .nav{
		height: 50px;
	}
	.nav{
		position: relative;
		height: 50px;
		width: 80%;
	}
	.nav .aa{
		display: inline-block;
		width: 120px;
	/*	height:300px;*/
		/*overflow: hidden;*/
		position: relative;
		padding: 10px;
	
		
	}
	.hiden li{
		margin: 20px;
		
	}
 .aa:hover .hiden{
    	display: block;
    	
    }
    .aa:hover span{
    	color: #ffc107;
    }	
    .hiden{
    	width: 120px;
    	height: 200px;
    	background-color: bisque;
    	position: absolute;
    	top:30px;
    	display: none;
    	z-index: 999;
    	overflow: hidden;
    	
    	background-color: #cca46a;
    }
    .hiden li a{
    	text-decoration: none;
    	color: #FFFFFF;
    }
    .hiden li a:hover{
    	background-color:#dddddd;
    }
    
</style>