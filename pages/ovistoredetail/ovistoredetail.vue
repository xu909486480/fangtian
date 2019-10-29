<template>
	<view class="ovistoredetail">
		<detailswiper></detailswiper>
		<view class="detail">
			<view class="detail_h3">
				<text>新挂牌！业主降价急售，年租17万</text>
			</view>
			<view class="detail_content">
				<text>出售</text>
				<text>出售</text>
				<text>出售</text>
				<text>出售</text>
				<text>出售</text>
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
			<view class="detail_seat">
				<text>位置：</text>
				<text>厦门市-湖里区 高新技术园</text>
				<image src="../../static/newdetail_icon1.png" mode=""></image>
			</view>
			<view class="detail_list">
				<view>
					<view>
						<text>类型：</text><text>商业街店铺-临街</text>
					</view>
					<view>
						<text>楼层：</text><text>独栋/共2层</text>
					</view>
					<view>
						<text>楼层：</text><text>独栋/共2层</text>
					</view>
				</view>
				<view>
					<view>
						<text>预计收益：</text><text>26000元/月</text>
					</view>
					<view>
						<text>预计收益：</text><text>26000元/月</text>
					</view>
					<view>
						<text>预计收益：</text><text>26000元/月</text>
					</view>
				</view>
			</view>
			<view class="detail_site">
				<text>规格：</text><text>板面宽5m*进深8m*层高5m</text>
			</view>
		</view>
		<view class="detail_c">
			<view class="msg_bottom">
				<view class="msg_head">
					<image src=""></image>
				</view>
				<view class="msg_inner">
					<view class="inner_top">
						<text>张小洪</text>
						<text>买卖经纪人</text>
					</view>
					<view class="inner_bottom">
						<text>厦门麦田事业部·前铺店</text>
					</view>
					<image src="../../static/newdetail_icon1.png"></image>
				</view>
			</view>
			<view class="title">
				<text>配套设施</text>
			</view>
			<view class="index_grid">
				<view class="grid_index" v-for="(item,index) in ovidetail_grid" :key="index" @tap="gridList(index)">
					<image :src="item.img"></image>
					<view>{{item.text}}</view>
				</view>
			</view>
			<view class="title">
				<text>房源描述</text>
			</view>
			<view class="c_msg">
				<view class="">
					<text>欢迎电话咨询：</text>
				</view>
				<view class="">
					<text>如果您有队以上店面不满意，别急！请往下看</text>
				</view>
				<view class="">
					<text>1.本公司专注商业店面，积累了1200多条店面信息供您选择</text>
				</view>
				<view class="">
					<text>1.本公司专注商业店面，积累了1200多条店面信息供您选择</text>
				</view>
				<view class="">
					<text>1.本公司专注商业店面，积累了1200多条店面信息供您选择</text>
				</view>
			</view>
		</view>
		<view class="detail_b">
			<view class="title">
				<text>会展商业广场店铺</text>
			</view>
			<view class="b_seat">
				<text>思明区-会展中心对面</text>
			</view>
			<view class="page-body">
				<view class="page-section page-section-gap">
					<map style="width: 100%; height: 342rpx;" :latitude="latitude" :longitude="longitude" :markers="covers">
					</map>
				</view>
			</view>
		</view>
		<view class="detail_after">
			<view class="title" style="padding: 0 32rpx;">
				<text>为你推荐</text>
			</view>
			<detail :list="detail_list"></detail>
			<view class="more">
				<text>更多房源</text>
			</view>
		</view>
		
		<online></online>
	</view>
</template>

<script>
	import detailswiper from '../../components/detailswiper/detailswiper.vue'
	import detail from '../../components/detail/detail.vue'
	import online from '../../components/online/online.vue'
	export default {
		components:{detailswiper,detail,online},
		data() {
			return {
				ovidetail_grid: [{img: "../../static/index_icon4.png","text": "新房"},
				{img: "../../static/index_icon4.png","text": "新房"},
				{img: "../../static/index_icon4.png","text": "新房"},
				{img: "../../static/index_icon4.png","text": "新房"},
				{img: "../../static/index_icon4.png","text": "新房"},
				{img: "../../static/index_icon4.png","text": "新房"},
				{img: "../../static/index_icon4.png","text": "新房"},
				{img: "../../static/index_icon4.png","text": "新房"},
				{img: "../../static/index_icon4.png","text": "新房"},
				{img: "../../static/index_icon4.png","text": "新房"},
				{img: "../../static/index_icon4.png","text": "新房"},
				{img: "../../static/index_icon4.png","text": "新房"},
				{img: "../../static/index_icon4.png","text": "新房"},
				{img: "../../static/index_icon4.png","text": "新房"},
				{img: "../../static/index_icon4.png","text": "新房"}],
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
	@import '../../common/style/ovistoredetail.scss'
</style>
