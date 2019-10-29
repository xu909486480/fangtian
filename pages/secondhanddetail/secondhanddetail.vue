<template>
	<view class="secondhanddetail">
		<detailswiper></detailswiper>
		<view class="detail">
			<view class="detail_h3">
				<text>湖里万达广场，某某花园，精装三房，南北朝向</text>
			</view>
			<view class="detail_price">
				<view class="">
					<text>388万</text>
					<text>售价</text>
				</view>
				<view class="">
					<text>2室2厅1卫</text>
					<text>售价</text>
				</view>
				<view class="">
					<text>118<text>㎡</text></text>
					<text>售价</text>
				</view>
			</view>
			<view class="detail_list">
				<view>
					<view>
						开盘时间：<text>2016/05/01</text>
					</view>
					<view>
						交房时间：<text>2016/05/01</text>
					</view>
					<view>
						所在区域：<text>厦门集美</text>
					</view>
					<view>
						绿化率：<text>20%</text>
					</view>
					<view>
						绿化率：<text>20%</text>
					</view>
				</view>
				<view>
					<view>
						建筑面积：<text>100-130m²</text>
					</view>
					<view>
						装修标准：<text>精装修</text>
					</view>
					<view>
						产权年限：<text>70年</text>
					</view>
					<view>
						容积率：<text>80%</text>
					</view>
					<view>
						容积率：<text>80%</text>
					</view>
				</view>
			</view>
			<view class="detail_site">
				<view>
					建筑类型：<text>板房、踏板结合</text>
				</view>
				<view>
					楼盘地址：<text>集美龙亭六里一号，龙亭六里七号</text>
					<image src="../../static/newdetail_icon1.png"></image>
				</view>
				<view>
					首付预算：<text>总首付230万，月供12000</text>
					<image src="../../static/newdetail_icon1.png"></image>
				</view>
			</view>
			
		</view>
		<view class="detail_c">
			<view class="detail_inner">
				<view class="head_img">
					<image src="" mode=""></image>
				</view>
				<view class="head_inner">
					<view class="inner_t">
						<text>张小洪</text>
						<text>经纪人</text>
					</view>
					<view class="inner_b">
						<text>厦门麦田事业部·前铺店</text>
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
						<text>12</text>
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
					<text>集美龙亭六里一号，龙亭六里七号</text>
				</view>
				<view class="page-body">
					<view class="page-section page-section-gap">
						<map style="width: 100%; height: 342rpx;" :latitude="latitude" :longitude="longitude" :markers="covers">
						</map>
					</view>
				</view>
				<view class="map_list">
					<text :class="[map==index?'active':'']" v-for="(item,index) in map_list" :key="index" @tap="mapList(index)">{{item.text}}</text>
				</view>
			</view>
			
			<view class="title" style="padding: 0 32rpx;">
				<text>房源介绍</text>
			</view>
			
			<alltab :alltab="alltab"></alltab>
			<view class="inner_txt">
				<text>项目已于2019年5月25日开盘在售，主力户型为74-110平米两至三居，均价为58802元/平米，敬请关注！</text>
			</view>
		</view>
		
		<view class="detail_b">
			<view class="title" style="padding: 0 32rpx;">
				<text>同小区在售</text>
				<image src="../../static/newdetail_icon1.png" mode=""></image>
			</view>
			<detail :list="detail_list"></detail>
			<view class="b_txt">
				<text>在售50套</text>
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
				map:0,
				bbb:0,
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
				],
				detail_list: [{
						"img": "../../static/index_list1.png",
						"line1": "新出松柏二小精装大三房的撒多撒多阿萨德",
						"price": 615
					},
					{
						"img": "../../static/index_list1.png",
						"line1": "厅带阳台朝南，南北通透的萨达萨达暗示的撒",
						"price": 720
					}
				],
			}
		},
		methods: {
			mapList(index){
				this.map = index
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '../../common/style/secondhanddetail.scss'
</style>
