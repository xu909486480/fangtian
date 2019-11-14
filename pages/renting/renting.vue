<template>
	<view class="renting">
		<view class="bridal_head">
			<view class="head_back" @tap="goBack">
				<image src="../../static/bridal_icon1.png"></image>
			</view>
			<view class="head_search">
				<view class="search_left">
					<text>石家庄</text>
					<image src="../../static/xiabiao_icon.png" class="te"></image>
				</view>
				<image src="../../static/index_icon3.png" class="search_te"></image>
				<input type="text" placeholder="请输入关键字" @tap="aaa" disabled="true" />
			</view>
			<view class="head_msg">
				<image src=""></image>
			</view>
		</view>
		<!-- 宫格 -->
		<grid :grid="grid"
		:gridListWidth="gridListWidth"
		@gridList="gridList"
		></grid>
		<!-- 轮播 -->
		<swiper :swiper="swiperList" style="margin-top:30rpx;"></swiper>
		<view class="renting_h3">
			<text>全部房源</text>
		</view>
		<sort :sort="sort"></sort>
		<detail :list="detail_list" :listIndex="listIndex"></detail>
	</view>
</template>

<script>
	import grid from '../../components/grid/grid.vue'
	import swiper from '../../components/swiper/swiper.vue'
	import sort from '../../components/sort/sort.vue'
	import detail from '../../components/detail/detail.vue'
	export default {
		components:{swiper,sort,detail,grid},
		data(){
			return{
				listIndex:1,
				detail_list: [],		
				gridListWidth:25,
				grid: [{img: '../../static/bridal_icon2.png',text: '小区找房'},
					{img: '../../static/bridal_icon2.png',text: '地图找房'},
					{img: '../../static/bridal_icon2.png',text: '地铁附近'},
					{img: '../../static/bridal_icon2.png',text: '最新房源'}],
				swiperList: [],	
				sort: [ {text: '区域'},
						{text: '价格'},
						{text: '户型'},
						{text: '更多'},
						{text: '排序'}],
			}
		},
		onLoad(){
			this.getSwiperApi()
			this.getDetailApi()
		},
		methods:{
			gridList(index){
				if(index == 1){
					uni.navigateTo({
						url:'../joinhouse/joinhouse'
					})
				}
			},
			// 后退
			goBack(){
				uni.navigateBack({
					
				})
			},
			// 轮播图Api
			getSwiperApi(){
				var that = this;
				uni.request({
					url:'http://shop_api.fang-tian.com/api_fang/house/bannerList',
					method:'POST',
					data:{seat:'3'}, 
					success(res){
						that.swiperList = res.data.data
					}
				})
			},
			// 租房推荐API
			getDetailApi(){
				var that = this;
				uni.request({
					url:'http://shop_api.fang-tian.com/api_fang/house/rentalHouseRecommend',
					method:'POST',
					data:{city_id:'350200'}, 
					success(res){
						that.detail_list = res.data.data.data
						console.log('租房api')
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
@import '../../common/style/renting.scss'
</style>
