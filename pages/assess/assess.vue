<template>
	<view class="assess">
		<view class="assess_head">
			<image src="../../static/bridal_icon1.png"></image>
			<text>房屋估价</text>
			<text>记录</text>
		</view>
		<view class="issue_t">
			<view class="t_rent">
				<view class="rent_l">
					<text>小区名称</text>
				</view>
				<view class="rent_r">
					<input type="text" value="" placeholder="请输入"/>
					<image src="../../static/issue_icon.png" mode=""></image>					
				</view>
			</view>
			<view class="t_rent">
				<view class="rent_l">
					<text>面积㎡</text>
				</view>
				<view class="rent_r">
					<input type="text" value="" placeholder="请输入"/>
					<image src="../../static/issue_icon.png" mode=""></image>					
				</view>
			</view>
			<view class="t_area">
				<view class="area_l">
					<text>户型</text>
				</view>
				<view class="area_r">
					<input type="text" value="" placeholder="请输入"/>
					<image src="../../static/newdetail_icon1.png" mode=""></image>					
				</view>
			</view>
			<view class="t_area">
				<view class="area_l">
					<text>朝向</text>
				</view>
				<view class="area_r">
					<input type="text" value="" placeholder="请输入"/>
					<image src="../../static/newdetail_icon1.png" mode=""></image>					
				</view>
			</view>
			<view class="t_all">
				<view class="all_l">
					<text>朝向</text>
				</view>
				<view class="all_r">
					<input type="text" value="" placeholder="请输入"/>
					<text>-层</text>
					<input type="text" value="" placeholder="请输入"/>
					<text>-总层数</text>
					<image src="../../static/issue_icon.png" mode=""></image>					
				</view>
			</view>
		</view>
		
		<view class="assess_c">
			<view class="c_txt">
				<text>以下选填项（完善信息有助于提高估价准确性）</text>
			</view>
			<view class="c_list">
				<view class="list_txt">
					<text>装饰类型</text>
				</view>
				<view class="list_tab">
					<text>装饰类型</text>
					<text>装饰类型</text> 
					<text>装饰类型</text>
					<text>装饰类型</text>
				</view>
			</view>
			<view class="c_list">
				<view class="list_txt">
					<text>装饰类型</text>
				</view>
				<view class="list_tab">
					<text>装饰类型</text>
					<text>装饰类型</text> 
					<text>装饰类型</text>
					<text>装饰类型</text>
				</view>
			</view>
			<view class="c_txt">
				<text>估价结果由房田大数据海量提供</text>
			</view>
			<view class="c_btn">
				
				<text>查看估价结果</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped lang="scss">
	@import '../../common/style/assess.scss'
</style>
