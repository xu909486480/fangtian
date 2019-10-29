<template>
	<view class="consider">
		<navbar :titleName="titleName" :share="share"></navbar>
		<view class="tab">
			<view @tap="tabList(index)" v-for="(item,index) in tab_list" :key="index" :class="[tab==index?'active':'']">
				{{item.text}}
			</view>
		</view>
		<view class="consider_new">
			<view class="new_img">
				<image src="../../static/consider_banner1.png"></image>
				<image src="../../static/consider_icon1.png" class="sign"></image>
				<image src="../../static/consider_icon4.png" class="pay"></image>
				<image src="../../static/consider_icon2.png" class="sign2"></image>
			</view>
			<view class="new_site">
				<text>住宅·莲花国际</text>
				<text>468人已看过</text>
			</view>
			<view class="new_seat">
				<image src="../../static/index_icon1.png"></image>
				<text>集美龙亭六里一号</text>
			</view>
			<view class="new_number">
				<text>36890</text>
				<text>元/m²</text>
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
				titleName:'新房销量排行',
				share:'../../static/newdetail_icon6.png',
				tab: 0,
				tab_list: [{
						text: '销量榜'
					},
					{
						text: '关注榜'
					},
					{
						text: '热门新榜'
					}
				]

			}
		},
		methods: {
			tabList(index) {
				this.tab = index
			},
		}
	}
</script>

<style scoped lang="scss">
	@import '../../common/style/consider.scss'
</style>
