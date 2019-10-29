<template>
	<view class="borker">
		<!-- 顶部导航 -->
		<navbar :titleName="titleName" 
		:share="share"
		:bg="bg"
		></navbar>
		<!-- 经纪人 -->
		<view class="borker_top">
			<view class="top_head">
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
			<view class="top_info">
				<text>用户推荐前10%</text>
			</view>
		</view>
		<!-- 客户评分 -->
		<view class="marker">
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
			<view class="marker_c">
				<text>服务年限：&gt;1年</text>
			</view>
			<view class="marker_b">
				<text>服务记录：出售房源三套 签约买房客户1人</text>
			</view>
		</view>
		<!-- 客户评价 -->
		<view class="appraise">
			<view class="appraise_t">
				<text>客户评价(4)</text>
			</view>
			<view class="appraise_c1" v-for="(item,index) in borkerList" :key="index">
				<view class="appraise_list">
					<view class="c1_img">
						<image></image>
					</view>
					<view class="c1_inner">
						<view class="inner_t">
							<text>135****5678 买房人</text>
							<text>{{item.time}}</text>
						</view>
						<view class="inner_b">
							<text>非常推荐</text>
							<van-rate :value=" value " bind:change="onChange" size="24rpx" color="#FA6400" style="margin-top:-6rpx;" disabled disabled-color="#FA6400"/>
						</view>
					</view>
				</view>
				<view class="appraise_c2">
					<text>周边环境很好，小姐姐人也很不错，很赞哦</text>
				</view>
			</view>
			
			<view class="appraise_b" @tap="appraise">
				<text>查看全部</text>
			</view>
		</view>
		<!-- 在售房源 -->
		<view class="sell">
			<view class="sell_h3">
				<text>在售房源</text>
			</view>
			<detail :list="list"></detail>
		</view>
		<!-- 底部导航 -->
		<view class="detail_tabbar">
			<view class="tabbar_inner1" @tap="aaa" v-if="bbb != true">
				<image src="../../static/newdetail_icon8.png"></image>
				<text>收藏</text>
			</view>
			<view class="tabbar_inner3">在线咨询</view>
			<view class="tabbar_inner4">电话咨询</view>
		</view>
	</view>
</template>

<script>
	import detail from '../../components/detail/detail.vue'
	import navbar from '../../components/navbar/navbar.vue'
	export default {
		components: {detail,navbar},
		data() {
			return {
				bg:'background:#FFFFFF',
				titleName:'经纪人店铺',
				share:'../../static/newdetail_icon6.png',
				value:4,
				borkerList:[{time:'2019/05/12'},{time:'2019/04/18'}],
				list:[{
						"img": "../../static/index_list1.png",
						"line1": "新出松柏二小精装大三房的撒多撒多阿萨德",
						"price": 615
					},
					{
						"img": "../../static/index_list1.png",
						"line1": "厅带阳台朝南，南北通透的萨达萨达暗示的撒",
						"price": 720
					}]
			}
		},
		methods: {
			// 跳转到客户评价
			appraise(){
				uni.navigateTo({
					url:'../appraise/appraise'
				})
			},
			 onChange(event) {
			      this.value= event.detail
			  }
				
		}
	}
</script>

<style scoped lang="scss">
	@import '../../common/style/borker.scss'
</style>
