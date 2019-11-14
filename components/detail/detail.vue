<template>
	<view class="detail">
		<view class="tab_list" v-for="(item,index) in list" 
		:key="index" 
		@tap="detailList(index)"
		>
			<view class="list_img">
				<image :src="item.imgs"></image>
			</view>
			<view class="list_inner">
				<view class="inner_line1">
					<text>{{item.title}}</text>
				</view>
				<!-- <view class="inner_line2" >
					<text>{{item.estate_name || item.business_name}}</text>
					<text>{{item.chaoxiang}}|{{item.floor}}/{{item.total_floor}}层|{{item.mianji}}m²</text>
				</view> -->
				<!-- 二手房 -->
				<view class="inner_line2_ershou" v-if="listIndex==0">
					<text>{{item.estate_name}}</text>
					<text>{{item.chaoxiang}} | 0/{{item.total_floor}}层 | {{item.mianji}}m²</text>
				</view>
				<!-- 租房 -->
				<view class="inner_line2_zufang" v-if="listIndex==1">
					<text>{{item.area_name}}·{{item.business_name}}</text>
					<text>{{item.room}}室{{item.ting}}厅{{item.wei}}卫 | {{item.mianji}}m²</text>
				</view>
				<view class="inner_line3">
					<text  v-for="(item1,index1) in item.tese||item.house_liangdian" :key="index1">
						{{item1}} 
					</text>
				</view>
				<view class="inner_line4"> 
					{{item.total_price || item.price}} 
					<text>万</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			list:[Object,Array],
			listIndex:Number
		},
		data() {
			return {
			}
		},
		methods:{
			detailList(index){
				var Id = this.list[index].Id
				var listIndex = this.listIndex;
				console.log(Id)
				if(listIndex==0){
					// 二手房详情
					uni.request({
						url:'http://shop_api.fang-tian.com/api_fang/house/secondHouseDetail',
						method:'POST',
						data:{house_id:Id}, 
						success(res){
							var data = res.data.data
							uni.navigateTo({
								url:'../../pages/secondhanddetail/secondhanddetail' + `?data=${encodeURIComponent(JSON.stringify(data))}`+`&id=${listIndex}` 
							})
						}
					})
				}else if(listIndex==1){
					// 租房详情
					uni.request({
						url:'http://192.168.0.102:9595/api_fang/house/rentalDetail',
						method:'POST',
						data:{house_id:Id}, 
						success(res){
							var data = res.data.data
							uni.navigateTo({
								url:'../../pages/joinhouse/joinhouse' + `?data=${encodeURIComponent(JSON.stringify(data))}`+`&id=${listIndex}`
							})
						}
					})
				}
			}
		}
	}
</script>
<style scoped lang="scss">
	.detail{ 
		background: #FFFFFF;
		padding:0 32rpx;
	}
	.tab_list {
		display: flex;
		padding-bottom: 40rpx;
	}
	.list_img{
		image {
			width: 240rpx;
			height: 180rpx;
			border-radius:12rpx;
		}
	}
	.list_inner {
		margin-left: 30rpx;
	}
	.inner_line1 {
		margin-top:-6rpx;
		text{
			display: inline-block;
			width:408rpx;
			font-size:34rpx;
			font-weight:500;
			color:rgba(25,25,25,1);
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	}
	.inner_line2{
			white-space:nowrap;
			overflow:hidden;
			text-overflow:ellipsis;
		
		text:nth-child(1) {
			font-size:26rpx;
			display: inline-block;
			color:rgba(25,25,25,1);
		}
		text:nth-child(2) {
			white-space:nowrap;
			overflow:hidden;
			text-overflow:ellipsis;
			font-size: 26rpx;
			display: inline-block;
			font-weight: 400;
			color: rgba(153, 153, 153, 1);
			margin-left: 10rpx;
		}
	}
	.inner_line2_ershou{
	
		margin-top:-14rpx;
		text:nth-child(1) {
			width:120rpx;
			white-space:nowrap;
			overflow:hidden;
			text-overflow:ellipsis;
			display: inline-block;
			font-size:26rpx;
			font-weight:500;
			color:rgba(25,25,25,1);
			line-height:36rpx;
			margin-right: 20rpx;
		}
		text:nth-child(2) {
			font-size:26rpx;
			color:rgba(25,25,25,1);
			line-height:36rpx;
		}
	}
	.inner_line2_zufang{
		
		margin-top:-14rpx;
		text:nth-child(1) {
			width:140rpx;
			white-space:nowrap;
			overflow:hidden;
			text-overflow:ellipsis;
			display: inline-block;
			font-size:26rpx;
			color:rgba(25,25,25,1);
			line-height:36rpx;
			margin-right: 30rpx;
		}
		text:nth-child(2) {
			font-size:26rpx;
			color:rgba(153,153,153,1);
			line-height:36rpx;
		}
	}
	.inner_line3{
		margin-top:-10rpx;
		 text {
			 display: inline-block;
			 
			 font-size: 22rpx;
			 font-weight: 400;
			 color: rgba(102, 102, 102, 1);
			 margin-right: 18rpx;
			 
			 line-height:36rpx;
			 height:36rpx;
			 background:rgba(245,245,245,1);
			 border-radius:4rpx;
			 padding:2rpx 10rpx;
		 }
	}
	.inner_line4 {
		margin-top:-6rpx;
		font-size: 36rpx;
		font-weight: 500;
		color: rgba(255, 116, 0, 1);
		text{
			font-size: 24rpx;
		}  
	}
</style> 
