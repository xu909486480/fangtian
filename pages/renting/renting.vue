<template>
	<view class="renting">
		<view class="bridal_head">
			<view class="head_back">
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
		<!-- <scroll-view scroll-x class="bridal_grid">
			<view class="grid_index" v-for="(item,index) in bridal_grid"
					:key="index" @tap="bridal_list(index)">
				<image :src="item.img"></image>
				<view>{{item.text}}</view>
			</view>
		</scroll-view> -->
		<!-- 宫格 -->
		<grid :grid="grid"
		:gridListWidth="gridListWidth"
		@gridList="gridList"
		></grid>
		<!-- 轮播 -->
		<swiper :swiper="swiper" style="margin-top:30rpx;"></swiper>
		<view class="renting_h3">
			<text>全部房源</text>
		</view>
		<sort :sort="sort"></sort>
		<detail :list="detail_list"></detail>
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
				gridListWidth:25,
				grid: [{img: '../../static/bridal_icon2.png',text: '小区找房'},
					{img: '../../static/bridal_icon2.png',text: '地图找房'},
					{img: '../../static/bridal_icon2.png',text: '地铁附近'},
					{img: '../../static/bridal_icon2.png',text: '最新房源'}],
				swiper: [{img: '../../static/shop_banner.png'},
						{img: '../../static/shop_banner.png'}, 
						{img: '../../static/shop_banner.png'}],	
				sort: [ {text: '区域'},
						{text: '价格'},
						{text: '户型'},
						{text: '更多'},
						{text: '排序'}],
				detail_list: [{"img": "../../static/index_list1.png","line1": "新出松柏二小精装大三房的撒多撒多阿萨德","price": 615},
					{"img": "../../static/index_list1.png","line1": "厅带阳台朝南，南北通透的萨达萨达暗示的撒","price": 720},
				],		
				
			}
		},
		methods:{
			gridList(index){
				if(index == 1){
					uni.navigateTo({
						url:'../joinhouse/joinhouse'
					})
				}
			}
		}
	}
</script>

<style scoped lang="scss">
@import '../../common/style/renting.scss'
</style>
