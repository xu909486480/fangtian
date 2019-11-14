<template>
	<view class="detailswiper">
		<swiper style="height: 560rpx;" interval="6000" autoplay @change="swiperNum" :current="current">
			<swiper-item v-for="(item,index) in swiperList" :key="index" 
			circular>
				<image class='index-img' :src="item"></image>
			</swiper-item>
		</swiper>
				<!-- <view class="newdetail_model"> 
					<text>样板房</text>
					<text>户型图</text> 
				</view> -->
				<view class="newdetail_frame">
					<text>{{current+1}}/{{swiperList.length}}张</text>
				</view>
	</view>
</template>

<script>
	export default {
		name:'detaiLswiper',
		props:{
			swiperList:Array
		},
		data(){
			return{
				current:0
			}
		},
		methods:{
			swiperNum(e){
				this.current = e.detail.current
			}
		}
	}
</script>

<style scoped lang="scss">
	.detailswiper{
		position: relative;
		width: 750rpx;
		height:560rpx ;
		.index-img {
			width: 750rpx;
			height:560rpx ;
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
