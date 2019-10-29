<template>
	<view class="sometab">
		<view @tap="tabList(index)" v-for="(item,index) in sometab" 
		:key="index" 
		:class="{'active':tab==index}">
			{{item.text}}
		</view>
	</view>
</template>

<script>
	export default {
		name:'sometab',
		props:['sometab'],
		data(){
			return{
				tab: 0,
			}
		},
		methods:{
			tabList(index) {
				this.tab = index
			},
			 
		}
	}
</script>

<style scoped lang="scss">
	.sometab{
		padding: 0 32rpx 30rpx;
		display: flex;
		view{
				position: relative;
				font-size:26rpx;
				color:rgba(25,25,25,1);
				line-height:90rpx;
				margin-right:40rpx;
		}
		.active{
				font-size:46rpx;
				font-weight:500;
				color:#FA6400;
				line-height:90rpx;
			
		}
		.active:after{
			content: '';
					display: inline-block;
					width:16rpx;
					height:8rpx;
					background:#FA6400;
					border-radius:4rpx;
					position: absolute;
					left:0;
					right:0;
					bottom:0;
					margin:0 auto;
		}
		
	}
</style>
