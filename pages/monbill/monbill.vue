<template>
	<view class="monbill">
			<navbar :titleName="titleName"></navbar>
		<view class="mon_t">
			<view class="t_l">
				<text>2019年8月</text>
				<image src="../../static/user_icon28.png" mode=""></image>
			</view>
			<view class="t_r">
				<view class="" v-for="(item,index) in monList" :key="index"
				:class="{'active':monTab == index}" 
				@tap="monTap(index)"
				>
					{{item.text}}
				</view>
			</view>
		</view>
		
		<view class="mon_c">
			<view class="c_t">
				<text>共支出15笔合计</text>
			</view>
			<view class="c_b">
				<text>¥</text>
				<text>12000.00</text>
			</view>
		</view>
		<view class="mon_txt">
			<text>支出排行</text>
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
				monTab:0,
				titleName:'月账单',
				monList:[{text:'支出'},{text:'收入'}],
				billList:[{img:'../../static/user_icon29.png'},
				{img:'../../static/user_icon30.png'},
				{img:'../../static/user_icon31.png'}]
			}
		},
		methods:{
			monTap(index){
				this.monTab = index
			}
		}
	}
</script>

<style scoped lang="scss">
	.mon_t{
		display: flex;
		padding: 0 32rpx;
		justify-content: space-between;
		align-items: center;
		border-bottom: 2rpx solid #F5F5F5;
		
		.t_l{
			display: flex;
			align-items: center;
			text{
				font-size:34rpx;
				font-weight:500;
				color:rgba(25,25,25,1);
				line-height:48rpx;
			}
			image{
				width: 20rpx;
				height: 12rpx;
				margin-left: 10rpx;
			}
		}
		.t_r{
			display: flex;
			view{
				font-size:34rpx;
				font-weight:500;
				color:rgba(25,25,25,1);
				margin-left: 50rpx;
			}
			.active{
				position: relative;
				font-size:34rpx;
				font-weight:500;
				color:rgba(250,100,0,1);
				padding-bottom: 18rpx;
			}
			.active:after{
					content: '';
					display: inline-block;
					width:16rpx;
					height:8rpx;
					background:rgba(250,100,0,1);
					border-radius:4rpx;
					position: absolute;
					left: 0;
					right: 0;
					bottom: 0;
					margin: 0 auto;
				}
		}
	}
	
	.mon_c{
		padding: 0 32rpx;
		.c_t{
			margin:30rpx 0;
			text{
				font-size:26rpx;
				color:rgba(153,153,153,1);
				line-height:36rpx;
			}
		}
		.c_b{
			text:nth-child(1){
				font-size: 30rpx;
				color:rgba(25,25,25,1);
				line-height:42rpx;
			}
			text:nth-child(2){
				font-size:60rpx;
				font-weight:500;
				color:rgba(25,25,25,1);
				line-height:42rpx;
				margin-left: 10rpx;
			}
		}
	}
	.mon_txt{
		text{
			display: inline-block;
			padding:40rpx 0 0 32rpx;
			font-size:26rpx;
			color:rgba(153,153,153,1);
			line-height:36rpx;
		}
	}
	
</style>
