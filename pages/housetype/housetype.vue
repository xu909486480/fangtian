<template>
	<view class="housetype">
		<detailswiper></detailswiper>
		<view class="housetype_inner">
			<view class="inner_l">
				<view class="l_line1">
					<text>2室2厅1卫</text>
					<text>在售 | 住宅</text>
				</view>
				<view class="l_line2">
					<text>建筑面积110m²</text>
					<text>朝向南</text>
				</view>
				<view class="l_line3">
					<text>干湿分离</text>
					<text>干湿分离</text>
					<text>干湿分离</text>
				</view>
				<view class="l_line4">
					<text>约360</text>
					<text>万/套</text>
				</view>
				<view class="l_line5">
					<text>所在楼栋：</text>
					<text>23号楼</text>
				</view>
				<view class="l_line6">
					<text>所属楼盘：</text>
					<text>恒大帝景</text>
				</view>
			</view>
			<view class="inner_r">
				<image src="" mode=""></image>
				<text>变价提醒</text>
			</view>
		</view>
		<view class="housetype_site">
			<text>楼盘地址：</text>
			<text>集美龙亭六里一号，龙亭六里七号</text>
			<image src="../../static/newdetail_icon1.png" mode=""></image>
		</view>
		<view class="detail_goodroom">
			<view class="title">
				<text>优选好房经纪人</text>
				<text @tap="borker">全部查看</text>
			</view>
			<view class="goodroom_tab">
				<text>客户立场</text><text>|</text>
				<text>全程免费</text><text>|</text>
				<text>楼盘分析</text><text>|</text>
				<text>专车接送</text><text>|</text>
				<text>专业服务</text>
			</view>
			<refer></refer>
		</view>
		<seat></seat>
		<view class="housetype_h3">
			<text>楼盘其他户型(三居-3)</text>
			<listfamily></listfamily>
		</view>
		<online></online>
	</view>
</template>

<script>
	import detailswiper from '../../components/detailswiper/detailswiper.vue'
	import refer from '../../components/refer/refer.vue'
	import seat from '../../components/seat/seat.vue'
	import listfamily from '../../components/listfamily/listfamily.vue'
	import online from '../../components/online/online.vue'
	export default {
		components:{detailswiper,refer,seat,listfamily,online},
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
	@import '../../common/style/housetype.scss'
</style>
