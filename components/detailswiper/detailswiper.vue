<template>
	<view class="detailswiper">
		<swiper style="height: 560rpx;">
			<swiper-item v-for="(item,index) in swiperlist" :key="index" circular>
				<image class='index-img' :src="item.url"></image>
			</swiper-item>
		</swiper>
		<view class="newdetail_nav">
			<view class="nav_left" @tap="backout">
				<image src="../../static/newdetail_icon10.png"></image>
			</view>
			<view class="nav_right">
				<image src="../../static/newdetail_icon11.png"></image>
				<image src="../../static/newdetail_icon12.png"></image>
			</view>
		</view>
		<view class="newdetail_model"> 
			<text>样板房</text>
			<text>户型图</text>
		</view>
		<view class="newdetail_frame">
			<text>1/15张</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:'detailswiper',
		props:['swiperlist'],
		data(){
			return{
				
			}
		},
		methods:{
			backout(){
				uni.navigateBack({
					
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.detailswiper{
		position: relative;
		width: 750rpx;
		height:560rpx ;
		background: #FFFFFF;
		.index-img {
			width: 750rpx;
			height:560rpx ;
			background: #007AFF;
		}
		.newdetail_nav{
			position: absolute;
			width:750rpx;
			box-sizing: border-box;
			padding:0 32rpx;
			top:88rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.nav_left{
				image{
					width:22rpx;
					height:40rpx;
				}
			} 
			.nav_right{
				image{
					width: 44rpx;
					height: 44rpx;
				}
				image:nth-child(2){
					margin-left:40rpx;
				}
			}
		}
		.newdetail_model{
			position: absolute;
			left:256rpx;
			bottom:28rpx;
			text{
				display: inline-block;
				text-align: center;
				width:120rpx;
				height:48rpx;
				background:rgba(255,255,255,0.7);
				border-radius:30rpx;
				font-size:26rpx;
				
				color:rgba(25,25,25,1);
				line-height:48rpx;
			}
			text:nth-child(2){
				margin-left:20rpx;
			}
		}
		.newdetail_frame{
			position: absolute;
			right:32rpx;
			bottom:28rpx;
			text{
				display: inline-block;
				text-align: center;
				width:120rpx;
				height:48rpx;
				background:rgba(0,0,0,0.5);
				border-radius:30rpx;
				font-size:26rpx;
				
				color:rgba(255,255,255,1);
				line-height:48rpx;
			}
		}
	}
</style>
