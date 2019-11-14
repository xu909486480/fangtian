<template>
	<view class="address">
		<view class="address_head" ref="name">
			<view class="head_left" @tap="backout">
				<image src="../../static/bridal_icon1.png"></image>
			</view>
			<view class="head_center">
				<input type="text" placeholder="请输入城市名" focus />
				<image src="../../static/index_icon3.png"></image>
			</view>
		</view>
		<view class="main_t">
			<view class="t_h3">
				<text>定位 / 推荐</text>
			</view>
			<view class="t_list">
				<view class="" v-for="(item,index) in tzList"
					:key="index"
				>
					<image src="../../static/newdetail_icon9.png" mode=""></image>
					<text>{{item.text}}</text>
				</view>
			</view>
		</view>
		
		<view class="main_t">
			<view class="t_h3 title">
				<text>历史记录</text>
			</view>
			<view class="t_list">
				<view class="" v-for="(item,index1) in lsList"
					:key="index1"
				>
					<text>{{item.text}}</text>
				</view>
			</view>
		</view>
		
		<view class="main_t after">
			<view class="t_h3 title">
				<text>热门</text>
			</view>
			<view class="t_list">
				<view class="" v-for="(item,index2) in rmList"
					:key="index2"
					@tap="rmListTap(item)"
					>
					<text>{{item.city_name}}</text>
				</view>
			</view>
		</view>
		
				<!-- 第一层循环 -->
		<view class="main_list" v-for="(item,index3) in AaList"
			:key="index3">
			<view class="list_site" id="list_site">
				<text>{{index3}}</text>
			</view>
				<!-- 第二层循环 -->
			<view class="list_txt">
				<view class="" v-for="(item1,index4) in item"  
				:key="index4"
				>
					{{item1.name}}
				</view>
			</view>
		</view>
		
		<!-- 侧边导航 -->
		<view class="tab_list">
			<view :class="{'active':tab==index5}" v-for="(item,index5) in tabList" :key="index5"
			@tap="tabListTap(index5)"
			>
				{{item.text}}
			</view>
		</view>
		
	</view>
</template>
 
<script>
	export default {
		data(){
			return{
				tab:1,
				rmList:[],
				AaList:{},
				tzList:[
					{text:'厦门'},{text:'海口'},{text:'泉州'},{text:'泉州'}
				],
				lsList:[
					{text:'泉州'}
				],
				tabList:[
					{text:'A'},{text:'B'},{text:'C'},{text:'D'},{text:'E'},{text:'F'},
					{text:'E'},{text:'F'},{text:'G'},{text:'H'},{text:'E'},{text:'F'},
					{text:'A'},{text:'B'},{text:'C'},{text:'D'},{text:'E'},{text:'F'}
				]
			}
		},
		
		onLoad() {
			this.getCityListApi()
			this.getSearchApi()
			this.getPopularCityApi()
		},
		methods:{
			backout(){
				uni.navigateBack({})
			},
			
			getCityListApi(){
				var that = this;
				uni.request({
					url:'http://shop_api.fang-tian.com/api_fang/house/getCityList',
					methods:'POST',
					success(res) {
						that.AaList = res.data.data
						console.log(that.AaList)
					}
				})
			},
			// 历史搜索
			getSearchApi(){
				var that = this;
				uni.request({
					url:'http://shop_api.fang-tian.com/api_fang/house/SearchOld',
					methods:'POST',
					data:{type:6},
					success(res) {
						// console.log(res)提示类型不能为空
						that.lsList = res.data.data
					}
				})
			},
			// 获取热门城市
			getPopularCityApi(){
				var that = this;
				uni.request({
					url:'http://shop_api.fang-tian.com/api_fang/house/getPopularCity',
					methods:'POST',
					success(res) {
						that.rmList = res.data.data
						console.log(that.rmList)
					}
				})
			},
			tabListTap(index5){
				this.tab = index5
				
			const query = uni.createSelectorQuery().in(this);
			query.selectAll('#list_site').boundingClientRect(data => {
			  data[index5].top = 0
			  console.log(data[index5].scrollTop)
			}).exec();
			// const query = uni.createSelectorQuery().in(this);
			// query.selectAll('#list_site').node(data => {
			//   console.log(data)
			// }).exec();
			
			
			// let view = uni.createSelectorQuery().select("#list_site");
			// view.boundingClientRect(data => {
			//   console.log(data[index5].top);
			// }).exec();
			
			// view.fields({
			//   size: true,
			//   scrollOffset: true,
			//   context:true,
			//   id:true,
			//   dataset:true,
			//   properties:Array,
			//   computedStyle:Array
			// }, data => {
			//   console.log(data);
			// }).exec();
			},
			rmListTap(item){
				let cityCode = item.city
				let cityName = item.city_name
				uni.reLaunch({
					url:'../index/index'
				})
				uni.setStorage({
				    key: 'cityCode',
				    data: {code:cityCode,name:cityName}
				});
				
			}
			
		}
	}
</script>

<style scoped lang="scss">
	.address{
		background: #F5F5F5;
	}
	.address_head {
		padding:0 32rpx 30rpx;
			display: flex;
			background: #FFFFFF;
			justify-content: space-between;
			box-sizing: border-box;
			.head_left {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-top: 8rpx;
				image {
					width: 22rpx;
					height: 40rpx;
				}
			}
			.head_center {
				margin-top:4rpx;
				padding: 0 20rpx;
				position: relative;
				input {
					box-sizing: border-box;
					width: 624rpx;
					height: 72rpx;
					background: rgba(245, 245, 245, 1);
					border-radius: 36rpx;
					padding-left: 80rpx;
					font-size:30rpx;
					
					color:rgba(153,153,153,1);
					line-height:42rpx;
				}
				image {
					width: 30rpx;
					height: 30rpx;
					position: absolute;
					top: 22rpx;
					left: 50rpx;
				}
			}
		}	
		
		.main_t{
			background: #FFFFFF;
			padding-left: 32rpx;
			.t_h3{
				text{
					font-size:26rpx;
					color:rgba(153,153,153,1);
					line-height:36rpx;
				}
			}
			.t_list{
				display: flex;
				flex-wrap: wrap;
				view{
					width:200rpx;
					height:60rpx;
					background:rgba(245,245,245,1);
					border-radius:4rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					margin-right: 20rpx;
					margin-top: 20rpx;
					
					image{
						width: 30rpx;
						height: 30rpx;
						margin-right: 10rpx;
					}
					text{
						font-size:30rpx;
						color:rgba(25,25,25,1);
						line-height:42rpx;
					}
				}
			}
		}
		.title{
			padding-top: 20rpx;
		}
		.after{
			padding-bottom: 20rpx;
		}
		
		.main_list{
			.list_site{
				width:750rpx;
				height:40rpx;
				background:rgba(245,245,245,1);
					line-height:36rpx;
				text{
					margin-left: 32rpx;
					font-size:26rpx;
					color:rgba(102,102,102,1);
				}
			}
			.list_txt{
				background:#FFFFFF;
				view{
					width:640rpx;
					padding: 14rpx 0;
					margin-left: 32rpx;
					border-bottom: 2rpx solid #F5F5F5;
					font-size:30rpx;
					color:rgba(25,25,25,1);
				}
				view:last-child{
					border-bottom: 0;
				}
			}
		}
		
		.tab_list{
			width: 32rpx;
			text-align: center;
			height: 832rpx;
			position: fixed;
			right:34rpx;
			top: 0;
			bottom: 0;
			margin: auto 0;
			
			view{
				line-height: 32rpx;
				font-size:22rpx;
				font-weight:500;
				color:rgba(25,25,25,1);
			}
			.active{
				width:32rpx;
				height:32rpx;
				background:rgba(250,100,0,1);
				border-radius: 100%;
			}
		}
</style>
