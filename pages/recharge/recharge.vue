<template>
	<view class="recharge">
		<navbar :titleName="titleName"></navbar>
		<view class="main">
			<view class="main_t">
				<view class="t_txt">
					<text>充值金额</text>
				</view>
				<view class="t_ipt">
					<text>¥</text>
					<input type="number" value="" />
				</view>
			</view>
			<view class="main_c">
				<!-- <radio-group @change="radioChange">
					<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
						<view>
							<radio :value="item.value" :checked="index === current" />
						</view>
						<view>{{item.name}}</view>
					</label>
				</radio-group> -->
				<view class="c_list" v-for="(item,index) in payList" :key="index"
				@tap="radioChange(index)"
				>
					<view class="list_l">
						<image :src="item.img" mode=""></image>
						<text>{{item.text}}</text>
					</view>
					<view class="list_r">
							<radio :checked="index == current"
							/>
					</view>
				</view>
			</view>
			<view class="main_b" @tap="showPopup">
				<view class="b_l">
					<text>选择银行卡</text>
					<text>农业银行（0088）</text>
				</view>
				<view class="b_r">
					<image src="../../static/newdetail_icon1.png"></image>
				</view>
			</view>
			<view class="main_btn" @tap="payPopup"> 
				<text>下一步</text>
			</view>
		</view>
		
		<van-popup
		  :show="show"
		  round
		  closeable
		  close-icon="close"
		  position="bottom"
		  custom-style="height: 680rpx"
		  @close="onClose"
		  class="popup_inner"
		>
			<view class="inner_txt">
				<text>选择付款方式</text>
			</view>
			<view class="inner_list" v-for="(item,index) in cardList" :key="index"
			@tap="cardChange(index)"
			>
				<view class="list_img">
					<image src="" mode=""></image>
				</view>
				<view class="list_tab">
					<view class="tab_l">
						<text>中国{{item.text}}银行（0856）</text>
						<text>银行单笔限额50000.00元</text>
					</view>
					<view class="tab_r">
						<radio :checked="index == tab"
						
						/>
					</view>
				</view>
			</view>
		</van-popup>
		
		<!-- 点击下一步popup -->
		<van-popup 
		:show=" paypsw " 
		@close="onClose"
		close-icon="close"
		closeable
		round
		close-icon-position="top-left"
		>
			<view class="popup_pay">
				<view class="inner_txt">
					<text>请输入验证码完成支付</text>
					<text>支付金额</text>
					<text>¥ 1000.00</text>
				</view>
				<view class="inner_psw">
					<input type="number" value="" 
					placeholder="请输入验证码"
					maxlength="6"/>
				</view>
				<view class="inner_btn">
					<text>确定支付</text>
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
				titleName:'余额充值',
				payList:[
					{text:'微信支付',img:'../../static/recharge_icon1.png'},
					{text:'支付宝支付',img:'../../static/recharge_icon2.png'},
					{text:'银联支付',img:'../../static/recharge_icon3.png'},
				],
				current: 4,
				tab:0,
				show:false,
				paypsw:false,
				cardList:[
					{text:'农业'},{text:'建设'},{text:'某某'}
				]
			}
		},
		methods:{
			radioChange(index) {
				this.current = index
			},
			cardChange(index) {
				this.tab = index
			},
			showPopup() {
			    this.show = true
			},
			
			onClose() {
			   this.show= false 			   
			   this.paypsw = false
			},
			payPopup() {
			    this.paypsw = true
			}
			
		}
	}
</script>

<style scoped lang="scss">
	.main{
		padding: 0 32rpx;
	}
	.main_t{
		.t_txt{
			margin:30rpx 0 20rpx;
			text{
				font-size:34rpx;
				color:rgba(25,25,25,1);
				line-height:48rpx;
			}
		}
		.t_ipt{
			padding: 10rpx 0;
			display: flex;
			
			border-bottom: 2rpx solid #F5F5F5;
			align-items: center;
			text{
				font-size:46rpx;
				font-weight:600;
				color:rgba(25,25,25,1);
				line-height:64rpx;
			}
			input{
				margin-left: 20rpx;
			}
		}
	}
	
	.main_c{
		border-bottom: 2rpx solid #F5F5F5;
		padding-top:30rpx;
		.c_list{
			margin-bottom: 30rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			
			.list_l{
				display: flex;
				align-items: center;
				image{
					width: 52rpx;
					height: 52rpx;
				}
				text{
					font-size:34rpx;
					color:rgba(25,25,25,1);
					line-height:48rpx;
					margin-left: 20rpx;
				}
			}
			.list_r{
				
			}
		}
	}
	
	.main_b{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 30rpx 0 50rpx;
		.b_l{
			text{
				font-size:34rpx;
				color:rgba(25,25,25,1);
				line-height:48rpx;
			}
			text:nth-child(2){
				margin-left: 30rpx;
			}
		}
		.b_r{
			image{
				width: 16rpx;
				height: 30rpx;
			}
		}
	}
	.main_btn{
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
	
	.popup_inner{
		.inner_txt{
			margin-top: 30rpx;
			margin-bottom: 30rpx;
			text-align: center;
			text{
				font-size:34rpx;
				font-weight:500;
				color:rgba(25,25,25,1);
				line-height:48rpx;
			}
		}
		.inner_list{
			padding-left:32rpx;
			display: flex;
			margin-bottom: 40rpx;
			
			align-items: center;
			justify-content: space-between;
			.list_img{
				width: 90rpx;
				image{
					width: 90rpx;
					height: 90rpx;
					background: #4CD964;
				}
			}
			.list_tab{
				border-bottom: 2rpx solid #F5F5F5;
				padding-bottom: 20rpx;
				padding-right: 30rpx;
				line-height: 80rpx;
				flex:1;
				margin-left: 30rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.tab_l{
					display: flex;
					flex-direction: column;
					text:nth-child(1){
						font-size:34rpx;
						font-weight:500;
						color:rgba(25,25,25,1);
						line-height:48rpx;
					}
					text:nth-child(2){
						font-size:26rpx;
						color:rgba(102,102,102,1);
						line-height:36rpx;
					}
				}
				.tab_r{
					
				}
			}
		} 
	}
	
	
	.popup_pay{
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
				color:rgba(153,153,153,1);
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
			border-bottom: 2rpx solid #F5F5F5;
			padding: 30rpx 0 30rpx 40rpx;
			input{
				font-size:34rpx;
				color:rgba(187,187,187,1);
				line-height:48rpx;
			}
		}
		.inner_btn{
			margin-left: 40rpx;
			margin-top: 40rpx;
			width:520rpx;
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
</style>
