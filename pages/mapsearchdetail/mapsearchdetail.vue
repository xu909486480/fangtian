<template>
	<view class="mapsearchdetail">
		<navbar :titleName="titleName"></navbar>
		<map style="height: 480rpx;width: 750rpx;"></map>
		<view class="detail">
			<view class="map_to">
				<text>新城国际广场</text>
				<image src=""></image>
			</view>
			<view class="title">
				<text>集美·厦门北站商业区-在租3套</text>
			</view>
			<detail :list="detail_list"></detail>
		</view>
	</view>
</template>
 
<script>
	import navbar from '../../components/navbar/navbar.vue'
	import detail from '../../components/detail/detail.vue'
	export default {
		components:{navbar,detail},
		data() {
			return {
				titleName:'地图找房详情',
				share:'../../static/newdetail_icon6.png',
				detail_list: [{
					"img": "../../static/index_list1.png",
					"line1": "新出松柏二小精装大三房的撒多撒多阿萨德",
					"price": 615
				},
				{
					"img": "../../static/index_list1.png",
					"line1": "厅带阳台朝南，南北通透的萨达萨达暗示的撒",
					"price": 720
				}],
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.map_to{
		padding: 30rpx 32rpx 0;
		
		display: flex;
		justify-content: space-between;
		align-items: center;
		text{
			font-size:46rpx;
			font-weight:500;
			color:rgba(25,25,25,1);
			line-height:64rpx;
			
		}
		image{
			width: 16rpx;
			background: #007AFF;
			height: 30rpx;
		}
	}
	.title{
		padding: 0 32rpx 20rpx;
		text{
			font-size:30rpx;
			color:rgba(153,153,153,1);
			line-height:42rpx;
		}
	}
</style>
