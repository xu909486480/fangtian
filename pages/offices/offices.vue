<template>
	<view class="ovistore">
		<navbar :titleName="titleName" :share="share"></navbar>
		<swiper :swiper="swiperList" style="margin-top: 30rpx;"></swiper>
		<sometab :sometab="tab_list"></sometab>
		<detail :list="detail_list"></detail>
	</view>
</template>

<script>
	import navbar from '../../components/navbar/navbar.vue'
	import swiper from '../../components/swiper/swiper.vue'
	import sometab from '../../components/sometab/sometab.vue'
	import detail from '../../components/detail/detail.vue'
	export default {
		components:{navbar,swiper,sometab,detail},
		data() {
			return {
				detail_list: [],
				titleName:'写字楼',
				tab:0,
				share:'../../static/newdetail_icon6.png',
				bridal_grid: [{img: '../../static/bridal_icon2.png',text: '商铺出售'},
					{img: '../../static/bridal_icon2.png',text: '商铺出租'},
					{img: '../../static/bridal_icon2.png',text: '生意装让'},
					{img: '../../static/bridal_icon2.png',text: '其他'}],
				tab_list:[{text:'租写字楼'},{text:'买写字楼'}],
				swiperList: [],	
			}
		},
		onLoad() {
			this.getSwiperApi()
			this.getDetailApi()
		},
		methods:{
			homeSearch(){
				uni.navigateTo({
					url:'../../components/search/search'
				})
			},
			tabList(index){
				this.tab = index;
			},
			//轮播图
			getSwiperApi(){
				var that = this;
				uni.request({
					url:'http://shop_api.fang-tian.com/api_fang/house/bannerList',
					method:'POST',
					data:{seat:'4'}, //写字楼
					success(res){
						that.swiperList = res.data.data
					}
				})
			},
			// 写字楼推荐API
			getDetailApi(){
				var that = this;
				uni.request({
					url:'http://shop_api.fang-tian.com/api_fang/House/officeHouseRecommend',
					method:'POST',
					data:{city:'350200'}, 
					success(res){
						// that.detail_list = res.data.data.data
						console.log(res)
					}
				})
			}
		}
}
</script>

<style scoped lang="scss">
	
	.bridal_grid {
		text-align: center;
		display: flex;
		white-space: nowrap;
		.grid_index {
			width: 25%;
			display: inline-block;
	
			image {
				width: 90rpx;
				height: 90rpx;
			}
	
			view {
				font-size: 26rpx;
	
				color: rgba(25, 25, 25, 1);
				line-height: 36rpx;
			}
		}
	}
	
	//tab选项卡
	.tab{
		padding: 0 32rpx 40rpx;
		display: flex;
		view{
			font-size:34rpx;
			
			color:rgba(25,25,25,1);
			line-height:80rpx;
			position: relative;
			margin-right:40rpx;
		}
		.active{
			color:#191919;
		}
		.active:after{
			content: '';
					display: inline-block;
					width:16rpx;
					height:8rpx;
					background:#191919;
					border-radius:4rpx;
					position: absolute;
					left:0;
					right:0;
					bottom:0;
					margin:0 auto;
		}
		
	}
</style>
