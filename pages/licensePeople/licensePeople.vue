<template>
	<view class="licensePeople">
		<navbar :titleName="titleName"></navbar>	
		<view class="main">
			<view class="main_inner">
				<text>企业名称</text>
				<input type="text" value="" placeholder="请输入"/>
			</view>
			<view class="main_inner">
				<text>注册账号</text>
				<input type="text" value="" placeholder="请输入"/>
			</view>
			<view class="main_inner">
				<text>代表姓名</text>
				<input type="text" value="" placeholder="请输入"/>
			</view>
			<view class="main_inner">
				<text>法人身份证号</text>
				<input type="text" value="" placeholder="请输入"/>
			</view>
			<view class="main_txt">
				<text>请确保营业执照注册时间在两周以上</text>
			</view>
			<view class="main_gou">
				<radio :checked='checked'/>
				<text>我同意</text>
				<text>《房田服务协议》</text>
			</view>
			<view class="main_btn">
				<text>立即授权</text>
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
				titleName:'营业执照法人认证',
				checked:false,
			}
		},
		methods:{
			imgTap(){
				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function (res) {
						console.log(JSON.stringify(res.tempFilePaths));
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.main{
		margin-left: 32rpx;
		padding-top: 50rpx;
		.main_inner{
			border-bottom: 2rpx solid #F5F5F5;
			padding:26rpx 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			text{
				font-size:34rpx;
				color:rgba(102,102,102,1);
				line-height:48rpx;
			}
			input{
				margin-right: 32rpx;
				text-align: right;
				font-size:34rpx;
				color:rgba(25,25,25,1);
				line-height:48rpx;
			}
		}
		.main_txt{
			margin-top: 10rpx;
			text{
				font-size:30rpx;
				color:rgba(153,153,153,1);
				line-height:42rpx;
			}
		}
		.main_gou{
			margin-top: 40rpx;
			display: flex;
			align-items: center;
			text:nth-child(2){
				margin-top: 12rpx;
				font-size:30rpx;
				color:#999999;
				line-height:42rpx;
			}
			text:nth-child(3){
				margin-top: 12rpx;
				font-size:30rpx;
				color:#191919;
				line-height:42rpx;
			}
		}
	}
	.main_btn{
		position: fixed;
		bottom: 0;
		width: 686rpx;
		height:90rpx;
		background:linear-gradient(225deg,rgba(245,102,7,1) 0%,rgba(247,156,0,1) 100%);
		border-radius:45rpx;
		opacity:0.9;
		text-align: center;
		text{
			font-size:34rpx;
			color:rgba(255,255,255,1);
			line-height:90rpx;
		}
	}
</style>
