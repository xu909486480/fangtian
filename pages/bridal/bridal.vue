<template>
	<view class="bridal">
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
		<grid :grid="grid"></grid>
		<!-- 轮播图 -->
		<swiper :swiper="swiperList"></swiper>
		<!-- 少数tab组件 -->
		<sometab :sometab="tab_list"></sometab>
		<!-- 详情页 -->
		<detail :list="detail_list"></detail>
		<!-- 公共组件 -->
		<view class="bridal_inner" @tap="newList">
			查看全部
		</view>
		<view class="all_h3">
			<text>全部楼盘</text>
		</view>
		<!-- 分类 -->
		<sort :sort="sort"></sort>
		<!--  -->
		<alltab :alltab="alltab"></alltab>
		<!-- 详情 -->
		<detail :list="detail_list"></detail>
	</view>
</template>

<script>
	import grid from '../../components/grid/grid.vue'
	import detail from '../../components/detail/detail.vue'
	import swiper from '../../components/swiper/swiper.vue'
	import sometab from '../../components/sometab/sometab.vue'
	import sort from '../../components/sort/sort.vue'
	import alltab from '../../components/alltab/alltab.vue'
	export default {
		components: {detail,swiper,sometab,sort,alltab,grid},
		data() {
			return {
				tab:0,
				active:1,
				tab_list: [{text: '销量榜'},
					{text: '关注榜'},
					{text: '热门新榜'}],
				detail_list: [{"img": "../../static/index_list1.png","line1": "新出松柏二小精装大三房的撒多撒多阿萨德","price": 615},
					{"img": "../../static/index_list1.png","line1": "厅带阳台朝南，南北通透的萨达萨达暗示的撒","price": 720},
					],
				sort: [ {text: '区域'},
						{text: '价格'},
						{text: '户型'},
						{text: '更多'},
						{text: '排序'}],
				alltab: [{text: '住宅'},
					{text: '在售'},
					{text: '优惠楼盘'},
					{text: '近期开盘'}
				],
				swiperList: [],
				grid: [{
						img: '../../static/bridal_icon2.png',
						text: '全部楼盘'
					},
					{
						img: '../../static/bridal_icon2.png',
						text: '在售楼盘'
					},
					{
						img: '../../static/bridal_icon2.png',
						text: '全部楼盘'
					},
					{
						img: '../../static/bridal_icon2.png',
						text: '在售楼盘'
					},
					{
						img: '../../static/bridal_icon2.png',
						text: '全部楼盘'
					}
				]
			}
		},
		onLoad(options) {
			console.log(options.id)
			this.getSwiperApi()
		},
		methods: {
			tabList(index){
				this.tab = index
			},
			//跳转到搜索页
			aaa() {

			},
			// 后退
			goBack(){
				uni.navigateBack({
					
				})
			},
			newList(){
				uni.navigateTo({
					url:'../newlist/newlist'
				})
			},
			// 轮播图
			getSwiperApi(){
				var that = this;
				uni.request({
					url:'http://192.168.0.102:9595/api_fang/house/bannerList',
					method:'POST',
					data:{seat:'6'}, //新房
					success(res){
						that.swiperList = res.data.data
					}
				})
			}
		},
		
	}
</script>

<style scoped lang="scss">
	@import '../../common/style/bridal.scss'
</style>
