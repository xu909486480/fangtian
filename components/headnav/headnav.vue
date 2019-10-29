<template>
	<view class="headnav">
		<view class="head_left" @tap="backout">
			<image :src="back"></image>
		</view>
		<view class="head_center" v-if="search">
			<input type="text" placeholder="请输入校区、楼盘、商圈名" disabled @tap="homeSearch" />
			<image src="../../static/index_icon3.png"></image>
		</view>
		<view class="head_right">
			<image :src="share"></image>
		</view>
	</view>
</template>

<script>
	export default {
		name:'navbar',
		props:{
			back:{
				type:String,
				default:'../../static/bridal_icon1.png'
			},
			search:{
				type:Boolean,
				default:true
			},
			share:{
				type:String,
				default:''
			}
		},
		data(){
			return{
				
			}
		},
		methods:{
			backout(){
				uni.navigateBack({
					delta: 1,
					animationType: 'pop-out',
					animationDuration: 200
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.headnav {
		padding:0 32rpx 30rpx;
			display: flex;
			justify-content: space-between;
			box-sizing: border-box;
			.head_left {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-top: 8rpx;
				image {
					width: 22rpx;
					height: 40rpx;
				}
			}
			.head_center {
				margin-top:4rpx;
				padding: 0 20rpx;
				position: relative;
				input {
					box-sizing: border-box;
					width: 520rpx;
					height: 72rpx;
					background: rgba(245, 245, 245, 1);
					border-radius: 36rpx;
					padding-left: 80rpx;
					font-size:30rpx;
					
					color:rgba(153,153,153,1);
					line-height:42rpx;
				}
				image {
					width: 30rpx;
					height: 30rpx;
					position: absolute;
					top: 22rpx;
					left: 50rpx;
				}
			}
			.head_right {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-top: 8rpx;
				image {
					width: 42rpx;
					height: 44rpx;
				}
				text {
					font-size: 18rpx;
					font-weight: 400;
					color: rgba(25, 25, 25, 1);
					margin-top: 6rpx;
				}
			}
		}
	
	
</style>
