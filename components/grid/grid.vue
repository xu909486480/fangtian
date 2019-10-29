<template>
	<view class="grid">
		<!-- <scroll-view scroll-x class="bridal_grid"> -->
			<view class="grid_index" v-for="(item,index) in grid"
					:key="index" @tap="gridList(index)"
					:style="{width:gridListWidth + '%'}"
					>
				<image :src="item.img" 
				:style="{width:gridImgWidth + 'rpx',height:gridImgHeight + 'rpx'}"
				></image>
				<view>{{item.text}}</view>
			</view>
		<!-- </scroll-view> -->
	</view>
</template>

<script>
	export default {
		name:'grid',
		props:{
			grid:{
				type:Array
			},
			gridImgWidth:{
				type:Number,
				default:90
			},
			gridImgHeight:{
				type:Number,
				default:90
			},
			gridListWidth:{
				type:Number,
				default:20
			}
			
		},
		data(){
			return{
				
			}
		},
		methods:{
			gridList(index){
				this.$emit('gridList',index)
			}
		}
	}
</script>

<style scoped lang="scss">
	.grid {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		margin-top: 20rpx;
		.grid_index {
			// width: 25%;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-bottom: 20rpx;
			// image {
			// 	width: 90rpx;
			// 	height: 90rpx;
			// }
	
			view {
				font-size: 26rpx;
				margin-top:14rpx;
				color: rgba(25, 25, 25, 1);
				line-height: 36rpx;
			}
		}
	}
</style>
