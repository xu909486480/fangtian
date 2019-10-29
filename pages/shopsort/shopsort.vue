<template>
	<view class="shopsort">
		<headnav></headnav>
		<view class="main">
			<van-sidebar :active=" active " @change="onChange">
			  <van-sidebar-item title="推荐分类" />
			  <van-sidebar-item title="家装建材" />
			  <van-sidebar-item title="家纺家饰" />
			</van-sidebar>
			<view class="main_r">
				<view class="r_img">
					<image src="" mode=""></image>
				</view>
				<view class="r_inner">
					<view class="inner_h3">
						<text>常用分类</text>
					</view>
					<view class="inner_grid">
						<view class="grid_list">
							<image ></image>
							<text>大米</text>
						</view>
						<view class="grid_list">
							<image ></image>
							<text>大米</text>
						</view>
						<view class="grid_list">
							<image ></image>
							<text>大米</text>
						</view>
						<view class="grid_list">
							<image ></image>
							<text>大米</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import headnav from '../../components/headnav/headnav.vue'
	export default{
		components:{headnav},
		data(){
			return{
				active:0
			}
		},
		methods:{
			onChange(event) {
			    uni.showToast({
			      icon: 'none',
			      title: `切换至第${event.detail}项`
			    });
			  }
		}
	}
</script>

<style scoped lang="scss">
	.main{
		display: flex;
		justify-content: space-between;
		padding-right:32rpx;
	}
	.main_r{
		margin-left: 20rpx;
		.r_img{
			image{
				width:518rpx;
				height:258rpx;
				background:rgba(216,216,216,1);
			}
		}
		.r_inner{
			.inner_h3{
				text{
					font-size:30rpx;
					font-weight:500;
					color:rgba(25,25,25,1);
					line-height:42rpx;
				}
			}
			.inner_grid{
				display: flex; 
				justify-content: space-between;
				flex-wrap: wrap;
				.grid_list{
					display: flex;
					flex-direction: column;
					align-items: center;
					image{
						width:160rpx;
						height:160rpx;
						background:rgba(216,216,216,1);
					}
					text{
						font-size:26rpx;
						font-weight:500;
						color:rgba(25,25,25,1);
						line-height:36rpx;
					}
				}
				
			}
		}
	}
</style>
