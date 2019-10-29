<template>
	<view class="agentdetail">
		<view class="assess_head">
			<image src="../../static/bridal_icon1.png"></image>
			<text>房屋估价</text>
			<text>记录</text>
		</view>
		<view class="main">
			<view class="main_img">
				<image src="" mode=""></image>
			</view>
			<view class="main_auth">
				<view class="auth_l">
					<image src="" mode=""></image>
				</view>
				<view class="auth_r">
					<text>丹麦房产·湖里店</text>
					<text>本店主营：高端别墅楼盘，欢迎咨询本店</text>
				</view>
			</view>
			<view class="main_list">
				<view class="">
					<text>360<text>人</text></text>
					<text>帮助客户</text>
				</view>
				<view class="">
					<text>360<text>人</text></text>
					<text>帮助客户</text>
				</view>
				<view class="">
					<text>360<text>人</text></text>
					<text>帮助客户</text>
				</view>
			</view>
			<view class="main_map">
				<view class="title">
					<text>门店位置</text>
				</view>
				<map style="width:686rpx;height:342rpx;background:rgba(238,238,238,1);"></map>
				<view class="map_site">
					<text>厦门市湖里区某某某街道108号</text>
				</view>
			</view>	
		</view>
		
		<view class="borker">
			<view class="title">
				<text>门店成员（28人）</text>
			</view>
			<refer></refer>
			<view class="borker_btn">
				<text>查看全部</text>
			</view>
		</view>
		<view class="detail">
			<view class="title" style="padding: 0 32rpx;">
				<text>本店房源（320套）</text>
			</view>
			<alltab :alltab="all_tab"></alltab> 
			<detail :list="detail_list"></detail>
			<view class="borker_btn">
				<text>查看全部</text>
			</view>
		</view>
	</view>
</template>

<script>
	import alltab from '../../components/alltab/alltab.vue'
	import refer from '../../components/refer/refer.vue'
	import detail from '../../components/detail/detail.vue'
	export default {
		components:{alltab,refer,detail}, 
		data(){
			return{
				titleName:'中介门店',
				share:'../../static/newdetail_icon6.png',
				tab:0,
				all_tab:[{text:'新房'},{text:'二手房'},{text:'租房'}],
				agent:[{text:'向华强中介店'},{text:'向华强中介店'}],
				detail_list:[{text:'向华强中介店'},{text:'向华强中介店'}]
			}
		},
		methods:{
			tabList(index) {
				this.tab = index
			},
		}
	}
</script>

<style scoped lang="scss">
	@import  '../../common/style/agentdetail.scss'
</style>
