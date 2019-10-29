<template>
	<view class="familylist">
		<!-- 户型列表页头部 2240 4444-->
		<navbar :titleName="titleName" :share="share"></navbar>
		<view class="tab">
			<view @tap="tabList(index)" v-for="(item,index) in tab_list" :key="index" :class="[tab==index?'active':'']">
				{{item.text}}
			</view>
		</view>
		<view class="family_list" v-for="(item,index) in family_list" :key="index">
			<view class="list_img">
				<image src="" mode=""></image>
			</view>
			<view class="list_inner">
				<view>
					<text>2室1厅1卫</text>
					<text>在售 | 住宅</text>
				</view>
				<view>
					<text>建筑面积110m²</text>
					<text>朝向南</text>
				</view>
				<view>
					<text>{{item.text}}</text>
					<text>干湿分离</text>
					<text>干湿分离</text>
				</view>
				<view>
					<text>约360</text>
					<text>万/套</text>
				</view>
				<view class="pay" @tap="pay">
					<image src="../../static/newdetail_icon7.png"></image>
					<text>关注</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import navbar from '../../components/navbar/navbar.vue'
	export default {
		components:{navbar},
		data() {
			return {
				titleName:'户型列表',
				share:'../../static/newdetail_icon6.png',
				tab:0,
				tab_list:[{text:'全部(10)'},{text:'两居(4)'},{text:'三居(6)'}],
				family_list:[{text:'干湿分离'},{text:'干湿分离'},{text:'干湿分离'},{text:'干湿分离'}]
			}
		},
		methods:{
			tabList(index){
				this.tab = index
			},
			pay(){
				
			}
		}
	}
</script>

<style scoped lang="scss">
	.tab{
		padding: 0 32rpx 40rpx;
		display: flex;
		view{
			font-size:34rpx;
			
			color:rgba(25,25,25,1);
			line-height:80rpx;
			position: relative;
			margin-right:40rpx;
		}
		.active{
			color:#FA6400;
		}
		.active:after{
			content: '';
					display: inline-block;
					width:16rpx;
					height:8rpx;
					background:rgba(250,100,0,1);
					border-radius:4rpx;
					position: absolute;
					left:0;
					right:0;
					bottom:0;
					margin:0 auto;
		}
		
	}
	.family_list{
		display: flex;
		padding:0 32rpx;
		margin-bottom:50rpx;
		.list_img{
			image{
				width: 240rpx;
				height: 240rpx;
				background: #007AFF;
			}
		}
		.list_inner {
			position: relative;
			width: 416rpx;
			margin-left:30rpx;
				view:nth-child(1) {
					text:nth-child(1) {
						font-size: 34rpx;
						font-weight: 500;
						color: rgba(25, 25, 25, 1);
						line-height: 48rpx;
					}
		
					text:nth-child(2) {
						margin-left: 10rpx;
						font-size: 30rpx;
						font-weight: 400;
						color: rgba(25, 25, 25, 1);
						line-height: 42rpx;
					}
				}
		
				view:nth-child(2) {
					text:nth-child(1) {
						font-size: 26rpx;
						font-weight: 400;
						color: rgba(25, 25, 25, 1);
						line-height: 36rpx;
					}
		
					text:nth-child(2) {
						font-size: 26rpx;
						font-weight: 400;
						color: rgba(25, 25, 25, 1);
						line-height: 36rpx;
						margin-left: 10rpx;
					}
				}
		
				view:nth-child(3) {
					text {
						font-size: 22rpx;
						font-weight: 400;
						color: rgba(102, 102, 102, 1);
						line-height: 32rpx;
						margin-right: 10rpx;
					}
				}
		
				view:nth-child(4) {
					text:nth-child(1) {
						font-size: 36rpx;
						font-weight: 500;
						color: rgba(250, 100, 0, 1);
						line-height: 50rpx;
					}
		
					text:nth-child(2) {
						font-size: 24rpx;
						font-weight: 500;
						color: #FA6400;
					}
				}
			
		}
		.pay{
			position: absolute;
			right:0;
			bottom:10rpx;
			width:160rpx;
			height:60rpx;
			background:rgba(255,255,255,1);
			border-radius:30rpx;
			border:2rpx solid rgba(238,238,238,1);
			display: flex;
			justify-content: center;
			align-items: center;
			image{
				width: 34rpx;
				height: 30rpx;
				margin-right:10rpx;
			}
			text{
				font-size:26rpx;
				
				color:rgba(25,25,25,1);
			}
		}
	
	}
</style>
