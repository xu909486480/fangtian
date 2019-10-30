<template>
	<view class="newdetail">
		<view class="newdetail_nav">
			<view class="nav_left" @tap="backout">
				<image src="../../static/newdetail_icon10.png"></image>
			</view>
			<view class="nav_right">
				<image src="../../static/newdetail_icon11.png"></image>
				<image src="../../static/newdetail_icon12.png"></image>
			</view>
		</view>
		<detailswiper :swiperlist="swiperlist"></detailswiper>
		
		<view class="newdetail_inner">
			<view class="detail_h3">
				<text>住宅·莲花国际</text>
			</view>
			<view class="detail_msg">
				<text>品牌房企</text>
				<text>交通便利</text>
			</view>
			<view class="detail_price">
				<view>
					<view>36890<text>元/m²</text></view>
					<view>参考均价</view>
				</view>
				<view>
					<view>360<text>万/套</text></view>
					<view>参考均价</view>
				</view>
				<view>
					<view>住宅<text></text></view>
					<view>参考均价</view>
				</view>
			</view>
			<view class="detail_calculator" @tap="calculator">
				<text>房贷计算器</text>
			</view>
			<view class="detail_list">
				<view>
					<view>
						开盘时间：<text>2016/05/01</text>
					</view>
					<view>
						交房时间：<text>2016/05/01</text>
					</view>
					<view>
						所在区域：<text>厦门集美</text>
					</view>
					<view>
						绿化率：<text>20%</text>
					</view>
				</view>
				<view>
					<view>
						建筑面积：<text>100-130m²</text>
					</view>
					<view>
						装修标准：<text>精装修</text>
					</view>
					<view>
						产权年限：<text>70年</text>
					</view>
					<view>
						容积率：<text>80%</text>
					</view>
				</view>
			</view>
			<view class="detail_site">
				<view>
					建筑类型：<text>板房、踏板结合</text>
				</view>
				<view>
					楼盘地址：<text>集美龙亭六里一号，龙亭六里七号</text>
					<image src="../../static/newdetail_icon1.png"></image>
				</view>
			</view>
			<view class="detail_remind">
				<view>
					<image src="../../static/newdetail_icon2.png"></image>
					<text>变价提醒</text>
				</view>
				<view>
					<image src="../../static/newdetail_icon3.png"></image>
					<text>开盘提醒</text>
				</view>
			</view>
		</view>
		<view class="detail_rank">
			<view @tap="consider">
				<image src="../../static/newdetail_icon4.png"></image>
				<text>入选厦门市销量榜</text>
				<text>第二名</text>
				<image src="../../static/newdetail_icon1.png"></image>
			</view>
			<view @tap="commission">
				<image src="../../static/newdetail_icon5.png"></image>
				<text>分销合作中，报备</text>
				<text>赚佣金</text>
				<image src="../../static/newdetail_icon1.png"></image>
			</view>
		</view>
		<view class="detail_introduce">
			<view class="title">
				<text>户型介绍(3)</text>
				<text @tap="houseType">查看全部</text>
			</view>
			<view class="ask_center">
				<image></image>
				<image></image>
			</view>
			<view class="ask_bottom">
				<view>
					<view>
						<text>2室1厅1卫</text>
						<text>在售 | 住宅</text>
					</view>
					<view>
						<text>建筑面积110m²</text>
						<text>朝向南</text>
					</view>
					<view>
						<text>干湿分离</text>
						<text>干湿分离</text>
						<text>干湿分离</text>
					</view>
					<view>
						
						<text>约360</text>
						<text>万/套</text>
					</view>
				</view>
				<view>
					<view>
						<text>2室1厅1卫</text>
						<text>在售 | 住宅</text>
					</view>
					<view>
						<text>建筑面积110m²</text>
						<text>朝向南</text>
					</view>
					<view>
						<text>干湿分离</text>
						<text>干湿分离</text>
						<text>干湿分离</text>
					</view>
					<view>
						<text>约360</text>
						<text>万/套</text>
					</view>
				</view>
			</view>
		</view>
		<view class="detail_state">
			<view class="title">
				<text>楼盘动态(3)</text>
				<text @tap="dynamicList">查看全部</text>
			</view>
			<view>
				<view>项目已于2019年5月25日开盘在售，主力户型为74-110平米两至三居，均价为58802元/平米，敬请关注！</view>
				<view>
					<text>来源：房田网</text>
					<text>2019年05月15日</text>
				</view>
			</view>
			<view>
				<view>项目已于2019年5月25日开盘在售，主力户型为74-110平米两至三居，均价为58802元/平米，敬请关注！</view>
				<view>
					<text>来源：房田网</text>
					<text>2019年05月15日</text>
				</view>
			</view>
		</view>
		<view class="detail_serve">
			<view class="title">
				<text>免费看房服务</text>
				<text>了解更多</text>
			</view>
			<view>
				<view>同城专车接送，一次看多个楼盘，服务全免费</view>
				<view>
					<text>四人看房有提供专车服务</text>
					<text>立即预约</text>
				</view>
			</view>
		</view>
		<view class="detail_activity">
			<view class="title">
				<text>购房领优惠</text>
				<text>了解更多</text>
			</view>
			<view>
				<view>领取返现红包，购房后最高可返3999元现金</view>
				<view>
					<text>购房返现活动<text>(126人已申请)</text></text>
					<text>立即申请</text>
				</view>
			</view>
		</view>
		<view class="detail_goodroom">
			<view class="title">
				<text>优选好房经纪人</text>
				<text @tap="borker">全部查看</text>
			</view>
			<view class="goodroom_tab">
				<text>客户立场</text><text>|</text>
				<text>全程免费</text><text>|</text>
				<text>楼盘分析</text><text>|</text>
				<text>专车接送</text><text>|</text>
				<text>专业服务</text>
			</view>
			
			<refer :referList="referList"></refer>
		</view>
		
		<seat></seat>
		
		<view class="detail_remark">
			<view class="title">
				<text>用户点评(8)</text>
				<text @tap="remark">查看全部</text>
			</view>
			<view class="remark_tab">
				<text>好评(3)</text>
				<text>差评(1)</text>
				<text>有图(2)</text>
				<text>视频(2)</text> 
			</view>
			<view class="remark_inner">
				<view class="inner_top">
					<image></image>
					<text>房田访友：185****2356</text>
				</view>
				<view class="inner_bottom">
					<text>不知道这里的物业怎么样？</text>
				</view>
			</view>
			<view class="remark_inner">
				<view class="inner_top">
					<image></image>
					<text>房田访友：185****2356</text>
				</view>
				<view class="inner_bottom">
					<text>不知道这里的物业怎么知道这里的物业怎么知道这里的物业怎么知道这里的物业怎么知道这里的物业怎么样？</text>
				</view>
			</view>
			<view class="remark_text">
				<text>我要点评</text>
			</view>
		</view>
		
		<online></online>
	</view>
</template>

<script>
	import detailswiper from '../detailswiper/detailswiper.vue'
	import refer from '../refer/refer.vue'
	import seat from '../seat/seat.vue'
	import online from '../online/online.vue'
	export default {
		components:{detailswiper,refer,seat,online},
		data() {
			return {
				guanzhu:'关注',
				img:'../../static/newdetail_icon7.png',
				swiperlist: [{
					url: ""
				}, {
					url: "../../static/index_banner1.png"
				}, {
					url: ""
				}, {
					url: "../../static/index_banner1.png"
				}],
				referList:[{text:'向华强'},{text:'向华强'}]
			}
		},
		methods: {
			mapList(e){
				this.map = e
			},
			// 跳转房贷计算器
			calculator(){
				uni.navigateTo({
					url:'../../pages/loans/loans'
				})
			},
			// 跳转到销量排行
			consider(){
				uni.navigateTo({
					url:'../../pages/consider/consider'
				})
			},
			// 跳转到佣金方案
			commission(){
				uni.navigateTo({
					url:'../../pages/commission/commission'
				})
			},
			// 跳转到户型介绍
			houseType(){
				uni.navigateTo({
					url:'../../pages/familylist/familylist'
				})
			},
			// 跳转到楼盘动态
			dynamicList(){
				uni.navigateTo({
					url:'../../pages/dynamiclist/dynamiclist'
				})
			},
			// 跳转到优选经纪人
			borker(){
				uni.navigateTo({
					url:'../../pages/borker/borker'
				})
			},
			// 位置及周边
			ambitus(){
				uni.navigateTo({
					url:'../../pages/ambitus/ambitus'
				})
			},
			// 用户点评
			remark(){
				uni.navigateTo({
					url:'../../pages/remark/remark'
				})
			},
			// 跳转到预约看房
			ordertable(){
				uni.navigateTo({
					url:'../../pages/ordertable/ordertable' 
				})
			},
			aaa(){
				this.guanzhu='已关注'	
				this.img='../../static/newdetail_icon7_active.png'
			},
			backout(){
				uni.navigateBack({
					
				})
			}
		}
	}
</script>

<style scoped lang="scss"> 
	@import '../../common/style/newdetail.scss'
</style>
