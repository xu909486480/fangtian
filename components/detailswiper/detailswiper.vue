<template>
	<view class="detailswiper">
		<swiper style="height: 560rpx;">
			<swiper-item v-for="(item,index) in swiperlist" :key="index" circular>
				<image class='index-img' :src="item.url"></image>
			</swiper-item>
		</swiper>
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
