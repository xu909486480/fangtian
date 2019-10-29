<template>
	<view class="mapsearch">
		<navbar :titleName="titleName" :share="share"></navbar>
		<sort :sort="sort" style="padding-top:30rpx ;"></sort>
		<map style="height: 1080rpx;width: 750rpx;"></map>
	</view>
</template>

<script>
	import navbar from '../../components/navbar/navbar.vue'
	import sort from '../../components/sort/sort.vue'
	export default {
		components:{navbar,sort},
		data() {
			return {
				titleName:'地图找房',
				share:'../../static/newdetail_icon6.png',
				sort:[{text:'区域'},{text:'价格'},{text:'类型'},{text:'更多'}]
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	

</style>
