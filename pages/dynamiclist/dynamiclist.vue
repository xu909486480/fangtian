<template>
	<view class="dynamiclist">
		<!-- 顶部导航 -->
		<navbar :titleName="titleName" :share="share"></navbar>
		<!-- tab -->
		<view class="tab_index">
			<view v-for="(item,index) in tab_list" :key="index" :class="[roomtab==index?'btn_active':'']" @tap="onChange(index)">{{item.text}}</view>
		</view>
		<!-- 动态列表 -->
		<view class="dynamiclist_list" v-for="(item,index) in dynamiclist_list" :key="index">
			<view>
				<text>2019年05月28日</text>
			</view>
			<view>
				<text>10号楼有少量房源在售</text>
			</view>
			<view>首开香溪郡物业费：2.98元/㎡·月。公交路线：乘坐郊89路， 通州窑上站下车，沿通顺路向南走270米，右转进入窑管路，沿窑管路走290米，右转约370米到达项目。</view>
			<view>
				<text>{{item.text}}</text>
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
				titleName:'动态列表',
				share:'../../static/newdetail_icon6.png',
				roomtab: 0,
				tab_list:[{text:'全部全部(10)'},{text:'全部两居(4)'},{text:'三居全部(6)'},{text:'全部三居(6)'}],
				dynamiclist_list:[{text:'全文'},{text:'全文'},{text:'全文'}]
			}
		},
		methods:{
			onChange(index){
				this.roomtab = index
			},
			pay(){
				
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '../../common/style/dynamiclist.scss'
</style>
