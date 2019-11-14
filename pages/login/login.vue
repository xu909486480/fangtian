<template>
	<view class="login">
		<navbar :titleName="titleName"></navbar>
		<view class="reg_all">
			<view class="all_tel">
				<input type="number" 
				placeholder="请输入手机号"
				 v-model="username" 
				 maxlength="11" 
				 focus
				 @focus="isfocus"
				/>
			</view>
			<view class="all_code">
				<input 
				type="password"
				v-model="password" 
				placeholder="请输入密码"
				  @focus="isfocus"
				  maxlength="20"
				 />
				<text @tap="forget">忘记密码?</text>
			</view>
			<view class="all_error" v-if="istext">
				<image src="../../static/login_icon1.png"></image>
				<text>{{textMsg}}</text>
			</view>
		</view>
		<view class="reg_xia">
			<view class="xia_t" @tap="loginTap">
				<text>登录</text>
			</view>
			<view class="xia_b" @tap="regTap">
				<text>去注册</text>
			</view>
		</view>
	</view>
</template>

<script>
	import navbar from '../../components/navbar/navbar.vue'
	export default {
		components:{navbar},
		data(){
			return{
				titleName:'登录',
				username:'',
				password:'',
				istext:false,     //是否提示错误
				textMsg:'',			//错误显示
				
			}
		},
		methods:{
			// 跳转忘记密码页
			forget(){
				uni.navigateTo({
					url:'../findcode/findcode'
				})
			},
			// 点击登录
			loginTap(){
				uni.request({
					url: 'http://192.168.0.101:802/api/user/login', 
						method:'POST',
						data:{
							mobile:this.username, 
							password:this.password
						},
					    success: (res) => {
							let data = res.data
							if(data.code == 0){
								this.istext = true
								this.textMsg = res.data.msg
							}else if(data.code == 1){
								console.log('登录成功，跳转到登录成功user页',data.data)
								uni.switchTab({
									url:'../my/my'
								})
							}
					    },
				}) 
			},
			// 是否获焦
			isfocus(){
				this.istext = false
			},
			// 跳转到注册页
			regTap(){
				uni.navigateTo({
					url:'../reg/reg'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.reg_all{
		padding: 0 32rpx;
		.all_tel{
			font-size: 30rpx;
			border-bottom: 2rpx solid #F5F5F5;
			padding: 20rpx 0;
			input{
				placeholder-color: #CCCCCC;
			}
		}
		.all_code{
			border-bottom: 2rpx solid #F5F5F5;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20rpx 0;
			font-size: 30rpx;
			input{
				placeholder-color: #CCCCCC;
			}
			text{
				font-size:30rpx;
				color:rgba(102,102,102,1);
				line-height:42rpx;
			}
		}
	
		
		.all_error{
			display: flex;
			margin: 20rpx 0;
			align-items: center;
			image{
				width: 30rpx;
				height: 30rpx;
			}
			text{
				margin-left: 10rpx;
				font-size:26rpx;
				color:rgba(255,60,60,1);
				line-height:36rpx;
			}
		}
	}
	
	.reg_xia{
		padding: 0 32rpx;
		margin-top: 30rpx;
		.xia_t{
			height:90rpx;
			background:linear-gradient(225deg,rgba(245,102,7,1) 0%,rgba(247,156,0,1) 100%);
			border-radius:45rpx;
			text-align: center;
			text{
				font-size:34rpx;
				color:rgba(255,255,255,1);
				line-height:90rpx;
			}
		}
		.xia_b{
			text-align: center;
			text{
				font-size:30rpx;
				color:rgba(102,102,102,1);
				line-height:42rpx;
			}
		}
	}
</style>
