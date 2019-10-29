<template>
	<view class="login">
		<view class="login_top">
			<view class="login_top_img">
				<image src="../../static/user_head.png"></image>
			</view>
			<view class="login_top_verify" v-if="login_state?login_state:''">
				<text @tap="reg_user">注册</text>
				<text>/</text>
				<text @tap="login_user">登录</text>
			</view>
			<!--登录成功显示内容-->
			<view class="user_top_verify" v-if="login_state == false">
				<text>倔强的小红军</text>
				<text>房田号：123456789</text>
			</view>
			<!--登录成功显示内容-->
			<view class="user_home" v-if="login_state == false">
				<navigator class="user_home_my" @tap="infoMsg">
					<text>个人主页</text>
					<image src="../../static/user_xiayibu.png"></image>
				</navigator>
			</view>
			<!--登录成功显示内容-->
			<view class="user_rank" v-if="login_state == false">
				<image src="../../static/user_icon1.png"></image>
				<view>LV:01</view>
				<text>已实名</text>
				<text>店主</text>
				<text>经纪人</text>
				<text>门店</text>
				<text>已认证</text>
			</view>
			<view class="user_top_set">
				<image src="../../static/user_icon3.png"></image>
			</view>
		</view>
		<!--我的     我要开店-->
		<view class="login_center">
			<view class="join" @tap="guideTap">
				<view class="join_left">
					<image src="../../static/user_icon2.png"></image>
					<text>我要开店</text>
				</view>
				<view class="join_right">
					<text>立即加入房田</text>
					<image src="../../static/user_icon4.png"></image>
				</view>
			</view>
			<!-- <view class="index_grid">
				<view class="grid_index" v-for="(item,index) in list" :key="index">
					<image :src="item.img"></image>
					<view>{{item.text}}</view>
				</view>
			</view> -->
			<grid :grid="grid"
			:gridImgWidth="gridImgWidth"
			:gridImgHeight="gridImgHeight"
			@gridList="gridList"
			></grid>
			<!--我的   banner图-->
			<view class="login_banner" v-if="login_state">
				<image src="../../static/user_banner.png"></image>
			</view>

			<!--我的  登录成功显示-->
			<view class="user_manage" v-if="login_state == false">
				<!-- <view class="user_manage"> -->
				<view class="user_broker">
					<text class="borker_inner">我是经纪人</text>
					<!-- <scroll-view scroll-x class="myshop">
						<view class="myshop_item" v-for="(item,index) in borker" :key="index">
							<image :src="item.img"></image>
							<view>{{item.text}}</view>
						</view>
					</scroll-view> -->
					<grid :grid="grid1"
					:gridImgWidth="gridImgWidth"
					:gridImgHeight="gridImgHeight"
					></grid>
				</view>
				<!--我的  登录成功显示-->
				<!-- <view class="user_door">
					<text class="borker_inner">门店管理</text>
					<scroll-view scroll-x class="myshop">
						<view class="myshop_item" v-for="(item,index) in door" :key="index">
							<image :src="item.img"></image>
							<view>{{item.text}}</view>
						</view>
					</scroll-view>
				</view> -->
				<!--我的  登录成功显示-->
				<!-- <view class="user_master">
					<text class="borker_inner">我是店主</text>
					<scroll-view scroll-x class="myshop">
						<view class="myshop_item" v-for="(item,index) in master" :key="index">
							<image :src="item.img"></image>
							<view>{{item.text}}</view>
						</view>
					</scroll-view>
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	import grid from '../../components/grid/grid.vue'
	export default {
		components:{grid},
		data() {
			return {
				gridImgWidth:48,
				gridImgHeight:48,
				login_state: true,
				grid: [{
						'text': '我的钱包',
						'img': '../../static/user_icon5.png'
					},
					{
						'text': '我的订单',
						'img': '../../static/user_icon6.png'
					},
					{
						'text': '我的发布',
						'img': '../../static/user_icon7.png'
					},
					{
						'text': '我的收藏',
						'img': '../../static/user_icon8.png'
					},
					{
						'text': '我的关注',
						'img': '../../static/user_icon9.png'
					},
					{
						'text': '我的会员',
						'img': '../../static/user_icon10.png'
					},
					{
						'text': '我的团队',
						'img': '../../static/user_icon11.png'
					},
					{
						'text': '认证中心',
						'img': '../../static/user_icon12.png'
					},
					{
						'text': '我的预约',
						'img': '../../static/user_icon13.png'
					},
					{
						'text': '浏览记录',
						'img': '../../static/user_icon14.png'
					}
				],
				grid1: [{
						'text': '我的店铺',
						'img': '../../static/user_icon15.png'
					},
					{
						'text': '房源管理',
						'img': '../../static/user_icon16.png'
					},
					{
						'text': '预约管理',
						'img': '../../static/user_icon17.png'
					},
					{
						'text': '共享房源',
						'img': '../../static/user_icon18.png'
					},
					{
						'text': '新房代理',
						'img': '../../static/user_icon19.png'
					}
				],
				
			}
		},
		methods: {
			login_user() {
				// uni.navigateTo({
				// 	url:'../login/login'
				// })
				this.login_state = false //有token为true
				console.log(111)
			},
			reg_user(){
				uni.navigateTo({
					url:'../reg/reg'
				})
			},
			gridList(index){
				if(index == 0){
					uni.navigateTo({
						url:'../wallet/wallet'
					})
				}else if(index==4){
					uni.navigateTo({
						url:'../myfocus/myfocus'
					})
				}else if(index==5){
					uni.navigateTo({
						url:'../member/member'
					})
				}else if(index==7){
					uni.navigateTo({
						url:'../authentication/authentication'
					})
				}
			},
			infoMsg(){
				uni.navigateTo({
					url:'../personal/personal'
				})
			},
			guideTap(){
				uni.navigateTo({
					url:'../shopGuide/shopGuide'
				})
			}
		}
	} 
</script>
 
<style scoped lang="scss">
	@import '../../common/style/my.scss';
</style>
