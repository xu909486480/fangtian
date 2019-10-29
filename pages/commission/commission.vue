<template>
	<view class="commission">
		<navbar :titleName="titleName" :share="share"></navbar>
		<view class="commission_inner">
			<view class="title">
				<text>佣金套餐</text>
			</view>
			<view class="inner_msg">
				<view>垫佣7%：7%元套</view>
				<view>结佣批次1（后佣）：7%元/套</view>
			</view>
		</view>
		<view class="commission_inner">
			<view class="title">
				<text>佣金套餐</text>
			</view>
			<view class="inner_msg">
				<view>垫佣7%：7%元套</view>
				<view>结佣批次1（后佣）：7%元/套</view>
			</view>
		</view>
	</view>
</template>

<script>
	import navbar from '../../components/navbar/navbar.vue'
	export default {
		components: {
			navbar
		},
		data() {
			return {
				titleName: '佣金方案',
				share: '../../static/newdetail_icon6.png',
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
	.commission {}
	.commission_inner {
		padding: 0 32rpx;
		margin-top: 30rpx;
		.inner_msg {
			view {
				margin-bottom: 10rpx;
				font-size: 30rpx;
				font-weight: 400;
				color: rgba(25, 25, 25, 1);
				line-height: 24rpx;
			}
		}
	}

	.title {
		margin-bottom: 20rpx;
		text {
			font-size: 40rpx;
			font-weight: 500;
			color: rgba(25, 25, 25, 1);
			line-height: 56rpx;
		}
	}
</style>
