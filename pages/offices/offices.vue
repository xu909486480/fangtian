<template>
	<view class="ovistore">
		<navbar :titleName="titleName" :share="share"></navbar>
		<swiper :swiper="swiper" style="margin-top: 30rpx;"></swiper>
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
				titleName:'写字楼',
				tab:0,
				share:'../../static/newdetail_icon6.png',
				bridal_grid: [{img: '../../static/bridal_icon2.png',text: '商铺出售'},
					{img: '../../static/bridal_icon2.png',text: '商铺出租'},
					{img: '../../static/bridal_icon2.png',text: '生意装让'},
					{img: '../../static/bridal_icon2.png',text: '其他'}],
				detail_list: [{
					"img": "../../static/index_list1.png",
					"line1": "新出松柏二小精装大三房的撒多撒多阿萨德",
					"price": 615
				},
				{
					"img": "../../static/index_list1.png",
					"line1": "厅带阳台朝南，南北通透的萨达萨达暗示的撒",
					"price": 720
				}],
				tab_list:[{text:'租商铺'},{text:'买商铺'}],
				swiper: [{img: '../../static/shop_banner.png'},
						{img: '../../static/shop_banner.png'}, 
						{img: '../../static/shop_banner.png'}],	
			}
		},
		methods:{
			homeSearch(){
				uni.navigateTo({
					url:'../../components/search/search'
				})
			},
			tabList(index){
				this.tab = index
			},
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
