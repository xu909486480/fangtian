<template>
	<view class="remark">
		<navbar :titleName="titleName"></navbar>
		<view class="detail_remark">
			<view class="remark_tab">
				<text>好评(3)</text>
				<text>差评(1)</text>
				<text>有图(2)</text>
				<text>视频(2)</text>
			</view>
			<view class="remark_inner" v-for="(item,index) in remark" :key="index">
				<view class="inner_top">
					<image></image>
					<text>房田访友：185****2356</text>
				</view>
				<view class="inner_bottom">
					<text>不知道这里的物业怎么知道这里的物业怎么知道这里的物业怎么知道这里的物业怎么知道这里的物业怎么样？</text>
				</view>
				<view class="remark_up">
					<view class="up_left">
						<text>{{item.time}}</text>
					</view>
					<view class="up_right">
						<view class="up_zan">
							<image src="../../static/news_icon6.png" mode=""></image>
							<text>点赞(0)</text>
						</view>
						<view class="up_pl">
							<image src="../../static/newdetail_icon6.png" mode=""></image>
							<text>点赞(0)</text>
						</view>
					</view>
				</view>
				<view class="pl_inner">
					<view>
						<text>18012355678：</text>
						<text>感谢您的光临，欢迎继续关注我们哦，嘻嘻！</text>
					</view>
				</view>
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
				titleName:'用户点评',
				remark: [{
					time: '2019年05月12日'
				}, {
					time: '2019年05月12日'
				}]
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
@import '../../common/style/remark.scss'
</style>
