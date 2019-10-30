<template>
	<view class="index">
		<!--头部 位置 搜索框 扫一扫-->
		<view class="index_head">
			<view class="head_left">
				<image src="../../static/index_icon1.png"></image>
				<text>石家庄</text>
			</view>
			<view class="head_center">
				<input type="text" placeholder="请输入校区、楼盘、商圈名" disabled @tap="homeSearch" />
				<image src="../../static/index_icon3.png"></image>
			</view>
			<view class="head_right">
				<image src="../../static/index_icon2.png"></image>
				<text>扫一扫</text>
			</view>
		</view>

		<!--首页   轮播图-->
		<swiper :swiper="swiper" 
		:styleheight="styleheight" 
		:swiperImgHeight="swiperImgHeight"
		style="margin: 30rpx 0;"
		></swiper>
		
		<!--首页  宫格-->
		<grid :grid="grid" 
		:gridImgWidth="gridImgWidth"
		:gridImgHeight="gridImgHeight"
		@gridList="gridList"
		></grid>
		
		
		<!--首页  实时房价-->
		<view class="index_real">
			<view class="real_left">
				<view>实时房价</view>
				<view>房田楼盘</view>
			</view>
			<view class="real_line"></view>
			<view class="real_center">
				<view>45558元/m²</view>
				<view>新房</view>
			</view>
			<view class="real_right">
				<view>32380元/m²</view>
				<view>二手房</view>
			</view>
		</view>
		<!--首页   广告图-->
		<view class="index_board">
			<image src="../../static/index_banner6.png"></image>
		</view>
		<view class="index_tab">
				<text>为您推荐</text>
		</view>
		
		<!-- 首页  选项卡 -->
		<alltab :alltab="alltab" :tabIndex="tabIndex" @tabTap="tabTap"></alltab>
		
		<!-- 首页  detail详情页-->
		<!-- <block v-for="(item,index) in detail_list" :key="index" v-if="tabIndex == index">
			<detail :list="item" :index="index"></detail>
		</block> -->
		<detail :list="detail_list"></detail>
	</view>
</template>

<script>
	import detail from '../../components/detail/detail.vue'
	import swiper from '../../components/swiper/swiper.vue'
	import alltab from '../../components/alltab/alltab.vue'
	import grid from '../../components/grid/grid.vue'
	export default {
		components:{detail,alltab,swiper,grid},
		data() {
			return {
				tabIndex:0,
				alltab: [{text: '新房'},
					{text: '二手房'},
					{text: '租房'}
				],
				// detail_list:[
				// 	{
				// 		list:[
				// 			{"img": "../../static/index_list1.png",
				// 			"line1": "11111111二小精装大三房的撒多撒多阿萨德",
				// 			"price": 111},
				// 			{"img": "../../static/index_list1.png",
				// 			"line1": "11111111南，南北通透的萨达萨达暗示的撒",
				// 			"price": 111}
				// 		]
				// 	},
				// 	{
				// 		list:[
				// 			{"img": "../../static/index_list1.png",
				// 			"line1": "2222222精装大三房的撒多撒多阿萨德",
				// 			"price": 222},
				// 			{"img": "../../static/index_list1.png",
				// 			"line1": "2222222，南北通透的萨达萨达暗示的撒",
				// 			"price": 222}
				// 		],
				// 	},
				// 	{
				// 		list:[
				// 			{"img": "../../static/index_list1.png",
				// 			"line1": "333松柏二小精装大三房的撒多撒多阿萨德",
				// 			"price": 333},
				// 			{"img": "../../static/index_list1.png",
				// 			"line1": "333阳台朝南，南北通透的萨达萨达暗示的撒",
				// 			"price": 333}
				// 		]
				// 	},
				// 	{
				// 		list:[
				// 			{"img": "../../static/index_list1.png",
				// 			"line1": "新出松柏二小精装大三房的撒多撒多阿萨德",
				// 			"price": 444},
				// 			{"img": "../../static/index_list1.png",
				// 			"line1": "厅带阳台朝南，南北通透的萨达萨达暗示的撒",
				// 			"price": 444}
				// 		]
				// 	}
				// 	],

				 
				 detail_list:[
					{"img": "../../static/index_list1.png",
					"line1": "新出松柏二小精装大三房的撒多撒多阿萨德",
					"price": 615},
					{"img": "../../static/index_list1.png",
					"line1": "厅带阳台朝南，南北通透的萨达萨达暗示的撒",
					"price": 720}
				],
				styleheight:300,
				swiperImgHeight:300,
				swiper: [{img: "../../static/index_banner1.png"},
					{img: "../../static/index_banner1.png"}, 
					{img: "../../static/index_banner1.png"}, 
					{img: "../../static/index_banner1.png"}],
				grid: [{
					img: "../../static/index_icon4.png",
					"text": "新房"
				}, {
					img: "../../static/index_icon5.png",
					"text": "二手房"
				}, {
					img: "../../static/index_icon6.png",
					"text": "租房"
				}, {
					img: "../../static/index_icon7.png",
					"text": "商铺"
				}, {
					img: "../../static/index_icon8.png",
					"text": "写字楼"
				}, {
					img: "../../static/index_icon9.png",
					"text": "中介门店"
				}, {
					img: "../../static/index_icon10.png",
					"text": "房屋估价"
				}, {
					img: "../../static/index_icon11.png",
					"text": "房贷计算"
				}, {
					img: "../../static/index_icon12.png",
					"text": "地图找房"
				}, {
					img: "../../static/index_icon13.png",
					"text": "房屋装修"
				}],
				gridImgWidth:52,
				gridImgHeight:52
			}
		},
		onLoad() {
			
		},
		methods: {
			//首页搜索框  跳转到搜索页
			homeSearch(){
				uni.navigateTo({
					url:'../monbill/monbill'
				})
			},
			// 公共组件alltab的数据  $emit
			tabTap(index){
				this.tabIndex = index
				
			},
			gridList(index){
				console.log(1111)
				if(index == 0){
					uni.navigateTo({
						url:'../bridal/bridal'
					})
				}else if(index == 1){
					uni.navigateTo({
						url:'../secondhand/secondhand'
					})
				}else if(index == 2){
					uni.navigateTo({
						url:'../renting/renting'
					})
				}else if(index == 3){
					uni.navigateTo({
						url:'../ovistore/ovistore'
					})
				}else if(index == 4){
					uni.navigateTo({
						url:'../offices/offices'
					})
				}else if(index == 5){
					uni.navigateTo({
						url:'../agent/agent'
					})
				}else if(index == 6){
					uni.navigateTo({
						url:'../issue/issue'
					})
				}else if(index == 7){
					uni.navigateTo({
						url:'../loans/loans'
					})
				}
				
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '../../common/style/index.scss'
</style>
