<template>
	<view class="online">
		<view class="detail_tabbar">
			<view class="tabbar_inner1" @tap="aaa">
				<image :src="onlineImg"></image> 
				<text>{{guanzhu}}</text>
			</view>
			<view class="tabbar_inner2" @tap="ordertable" v-if="onlineOrder">
				<image src="../../static/newdetail_icon8.png"></image>
				<text>预约看房</text>
			</view>
			<view class="tabbar_inner3">在线咨询</view>
			<view class="tabbar_inner4">电话咨询</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'online',
		props:{
			onlineImg:{
				type:String,
				default:'../../static/newdetail_icon7.png'
			},
			onlineOrder:{
				type:Boolean,
				default:true
			}
			
		},
		data(){
			return{
				guanzhu:'关注',
				// img:'../../static/newdetail_icon7.png',
			}
		},
		methods:{
			ordertable(){
				uni.navigateTo({
					url:'../../pages/ordertable/ordertable' 
				})
			},
			aaa(){
				this.guanzhu='已关注'	
				this.onlineImg='../../static/newdetail_icon7_active.png'
			}
		}
	}
</script>

<style scoped lang="scss">
	.detail_tabbar {
		z-index: 9999;
		width:750rpx;
		height:98rpx;
		box-sizing: border-box;
		background:rgba(255,255,255,1);
		position: fixed;
		bottom:0;
		padding:0 32rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.tabbar_inner1 {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			image {
				width: 40rpx;
				height: 38rpx;
			}
	
			text {
				font-size: 24rpx;
				font-weight: 400;
				color: rgba(25, 25, 25, 1);
				line-height: 34rpx;
			}
		}
	
		.tabbar_inner2 {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			image {
				width: 40rpx;
				height: 40rpx;
			}
	
			text {
				font-size: 24rpx;
				font-weight: 400;
				color: rgba(25, 25, 25, 1);
				line-height: 34rpx;
			}
		}
		.tabbar_inner3{
			text-align: center;
			width:200rpx;
			height:72rpx;
			background:rgba(255,169,2,1);
			border-radius:36rpx;
			font-size:30rpx;
			
			color:rgba(255,255,255,1);
			line-height:72rpx;
			margin-right:-40rpx;
		}
		.tabbar_inner4{
			text-align: center;
			width:200rpx;
			height:72rpx;
			background:rgba(250,100,0,1);
			border-radius:36rpx;
			font-size:30rpx;
			
			color:rgba(255,255,255,1);
			line-height:72rpx;
		}
	}
</style>
