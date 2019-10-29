<template>
	<view class="calculator">
		<navbar :titleName="titleName"></navbar>
		<!-- 每月应还 -->
		<view class="calculator_top">
			<view class="top_t">
				7883.25
			</view>
			<view class="top_c">
				每月应还(元)
			</view>
			<view class="top_b">
				<view class="b_all">
					<view class="">230</view>
					<view class="">贷款总额(万元)</view>
				</view>
				<view class="b_all">
					<view class="">127.56</view>
					<view class="">利息总额(万元)</view>
				</view>
				<view class="b_all">
					<view class="">30</view>
					<view class="">贷款年限(年)</view>
				</view>
			</view>
		</view>
		<!-- tab选项卡 -->
		<view class="tab">
			<view @tap="tabList(index)" v-for="(item,index) in tab_list" :key="index" :class="[tab==index?'active':'']">
				{{item.text}}
			</view>
		</view>
		<!--  等额本金	-->
		<view class="interest">
			<view class="interest_bottom">
				<view class="interest_inner">
					<view>期数</view>
					<view class="">
						<text>1</text>
						<text>2</text>
						<text>3</text>
						<text>30</text>
					</view>
				</view>
				<view class="interest_inner">
					<view>月供总额</view>
					<view class="">
						<text>7883.25</text>
						<text>2</text>
						<text>3</text>
						<text>30</text>
					</view>
				</view>
				<view class="interest_inner">
					<view>月供总额</view>
					<view class="">
						<text>7883.25</text>
						<text>2</text>
						<text>3</text>
						<text>30</text>
					</view>
				</view>
				<view class="interest_inner">
					<view>月供总额</view>
					<view class="">
						<text>7883.25</text>
						<text>2</text>
						<text>3</text>
						<text>30</text>
					</view>
				</view>
				<view class="interest_inner">
					<view>月供总额</view>
					<view class="">
						<text>2234567.56</text>
						<text>2</text>
						<text>3</text>
						<text>30</text>
					</view>
				</view>
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
				titleName:'房贷计算器',
				tab: 0,
				tab_list: [{
					text: '等额本金'
				}, {
					text: '等额本金'
				}]
			}
		},
		methods:{
			tabList(index) {
				this.tab = index
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '../../common/style/calculator.scss'
</style>
