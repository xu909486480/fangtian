<template>
	<view class="joinhouse">
		<detailswiper></detailswiper>
		<view class="detail">
			<view class="line1">
				<text>莲花国际</text>
				<text>2室1厅1卫</text>
			</view>
			<view class="line2">
				<text>2600</text>
				<text>元/月(月付)</text>
			</view>
			<view class="line3">
				<text>有阳台</text>
				<text>有阳台</text>
				<text>有阳台</text>
				<text>有阳台</text>
			</view>
			<view class="line4">
				<text>位于万达广场</text>
				<text>离最近公交站100米</text>
				<image src="../../static/newdetail_icon1.png" mode=""></image>
			</view>
			
			<view class="line5">
				<view class="">
					<view class="">
						<text>面积：</text>
						<text>36m²</text>
					</view>
					<view class="">
						<text>面积：</text>
						<text>36m²</text>
					</view>
					<view class="">
						<text>面积：</text>
						<text>36m²</text>
					</view>
					<view class="">
						<text>面积：</text>
						<text>36m²</text>
					</view>
					<view class="">
						<text>面积：</text>
						<text>36m²</text>
					</view>
				</view>
				<view class="">
					<view class="">
						<text>入住：</text>
						<text>随时入住</text>
					</view>
					<view class="">
						<text>入住：</text>
						<text>随时入住</text>
					</view>
					<view class="">
						<text>入住：</text>
						<text>随时入住</text>
					</view>
					<view class="">
						<text>入住：</text>
						<text>随时入住</text>
					</view>
					<view class="">
						<text>入住：</text>
						<text>随时入住</text>
					</view>
				</view>
			</view>
			<view class="line6">
				<text>地址：</text>
				<text>集美龙亭六里一号，龙亭六里七号</text>
				<image src="../../static/newdetail_icon1.png" mode=""></image>
			</view>
		</view>
		
		<view class="detail_inner">
			<view class="title">
				<text>房源管家</text>
			</view>
			<view class="detail_list">
				<view class="tab_refer">
					<view class="tab_left">
						<image src=""></image>
					</view>
					<view class="tab_right">
						<view class="tab_top">
							<view>
								<text>向华强</text>
							</view>
							<view>
								<image src="../../static/newdetail_icon6.png"></image>
								<text>咨询</text>
							</view>
						</view>
						<view class="tab_center">咨询，我了解最新动态</view>
					</view>
				</view>
			</view>
			
			<view class="title">
				<text>房源介绍</text>
			</view>
			<view class="index_grid">
				<view class="grid_index" v-for="(item,index) in join_grid" :key="index" @tap="gridList(index)">
					<image :src="item.img"></image>
					<view>{{item.text}}</view>
				</view>
			</view>
			<view class="title">
				<text>房源两点</text>
			</view>
			<view class="inner_msg">
				<text>交通便利，家电齐全，有阳台，窗户光线充足</text>
			</view>
			<view class="title">
				<text>费用详情</text>
			</view>
			<view class="inner_msg">
				<text>年租价(当租期不足一年时租金可能会上浮，详询管家)</text>
			</view>
			<view class="inner_price">
				<view class="">
					<text>付款方式</text>
					<text></text>
					<text>未知</text>
				</view>
				<view class="">
					<text>租金</text>
					<text>元/月</text>
					<text>2600</text>
				</view>
				<view class="">
					<text>服务费</text>
					<text>元</text>
					<text>0</text>
				</view>
				<view class="">
					<text>中介费</text>
					<text>元</text>
					<text>需咨询</text>
				</view>
				<view class="">
					<text>押金</text>
					<text>元</text>
					<text>2600</text>
				</view>
			</view>
			<view class="title">
				<text>租客要求</text>
			</view>
			<view class="inner_require">
				<text>不养宠物</text>
				<text>|</text>
				<text>爱干净</text>
				<text>|</text>
				<text>不带小孩</text>
			</view>
			<view class="title">
				<text>合租信息</text>
			</view>
			<view class="inner_msg">
				<text>B房间</text>
				<text>随时入住</text>
				<text>1500元/月</text>
				<text>当前房间</text>
			</view>
			<seat></seat>
		</view>
		
		<view class="detail_foryou">
			<view class="foryou_title">
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
	import seat from '../../components/seat/seat.vue'
	import detail from '../../components/detail/detail.vue'
	import online from '../../components/online/online.vue'
	export default {
		components:{detailswiper,seat,detail,online},
		data(){
			return{
				join_grid: [{img: "../../static/index_icon4.png","text": "新房"}, 
				{img: "../../static/index_icon4.png","text": "新房"}, 
				{img: "../../static/index_icon4.png","text": "新房"}, 
				{img: "../../static/index_icon4.png","text": "新房"}, 
				{img: "../../static/index_icon4.png","text": "新房"}, 
				{img: "../../static/index_icon4.png","text": "新房"}, 
				{img: "../../static/index_icon4.png","text": "新房"}, 
				{img: "../../static/index_icon4.png","text": "新房"}, ],
				detail_list: [{
					"img": "../../static/index_list1.png",
					"line1": "新出松柏二小精装大三房的撒多撒多阿萨德",
					"price": 615},
					{
					"img": "../../static/index_list1.png",
					"line1": "新出松柏二小精装大三房的撒多撒多阿萨德",
					"price": 755}]
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped lang="scss">
	@import '../../common/style/joinhouse.scss'
</style>
