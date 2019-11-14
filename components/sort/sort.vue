<template>
	<view class="sort">
		<view class="sort_list">
			<view v-for="(item,index) in sort" :key="index" 
			@tap="sortlist(index)"
			>
				<text>{{item.text}}</text>
				<image src="../../static/xiabiao_icon.png"></image>
			</view>
		</view>
		<!-- <view class="sort_position"> -->
			<view class="sort_tab" v-show="tab == 0">
				<view class="tab_all">
					<view class="tab_l">
						<text>不限</text>
						<text>不限</text>
						<text>不限</text>
						<text>不限</text>
						<text>不限</text>
					</view>
					<view class="tab_r">
						<view class="r_list">
							<text>不限</text>
							<radio value="" />		
						</view>
						<view class="r_list">
							<text>不限</text>
							<radio value="" />
							<!-- <image src="" mode=""></image>						 -->
						</view>
						<view class="r_list">
							<text>不限</text>
							<radio value="" />
							<!-- <image src="" mode=""></image>						 -->
						</view>
						<view class="r_list">
							<text>不限</text>
							<radio value="" />
							<!-- <image src="" mode=""></image>						 -->
						</view>
					</view>
				</view>
				<view class="sort_btn">
					<text>清空</text>
					<text>确定</text>
				</view>
			</view>
			
			<view class="sort_tab" v-show="tab == 1">
				<view class="tab_all">
					<view class="tab_l">
						<text>总价</text>
						<text>单价</text>
					</view>
					<view class="tab_r">
						<view class="r_list">
							<text>不限</text>					
						</view>
						<view class="r_list">
							<text>不限</text>					
						</view>
						<view class="r_list">
							<text>不限</text>					
						</view>
						<view class="r_list">
							<text>不限</text>					
						</view>
					</view>
				</view>
				<view class="price_btn">
					<text>确定</text>
				</view>
			</view>
			
			<view class="unit" v-show="tab == 2">
				<view class="unit_list">
					<text>不限</text>
					<!-- <image src="" mode=""></image> -->
					<radio value="" />
				</view>
				<view class="price_btn">
					<text>确定</text>
				</view>
			</view>
			
			<view class="screen" v-show="tab == 3">
				<view class="screen_list">
					<view class="list_txt">
						<text>面积/㎡</text> 
					</view>
					<view class="list_tab">
						<text>1</text>
						<text>2</text>
						<text>3</text>
						<text>4</text>
						<text>5</text>
						<text>6</text>
						<text>7</text>
						<text>8</text>
					</view>
				</view>
				<view class="sort_btn">
					<text>清空</text>
					<text>确定</text>
				</view>
			</view>
			
			<view class="" v-show="tab == 4">
				默认排序
			</view>
		<!-- </view> -->
			
	</view>
</template>

<script>
	export default {
		name:'sort',
		props:['sort'],
		data(){
			return{
				tab:8,
			}
		},
		methods:{
			sortlist(index){
				if(index == 0){
					this.tab = index
				}else if(index == 1){
					this.tab = index
				}else if(index == 2){
					this.tab = index
				}else if(index == 3){
					this.tab = index
				}else if(index == 4){
					this.tab = index
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.sort {
		padding: 0 32rpx 30rpx;
		position: relative;
		.sort_list{
			display: flex;
			justify-content: space-between;
			align-items: center;
			view {
				display: flex;
				justify-content: center;
				align-items: center;
				text {
					font-size: 30rpx;
		
					color: rgba(25, 25, 25, 1);
					line-height: 42rpx;
				}
		
				image {
					margin-left: 14rpx;
					width: 12rpx;
					height: 8rpx;
				}
			}	
		}
		
		// .sort_position{
			
			.sort_tab{
				width: 686rpx;
			z-index: 666666;
			background: #ffffff;
			position: absolute;
			height: 1000rpx;
				.tab_all{
				display: flex;
				justify-content: space-between;
				height: 1000rpx;
					.tab_l{
							width: 320rpx;
							display: flex;
							flex-direction: column;
							text{
								padding: 20rpx 0;
								border-bottom: 2rpx solid #F5F5F5;
							}
						}
						.tab_r{
							width: 320rpx;
							.r_list{
								justify-content: space-between;
								align-items: center;
								display: flex;
								border-bottom: 2rpx solid #F5F5F5;
									padding: 20rpx 0;
								text{
								}
								radio{
									width: 36rpx;
									height: 36rpx;
								}
							}
							
						}
					}
					.sort_btn{
						position: absolute;
						bottom:0;
						display: flex;
						justify-content: space-between;
						align-items: center;
						text-align: center;
						text:nth-child(1){
							width:330rpx;
							height:90rpx;
							background:rgba(255,169,2,1);
							border-radius:45rpx;
							font-size:34rpx;
							color:rgba(255,255,255,1);
							line-height:90rpx;
						}
						text:nth-child(2){
							width:330rpx;
							height:90rpx;
							background:rgba(250,100,0,1);
							border-radius:45rpx;
							font-size:34rpx;
							color:rgba(255,255,255,1);
							line-height:90rpx;
						}
					}
				}
		}
	// }
	
	.price_btn{
		height:90rpx;
		background:linear-gradient(225deg,rgba(245,102,7,1) 0%,rgba(247,156,0,1) 100%);
		border-radius:45rpx;
		text-align: center;
		text{
			font-size:34rpx;
			color:rgba(255,255,255,1);
			line-height:90rpx;
		}
	}
	.unit{
		z-index: 666666;
		background: #ffffff;
		position: absolute;
		height: 1000rpx;
		width: 686rpx;
		.unit_list{
			padding: 20rpx 0;
			border-bottom: 2rpx solid #F5F5F5;
			display: flex;
			justify-content: space-between;
			align-items: center;
			text{
				font-size:34rpx;
				color:rgba(25,25,25,1);
				line-height:48rpx;
			}
			radio{
				width: 34rpx;
				height: 34rpx;
			}
		}
		.price_btn{
			position: absolute;
			bottom:0;
			
			height:90rpx;
			width: 686rpx;
			background:linear-gradient(225deg,rgba(245,102,7,1) 0%,rgba(247,156,0,1) 100%);
			border-radius:45rpx;
			text-align: center;
			text{
				font-size:34rpx;
				color:rgba(255,255,255,1);
				line-height:90rpx;
			}
		}
	}
	
	.screen{
		z-index: 666666;
		background: #ffffff;
		position: absolute;
		width: 686rpx;
		height: 1000rpx;
		.screen_list{
			.list_txt{
				text{
					font-size:40rpx;
					font-weight:500;
					color:rgba(25,25,25,1);
					line-height:56rpx;
				}
			}
			.list_tab{
				display: flex;
				text-align:center ;
				flex-wrap: wrap;
				justify-content: space-between;
				text{
					margin-top: 20rpx;
					width:156rpx;
					height:60rpx;
					border-radius:30rpx;
					// border:2rpx solid rgba(250,100,0,1);
					border:2rpx solid rgba(238,238,238,1);
					font-size:26rpx;
					// color:rgba(250,100,0,1);
					color:rgba(25,25,25,1);
					line-height:62rpx;
				}
			}
		}
		.sort_btn{
			position: absolute;
			bottom:0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			text-align: center;
			text:nth-child(1){
				width:330rpx;
				height:90rpx;
				background:rgba(255,169,2,1);
				border-radius:45rpx;
				font-size:34rpx;
				color:rgba(255,255,255,1);
				line-height:90rpx;
			}
			text:nth-child(2){
				width:330rpx;
				height:90rpx;
				background:rgba(250,100,0,1);
				border-radius:45rpx;
				font-size:34rpx;
				color:rgba(255,255,255,1);
				line-height:90rpx;
			}
		}
	}
	
</style>
