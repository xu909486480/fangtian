<template>
	<view class="productdetail">
		<detailswiper></detailswiper>
		<view class="detail_t">
			<view class="line1">
				<view class="line1_left">
					<text>¥</text>
					<text>6800.00</text>
				</view>
				<view class="line1_right">
					<image src="../../static/newdetail_icon12.png" mode=""></image>
				</view>
			</view>
			<view class="line2">
				<text>沙发四件套-红木实心赠送豪华大礼包及幸运抽奖一次</text>
			</view>
			<view class="line3">
				<text>发货：福建厦门<text>|</text>快递：80.0</text>
				<text>月销 18</text>
			</view>
		</view>
		<view class="detail_c">
			<text>活动：1房豆等于1元，已有200房豆</text>
			<text>服务：品质保证，36小时内发货</text>
		</view>
		<view class="detail_b">
			<view class="b_select">
				<view class="">
					<text>参数：品牌<text>尺寸</text></text>
				</view>
				<image src="../../static/newdetail_icon1.png" mode=""></image>
			</view>
			<view class="b_params">
				<view class="">
					<text>参数：品牌<text>颜色</text><text>尺寸</text></text>
				</view>
				
				<image src="../../static/newdetail_icon1.png" mode=""></image>
			</view>
		</view>
		<view class="detail_shop">
			<view class="shop_line1">
				<view class="line1_h3">
					<text>商品评价(42)</text>
				</view>
				<view class="line1_more">
					<text>查看全部</text>
					<image src="../../static/newdetail_icon1.png" mode=""></image>
				</view>
			</view>
			
			<alltab :alltab="all_tab"></alltab>
			
			<view class="shop_line3">
				<view class="line3_left">
					<image src="" mode=""></image>
				</view>
				<view class="line3_right"> 
					<view class="r_inner">
						<view class="inner_t">
							<view class="t_auth">
								<text>老东家</text>
							</view>
							<view class="t_msg">
								<text>2019-05-12</text>
								<text>浅蓝色-1.8*0.8m</text>
							</view>
						</view>
						<view class="inner_b">
							<image src="" mode=""></image>
						</view>
					</view>
					<view class="r_txt">
						<text>沙发很舒服，颜色也很正，服务也很细心，不错的一次购物体验</text>
					</view>
					<view class="r_img">
						<image src="" mode=""></image>
						<image src="" mode=""></image>
						<image src="" mode=""></image>
					</view>
					<view class="r_reply"> 
						<text>店家回复：</text>
						<text>沙发很舒服，颜色也很正，服务也很细心，不错的一次购物体验</text>
					</view>
				</view>
			</view>
		</view>
		<view class="detail_hotel">
			<view class="hotel_lnto">
				<view class="hotel_t">
					<image src="" mode=""></image>
				</view>
				<view class="hotel_c">
					<view class="c_t">
						<text>老王家装专卖店家打赏阿斯达所大所</text>
					</view>
					<view class="c_b">
						<van-rate :value=" value " disabled disabled-color="#FA6400" size="24rpx"/>
						<text>8.5万人关注</text>
					</view>
				</view>
				<view class="hotel_b">
					<text>进店逛逛</text>
				</view>
			</view>
			<view class="hotel_detail">
				<view class="title" style="padding: 0 32rpx;">
					<text>商品详情</text>
				</view>
				<view class="">
					<image src="" mode=""></image>
				</view>
			</view>
		</view>
		<van-goods-action>
		  <van-goods-action-icon icon="chat-o" text="客服" />
		  <van-goods-action-icon icon="cart-o" text="购物车" info="5" />
		  <van-goods-action-icon icon="shop-o" text="店铺" />
		  <van-goods-action-button custom-class='action-btn' text="加入购物车" type="warning" 
		  color="linear-gradient(315deg,rgba(248,167,5,1) 0%,rgba(252,215,62,1) 100%);"
		  />
		  <van-goods-action-button text="立即购买" 
		  color="linear-gradient(225deg,rgba(247,156,0,1) 0%,rgba(245,102,7,1) 100%);"/>
		</van-goods-action>
		<!-- <online></online> -->
	</view>
</template>

<script>
	import detailswiper from '../../components/detailswiper/detailswiper.vue'
	import alltab from '../../components/alltab/alltab.vue'
	import online from '../../components/online/online.vue'
	export default {
		components:{detailswiper,online,alltab},
		data() {
			return {
				value:3,
				all_tab:[{text:'质量好30'},{text:'质量好30'},{text:'质量好30'}]
			}
		},
		methods: {
		}
	}
</script>

<style scoped lang="scss">
	@import '../../common/style/productdetail.scss'
</style>
