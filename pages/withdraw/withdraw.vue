<template>
	<view class="withdraw">
			<navbar :titleName="titleName"></navbar>
			<view class="main">
				<view class="main_t">
					<view class="head_l">
						<text>到账卡</text>
					</view>
					<view class="head_c">
						<text>农业银行（0088）</text>
						<text>预计2小时内到账</text>
					</view>
					<view class="head_r">
						<image src="../../static/newdetail_icon1.png" mode=""></image>
					</view>
				</view>
				<view class="main_c">
					<view class="c_t">
						<text>提现金额</text>
					</view>
					<view class="c_b">
						<text>¥</text>
						<input type="number" value="" />
					</view>
				</view>
				<view class="main_b">
					<view class="b_txt">
						<text>总余额为¥20000.00，</text>
						<text>全部提现</text>
					</view>
					<view class="b_btn" @tap="showPopup">
						<text>提现</text>
					</view>
				</view>
			</view>
			<view class="bg">
				
			</view>
		<!-- </view> -->
		<van-popup :show=" show " @close="onClose"
		closeable
		round
		close-icon-position="top-left"
		>
			<view class="popup_inner">
				<view class="inner_txt">
					<text>请输入支付密码</text>
					<text>提现</text>
					<text>¥ 1000.00</text>
				</view>
				<view class="inner_psw">
					<text>服务费：¥1.00</text>
					<text>费率：0.01%（最低¥1.00）</text>
					<view class="psw_number">
						<input type="password" value="" maxlength=1/>
						<input type="password" value="" maxlength=1/>
						<input type="password" value="" maxlength=1/>
						<input type="password" value="" maxlength=1/>
						<input type="password" value="" maxlength=1/>
						<input type="password" value="" maxlength=1/>
					</view>
				</view>
			</view>
		</van-popup>
		
	</view>
</template> 

<script> 
	import navbar from '../../components/navbar/navbar.vue'
	export default {
		components:{navbar},
		data(){ 
			return{
				titleName:'余额提现',
				show: false
			}
		},
		methods:{
			 showPopup() {
				 
			    this.show= true
			  },
			
			  onClose() {
			    this.show=false
			  }
		}
	}
</script>

<style scoped lang="scss">
	.withdraw{
		height: 100%;
		background: #f5f5f5;
	}
	.bg{
		height: 700rpx;
		background: #f5f5f5;
	}
	.main{
		
		box-sizing: border-box;
		margin:60rpx 32rpx 0;
		height:610rpx;
		background:rgba(255,255,255,1);
		border-radius:20rpx;
			padding: 30rpx;
		.main_t{
			display: flex;
			border-bottom: 2rpx solid #F5F5F5;
			.head_l{
				text{
					font-size:34rpx;
					color:rgba(25,25,25,1);
					line-height:48rpx;
				}
			}
			.head_c{
				margin-left: 40rpx;
				margin-bottom: 30rpx;
				display: flex;
				flex-direction: column;
				flex:1;
				text:nth-child(1){
					font-size:34rpx;
					color:rgba(25,25,25,1);
					line-height:48rpx;
				}
				text:nth-child(2){
					margin-top: 10rpx;
					font-size:30rpx;
					color:rgba(153,153,153,1);
					line-height:42rpx;
				}
			}
			.head_r{
				float: right;
				image{
					width: 16rpx;
					height: 30rpx;
				}
			}
		}
	}
	
	.main_c{
		border-bottom: 2rpx solid #F5F5F5;
		.c_t{
			margin: 20rpx 0;
			text{
				font-size:34rpx;
				color:rgba(25,25,25,1);
				line-height:48rpx;
			}
		}
		.c_b{
			padding-bottom: 10rpx;
			display: flex;
			align-items: center;
			text{
				font-size:46rpx;
				font-weight:600;
				color:rgba(25,25,25,1);
				line-height:64rpx;
			}
			input{
				
			}
		}
	}
	
	.main_b{
		.b_txt{
			margin: 20rpx 0 30rpx;
			text:nth-child(1){
				font-size:30rpx;
				color:#999999;
				line-height:42rpx;
			}
			text:nth-child(2){
				font-size:30rpx;
				color:#191919;
				line-height:42rpx;
			}
		}	
		.b_btn{
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
	}
	
	.popup_inner{
		width:600rpx;
		height:600rpx;
		background:rgba(255,255,255,1);
		border-radius:20rpx;
		.inner_txt{
			border-bottom: 2rpx solid #F5F5F5;
			display: flex;
			flex-direction: column;
			align-items: center;
			text:nth-child(1){
				font-size:34rpx;
				color:rgba(25,25,25,1);
				line-height:48rpx;
				margin: 50rpx 0 30rpx;
			}
			text:nth-child(2){
				font-size:34rpx;
				color:rgba(25,25,25,1);
				line-height:48rpx;
			}
			text:nth-child(3){
				padding: 40rpx 0;
				font-size:46rpx;
				font-weight:600;
				color:rgba(25,25,25,1);
				line-height:64rpx;
			}
		}
		.inner_psw{
			margin-left: 30rpx;
			display: flex;
			flex-direction: column;
			
			text:nth-child(1){
				margin:30rpx 0 20rpx;
				font-size:26rpx;
				color:rgba(153,153,153,1);
				line-height:36rpx;
			}
			text:nth-child(2){
				font-size:26rpx;
				color:rgba(153,153,153,1);
				line-height:36rpx;
				margin-bottom: 36rpx;
			}
			.psw_number{
				width:540rpx;
				height:90rpx;
				background:rgba(255,255,255,1);
				border:2rpx solid rgba(238,238,238,1);
				display: flex;
				align-items: center;
				justify-content: center;
				text-align: center;
				input{
					line-height: 90rpx;
					width: 90rpx;
					height: 90rpx;
					border-right: 2rpx solid #F5F5F5;
				}
				input:nth-child(6){
					border: 0;
				}
			}
		}
		
	}
</style>
