<template>
	<view class="wallet">
		<view class="wallet_top">
			<navbar 
			:titleName="titleName" 
			:share="share" 
			@navFx="navFx"
			:back="backimg"
			:bg="bg"
			></navbar>	
			<view class="t_inner">
				<view class="i_txt1">
					<text>账户总余额</text>
				</view>
				<view class="i_txt2">
					<text>¥ 221200.00</text>
				</view>
				<view class="i_txt3">
					<text>2019-05-20</text>
					<text>10:23:58</text>
					<image src="../../static/wallet_icon2.png" mode=""></image>
					<image src="../../static/wallet_icon3.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="wallet_c">
			<view class="">
				<image ></image>
				<text>在途佣金</text>
				<text>¥20.00</text>
			</view>
			<view class="">
				<image ></image>
				<text>房豆</text>
				<text>360</text>
			</view>
		</view>
		<view class="wallet_b">
			<view class="b_list" @tap="czTap">
				<view class="list_l">
					<image src="" mode=""></image>
					<text>充值</text>
				</view>
				<view class="list_r">
					<image src="../../static/newdetail_icon1.png" mode=""></image>
				</view>
			</view>
			<view class="b_list" @tap="txTap">
				<view class="list_l">
					<image src="" mode=""></image>
					<text>提现</text>
				</view>
				<view class="list_r">
					<image src="../../static/newdetail_icon1.png" mode=""></image>
				</view>
			</view>
			<view class="b_list">
				<view class="list_l">
					<image src="" mode=""></image>
					<text>我的银行卡</text>
				</view>
				<view class="list_r">
					<image src="../../static/newdetail_icon1.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import navbar from '../../components/navbar/navbar.vue'
	export default {
		components:{navbar},
		data(){
			return{
				titleName:'余额',
				share:'../../static/wallet_icon1.png',
				backimg:'../../static/newdetail_icon10.png',
				
			}
		},
		methods:{
			navFx(){
				uni.navigateTo({
					url:'../mybill/mybill'
				})
			},
			// 充值页
			czTap(){
				uni.navigateTo({
					url:'../recharge/recharge'
				})
			},
			// 提现
			txTap(){
				uni.navigateTo({
					url:'../withdraw/withdraw'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.wallet_top{
		padding-top:100rpx;
		width:750rpx;
		height:518rpx;
		background:linear-gradient(225deg,rgba(247,156,0,1) 0%,rgba(245,102,7,1) 100%);
		.t_inner{
			padding: 0 32rpx;
			
			.i_txt1{
				margin-top: 40rpx;
				text{
					font-size:30rpx;
					color:rgba(255,255,255,1);
					line-height:42rpx;
				}
			}
			.i_txt2{
				margin-top: 10rpx;
				text{
					font-size:46rpx;
					font-weight:500;
					color:rgba(255,255,255,1);
					line-height:64rpx;
				}
			}
			.i_txt3{
				display: flex;
				align-items: center;
				margin-top: 20rpx;
				text:nth-child(1){
					font-size:30rpx;
					color:rgba(255,255,255,1);
					line-height:42rpx;
				}
				text:nth-child(2){
					margin-left: 16rpx;
					font-size:30rpx;
					color:rgba(255,255,255,1);
					line-height:42rpx;
				}
				image:nth-child(3){
					margin-left: 30rpx;
					width: 28rpx;
					height: 30rpx;
				}
				image:nth-child(4){
					margin-left: 30rpx;
					width: 44rpx;
					height: 28rpx;
				}
			}
		}
	}
	
	.wallet_c{
		width:686rpx;
		height:200rpx;
		background:rgba(255,255,255,1);
		box-shadow:0px 4rpx 32rpx 0px rgba(170,170,170,0.2);
		border-radius:20rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-top:-100rpx;
		margin-left:32rpx;
		view{
			display: flex;
			flex-direction: column;
			align-items: center;
			image{
				width: 48rpx;
				height: 48rpx;
				background: #007AFF;
			}
			text:nth-child(2){
				font-size:26rpx;
				color:rgba(25,25,25,1);
				line-height:36rpx;
				margin:10rpx 0;
			}
			text:nth-child(3){
				font-size:30rpx;
				font-weight:500;
				color:rgba(170,170,170,1);
				line-height:42rpx;
			}
		}
	}
	.wallet_b{
		padding: 0 32rpx;
		
		.b_list{
			margin-top: 40rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.list_l{
				display: flex;
				align-items: center;
				image{
					width: 40rpx;
					height: 30rpx;
					background: #007AFF;
				}
				text{
					font-size:34rpx;
					color:rgba(25,25,25,1);
					line-height:48rpx;
				}
			}
			.list_r{
				image{
					width: 16rpx;
					height: 30rpx;
				}
				
			}
		}
	}
</style>
