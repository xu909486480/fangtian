<template>
	<view class="navbar" :style="bg">
		<image :src="back" @tap="backout"></image>
		<text>{{titleName}}</text>
		<image :src="share" @tap="navFx"></image>
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
			titleName:{
				type:String,
				default:''
			},
			share:{
				type:String,
				default:''
			},
			bg:{
				type:String,
				default:''
			},
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
			},
			navFx(){
				this.$emit('navFx')
			}
		}
	}
</script>

<style scoped lang="scss">
	.navbar {
		padding: 0 32rpx;
		// background: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
	
		image:nth-child(1) {
			width: 22rpx;
			height: 40rpx;
		}
	
		text {
			font-size: 46rpx;
			font-weight: 500;
			color: rgba(25, 25, 25, 1);
			line-height: 64rpx;
		}
	
		image:nth-child(3) {
			width: 44rpx;
			height: 44rpx;
		}
		
	}
	
</style>
