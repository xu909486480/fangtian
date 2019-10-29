<template>
	<view class="billDetail">
		<view class="list_box" v-for="(item,index) in billList" :key="index">
			<view class="box_l">
				<image :src="item.img" mode=""></image>
			</view>
			<view class="box_r">
				<view class="r_line1">
					<text>购物支付-老王家具店</text>
					<text>-6880.00</text>
				</view>
				<view class="r_line2">
					<text>8月5日 13:58</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			billList:[Object,Array],
			index:Number
		},
		data() {
			return {
			
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped lang="scss">
	.list_box{
		// background: #FFFFFF;
		padding-left:32rpx;
		padding-top: 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.box_l{
			image{
				width: 90rpx;
				height: 90rpx;
			}
		}
		.box_r{
			width: 608rpx;
			border-bottom: 2rpx solid #F5F5F5;
			padding-bottom: 20rpx;
			.r_line1{
				display: flex;
				justify-content: space-between;
				align-items: center;
				text:nth-child(1){
					font-size:30rpx;
					color:rgba(25,25,25,1);
					line-height:42rpx;
				}
				text:nth-child(2){
					font-size:30rpx;
					font-weight:500;
					color:rgba(25,25,25,1);
					line-height:42rpx;
					padding-right:32rpx;
				}
			}
			.r_line2{
				text{
					font-size:26rpx;
					color:rgba(153,153,153,1);
					line-height:36rpx;
				}
			}
		}
	}
</style>
