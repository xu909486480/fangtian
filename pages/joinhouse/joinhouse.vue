<template>
	<view class="joinhouse">
		<view class="newdetail_nav" id="headbg">
			<view class="nav_left" @tap="backout">
				<image src="../../static/newdetail_icon10.png"></image>
			</view>
			<view class="nav_right">
				<image src="../../static/newdetail_icon11.png"></image>
				<image src="../../static/newdetail_icon12.png"></image>
			</view>
		</view>
		<detailswiper :swiperList="inner.imgs"></detailswiper>
		<view class="detail" id="detail">
			<view class="line1">
				<text>{{inner.title}}</text>
				<!-- <text>2室1厅1卫</text> -->
			</view>
			<view class="line2">
				<text>{{inner.price}}</text>
				<text>元/月(月付)</text>
			</view>
			<view class="line3">
				<block v-for="(tese,index) in inner.house_liangdian" :key="index">
					<text>{{tese}}</text>
				</block>
			</view>
			<view class="line4">
				<text>位于{{inner.estate_name}}</text>
				<text>离最近公交站100米</text>
				<image src="../../static/newdetail_icon1.png" mode=""></image>
			</view>
			
			<view class="line5">
				<view class="">
					<view class="">
						<text>面积：</text>
						<text>{{inner.mianji}}m²</text>
					</view>
					<view class="">
						<text>发布：</text>
						<text>{{inner.create_time}}</text>
					</view>
					<view class="">
						<text>楼层：</text>
						<text>{{inner.floor}}层</text>
					</view>
					<view class="">
						<text>车位：</text>
						<text>暂无数据</text>
					</view>
					<view class="">
						<text>用电：</text>
						<text>民用电</text>
					</view>
					<view class="">
						<text>租期：</text>
						<text>{{inner.check_in_cycle}}</text>
					</view>
				</view>
				<view class="">
					<view class="">
						<text>朝向：</text>
						<text>{{inner.chaoxiang}}</text>
					</view>
					<view class="">
						<text>入住：</text>
						<text>{{inner.check_in_time}}</text>
					</view>
					<view class="">
						<text>电梯：</text>
						<text>有</text>
					</view>
					<view class="">
						<text>用水：</text>
						<text>民用水</text>
					</view>
					<view class="">
						<text>燃气：</text>
						<text>有</text>
					</view>
					<view class="">
						<text>看房：</text>
						<text>{{inner.look_time}}</text>
					</view>
				</view>
			</view>
			<view class="line6">
				<text>地址：</text>
				<text>{{inner.address}}</text>
				<image src="../../static/newdetail_icon1.png" mode=""></image>
			</view>
		</view>
		
		<view class="detail_inner">
			<view class="title">
				<text>房源管家</text>
			</view>
			<view class="detail_list">
				<view class="tab_refer">
					<view class="tab_left">
						<image :src="inner.headimgurl"></image>
					</view>
					<view class="tab_right">
						<view class="tab_top">
							<view>
								<text>{{inner.username}}</text>
							</view>
							<view>
								<image src="../../static/newdetail_icon6.png"></image>
								<text>个人</text>
							</view>
						</view>
						<view class="tab_center">咨询，我了解最新动态</view>
					</view>
				</view>
			</view>
			
			<view class="title">
				<text>房源介绍</text>
			</view>
			<view class="index_grid">
				<view class="grid_index" v-for="(item,index) in join_grid" :key="index">
					<image :src="item.img"></image>
					<view>{{item.text}}</view>
				</view>
			</view>
			<view class="title">
				<text>房源亮点</text>
			</view>
			<view class="inner_msg">
				<text>{{inner.house_liangdian}}</text>
			</view>
			<view class="title">
				<text>费用详情</text>
			</view>
			<view class="inner_msg">
				<text>年租价(当租期不足一年时租金可能会上浮，详询管家)</text>
			</view>
			<view class="inner_price">
				<view class="">
					<text>付款方式</text>
					<text></text>
					<text>{{inner.rental_pay}}</text>
				</view>
				<view class="">
					<text>租金</text>
					<text>元/月</text>
					<text>{{inner.price}}</text>
				</view>
				<view class="">
					<text>服务费</text>
					<text>元</text>
					<text>0</text>
				</view>
				<view class="">
					<text>中介费</text>
					<text>元</text>
					<text>需咨询</text>
				</view>
				<view class="">
					<text>押金</text>
					<text>元</text>
					<text>0</text>
				</view>
			</view>
			<!-- <view class="title">
				<text>租客要求</text>
			</view>
			<view class="inner_require">
				<text>不养宠物</text>
				<text>|</text>
				<text>爱干净</text>
				<text>|</text>
				<text>不带小孩</text>
			</view>
			<view class="title">
				<text>合租信息</text>
			</view>
			<view class="inner_msg">
				<text>B房间</text>
				<text>随时入住</text>
				<text>1500元/月</text>
				<text>当前房间</text>
			</view> -->
			<seat></seat>
		</view>
		
		<view class="detail_foryou">
			<view class="foryou_title">
				<text>为你推荐</text>
			</view>
			<detail :list="inner.house_list" :listIndex="listIndex"></detail>
			<view class="more">
				<text>更多房源</text>
			</view>
		</view>
		<online></online>
	</view>
</template>

<script>
	import detailswiper from '../../components/detailswiper/detailswiper.vue'
	import seat from '../../components/seat/seat.vue'
	import detail from '../../components/detail/detail.vue'
	import online from '../../components/online/online.vue'
	export default {
		components:{detailswiper,seat,detail,online},
		data(){
			return{
				inner:{},
				listIndex:0,
				join_grid: [ 
				{img: "../../static/certification_icon3.png","text": "电视"}, 
				{img: "../../static/certification_icon3.png","text": "冰箱"}, 
				{img: "../../static/certification_icon3.png","text": "洗衣机"}, 
				{img: "../../static/certification_icon3.png","text": "空调"}, 
				{img: "../../static/certification_icon3.png","text": "热水器"}, 
				{img: "../../static/certification_icon3.png","text": "床"}, 
				{img: "../../static/certification_icon3.png","text": "暖气"}, 
				{img: "../../static/certification_icon3.png","text": "宽带"},
				{img: "../../static/certification_icon3.png","text": "衣柜"},
				{img: "../../static/certification_icon3.png","text": "天然气"},]
			}
		},
		onLoad(options) {
			const data = JSON.parse(decodeURIComponent(options.data));
			this.inner = data
			this.listIndex = options.id
			this.joinGrid(this.inner)
		},
		onPageScroll(Object){
			// console.log(Object.scrollTop);//实时获取到滚动的值
			// if(Object.scrollTop>1){
			// 	var that = this;
			// 	const query = uni.createSelectorQuery().in(this);
			// 	query.select('#headbg').boundingClientRect(data => {
			// 	  console.log("得到布局位置信息" + JSON.parse(data));
			// 	  console.log("节点离页面顶部的距离为" + data.top);
			// 	}).exec();
			// } 
				const query = uni.createSelectorQuery().in(this);
				// query.select('#headbg').fields(object,function(data){
					
				//   console.log(data);
				// }).exec();
				
				// query.select('#headbg').boundingClientRect(data => {
				//   console.log(data);
				// }).exec();
				
				// query.select('#headbg').scrollOffset(data => {
				//   console.log(data);
				// }).exec(); 
				
				// query.select('#headbg').context(data => {
				//   console.log(data);
				// }).exec();
				
				// query.select('#headbg').context(data => {
				//   console.log(data);
				// }).exec();
		},
		methods:{
			joinGrid(inner){
				for(let i=0;i<this.join_grid.length;i++){
						// console.log(this.join_grid[i])
						var iTxt = this.join_grid[i].text
						var iImg = this.join_grid[i].img
					for(let j=0;j<inner.peitao.length;j++){
						// console.log(inner.peitao[j])
						if(iTxt == inner.peitao[j]){
							this.join_grid[i].img = '../../static/authentication_icon5.png'
							// console.log(this.join_grid[i].img)
						}
					}
				}
			},
			backout(){
				uni.navigateBack({})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '../../common/style/joinhouse.scss';
	.newdetail_nav{
		z-index: 99999;
			position: fixed;
			width:750rpx;
			box-sizing: border-box;
			padding:0 32rpx;
			top:88rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.nav_left{
				image{
					width:22rpx;
					height:40rpx;
				}
			} 
			.nav_right{
				image{
					width: 44rpx;
					height: 44rpx;
				}
				image:nth-child(2){
					margin-left:40rpx;
				}
			}
		}
</style>
