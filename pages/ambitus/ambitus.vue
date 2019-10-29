<template>
	<view class="ambitus">
		<navbar :titleName="titleName"></navbar>
		<view class="detail_map">
			<view class="map_list">
				<text :class="[map==index?'active':'']" v-for="(item,index) in map_list" :key="index" @tap="mapList(index)">{{item.text}}</text>
			</view>
			<view class="page-body">
				<view class="page-section page-section-gap">
					<map style="width: 100%; height: 342rpx;" :latitude="latitude" :longitude="longitude" :markers="covers">
					</map>
				</view>
			</view>
			<view class="map_inner">
				<view>楼盘地址</view>
				<view>集美龙亭六里一号，龙亭六里七号</view>
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
			<view class="map_more">
				查看更多
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
				titleName:'位置及周边',
				map:0,
				map_list:[
					{text:'公交(2)'},
					{text:'地铁(2)'},
					{text:'教育(30)'},
					{text:'医院(15)'}],
				map_bus:[{m:'1000'},{m:'850'},{m:'1000'}
				],
				//地图
				title: 'map',
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '../../../static/location.png'
				}, {
					latitude: 39.90,
					longitude: 116.39,
					iconPath: '../../../static/location.png'
				}]
			}
		},
		methods:{
			mapList(e){
				this.map = e
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '../../common/style/ambitus.scss'
</style>
