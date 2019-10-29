<template>
	<view class="ordertable">
		<!-- 顶部导航 -->		
		<navbar :titleName="titleName" :share="share"></navbar>
		<!-- 公共detail -->
		<detail></detail>
		<!-- 预约看房发布人信息 -->
		<view class="ordertable_msg">
			<view class="msg_top">
				<text>发布人信息</text>
			</view>
			<view class="msg_bottom">
				<view class="msg_head">
					<image src=""></image>
				</view>
				<view class="msg_inner">
					<view class="inner_top">
						<text>张小洪</text>
						<text>买卖经纪人</text>
					</view>
					<view class="inner_bottom">
						<text>厦门麦田事业部·前铺店</text>
					</view>
					<image src="../../static/newdetail_icon1.png"></image>
				</view>
			</view>
		</view>
		<!-- 填写预约表单 -->
		<view class="ordertable_form">
			<view class="form_top">
				<text>填写预约表单</text>
			</view>
			<view class="form_name">
				<text>姓名</text>
				<input type="text" placeholder="请输入姓名" />
			</view>
			<view class="form_tel">
				<text>电话</text>
				<input type="text" placeholder="请输入手机号" />
			</view>
			<view class="form_time">
				<text>看房时间</text>
				<input type="text" placeholder="选择预约时间" />
				<image src="" @click="showPopup"></image>
			</view>
			<!-- 弹窗层 -->
			<van-popup
			  :show=" show "
			  position="bottom"
			  custom-style="height:680rpx;border-radius:40rpx 40rpx 0px 0px;"
			  @close="onClose"
			>
			<!-- 时间表 -->
				<van-datetime-picker
				  :type="datetime"
				  :value=" currentDate "
				  :min-date=" minDate "
				  :max-date=" maxDate "
				  @input="onInput"
				  title="选择时间"
				></van-datetime-picker>
			</van-popup>
		</view>
		<!-- 其他备注消息 -->
		<view class="ordertable_remark">
			<view>其他备注</view>
			<textarea class="remark_input" value="" placeholder="请输入您的备注信息"></textarea>
		</view>
		<!-- 提交表单 -->
		<view class="ordertable_submit">
			<view class="">
				提交表单
			</view>
		</view>
	</view>
</template>

<script>
	import navbar from '../../components/navbar/navbar.vue'
	import detail from '../../components/detail/detail.vue'
	export default {
		components: {
			detail,navbar
		},
		data() {
			return {
				titleName: '预约看房',
				share: '../../static/newdetail_icon6.png',
				minHour: 10,
				maxHour: 20,
				minDate: new Date().getTime(),
				maxDate: new Date(2019, 10, 1).getTime(),
				currentDate: new Date().getTime(),
				show: false
			}
		},
		methods: {
			aaa(){
				this.visible = true
			},
			showPopup() {
				console.log('显示')
			    this.show = true;
			  },
			
			  onClose() {
				  console.log('隐藏')
			    this.show = false;
			  }

		}
	}
</script>

<style scoped lang="scss">
	@import '../../common/style/ordertable.scss'
</style>
