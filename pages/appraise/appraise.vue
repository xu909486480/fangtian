<template>
	<view class="appraise">
		<navbar :titleName="titleName"></navbar>
		<view class="minute">
			<view class="minute_t">
				<text>推荐度</text>
			</view>
			<view class="minute_b">
				<text>5.0</text>
				<text>共4人评价</text>
			</view>
		</view>
		<!-- tab选项卡 -->
		<view class="tab_index">
			<view v-for="(item,index) in tab_list" :key="index" :class="[roomtab==index?'btn_active':'']" @tap="onChange(index)">{{item.txt}}</view>
		</view>
		<!-- 客户评价 -->
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
						<van-rate :value=" value " size="24rpx" color="#FA6400" style="margin-top:-6rpx;" disabled disabled-color="#FA6400"/>
					</view>
				</view>
			</view>
			<view class="appraise_c2">
				<text>周边环境很好，小姐姐人也很不错，很赞哦</text>
			</view>
		</view>
	</view>
	
</template>

<script>
	import navbar from '../../components/navbar/navbar.vue'
	export default {
		components:{navbar},
		data() {
			return {
				titleName:'客户评价',
				value:4,
				roomtab: 0,
				tab_list:[
				{txt:'销量'},
				{txt:'关注'},
				{txt:'热门新榜'},
				{txt:'热门新榜'}],
				borkerList:[{time:'2019/05/12'},{time:'2019/04/18'},{time:'2019/05/12'},{time:'2019/04/18'}],
			}
		},
		methods: {
			onChange(index){
				this.roomtab = index
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '../../common/style/appraise.scss'
</style>
