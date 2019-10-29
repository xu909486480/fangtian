<template>
	<view class="issue">
		<navbar :titleName="titleName"></navbar>
		<view class="issue_t">
			<view class="t_area">
				<view class="area_l">
					<text>所需小区</text>
				</view>
				<view class="area_r">
					<input type="text" value="" disabled/>
					<image src="../../static/newdetail_icon1.png" mode=""></image>					
				</view>
			</view>
			<view class="t_area">
				<view class="area_l">
					<text>房屋地址</text>
				</view>
				<view class="area_r">
					<input type="text" value="" disabled/>
					<image src="../../static/newdetail_icon1.png" mode=""></image>					
				</view>
			</view>
			<view class="t_rent">
				<view class="rent_l">
					<text>期望租金</text>
				</view>
				<view class="rent_r">
					<input type="text" value="" placeholder="您期望的月租金"/>
					<image src="../../static/issue_icon.png" mode=""></image>					
				</view>
			</view>
		</view>
		
		<view class="issue_c">
			<view class="t_rent">
				<view class="rent_l">
					<text>称呼</text>
				</view>
				<view class="rent_r">
					<input type="text" value="" placeholder="如何称呼你" />
					<image src="../../static/issue_icon.png" mode=""></image>					
				</view>
			</view>
			<view class="t_rent">
				<view class="rent_l">
					<text>联系方式</text>
				</view>
				<view class="rent_r">
					<input type="text" value="" placeholder="1561651561"/>
					<image src="../../static/issue_icon.png" mode=""></image>					
				</view>
			</view>
		</view>
		
		<view class="issue_b">
			<view class="b_txt">
				<text>房源发布流程</text>
			</view>
			<view class="b_inner">
				<view class="">
					<image src="" mode=""></image>
					<text>线上发布</text>
				</view>
				<view class="">
					<image src="" mode=""></image>
					<text>线上发布</text>
				</view>
				<view class="">
					<image src="" mode=""></image>
					<text>线上发布</text>
				</view>
			</view>
			<view class="issue_btn">
				<text>立即发布</text>
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
				titleName:'发布需求'
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped lang="scss">
	@import '../../common/style/issue.scss'
</style>
