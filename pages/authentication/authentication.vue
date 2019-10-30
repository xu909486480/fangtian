<template>
	<view class="authentication">
		<navbar :titleName="titleName"></navbar>
		<view class="main">
			<view class="title">
				<text>个人认证</text>
				<text>完成实名认证，享受更多优质服务</text>
			</view>
			<view class="mian_inner">
				<view class="inner_list" v-for="(item,index) in rzList" :key="index" @tap="rzListTap(index)">
					<image src="../../static/authentication_icon1.png" mode=""></image>
					<text>{{item.text}}</text>
				</view>
			</view>
		</view>
		<view class="main">
			<view class="title">
				<text>经纪人及店铺认证</text>
				<text>完成以下相关认证，享受更多优质服务</text>
			</view>
			<view class="mian_inner">
				<view class="inner_list" v-for="(item,index) in dpList" :key="index" @tap="dpListTap(index)">
					<image src="../../static/authentication_icon1.png" mode=""></image>
					<text>{{item.text}}</text>
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
				titleName:'认证中心', 
				rzList:[
					{text:'银行卡认证'},{text:'身份证认证'}
				],
				dpList:[
					{text:'营业执照'},{text:'营业执照法人'},{text:'对公账户'}
				]
			}
		},
		methods:{
			dpListTap(index){
				if(index==0){
					uni.navigateTo({
						url:'../license/license'
					})
				}else if(index==1){
					uni.navigateTo({
						url:'../licensePeople/licensePeople'
					})
				}else if(index==2){
					uni.navigateTo({
						url:'../openAccount/openAccount'
					})
				}
			},
			rzListTap(index){
				if(index==0){
					uni.navigateTo({
						url:'../cardInfo/cardInfo' 
					})
				}else if(index==1){
					uni.navigateTo({
						url:'../certification/certification'
					})
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.authentication{
	}
	.main{
		margin: 0 32rpx;
		border-bottom: 2rpx solid #F5F5F5;
		padding-bottom: 30rpx;
		.mian_inner{
			display: flex;
			
			.inner_list{
				margin-right: 80rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				image{
					width: 90rpx;
					height: 90rpx;
				}
				text{
					margin-top: 20rpx;
					font-size:26rpx;
					color:rgba(25,25,25,1);
					line-height:36rpx;
				}
			}
		}
	}
	.title{
		margin-top: 30rpx;
		margin-bottom: 30rpx;
		display: flex;
		flex-direction: column;
		text:nth-child(1){
			font-size:40rpx;
			font-weight:500;
			color:rgba(25,25,25,1);
			line-height:56rpx;			
		}
		text:nth-child(2){
			margin-top: 10rpx;
			font-size:26rpx;
			color:rgba(153,153,153,1);
			line-height:36rpx;			
		}
	}
</style>
