<template>
	<view class="seat">
		<view class="detail_map">
			<view class="title">
				<text>位置及周边</text>
				<text @tap="ambitus">查看周边</text>
			</view>
			<view class="map_list">
				<text :class="[map==index?'active':'']" v-for="(item,index) in map_list" :key="index" @tap="mapList(index)">{{item.text}}</text>
			</view>
			<view class="page-body">
				<view class="page-section page-section-gap">
					<map style="width: 100%; height: 658rpx;" :latitude="latitude" :longitude="longitude" :markers="markers">
					</map>
				</view>
			</view>
			<view class="map_bus">
				<view v-for="(item,index) in map_bus" :key="index">
					<view class="bus_left">
						<text>某某站</text>
						<text>（231路；123路；289路sadasd)</text>
					</view>
					<view class="bus_right">
						<image src="../../static/newdetail_icon9.png"></image>
						<text>{{item.m}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'seat',
		props:['seat'],
		data(){
			return{
				map:0,
				bbb:0,
				map_list:[
					{text:'公交(2)'},
					{text:'地铁(2)'},
					{text:'教育(30)'},
					{text:'医院(15)'}],
				map_bus:[{m:'1000'},{m:'850'},{m:'1000'}
				],
				//地图
				title: 'map',
				latitude: 24.482229,
				longitude: 118.174654,
				markers: [{
					latitude: 24.482229,
					longitude: 118.174654,
					iconPath: '../../../static/location.png',
					title:'国金广场'
				}]
			}
		},
		methods:{
			mapList(index){
				this.map = index
			}, 
			ambitus(){
				uni.navigateTo({
					url:'../../pages/building/building'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.detail_map {
		padding:50rpx 32rpx 40rpx;
		margin-bottom: 30rpx;
		background: #FFFFFF;
		.map_list{
			margin-bottom:20rpx;
			display: flex;
			justify-content: space-between;
			text{
				font-size:34rpx;
				
				color:#191919;
				line-height:48rpx;
			}
			.active{
				color:#FA6400;
			}
		}
		.page-body{
			margin-bottom:20rpx;
		}
		.map_bus{
			view{
				margin-bottom:10rpx;
				display: flex;
				align-items: center;
				.bus_left{
					width:482rpx;
					height:42rpx;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					text:nth-child(1){
						font-size:30rpx;
						
						color:rgba(25,25,25,1);
						line-height:42rpx;
					}
					text:nth-child(2){
						font-size:30rpx;
						
						color:#999999;
						line-height:42rpx;
					}
				}
				.bus_right{
					margin-left:100rpx;
					image{
						width:30rpx;
						height:30rpx;
					}
					text{
						font-size:30rpx;
						
						color:rgba(153,153,153,1);
						line-height:42rpx;
					}
				}
			}
			
			
		}
	}
	.title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom:30rpx;
		text:nth-child(1) {
			font-size: 40rpx;
			font-weight: 500;
			color: rgba(25, 25, 25, 1);
			line-height: 56rpx;
		}
	
		text:nth-child(2) {
			display: inline-block;
			text-align: center;
			width: 160rpx;
			height: 60rpx;
			background: rgba(255, 255, 255, 1);
			border-radius: 30rpx;
			border: 2rpx solid rgba(238, 238, 238, 1);
			font-size: 26rpx;
			font-weight: 400;
			color: rgba(25, 25, 25, 1);
			line-height: 60rpx;
		}
	}
	
</style>
