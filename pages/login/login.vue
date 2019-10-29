<template>
	<view class="login">
		<navbar :titleName="titleName"></navbar>
		<view class="reg_all">
			<view class="all_tel">
				<input type="number" value="" placeholder="请输入手机号"/>
			</view>
			<view class="all_code">
				<input type="number" value="" placeholder="请输入密码"/>
				<text @tap="forget">忘记密码?</text>
			</view>
			<view class="all_error">
				<image src=""></image>
				<text>您请输入的账号密码有误</text>
			</view>
		</view>
		<view class="reg_xia">
			<view class="xia_t">
				<text>登录</text>
			</view>
			<view class="xia_b">
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
				titleName:'登录'
				
			}
		},
		methods:{
			forget(){
				uni.navigateTo({
					url:'../findcode/findcode'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.reg{
	}
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
			image{
				width: 30rpx;
				height: 30rpx;
				background: #09BB07;
			}
			text{
				font-size:26rpx;
				color:rgba(255,60,60,1);
				line-height:36rpx;
			}
		}
	}
	
	.reg_xia{
		padding: 0 32rpx;
		
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
