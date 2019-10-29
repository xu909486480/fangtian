<template>
	<view class="plotdetail">
		<detailswiper></detailswiper>
		<view class="detail">
			<view class="line1">
				<view class="line1_t">
					<text>某某花园</text>
				</view>
				<view class="line1_b">
					<image src="../../static/newdetail_icon7.png" mode=""></image>
					<text>关注</text>
				</view>
			</view>
			<view class="line2">
				<text>厦门湖里</text>
			</view>
			<view class="line3">
				<text>36900<text>元/平</text></text>
				<text>05月参考均价</text>
			</view>
			<view class="line4">
				<view class="">
					<text>180套</text>
					<text>在售房源</text>
				</view>
				<view class="">
					<text>120套</text>
					<text>在售房源</text>
				</view>
				<view class="">
					<text>9套</text>
					<text>在售房源</text>
				</view>
			</view>
			<view class="line5">
				<text>小区概况</text>
			</view>
			<view class="line6">
				<view>
					<text>建成年代：</text>
					<text>2015年-2018年</text>
				</view>
				<view>
					<text>建成年代：</text>
					<text>2015年-2018年</text>
				</view>
				<view>
					<text>建成年代：</text>
					<text>2015年-2018年</text>
				</view>
				<view>
					<text>建成年代：</text>
					<text>2015年-2018年</text>
				</view>
				<view>
					<text>建成年代：</text>
					<text>2015年-2018年</text>
				</view>
				<view>
					<text>建成年代：</text>
					<text>2015年-2018年</text>
				</view>
			</view>
		</view>
		
		<seat></seat>
		<view class="detail_tab">
			<view :class="[tab == index ? 'active' : '']" 
			v-for="(item,index) in detail_tab" 
			:key="index" @tap="tabList(index)">
				<text>{{item.text}}</text>
			</view>
		</view>
		<view class="detail_list">
			<detail :list="detail_list"></detail>
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
		<online></online>
	</view>
</template>

<script>
	import detailswiper from '../../components/detailswiper/detailswiper.vue'
	import seat from '../../components/seat/seat.vue'
	import detail from '../../components/detail/detail.vue'
	import refer from '../../components/refer/refer.vue'
	import online from '../../components/online/online.vue'
	export default {
		components:{detailswiper,seat,detail,refer,online},
		data() {
			return {
				tab:0,
				detail_tab:[{text:'在售房源'},{text:'在租房源'}],
				detail_list: [{
						"img": "../../static/index_list1.png",
						"line1": "新出松柏二小精装大三房的撒多撒多阿萨德",
						"price": 615
					}
				],
			}
		},
		methods: {
			tabList(index){
				this.tab = index
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '../../common/style/plotdetail.scss'
</style>
