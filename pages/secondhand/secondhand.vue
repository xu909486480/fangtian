<template>
	<view class="secondhand">
		<headnav :share="share"></headnav>
		<!-- 宫格 -->
		<grid :grid="grid" 
		:gridListWidth="gridListWidth"
		@gridList="gridList"
		></grid>
		<!-- 轮播图 -->
		<swiper :swiper="swiperList"></swiper>
		<view class="secondhand_h3">
			<text>全部房源</text>
		</view>
		<!-- 分类 -->
		<sort :sort="sort"></sort>
		<!-- tab -->
		<alltab :alltab="alltab"></alltab>
		<!-- 详情 -->
		<detail :list="detail_list"></detail>
	</view>
</template> 

<script>
	import headnav from '../../components/headnav/headnav.vue'
	import grid from '../../components/grid/grid.vue'
	import swiper from '../../components/swiper/swiper.vue'
	import sort from '../../components/sort/sort.vue'
	import alltab from '../../components/alltab/alltab.vue'
	import detail from '../../components/detail/detail.vue'
	export default {
		components:{headnav,swiper,sort,alltab,detail,grid},
		data() {
			return {
				gridListWidth:25,
				share:'../../static/newdetail_icon6.png',
				detail_list: [],
				tab_list:[
				{txt:'销量'},
				{txt:'关注'},
				{txt:'热门新榜'},
				{txt:'热门新榜'}],
				borkerList:[{time:'2019/05/12'},{time:'2019/04/18'},{time:'2019/05/12'},{time:'2019/04/18'}],
				grid: [{img: '../../static/bridal_icon2.png',text: '小区找房'},
					{img: '../../static/bridal_icon2.png',text: '地图找房'},
					{img: '../../static/bridal_icon2.png',text: '地铁附近'},
					{img: '../../static/bridal_icon2.png',text: '最新房源'}],
				swiperList: [],
				styleheight:240,
				sort: [ {text: '区域'},
						{text: '价格'},
						{text: '户型'},
						{text: '更多'},
						{text: '排序'}],
				alltab: [{text: '满五年'},
					{text: '满两年'},
					{text: '精选两居'},
					{text: '7日新上'}
				],
			}
		},
		onLoad() {
			this.getSwiperApi()
			this.getDetailApi()
			
		},
		methods: {
			gridList(index){
				if(index == 0){
					uni.navigateTo({
						url:'../../components/houselist/houselist'
					})
				}
			},
			getSwiperApi(){
				var that = this;
				uni.request({
					url:'http://192.168.0.102:9595/api_fang/house/bannerList',
					method:'POST',
					data:{seat:'2'}, 
					success(res){
						that.swiperList = res.data.data
					}
				})
			},
			// 二手房推荐API
			getDetailApi(){
				var that = this;
				uni.request({
					url:'http://shop_api.fang-tian.com/api_fang/house/secondHouseRecommend',
					method:'POST',
					data:{city_id:'350200'}, 
					success(res){
						that.detail_list = res.data.data.data
						console.log(that.detail_list)
					}
				})
			}
			
		}
	}
</script>

<style scoped lang="scss">
	.secondhand_h3{
		padding: 0 32rpx 30rpx;
		text{
			font-size:46rpx;
			font-weight:500;
			color:rgba(25,25,25,1);
			line-height:64rpx;
		}
	}
	
	
	
</style>
