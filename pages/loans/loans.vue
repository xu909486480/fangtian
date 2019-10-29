<template>
	<view class="loans">
		<navbar :titleName="titleName" :bg="bg"></navbar>
		<!-- tab选项卡 -->
		<view class="tab">
			<view @tap="tabList(index)" v-for="(item,index) in tab_list" :key="index" :class="[tab==index?'active':'']">
				{{item.text}}
			</view>
		</view>
		<!-- 商业贷款 -->
		<view class="business" v-if="tab == 0">
			<view class="business_line1">
				<view class="line1_left">
					<text>计算方式</text>
				</view>
				<view class="line1_right" @tap="showPopup1">
					<text>按贷款总额</text>
					<image src=""></image>
				</view>
			</view>
			<view class="business_line2">
				<view class="line1_left">
					<text>贷款年限</text>
				</view>
				<view class="line1_right" @tap="showPopup2">
					<text>按贷款总额</text>
					<image src=""></image>
				</view>
			</view>
			<view class="business_line3">
				<view class="line1_left">
					<text>贷款利率</text>
				</view>
				<view class="line1_right" @tap="showPopup3">
					<text>按贷款总额</text>
					<image src=""></image>
				</view>
			</view>
			<view class="business_line4">
				<view class="line1_left">
					<text>贷款金额</text>
				</view>
				<view class="line1_right">
					<text>按贷款总额</text>
					<image src=""></image>
				</view>
			</view>
			<view class="business_line5">
				<text>
					贷款利率仅供计算使用，实际交易利率折扣由银行评估
				</text>
			</view>
		</view>
		
		<!-- 组合贷款 -->
		<view class="group" v-if="tab == 1">
			<view class="group_line1">
				<view class="line1_top">
					<view class="line1_left">
						<text>计算方式</text>
					</view>
					<view class="line1_right">
						<text>按贷款总额</text>
						<image src=""></image>
					</view>
				</view>
				<view class="line1_bottom">
					<view class="line1_left">
						<text>计算方式</text>
					</view>
					<view class="line1_right">
						<text>按贷款总额</text>
						<image src=""></image>
					</view>
				</view>
			</view>
			<view class="group_line2"></view>
			<view class="group_line3">
				<view class="line1_top">
					<view class="line1_left">
						<text>计算方式</text>
					</view>
					<view class="line1_right">
						<text>按贷款总额</text>
						<image src=""></image>
					</view>
				</view>
				<view class="line1_bottom">
					<view class="line1_left">
						<text>计算方式</text>
					</view>
					<view class="line1_right">
						<text>按贷款总额</text>
						<image src=""></image>
					</view>
				</view>
				<view class="line1_bottom2">
					<view class="line1_left">
						<text>计算方式</text>
					</view>
					<view class="line1_right">
						<text>按贷款总额</text>
						<image src=""></image>
					</view>
				</view>
			</view>
			<view class="group_line4"></view>
			<view class="group_line5">
				<view class="line1_top">
					<view class="line1_left">
						<text>计算方式</text>
					</view>
					<view class="line1_right">
						<text>按贷款总额</text>
						<image src=""></image>
					</view>
				</view>
				<view class="line1_bottom">
					<view class="line1_left">
						<text>计算方式</text>
					</view>
					<view class="line1_right">
						<text>按贷款总额</text>
						<image src=""></image>
					</view>
				</view>
				<view class="line1_bottom2">
					<view class="line1_left">
						<text>计算方式</text>
					</view>
					<view class="line1_right">
						<text>按贷款总额</text>
						<image src=""></image>
					</view>
				</view>
			</view>
			<view class="group_line6">
				贷款利率仅供计算使用，实际交易利率折扣由银行评估
			</view>
		</view>

		<!-- 公积金贷款 -->
		<view class="business" v-if="tab == 2">
			<view class="business_line1">
				<view class="line1_left">
					<text>计算方式</text>
				</view>
				<view class="line1_right">
					<text>按贷款总额</text>
					<image src=""></image>
				</view>
			</view>
			<view class="business_line2">
				<view class="line1_left">
					<text>贷款年限</text>
				</view>
				<view class="line1_right">
					<text>按贷款总额</text>
					<image src=""></image>
				</view>
			</view>
			<view class="business_line3">
				<view class="line1_left">
					<text>计算方式</text>
				</view>
				<view class="line1_right">
					<text>按贷款总额</text>
					<image src=""></image>
				</view>
			</view>
			<view class="business_line4">
				<view class="line1_left">
					<text>计算方式</text>
				</view>
				<view class="line1_right">
					<text>按贷款总额</text>
					<image src=""></image>
				</view>
			</view>
			<view class="business_line5">
				<text>
					贷款利率仅供计算使用，实际交易利率折扣由银行评估
				</text>
			</view>
		</view>
		<view class="jisuan" @tap="begin">
			<text>开始计算</text>
		</view>
		
		<!-- 弹窗层 +  选择器-->
		<van-popup
		  :show=" show1 "
		  position="bottom"
		  custom-style="height:460rpx;border-radius:40rpx 40rpx 0px 0px;"
		  @close="onClose">
			<van-picker
			  show-toolbar
			  title="计算方式"
			  :columns="columns1"
			  @cancel="onCancel"
			  @confirm="onConfirm1">
			</van-picker>
		</van-popup>
		
		<!-- 弹窗层 +  选择器-->
		<van-popup
		  :show=" show2 "
		  position="bottom"
		  custom-style="height:560rpx;border-radius:40rpx 40rpx 0px 0px;"
		  @close="onClose">
			<van-picker
			  show-toolbar
			  title="贷款年限"
			  :columns="columns2"
			  @cancel="onCancel"
			  @confirm="onConfirm2">
			</van-picker>
		</van-popup>
		
		<!-- 弹窗层 +  选择器  +  自定义利率-->
		<van-popup
		  :show=" show3 "
		  position="bottom"
		  custom-style="height:600rpx;border-radius:40rpx 40rpx 0px 0px;"
		  @close="onClose">
			<van-picker
			  show-toolbar
			  title="贷款年限"
			  :columns="columns3"
			  @cancel="onCancel"
			  @confirm="onConfirm3">
			</van-picker>
			<view class="picker_number">
				<view class="number_left">
					<text>自定义利率</text>
				</view>
				<view class="number_right">
					<input type="number" value="" placeholder="请输入利率"/>
					<text>倍</text>
				</view>
			</view>
		</van-popup>
	</view>
</template>

<script>
	import navbar from '../../components/navbar/navbar.vue'
	export default {
		components:{navbar},
		data() {
			return {
				bg:'background: #FFFFFF;',
				show1: false,
				show2: false,
				show3: false,
				columns1: ['按贷款总额', '按房屋总价', '按房屋总价', '按房屋总价', '按贷款总额'],
				columns2: ['30年', '29年', '28年', '27年', '26年'],
				columns3: ['基本利率9折(4.40%)', '基本利率9折(4.40%)', '基本利率95折(4.66%)', '基本利率(4.9%)', '基本利率(4.9%)'],
				titleName:'房贷计算器',
				tab: 0,
				tab_list: [{
					text: '商业贷款'
				}, {
					text: '组合贷款'
				}, {
					text: '公积金贷款'
				}]
			}
		},
		methods: {
			tabList(index) {
				this.tab = index
			},
			// 开始计算
			begin(){
				uni.navigateTo({
					url:'../calculator/calculator'
				})
			},
			// popup显示隐藏
			showPopup1() {
				console.log('显示')
				this.show1 = true;
			},
			showPopup2() {
				console.log('显示')
				this.show2 = true;
			},
			showPopup3() {
				console.log('显示')
				this.show3 = true;
			},
			
			onClose() {
				console.log('隐藏')
				this.show1 = false;
				this.show2 = false;
				this.show3 = false;
			},
			// 选择器
			onConfirm1(event) {
			    const { picker, value, index } = event.detail;
			    uni.showToast({
			        title: `${index}`,
			        duration: 1000
			    });
			  },
			  onConfirm2(event) {
			      const { picker, value, index } = event.detail;
			      uni.showToast({
			          title: `${index}`,
			          duration: 1000
			      });
			    },
				onConfirm3(event) {
				    const { picker, value, index } = event.detail;
				    uni.showToast({
				        title: `${index}`,
				        duration: 1000
				    });
				  },
			onCancel() {
			   console.log('取消');
			}
		}
	}
</script>

<style scoped lang="scss">
@import '../../common/style/loans.scss'
</style>
