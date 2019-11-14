<template>
	<view class="index">
		<!--头部 位置 搜索框 扫一扫-->
		<view class="index_head">
			<view class="head_left" @tap="cityTap">
				<image src="../../static/index_icon1.png"></image>
				<text>{{cityName}}</text>
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
		<swiper :swiper="swiperList" 
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
				<view v-if="realApi.New_house_price==0">暂无数据</view>
				<view v-else>{{realApi.New_house_price}}元/m²</view>
				<view>新房</view>
			</view>
			<view class="real_right">
				<view v-if="realApi.Second_house_price==0">暂无数据</view>
				<view v-else>{{realApi.Second_house_price}}元/m²</view>
				<view>二手房</view>
			</view>
		</view>
		<!--首页   广告图-->
		<view class="index_board">
			<image :src="realApi.Advertisement.img"></image>
		</view>
		<view class="index_tab">
				<text>为您推荐</text>
		</view>
		
		<!-- 首页  选项卡 -->
		<alltab :alltab="alltab" :tabIndex="tabIndex" @tabTap="tabTap"></alltab>
		
		<!-- 首页  detail详情页-->
		<detail :list="detail_list" :listIndex="tabIndex"></detail>
	</view>
</template>

<script>
	import detail from '../../components/detail/detail.vue'
	import swiper from '../../components/swiper/swiper.vue'
	import alltab from '../../components/alltab/alltab.vue'
	import grid from '../../components/grid/grid.vue'
	import axios from '../../common/utils/axios.js'
	export default {
		components:{detail,alltab,swiper,grid},
		data() {
			return {
				swiperList: [],
				detail_list:[],
				realApi:{},
				cityName:'',
				cityCode:'',
				tabIndex:0,
				alltab: [
					{text: '二手房'},
					{text: '租房'}
				],
				styleheight:300,
				swiperImgHeight:300,
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
		onLaunch(){
		},
		onReady(){
			 
			this.getCityNameApi()
		},
		onLoad(options) {
			this.getSwiperApi()					
			try {
			    const data = uni.getStorageSync('cityCode');
			    if (data) {
					this.cityName = data.name
					this.cityCode = data.code
					this.getDetailApi()
					this.getrealtimeApi()
					console.log('有缓存，直接读取')
			    }else{
					console.log('第一次进入')
					// let that = this;
					
					this.getDetailApi()
					this.getrealtimeApi()
				}
			}catch(e){
			}
					
					
					
					
					
					
					
					
					
					// let that = this;
					// try{
					// 	const res = uni.getStorageSync('cityCode');
					// 	if(res){
					// 		that.cityName = res.name
					// 		that.cityCode = res.code
							// this.getDetailApi()
							// this.getrealtimeApi()
					// 		console.log('第一次进入')
					// 	}else{
					// 		console.log('第一次进入失败')
					// 		console.log(res)
					// 	}
					// }catch(e){
					// }
					
					
					 
							
						
			
			
				// key:'cityCode',
				// success(res) {
				// 	that.cityName = res.data.name
				// 	that.cityCode = res.data.code
				// 	console.log(that.cityName,that.cityCode)
				// }
					
		},
		created() {
		},
		mounted() {
			
		},
		methods: {
			//首页搜索框  跳转到搜索页
			homeSearch(){
				uni.navigateTo({
					url:'../../components/search/search'
				})
			},
			// 获取城市名称 
			getCityNameApi(){
				var that = this;
				uni.request({
					url:'http://shop_api.fang-tian.com/api_fang/house/getCityName',
					method:'POST',
					success(res) {
						var cityName = res.data.data.cityName
						var cityCode = res.data.data.cityCode
						uni.setStorage({
							key:'cityCode',
							data:{code:cityCode,name:cityName}
						})
						console.log('第一次存储信息')
						
						
						// try {
						//     uni.setStorageSync('cityCode', {code:cityCode,name:cityName});
						// } catch (e) {
						//     // error
						// }
						// uni.setStorage({
						// 	key:'cityCode',
						// 	data:{code:cityCode,name:cityName}
						// })
						// console.log('城市名称',res.data.data.cityCode,res.data.data.cityName)
					}
				}) 
			},
				
				// uni.getLocation({
				//     type: 'wgs84',
				// 	altitude:true,
				//     success: function (res) {
						// console.log(res);  //拿不到地址
				//     }
				// });
				
			// 公共组件alltab的数据  $emit
			tabTap(index){
				this.tabIndex = index
				if(index==0){
					var that = this;
					console.log('点击二手房',this.cityCode)
					uni.request({
						url:'http://shop_api.fang-tian.com/api_fang/house/secondHouseRecommend',
						method:'POST',
						data:{city_id:this.cityCode}, 
						success(res){
							that.detail_list = res.data.data.data
							console.log('二手房api')
						}
					})
				}else if(index==1){
					var that = this;
					console.log('点击租房',this.cityCode)
					uni.request({
						url:'http://shop_api.fang-tian.com/api_fang/house/rentalHouseRecommend',
						method:'POST',
						data:{city_id:this.cityCode}, 
						success(res){
							that.detail_list = res.data.data.data
							console.log('租房api')
						}
					})
				}
			},
			// 宫格的索引跳转
			gridList(index){
				switch(index){
					case 0: 
							// var cityCode = this.cityCode;
							uni.navigateTo({
								// url:'../bridal/bridal'+ `?id=${cityCode}`
								url:'../bridal/bridal'
							})
					break;
					case 1: 
							uni.navigateTo({
								url:'../secondhand/secondhand'
							})
					break;
					case 2:
							uni.navigateTo({
								url:'../renting/renting'
							})
					break;
					case 3:
							uni.navigateTo({
								url:'../ovistore/ovistore'
							})
					break;
					case 4:
							uni.navigateTo({
								url:'../offices/offices'
							})
					break;
					case 5:
							uni.navigateTo({
								url:'../agent/agent'
							})
					break;
					case 6:
							uni.navigateTo({
								url:'../assess/assess'
							})
					break;
					case 7:
							uni.navigateTo({
								url:'../loans/loans'
							})
					break;		
				}
			},
			// 获取轮播图Api数据
			getSwiperApi(){
				var that = this;
				uni.request({
					url:'http://shop_api.fang-tian.com/api_fang/house/bannerList',
					method:'POST',
					data:{seat:'1'}, 
					success(res) {
						that.swiperList = res.data.data
					}
				})
			},
			
			// 跳转到选择城市页
			cityTap(){
				uni.navigateTo({
					url:'../address/address'
				})
			},
			// 二手房推荐API
			getDetailApi(){
				var that = this;
				uni.request({
					url:'http://shop_api.fang-tian.com/api_fang/house/secondHouseRecommend',
					method:'POST',
					data:{city_id:this.cityCode}, 
					success(res){
						that.detail_list = res.data.data.data
						// console.log(res.data.data)
					}
				})
				
			},
			// 实时房价API
			getrealtimeApi(){
				var that = this;
				uni.request({
					url:'http://shop_api.fang-tian.com/api_fang/house/realtime',
					method:'POST', 
					data:{city:this.cityCode}, 
					success(res){
						that.realApi = res.data.data
					}
				}) 
			}
		},
		created() {
			
		},
		mounted() {
			
		}
	}
</script>

<style scoped lang="scss">
	@import '../../common/style/index.scss'
</style>
