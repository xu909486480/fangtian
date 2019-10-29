<template>
	<view class="search">
		<view class="search_seek">
			<view class="head_left">
				<image src="../../static/index_icon3.png"></image>
				<input type="text" placeholder="请输入校区、楼盘、商圈名" />
				<image src="../../static/search_icon1.png"></image>
			</view>
			<view class="head_right">
				<text>取消</text>
			</view>
		</view>
		<view class="search_inner">
			<view class="inner_top">
				<text>历史搜索</text>
				<text>清空</text>
			</view>
			<view class="inner_bottom">
				<text>湖里万科城</text>
				<text>湖里万科城</text>
				<text>湖里万科城</text>
			</view>
			<view class="inner_top">
				<text>历史搜索</text>
				<text>清空</text>
			</view>
			<view class="inner_bottom">
				<text>湖里万科城</text>
				<text>湖里万科城</text>
				<text>湖里万科城</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		
	}
</script>

<style scoped>
	.search{
		padding:0 32rpx;
	}
	.search_seek {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.head_left {
		position: relative;
		padding:0 20rpx;
	}

	.head_left input {
		box-sizing: border-box;
		width: 560rpx;
		height: 72rpx;
		background: rgba(245, 245, 245, 1);
		border-radius: 36rpx;
		padding-left: 80rpx;
		font-size:30rpx;
		
		color:rgba(153,153,153,1);
		line-height:42rpx;
		
	}
	/* .head_left input {
		box-sizing: border-box;
		width:560rpx;
		height:72rpx;
		background:rgba(245,245,245,1);
		border-radius:36rpx;
		padding-left: 80rpx;
		
	}
 */
	.head_left image:nth-child(1) {
		width: 30rpx;
		height: 30rpx;
		position: absolute;
		top: 22rpx;
		left: 50rpx;
	}

	.head_left image:nth-child(3) {
		width: 40rpx;
		height: 40rpx;
		position: absolute;
		top: 16rpx;
		right: 50rpx;
	}

	.head_right text{
		font-size: 34rpx;
		font-weight: 400;
		color: rgba(25, 25, 25, 1);
	}
	.inner_top{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top:60rpx;
	}
	.inner_top text:nth-child(1){
		font-size:40rpx;
		font-weight:500;
		color:rgba(25,25,25,1);
		line-height:56rpx;
	}
	.inner_top text:nth-child(2){
		font-size:30rpx;
		
		color:rgba(153,153,153,1);
		line-height:42rpx;
		
	}
	.inner_bottom{
		margin-top:40rpx;
		display: flex;
		justify-content: space-between;
		}
	.inner_bottom text{
		text-align: center;
		display: inline-block;
		width:208rpx;
		height:60rpx;
		background:rgba(255,255,255,1);
		border-radius:30rpx;
		border:2rpx solid rgba(238,238,238,1);
		font-size:26rpx;
		
		color:rgba(25,25,25,1);
		line-height:60rpx;
	}
</style>
