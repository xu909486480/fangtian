<template>
	<view class="mapsite">
		<navbar :titleName="titleName" :share="share"></navbar>
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map style="width: 100%; height: 1200rpx;" 
				:latitude="latitude" 
				:longitude="longitude" 
				:markers="covers"
				:circles="circles"
				:polyline="polyline" >
				</map>
			</view>
		</view>
		<scroll-view scroll-x class="map_list">
			<view v-for="(item,index) in map_list" 
					:key="index" 
					:class="[tab == index ? 'active' : '']"
					@tap="mapList(index)">
				<image src=""></image>
				<text>{{item.text}}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import navbar from '../../components/navbar/navbar.vue'
	export default {
		components:{navbar},
		data() {
			return {
				tab:0,
				titleName:'小区位置',
				share:'../../static/newdetail_icon6.png',
				title: 'map',
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
					title:'aaa',
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '../../../static/location.png',
					callout:{
						content:'厦门',
						color:'#ff2200',
						fontSize:20,
						display:'ALWAYS'
						 
					}
				}, { 
					latitude: 39.90,
					longitude: 116.39,
					iconPath: '../../../static/location.png'
				}],
				map_list: [{text: '全部楼盘'},
					{text: '在售楼盘'},
					{text: '全部楼盘'},
					{text: '在售楼盘'},
					{text: '全部楼盘'},
					{text: '在售楼盘'},
					{text: '在售楼盘'},
					{text: '全部楼盘'},
					{text: '在售楼盘'}
				],
				circles:[
					{latitude:39.909,
					longitude:116.39,
					color:'#ff2200',
					}
				],
				polyline:[{
					
				}]
			}
		},
		methods: {
			mapList(index){
				this.tab = index
			}
		}
	}
</script>

<style scoped lang="scss">
	.map_list {
		box-sizing: border-box;
		padding-top:10rpx;
		display: flex;
		white-space: nowrap;
	
		view {
			text-align: center;
			display: inline-block;
			margin-right:40rpx;
			image {
				width: 40rpx;
				height: 40rpx;
				background: #BBBBBB;
			}
	
			text {
				display: block;
				font-size: 26rpx;
				color: rgba(25, 25, 25, 1);
				line-height: 36rpx;
			}
		}
		.active{
			image{
				background: #FA6400;
			}
			text{
				color: #FA6400;	
			}
		}
	}
</style>
