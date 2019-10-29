<template>
	<view class="agent">
		<headnav :titleName="titleName" :share="share"></headnav>
		<!-- tab选项卡 -->
		<view class="tab">
			<view @tap="tabList(index)" v-for="(item,index) in tab_list" :key="index" :class="[tab==index?'active':'']">
				{{item.text}}
			</view>
		</view>
		<view class="agent_list" v-if="tab == 0" v-for="(item,index) in agent" :key="index" >
			<view class="list_l">
				<image src="" mode=""></image>
			</view>
			<view class="list_r">
				<view class="r_top">
					<text>{{item.text}}</text>
					<image src="../../static/newdetail_icon1.png" mode=""></image>
				</view>
				<view class="r_btm">
					<text>本店主营：高端别墅楼盘，欢迎咨询本店</text>
				</view>
			</view>
		</view>
		<view class="agent_list_two" v-if="tab == 1">
			<refer></refer>
			
		</view>
	</view>
</template>

<script>
	import headnav from '../../components/headnav/headnav.vue'
	import refer from '../../components/refer/refer.vue'
	export default {
		components:{headnav,refer},
		data(){
			return{
				titleName:'中介门店',
				share:'../../static/newdetail_icon6.png',
				tab:0,
				tab_list:[{text:'中介店'},{text:'经纪人'}],
				agent:[{text:'向华强中介店'},{text:'向华强中介店'}]
			}
		},
		methods:{
			tabList(index) {
				this.tab = index
			},
		}
	}
</script>

<style scoped lang="scss">
	//tab选项卡
	
	.tab {
		background: #FFFFFF;
		border-bottom: 2rpx solid #F5F5F5;
		padding: 0 32rpx;
		display: flex;
		align-items: center;
		view {
			font-size: 34rpx;
			font-weight: 400;
			color: rgba(25, 25, 25, 1);
			line-height: 80rpx;
			position: relative;
			margin-right: 20rpx;
		}
	
		.active {
			color: #FA6400;
		}
	
		.active:after {
			content: '';
			display: inline-block;
			width: 16rpx;
			height: 8rpx;
			background: rgba(250, 100, 0, 1);
			border-radius: 4rpx;
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			margin: 0 auto;
		}
	
	}
	
	.agent_list{
		padding-left: 32rpx;
		padding-top:20rpx;
		display: flex;
		justify-content: space-between;
		.list_l{
			image{
				width: 90rpx;
				height: 90rpx;
				background: #FA6400;
			}
		}
		.list_r{
			width: 598rpx;
			box-sizing: border-box;
			border-bottom: 2rpx solid #F5F5F5;
			padding-bottom: 10rpx;
			.r_top{
				display: flex;
				justify-content: space-between;
				align-items: center;
				text{
					font-size:34rpx;
					font-weight:500;
					color:rgba(25,25,25,1);
					line-height:48rpx;
				}
				image{
					width: 16rpx;
					height: 30rpx;
					margin-right: 32rpx;
				}
			}
			.r_btm{
				text{
					font-size:26rpx;
					color:rgba(25,25,25,1);
					line-height:36rpx;
				}
			}
		}
	}
	
	.agent_list_two{
		padding: 30rpx 32rpx 0;
	}
</style>
