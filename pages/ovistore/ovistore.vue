<template>
	<view class="ovistore">
		<headnav :titleName="titleName" :share="share"></headnav>

		<!-- 宫格 -->
		<grid :grid="grid"
		:gridListWidth="gridListWidth"
		@gridList="gridList"
		></grid>
		<!-- 轮播图 -->
		<swiper :swiper="swiper"></swiper>
		<view class="tab">
			<view @tap="tabList(index)" v-for="(item,index) in tab_list" :key="index" :class="[tab==index?'active':'']">
				{{item.text}}
			</view>
		</view>
		<detail :list="detail_list"></detail>
	</view>
</template>

<script>
	import headnav from '../../components/headnav/headnav.vue'
	import grid from '../../components/grid/grid.vue'
	import swiper from '../../components/swiper/swiper.vue'
	import detail from '../../components/detail/detail.vue'
	export default {
		components:{headnav,swiper,detail,grid},
		data() {
			return {
				gridListWidth:25,
				titleName:'商铺',
				tab:0,
				share:'../../static/newdetail_icon6.png',
				grid: [{img: '../../static/bridal_icon2.png',text: '商铺出售'},
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
	//tab选项卡
	.tab{
		padding: 0 32rpx 30rpx;
		display: flex;
		view{
				position: relative;
				font-size:26rpx;
				color:rgba(25,25,25,1);
				line-height:90rpx;
				margin-right:40rpx;
		}
		.active{
				font-size:46rpx;
				font-weight:500;
				color:rgba(25,25,25,1);
				line-height:90rpx;
			
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
