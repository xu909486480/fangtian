<template>
	<view class="shop">
		<view class="shop_head">
			<view class="head_left" @tap="skip_sort">
				<image src="../../static/shop_icon1.png"></image>
				<text>分类</text>
			</view>
			<view class="head_center">
				<input type="text" placeholder="请输入关键词" disabled @tap="homeSearch" />
				<image src="../../static/index_icon3.png"></image>
			</view>
			<view class="head_right">
				<image src="../../static/shop_icon2.png"></image>
				<text>购物车</text>
			</view>
		</view>
		<swiper class='banner_list' indicator-dots='true' indicator-active-color="#ffffff" indicator-color="rgba(0, 0, 0, .5)"
		 autoplay='true' interval='3000' duration='300' circular='true'>
			<swiper-item v-for="(item,index) in bnrUrl" :key="index">
				<image :src='item.url' class='shop-img'></image>
			</swiper-item>
		</swiper>
		<view class="index_grid">
			<view class="grid_index" v-for="(item,index) in home_grid" :key="index">
				<image :src="item.img"></image>
				<view>{{item.text}}</view>
			</view>
		</view>
		<view class="shop_h3">
			<text>为你推荐</text>
			<text>更多</text>
		</view>
		<view class="shop_info">
			<view class="information" v-for="(item,index) in shop_list" :key="index">
				<view>
					<image src="../../static/shop_list1.png"></image>
				</view>
				<view>稻谷的胚与糊粉层中所发生的搜索</view>
				<view>¥<text>{{item.price}}</text></view>
				<view class="shop_car">
					<text>82人付款</text>
					<image src="../../static/shop_icon13.png"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				bnrUrl: [{
				  "url": "../../static/shop_banner.png"
				}, {
				    "url": "../../static/shop_banner.png"
				}, {
				    "url": "../../static/shop_banner.png"
				  }],
				home_grid: [{
				  "img": "../../static/shop_icon3.png",
				  "text": "新房"
				}, {
				    "img": "../../static/shop_icon3.png",
				  "text": "二手房"
				}, {
				    "img": "../../static/shop_icon3.png",
				  "text": "租房"
				}, {
				    "img": "../../static/shop_icon3.png",
				  "text": "商铺"
				}, {
				    "img": "../../static/shop_icon3.png",
				  "text": "写字楼"
				}, {
				    "img": "../../static/shop_icon3.png",
				  "text": "中介门店"
				}, {
				    "img": "../../static/shop_icon3.png",
				  "text": "房屋估价"
				}, {
				    "img": "../../static/shop_icon3.png",
				  "text": "房贷计算"
				}, {
				    "img": "../../static/shop_icon3.png",
				  "text": "地图找房"
				}, {
				    "img": "../../static/shop_icon3.png",
				  "text": "房屋装修"
				}],
				shop_list:[{
				    "price":"180.00"
				}, {
				    "price": "190.00"
				}, {
				  "price": "190.00"
				}]
			}
		},
		methods:{
			homeSearch(){
				uni.navigateTo({
					url:'../../components/seat/seat'
				})
			},
			skip_sort(){
				uni.navigateTo({
					url:'../shopsort/shopsort'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '../../common/style/shop.scss';
</style>
