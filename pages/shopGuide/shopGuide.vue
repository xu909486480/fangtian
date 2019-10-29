<template>
	<view class="shopGuide">
		<navbar :titleName="titleName"></navbar>
		
	</view> 
</template>

<script>
	import navbar from '../../components/navbar/navbar.vue'
	export default {
		components:{navbar},
		data(){
			return{
				dt_tab:0,
				titleName:'开店指导',
				list:[{img:'../../static/user_icon29.png'},
				{img:'../../static/user_icon30.png'},
				{img:'../../static/user_icon31.png'}],
				dtList:[{text:'动态'},{text:'视频'}]
			}
		},
		methods:{
			dtTap(index){
				this.dt_tab = index
			}
		}
	}
</script>

<style scoped lang="scss">
	.title{
		text{
			font-size:46rpx;
			font-weight:500;
			color:rgba(25,25,25,1);
			line-height:64rpx;			
		}
	}
	.data_head{
		padding: 0 32rpx;
			.h3{
				margin:40rpx 0 20rpx;
			}
		.data_card{
			height: 340rpx;
			background: url(../../static/card_bg.png);
			background-size: 688rpx 340rpx;
			.card_t{
				text-align: right;
				
				text{
					display: inline-block;
					font-size:24rpx;
					color:rgba(25,25,25,1);
					line-height:34rpx;
					margin-right: 24rpx;
					margin-top: 20rpx;
				}
			}
			.card_b{
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 30rpx;
				.b_l{
					flex:1;
					.l_name{
						margin: 30rpx 0 10rpx;
						text:nth-child(1){
							font-size:36rpx;
							font-weight:500;
							color:rgba(25,25,25,1);
						}
						text:nth-child(2){
							font-size:24rpx;
							font-weight:500;
							color:rgba(25,25,25,1);
						}
					}
					.l_msg{
						display: flex;
						.msg_l{
							display: flex;
							flex-direction: column;
							text{
								font-size:20rpx;
								color:rgba(25,25,25,1);
								margin-bottom: 6rpx;
							}
						}
						.msg_r{
							width: 340rpx;
							display: flex;
							flex-direction: column;
							text{
								font-size:20rpx;
								color:rgba(25,25,25,1);
								margin-bottom: 6rpx;
							}
						}
					}
				}
				.b_r{
					width: 170rpx;
					margin-top: 40rpx;
					display: flex;
					flex-direction: column;
					align-items: center;
					image{
						width: 160rpx;
						height: 160rpx;
						background: #666666;
					}
					text{
						font-size:20rpx;
						color:rgba(25,25,25,1);
						line-height:28rpx;
						margin-top: 10rpx;
					}
				}
			}
		}
	}
	
	.data_ziliao{
		padding-left: 32rpx;
		
		.ziliao_line{
			border-bottom: 2rpx solid #F5F5F5;
			display: flex;
			align-items: center;
			padding: 20rpx 0;
			view:nth-child(1){
				width: 166rpx;	
				margin-right: 30rpx;
				text:nth-child(1){
					font-size:34rpx;
					color:rgba(102,102,102,1);
					line-height:48rpx;
					// flex: 1;
					text{
						font-size:34rpx;
						color:#FA6400;
					}					
				}
			}
			view:nth-child(2){
				flex:1;
					margin-right: 32rpx;
				text{
					font-size:34rpx;
					color:rgba(25,25,25,1);
					line-height:48rpx;
				}				
			}
		}
	}
	.btn{
		margin-left: 32rpx;
		width:686rpx;
		height:90rpx;
		background:linear-gradient(225deg,rgba(245,102,7,1) 0%,rgba(247,156,0,1) 100%);
		border-radius:45rpx;
		opacity:0.9;
		text-align: center;
		text{
			font-size:34rpx;
			color:rgba(255,255,255,1);
			line-height:90rpx;
		}
	}
</style>
