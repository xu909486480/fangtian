<template>
	<view class="certification">
		<navbar :titleName="titleName"></navbar>
		<view class="num" style="margin-top: 60rpx;">
			<input type="number" value="" placeholder="姓名"/>
		</view>
		<view class="num">
			<input type="number" value="" placeholder="身份证"/>
		</view>
		<view class="main_txt">
			<text>上传身份证</text>
		</view>
		<view class="main_yz">
			<view class="yz_l">
				<view class="" @tap="yzTap1">
					<image src="../../static/certification_icon1.png" mode=""></image>
					<image src="../../static/certification_icon3.png" mode=""></image>
				</view>
				<view class="">
					<text>身份证正面</text>
				</view>
			</view>
			<view class="yz_l">
				<view class="" @tap="yzTap2">
					<image src="../../static/certification_icon2.png" mode=""></image>
					<image src="../../static/certification_icon3.png" mode=""></image>
				</view>
				<view class="">
					<text>身份证反面</text>
				</view>
			</view>
		</view>
		<view class="btn" @tap="btnTap">
			<text>提交</text> 
		</view>
	</view>
</template> 
 
<script> 
	import navbar from '../../components/navbar/navbar.vue'
	export default {
		components:{navbar},
		data(){  
			return{
				titleName:'实名认证',
			}
		},
		methods:{
			yzTap1(){
				console.log(111)
				uni.chooseImage({
					sourceType:'camera'
					
				})
			},
			yzTap2(){
				console.log(111)
				uni.chooseImage({
					sourceType:'camera'
					
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.num{
		
		border-bottom: 2rpx solid #F5F5F5;
		padding: 16rpx 0;
		margin: 10rpx 32rpx 0;
		
		input{
			font-size:34rpx;
			color:rgba(187,187,187,1);
			line-height:48rpx;
		}
	}
	
	.main_txt{
		padding: 0 32rpx;
		margin: 50rpx 0 30rpx;
		text{
			font-size:40rpx;
			font-weight:500;
			color:rgba(25,25,25,1);
			line-height:56rpx;
		}
	}
	.main_yz{
		padding: 0 32rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.yz_l{
			display: flex;
			flex-direction: column;
			align-items: center;
			view:nth-child(1){
				
				position: relative;
				image:nth-child(1){
					width: 320rpx;
					height: 202rpx;
				}
				image:nth-child(2){
					position: absolute;
					left: 0;
					top: 0;
					right: 0;
					bottom: 0;
					margin: auto;
					width: 80rpx;
					height: 80rpx;
				}
			}
			view:nth-child(2){
				text{
					font-size:30rpx;
					color:rgba(25,25,25,1);
					line-height:42rpx;
				}
			}
		}
	}
	
	.btn{
		position: fixed;
		bottom: 0;
		margin: 0 32rpx;
		width:686rpx;
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
