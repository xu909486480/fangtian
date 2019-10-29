<template>
	<view class="alltab">
		<view v-for="(item,index) in alltab" :key="index" 
			:class="{'active':tabIndex==index}" 
			@tap="allTab(index)">
			{{item.text}}
		</view>
	</view>
</template>

<script>
	export default {
		name:'alltab',
		props:{
			alltab:Array,
			tabIndex:Number
		},
		data(){
			return{
				
			}
		},
		methods:{
			allTab(index) {
				this.$emit('tabTap',index)
			},
		}
	}
</script>

<style scoped lang="scss">
	.alltab {
		padding: 0 32rpx;
		display: flex;
		margin: 30rpx 0 40rpx;
	
		view {
			width: 156rpx;
			height: 60rpx;
			background: rgba(255, 255, 255, 1);
			border-radius: 30rpx;
			border: 2rpx solid rgba(238, 238, 238, 1);
			line-height: 60rpx;
			text-align: center;
			font-size: 26rpx;
			color: rgba(25, 25, 25, 1);
			margin-right: 20rpx;
		}
	
		.active {
			width: 156rpx;
			height: 60rpx;
			background: rgba(255, 255, 255, 1);
			border-radius: 30rpx;
			border: 2rpx solid rgba(250, 100, 0, 1);
			line-height: 60rpx;
			text-align: center;
			font-size: 26rpx;
			margin-right: 20rpx;
			color: rgba(250, 100, 0, 1);
		}
	}
</style>
