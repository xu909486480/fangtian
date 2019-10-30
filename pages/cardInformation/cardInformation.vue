<template>
	<view class="cardInformation">
		<navbar :titleName="titleName"></navbar>
		<view class="num">
			<input type="number" value="" placeholder="持卡人姓名"/>
		</view>
		<view class="num">
			<input type="number" value="" placeholder="请输入银行卡卡号"/>
		</view>
		<view class="num">
			<input type="number" value="" placeholder="请输入银行卡密码"/>
		</view>
		<view class="btn">
			<text>提交信息</text>
		</view>
	</view>
</template> 

<script> 
	import navbar from '../../components/navbar/navbar.vue'
	export default {
		components:{navbar},
		data(){ 
			return{
				titleName:'银行卡信息',
				show: false
			}
		},
		methods:{
		}
	}
</script>

<style scoped lang="scss">
	.cardInfo{
	}
	.num{
		
		border-bottom: 2rpx solid #F5F5F5;
		padding: 16rpx 0;
		margin: 20rpx 32rpx 0;
		// margin-top: 60rpx;
		input{
			font-size:34rpx;
			color:rgba(187,187,187,1);
			line-height:48rpx;
		}
	}
	.num:nth-child(1){
		margin-top: 60rpx;
	}
	.btn{
		margin:60rpx 32rpx 0;
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
