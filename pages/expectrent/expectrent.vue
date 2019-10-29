<template>
	<view class="expectrent">
		<navbar :titleName="titleName"></navbar>
		<van-search
		  :value=" value "
		  placeholder="请输入小区名称"
		  show-action
		  action-text="确定"
		  style="border-radius:36rpx;"
		/>
		<view class="tab">
			<view @tap="tabList(index)" v-for="(item,index) in tab_list" :key="index" :class="[tab==index?'active':'']">
				{{item.text}}
			</view>
		</view>
		<detail :list="detail_list"></detail>
		
	</view>
</template>

<script>
	import navbar from '../../components/navbar/navbar.vue'
	import alltab from '../../components/alltab/alltab.vue'
	import detail from '../../components/detail/detail.vue'
	export default {
		components:{navbar,alltab,detail},
		data(){
			return{
				tab:0,
				value:'',
				titleName:'期望租金',
				tab_list:[{text:'本小区成交'},{text:'本小区在租'}],
				detail_list: [{
						"img": "../../static/index_list1.png",
						"line1": "新出松柏二小精装大三房的撒多撒多阿萨德",
						"price": 615
					},
					{
						"img": "../../static/index_list1.png",
						"line1": "厅带阳台朝南，南北通透的萨达萨达暗示的撒",
						"price": 720
					}
				],
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

	.areaname_b{
		padding-left: 32rpx;
		.b_txt{
			text{
				font-size:26rpx;
				color:rgba(153,153,153,1);
				line-height:36rpx;
			}
		}
		.b_list{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20rpx 0;
			border-bottom: 2rpx solid #F5F5F5;
			
			.list_l{
				text{
					font-size:34rpx;
					color:rgba(102,102,102,1);
					line-height:48rpx;
				}
			}
			
		}
	}
	
	//tab选项卡
	
	.tab {
		background: #FFFFFF;
		border-bottom: 2rpx solid #F5F5F5;
		padding: 0 32rpx;
		display: flex;
		align-items: center;
		margin-bottom: 20rpx;
		view {
			margin-right: 20rpx;
			font-size: 34rpx;
			font-weight: 400;
			color: rgba(25, 25, 25, 1);
			line-height: 80rpx;
			position: relative;
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
	
</style>
