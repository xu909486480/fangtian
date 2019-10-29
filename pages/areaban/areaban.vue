<template>
	<view class="areaban">
		<navbar :titleName="titleName"></navbar>
		<van-search
		  :value=" value "
		  placeholder="请输入小区名称"
		  show-action
		  action-text="确定"
		  style="border-radius:36rpx;"
		/>
		
		<view class="areaname_b">
			<view class="b_txt">
				<text>您还可以直接选择</text>
			</view>
			<view class="b_list">
				<view class="list_l">
					<text>优山美地</text>
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
				value:'',
				titleName:'楼栋'
			} 
		},
		methods:{
			
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
</style>
