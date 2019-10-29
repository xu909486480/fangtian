<template>
	<view class="refer">
		<view class="tab_refer" v-for="(item,index) in referList" :key="index">
			<view class="tab_left">
				<image src=""></image>
			</view>
			<view class="tab_right">
				<view class="tab_top">
					<view>
						<text>{{item.text}}</text>
					</view>
					<view>
						<image src="../../static/newdetail_icon6.png"></image>
						<text>咨询</text>
					</view>
				</view>
				<view class="tab_center">咨询，我了解最新动态</view>
				<view class="tab_bottom">
					<text>将楼盘设为主营</text>
					<text>|</text>
					<text>用户评价好</text>
					<text>|</text>
					<text>消息回复快</text> 
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		name:'refer',
		props:['referList'],
		data(){
			return{
				
			}
		},
		methods:{
		}
	}
</script>

<style scoped lang="scss">
	.tab_refer {
		display: flex;
		background: #FFFFFF;
		margin-bottom: 30rpx;
		.tab_left {
			image {
				margin-top: 10rpx;
				width: 90rpx;
				height: 90rpx;
				background: rgba(238, 238, 238, 1);
			}
		}
	
		.tab_right {
			width: 566rpx;
			margin-left: 30rpx;
	
			.tab_top {
				display: flex;
				justify-content: space-between;
				align-items: center;
	
				view:nth-child(1) {
					text {
						font-size: 34rpx;
						font-weight: 500;
						color: rgba(25, 25, 25, 1);
						line-height: 48rpx;
					}
				}
	
				view:nth-child(2) {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 160rpx;
					height: 60rpx;
					background: rgba(255, 255, 255, 1);
					border-radius: 30rpx;
					border: 2rpx solid rgba(238, 238, 238, 1);
	
					image {
						width: 30rpx;
						height: 30rpx;
					}
	
					text {
						margin-left: 10rpx;
						font-size: 26rpx;
						font-weight: 400;
						color: rgba(25, 25, 25, 1);
	
					}
				}
			}
	
			.tab_center {
				font-size: 26rpx;
				font-weight: 400;
				color: rgba(25, 25, 25, 1);
				line-height: 36rpx;
			}
	
			.tab_bottom {
				text {
					font-size: 26rpx;
					font-weight: 400;
					color: rgba(153, 153, 153, 1);
					line-height: 36rpx;
				}
	
				text:nth-child(even) {
					margin: 0 6rpx;
				}
			}
		}
	}
</style>
