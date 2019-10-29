<template>
	<view class="detail">
		<view class="tab_list" v-for="(item,index) in list" 
		:key="index" 
		@tap="detailList"
		>
			<view class="list_img">
				<image :src="item.img"></image>
			</view>
			<view class="list_inner">
				<view class="inner_line1">
					<text>{{item.line1}}</text>
				</view>
				<view class="inner_line2">
					<text>源盛花园</text><text>建筑面积:80-128m²</text>
				</view>
				<view class="inner_line3">
					<text>精选好房</text> 
					<text>学区房</text>
					<text>配套成熟</text>
					<text>交通便利</text>
				</view>
				<view class="inner_line4">
					{{item.price}}
					<text>万</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			// list:{
			// 	type:[Object,Array],
			// 	default:['list']
			// },
			list:[Object,Array],
			index:Number
		},
		data() {
			return {
				
			}
		},
		methods:{
			detailList(){
				uni.navigateTo({
					url:'../../components/newdetail/newdetail'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.detail{
		background: #FFFFFF;
		padding:0 32rpx;
	}
	.tab_list {
		display: flex;
		padding-bottom: 40rpx;
	}
	.list_img{
		image {
			width: 240rpx;
			height: 180rpx;
		}
	}
	.list_inner {
		margin-left: 30rpx;
	}

	.inner_line1 {
		margin-top:-6rpx;
		text{
			display: inline-block;
			width:408rpx;
			font-size:34rpx;
			font-weight:500;
			color:rgba(25,25,25,1);
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	}

	.inner_line2{
		margin-top:-10rpx;
		text:nth-child(1) {
			font-size:26rpx;
			
			color:rgba(25,25,25,1);
		}
		text:nth-child(2) {
			font-size: 26rpx;
			font-weight: 400;
			color: rgba(153, 153, 153, 1);
			margin-left: 20rpx;
		}
	}
	.inner_line3{
		margin-top:-10rpx;
		 text {
			 font-size: 22rpx;
			 font-weight: 400;
			 color: rgba(102, 102, 102, 1);
			 margin-right: 22rpx;
		 }
		
	}

	.inner_line4 {
		margin-top:-10rpx;
		font-size: 36rpx;
		font-weight: 500;
		color: rgba(255, 116, 0, 1);
		text{
			font-size: 24rpx;
		}
	}
</style>
