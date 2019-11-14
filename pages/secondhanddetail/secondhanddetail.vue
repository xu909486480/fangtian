<template>
	<view class="secondhanddetail">
		<view class="newdetail_nav" ref="headbg">
			<view class="nav_left" @tap="backout">
				<image src="../../static/newdetail_icon10.png"></image>
			</view>
			<view class="nav_right">
				<image src="../../static/newdetail_icon11.png"></image>
				<image src="../../static/newdetail_icon12.png"></image>
			</view>
		</view>
		<detailswiper :swiperList="inner.imgs"></detailswiper>
		<view class="detail">
			<view class="detail_h3">
				<text>{{inner.title}}</text>
			</view>
			<view class="detail_price">
				<view class="">
					<text>{{inner.total_price}}万</text>
					<text>售价</text>
				</view>
				<view class="">
					<text>{{inner.room}}室{{inner.ting}}厅{{inner.wei}}卫</text>
					<text>房型</text>
				</view>
				<view class="">
					<text>{{inner.mianji}}<text>㎡</text></text>
					<text>面积</text>
				</view>
			</view>
			<view class="detail_list">
				<view>
					<view>
						房屋单价：<text>{{inner.floor}}元/m²</text>
					</view>
					<view>
						挂牌时间：<text>{{inner.create_time}}</text>
					</view>
					<view>
						房屋朝向：<text>{{inner.chaoxiang}}</text>
					</view>
					<view>
						楼层总数：<text>{{inner.total_floor}}层</text>
					</view>
					<view>
						房本年限：<text>{{inner.house_card_years}}</text>
					</view>
				</view>
				<view>
					<view>
						装修标准：<text>{{inner.zhuangxiu}}</text>
					</view>
					<view>
						产权年限：<text>{{inner.property_years}}</text>
					</view>
					<view>
						物业用途：<text>{{inner.house_type}}</text>
					</view>
					<view>
						有无电梯：<text>无</text>
					</view>
					<view>
						唯一住房：<text>是</text>
					</view>
				</view>
			</view>
			<view class="detail_site">
				<view>
					建筑类型：<text>{{inner.house_type}}</text>
				</view>
				<view>
					楼盘地址：<text>{{inner.address}}</text>
					<image src="../../static/newdetail_icon1.png"></image>
				</view>
				<view>
					首付预算：<text>总首付{{inner.down_payments}}万，月供{{inner.monthly_supply}}</text>
					<image src="../../static/newdetail_icon1.png"></image>
				</view>
			</view>
			
		</view>
		<view class="detail_c">
			<view class="detail_inner">
				<view class="head_img">
					<image :src="inner.headimgurl" mode=""></image>
				</view>
				<view class="head_inner">
					<view class="inner_t">
						<text>{{inner.username}}</text>
						<text>个人房源</text>
					</view>
					<view class="inner_b">
						<text>已通过认证</text>
					</view>
				</view>
			</view>
			<view class="marker_t">
				<view class="t_left">
					<view class="left_t">
						<text>5.0</text>
					</view>
					<view class="left_b">
						<text>客户评价总分</text>
					</view>
				</view>
				<view class="t_right">
					<view class="left_t">
						<text>--</text>
					</view>
					<view class="left_b">
						<text>30天服务客户数</text>
					</view>
				</view>
			</view>
			<view class="detail_map">
				<view class="title">
					<text>位置及周边</text>
				</view>
				<view class="map_txt">
					<text>位置：</text>
					<text>{{inner.address}}</text>
				</view>
				<view class="page-body">
					<view class="page-section page-section-gap">
						<map style="width: 100%; height: 342rpx;" :latitude="inner.latitude" :longitude="inner.longitude">
						</map>
					</view>
				</view>
				<view class="map_list">
					<text :class="[map==index?'active':'']" v-for="(item,index) in inner.around_info" :key="index" @tap="mapList(index)">{{item.text}}</text>
				</view>
			</view>
			
			<view class="title" style="padding: 0 32rpx;">
				<text>房源介绍</text>
			</view>
			
			<alltab :alltab="alltab"></alltab>
			<view class="inner_txt">
				<text>{{inner.info.core}}</text>
			</view>
		</view>
		
		<view class="detail_b">
			<view class="title" style="padding: 0 32rpx;">
				<text>同小区在售</text>
				<image src="../../static/newdetail_icon1.png" mode=""></image>
			</view>
			<detail :list="inner.house_list"></detail>
			<view class="b_txt">
				<text>在售{{inner.house_list_count}}套</text>
			</view>
			
		</view>
		<online></online>
	</view>
</template>

<script>
	import detailswiper from '../../components/detailswiper/detailswiper.vue'
	import alltab from '../../components/alltab/alltab.vue'
	import detail from '../../components/detail/detail.vue'
	import online from '../../components/online/online.vue'
	export default {
		components:{detailswiper,alltab,detail,online},
		data() {
			return {
				current:0,
				map:0,
				bbb:0,
				inner:{},
				map_list:[
					{text:'公交(2)'},
					{text:'地铁(2)'},
					{text:'教育(30)'},
					{text:'医院(15)'}],
				map_bus:[{m:'1000'},{m:'850'},{m:'1000'}
				],
				//地图
				title: 'map',
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '../../../static/location.png'
				}, {
					latitude: 39.90,
					longitude: 116.39,
					iconPath: '../../../static/location.png'
				}],
				alltab: [{text: '核心卖点'},
					{text: '核心卖点'},
					{text: '核心卖点'},
					{text: '核心卖点'}
				]
			}
		},
		onLoad(options) {
			 const data = JSON.parse(decodeURIComponent(options.data));
			 this.inner = data
		},
		onPageScroll(Object){
			console.log(Object.scrollTop);//实时获取到滚动的值
			if(Object.scrollTop>1){
				var that = this;
				const query = uni.createSelectorQuery().in(this);
				query.select('.newdetail_nav').boundingClientRect(data => {
				  console.log("得到布局位置信息" + JSON.stringify(data));
				  console.log("节点离页面顶部的距离为" + data.top);
				}).exec();
				// let query = uni.createSelectorQuery(); //选择id  				
				// 	let outheight = 0;
				// 	let innerheight = 0;
				// 	query.select('.goods_item_right_ver').boundingClientRect(function(rect1) {
				// 		outheight = rect1.height
				// 		console.log(rect1)
				// 	}).exec();
				// 	query.select('.goods_item_right_ver').boundingClientRect(function(rect1) {
				// }）
			} 
			// console.log(this.$refs)
		},
		mounted() {
		},
		methods: {
			mapList(index){
				this.map = index
			},
			backout(){uni.navigateBack({})},
		}
		
	}
</script>

<style scoped lang="scss">
	@import '../../common/style/secondhanddetail.scss';
	.newdetail_nav{
		z-index: 99999;
			position: fixed;
			width:750rpx;
			box-sizing: border-box;
			padding:0 32rpx;
			top:88rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.nav_left{
				image{
					width:22rpx;
					height:40rpx;
				}
			} 
			.nav_right{
				image{
					width: 44rpx;
					height: 44rpx;
				}
				image:nth-child(2){
					margin-left:40rpx;
				}
			}
		}
</style>
