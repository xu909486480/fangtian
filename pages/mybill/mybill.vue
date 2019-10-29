<template>
	<view class="mybill">
		<view class="bg">
			<navbar :titleName="titleName"></navbar>
		</view>
		<view class="mybill_list">
			<view class="list_tab">
				<view class="tab_l">
					<text>2019年8月</text>
					<image src="../../static/user_icon28.png" mode=""></image>
				</view>
				<view class="tab_r">
					<view class="r_l">
						<text>支出 ¥6900；</text> 
						<text>收入 ¥30</text>
					</view>
					<view class="r_r" @tap="monBill">
						<text>月账单</text>
						<image src="../../static/newdetail_icon1.png" mode=""></image>
					</view>
				</view>
			</view>
			<bill-detail :billList="billList"></bill-detail>
		</view>
	</view>
</template>

<script>
	import navbar from '../../components/navbar/navbar.vue'
	import billDetail from '../../components/billDetail/billDetail.vue'
	export default {
		components:{navbar,billDetail},
		data(){
			return{
				titleName:'账单',
				billList:[{img:'../../static/user_icon29.png'},
				{img:'../../static/user_icon30.png'},
				{img:'../../static/user_icon31.png'}]
			}
		},
		methods:{
			monBill(){
				uni.navigateTo({
					url:'../monbill/monbill'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.bg{
		background: #FFFFFF;
	}
	.mybill{
		height: 100%;
		background:rgba(245,245,245,1);
		.mybill_list{
			margin-bottom: 30rpx;
			background: #FFFFFF;
			.list_tab{
			border-bottom: 2rpx solid #F5F5F5;
			
					padding: 30rpx 32rpx 20rpx;
				.tab_l{
					display: flex;
					align-items: center;
					text{
						font-size:34rpx;
						font-weight:500;
						color:rgba(25,25,25,1);
						line-height:48rpx;
					}
					image{
						margin-left: 10rpx;
						width: 20rpx;
						height: 12rpx;
					}
				}
				.tab_r{
					display: flex;
					justify-content: space-between;
					align-items: center;
					.r_l{
						text:nth-child(1){
							font-size:26rpx;
							color:rgba(153,153,153,1);
							line-height:36rpx;
						}
						text:nth-child(2){
							font-size:26rpx;
							color:rgba(153,153,153,1);
							line-height:36rpx;
						}
					}
					.r_r{
						display: flex;
						justify-content: space-between;
						align-items: center;
						text{
							font-size:26rpx;
							color:rgba(153,153,153,1);
							line-height:36rpx;
						}
						image{
							margin-left: 16rpx;
							width: 16rpx;
							height: 30rpx;
						}
					}
				}
			}
			
			
			
		}
	}
</style>
