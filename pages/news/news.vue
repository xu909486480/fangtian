<template>
	<view class="news">
		<!-- 消息动态通知 -->
		<view class="tab_index">
			<view v-for="(item,index) in tab_list" :key="index" :class="[tab==index?'active':'']" @tap="onChange(index)">
				{{item.txt}}<text :class="[tab==index?'te2':'']"></text>
			</view>
		</view>
		<!-- 右侧图标 -->
		<view class="news_icon">
			<image src="../../static/news_icon1.png" v-if="tab==0"></image>
		</view>
		<view class="news_icon">
			<image src="../../static/news_icon2.png" v-if="tab==1"></image>
		</view>
		<!-- 消息 -->
		<view class="news_msg" v-for="(item,index) in msg_list" :key="index" v-if="tab==0">
			<view class="msg_left">
				<image src=""></image>
			</view>
			<view class="msg_right">
				<view class="msg_top">
					<text>{{item.name}}</text>
					<text>3分钟前</text>
				</view>
				<view class="msg_bottom">
					<text>这房子很划算的这房子很划算的这房子很划算的这房子很划算的</text>
					<text>1</text>
				</view>
			</view>
		</view>
		<!-- 动态 -->
		<view class="news_state" v-if="tab==1" v-for="(item,index) in state_list" :key="index">
			<view class="state_head">
				<view class="state_left">
					<image src="" mode=""></image>
				</view>
				<view class="state_right">
					<view class="state_top">
						<text>{{item.name}}</text>
						<text>5分钟前</text>
					</view>
					<view class="state_bottom">
						<image src="../../static/news_icon3.png"></image>
						<text>关注</text>
					</view>
				</view>
			</view>
			<view class="state_txt">
				<text>大家看看这个楼盘很漂亮吧，现价比也还很好的了，环境舒适位置忧郁。</text>
			</view>
			<view class="state_img">
				<image src="" mode=""></image>
				<image src="" mode=""></image>
				<image src="" mode=""></image>
			</view>
			<view class="state_up">
				<view>
					<image src="../../static/news_icon4.png"></image>
					<text>转发(9998)</text>
				</view>
				<view>
					<image src="../../static/news_icon5.png"></image>
					<text>评论(9998)</text>
				</view>
				<view @tap="zan">
					<image src="../../static/news_icon6.png"></image>
					<text>转发(9998)</text>
				</view>
			</view>
		</view>
		<!--  通知  -->
		
		<view class="news_msg" v-if="tab==2" v-for="(item,index) in inform" :key="index">
			<view class="msg_left">
				<image src=""></image>
			</view>
			<view class="msg_right">
				<view class="msg_top">
					<text>{{item.name}}</text>
					<text>3分钟前</text>
				</view>
				<view class="msg_bottom">
					<text>某大型地产活动将在7月8日举行，由8日举8日举</text>
					<text>1</text>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				tab:0,
				tab_list:[
				{txt:'消息'},
				{txt:'动态'},
				{txt:'通知'}], 
				msg_list:[{name:'刘晓庆'},
				{name:'张庆'},
				{name:'姜海'},],
				state_list:[{name:'刘晓庆'},{name:'安迪'}],
				inform:[{name:'消息提醒'},{name:'楼盘动态'}]
			}
		},
		methods:{
			onChange(e){
				this.tab = e
			},
			//判断是否点赞
			zan(){
				
			}
		}
	}
</script>

<style scoped lang="scss">
@import '../../common/style/news.scss'
</style>
