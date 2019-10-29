<template>
	<view class="myfocus">
		<navbar :titleName="titleName"></navbar>
		<sometab :sometab="sometab"></sometab>
		<detail :list="detailList"></detail>
	</view> 
</template>

<script>
	import navbar from '../../components/navbar/navbar.vue'
	import sometab from '../../components/sometab/sometab.vue'
	import detail from '../../components/detail/detail.vue'
	export default {
		components:{navbar,sometab,detail},
		data(){
			return{
				dt_tab:0,
				titleName:'我的关注',
				sometab:[{text:'房源'},{text:'经纪人'},{text:'店铺'},{text:'其他'}],
				dtList:[{text:'动态'},{text:'视频'}],
				detailList:[
					{"img": "../../static/index_list1.png",
					"line1": "2222222精装大三房的撒多撒多阿萨德",
					"price": 222},
					{"img": "../../static/index_list1.png",
					"line1": "2222222，南北通透的萨达萨达暗示的撒",
					"price": 222}
				],
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
	.personal{
		height: 100%;
		background: #F5F5F5;
	}
	
	.info{
		background: #FFFFFF;
		padding: 40rpx 32rpx 20rpx;
		margin-bottom: 30rpx;
		.info_t{
			display: flex;
			align-items: center;
			.t_left{
				position: relative;
				image:nth-child(1){
					width: 120rpx;
					height: 120rpx;
					background: #666666;
				}
				image:nth-child(2){
					width: 76rpx;
					height: 76rpx;
					position: absolute;
					right: -20rpx;
					bottom:-6rpx;
				}
			}
			.t_right{
				flex: 1;
				margin-left: 30rpx;
				.r_t{
					display: flex;
					align-items: center;
					text{
						font-size:36rpx;
						font-weight:500;
						color:rgba(25,25,25,1);
						line-height:50rpx;
					}
					image{
						width: 24rpx;
						height: 36rpx;
						margin-left: 20rpx;
						
					}
				}
				.r_b{
					display: flex;
					justify-content: space-between;
					align-items: center;
					.b_l{
						display: flex;
						text:nth-child(1){
							font-size:26rpx;
							color:rgba(25,25,25,1);
							line-height:36rpx;
						}
						text:nth-child(2){
							font-size:26rpx;
							color:rgba(25,25,25,1);
							line-height:36rpx;
						}
					}
					.b_r{
						width:140rpx;
						height:60rpx;
						background:rgba(255,255,255,1);
						border-radius:36rpx;
						text-align: center;
						border:2rpx solid rgba(238,238,238,1);
						text{
							font-size:30rpx;
							color:rgba(25,25,25,1);
							line-height:42rpx;
						}
					}
				}
			}
		}
		.info_c{
			margin: 10rpx 0;
			display: flex;
			align-items: center;
			image{
				width: 30rpx;
				height: 32rpx;
			}
			text{
				margin-left:12rpx;
				font-size:30rpx;
				color:rgba(170,170,170,1);
				line-height:42rpx;
			}
		}
		.info_b{
			display: flex;
			
			view{
				flex:1;
				display: flex;
				flex-direction: column;
				text:nth-child(1){
					font-size:60rpx;
					font-weight:bold;
					color:rgba(25,25,25,1);
					text{
						font-size:24rpx;
					}
				}
				text:nth-child(2){
					font-size:30rpx;
					color:rgba(102,102,102,1);
				}
			}
		}
		
		
		
	}
	
	.dt{
		background: #FFFFFF;
		padding: 0 32rpx;
		
		.dt_list{
			display: flex;
			align-items: center;
			text{
				margin-top: 20rpx;
				font-size:30rpx;
				color:rgba(25,25,25,1);
				line-height:42rpx;
				margin-right: 40rpx;
			}
			.active{
				font-size:46rpx;
				font-weight:500;
				color:rgba(25,25,25,1);
				line-height:64rpx;
			}
		}
		.dt_gujia{
			display: flex;
			flex-direction: column;
			align-items: center;
			image{
				margin-top: 100rpx;
				margin-bottom: 30rpx;
				width: 240rpx;
				height: 240rpx;
			}
			text{
				font-size:34rpx;
				color:rgba(170,170,170,1);
				line-height:48rpx;
			}
		}
	}
</style>
