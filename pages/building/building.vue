<template>
	<view class="building">
		<view class="headnav">
			<view class="head_left" @tap="backout">
				<image src="../../static/bridal_icon1.png"></image>
			</view>
			<view class="head_center">
				<input type="text" placeholder="请输入校区、楼盘、商圈名" disabled @tap="homeSearch" />
				<image src="../../static/index_icon3.png"></image>
			</view>
		</view>
		<swiper :swiper="swiper" style="margin-top: 30rpx;"></swiper>
		<!--首页  宫格-->
		<view class="index_grid">
			<view class="grid_index" v-for="(item,index) in home_grid" :key="index" @tap="gridList(index)">
				<image :src="item.img"></image>
				<view>{{item.text}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import swiper from '../../components/swiper/swiper.vue'
	export default {
		components:{swiper},
		data() {
			return {
				swiper: [{img: '../../static/shop_banner.png'},
						{img: '../../static/shop_banner.png'}, 
						{img: '../../static/shop_banner.png'}],	
				home_grid: [{img: "../../static/shop_icon5.png","text": "大声道是"},
				{img: "../../static/shop_icon5.png","text": "大声道是"},
				{img: "../../static/shop_icon5.png","text": "大声道是"},
				{img: "../../static/shop_icon5.png","text": "大声道是"},
				{img: "../../static/shop_icon5.png","text": "大声道是"},
				{img: "../../static/shop_icon5.png","text": "大声道是"},
				{img: "../../static/shop_icon5.png","text": "大声道是"},
				{img: "../../static/shop_icon5.png","text": "大声道是"},
				{img: "../../static/shop_icon5.png","text": "大声道是"},
				{img: "../../static/shop_icon5.png","text": "大声道是"}]
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	.headnav{
		display: flex;
		padding: 0 32rpx;
		justify-content: space-between;
		align-items: center;
		.head_left{
			image{
				width: 22rpx;
				height: 40rpx;
				
			}
		}
		.head_center {
			padding: 0 20rpx;
			position: relative;
			input {
				box-sizing: border-box;
				width: 624rpx;
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
	}
	
	// 宫格
		.index_grid {
			display: flex;
			flex-wrap: wrap;
		}
		.grid_index {
			width: 20%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
		.grid_index image {
			width: 94rpx;
			height: 94rpx;
		}
		.grid_index view {
			margin-top:10rpx;
			font-size: 26rpx;
			font-weight: 400;
			color: rgba(25, 25, 25, 1);
		}
</style>
