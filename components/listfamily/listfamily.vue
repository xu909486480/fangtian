<template>
	<view class="listfamily">
		<view class="family_list" v-for="(item,index) in family_list" :key="index">
			<view class="list_img">
				<image src="" mode=""></image>
			</view>
			<view class="list_inner">
				<view>
					<text>2室1厅1卫</text>
					<text>在售 | 住宅</text>
				</view>
				<view>
					<text>建筑面积110m²</text>
					<text>朝向南</text>
				</view>
				<view>
					<text>{{item.text}}</text>
					<text>干湿分离</text>
					<text>干湿分离</text>
				</view>
				<view>
					<text>约360</text>
					<text>万/套</text>
				</view>
				<view class="pay" @tap="pay">
					<image src="../../static/newdetail_icon7.png"></image>
					<text>关注</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'listfamily',
		props:['listfamily'],
		data(){
			return{
			}
		},
		methods:{
		}
	}
</script>

<style scoped lang="scss">
	@import '../../common/style/listfamily.scss'
</style>
