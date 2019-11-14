<template>
	<view class="assess">
		<view class="assess_head">
			<image src="../../static/bridal_icon1.png"></image>
			<text>房屋估价</text>
			<text>记录</text>
		</view>
		<view class="issue_t">
			<view class="t_rent">
				<view class="rent_l">
					<text>小区名称</text>
				</view>
				<view class="rent_r">
					<input type="text" value="" placeholder="请输入"/>
					<image src="../../static/issue_icon.png" mode=""></image>					
				</view>
			</view>
			<view class="t_rent">
				<view class="rent_l">
					<text>面积㎡</text>
				</view>
				<view class="rent_r">
					<input type="text" value="" placeholder="请输入"/>
					<image src="../../static/issue_icon.png" mode=""></image>					
				</view>
			</view>
			<view class="t_area">
				<view class="area_l">
					<text>户型</text>
				</view>
				<view class="area_r">
					<input type="text" value="" placeholder="请输入"/>
					<image src="../../static/newdetail_icon1.png" mode=""></image>					
				</view>
			</view>
			<view class="t_area">
				<view class="area_l">
					<text>朝向</text>
				</view>
				<view class="area_r" @tap="showPopup">
					<input type="text" value="" v-model="chaoXiang" placeholder="请输入"/>
					<image src="../../static/newdetail_icon1.png" mode=""></image>					
				</view>
			</view>
			<view class="t_all">
				<view class="all_l">
					<text>朝向</text>
				</view>
				<view class="all_r">
					<input type="text" value="" placeholder="请输入"/>
					<text>-层</text>
					<input type="text" value="" placeholder="请输入"/>
					<text>-总层数</text>
					<image src="../../static/issue_icon.png" mode=""></image>					
				</view>
			</view>
		</view>
		
		<view class="assess_c">
			<view class="c_txt">
				<text>以下选填项（完善信息有助于提高估价准确性）</text>
			</view>
			<view class="c_list">
				<view class="list_txt">
					<text>装修类型</text>
				</view>
				<view class="list_tab">
					<block v-for="(item) in zxList" :key="item.Id">
						<text>{{item.name}}</text>
					</block>
				</view>
			</view>
			<view class="c_list">
				<view class="list_txt">
					<text>额外面积</text>
				</view>
				<view class="list_tab">
					<text>有</text>
					<text>无</text> 
					<text>不清楚</text>
				</view>
			</view>
			<view class="c_txt">
				<text>估价结果由房田大数据海量提供</text>
			</view>
			<view class="c_btn">
				<text>查看估价结果</text>
			</view>
		</view>
		
		<van-popup
		  :show="show"
		  round
		  position="bottom"
		  custom-style="height: 600rpx"
		  @close="onClose"
		>
			<van-picker
			  show-toolbar
			  title="朝向"
			  :columns=" columns "
			  @cancel="onCancel"
			  @confirm="onConfirm"
			></van-picker>
		</van-popup>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				zxList:[],
				show: false,
				columns:[],
				chaoXiang:''
			}
		},
		onLoad() {
			this.getAssessApi()
		},
		methods:{
			getAssessApi(){
				var that = this;
				uni.request({
					url:'http://shop_api.fang-tian.com/api_fang/house/getEvaluationParam',
					method:'POST',
					success(res) {
						that.zxList = res.data.data.zhuangxiu
						let chaox = res.data.data.chaoxiang
						let arr = []
						for(let i=0;i<chaox.length;i++){
							arr.push(chaox[i].name)
						}
						that.columns = arr
					}
				})
			},
			// 朝向
			showPopup() {
			   this.show=true
			},
			onClose() {
			   this.show=false
			},
			 onConfirm(e) {
			    const { value, index } = e.detail;
				this.chaoXiang = e.target.value
				this.show=false
			  },
			
			  onCancel() {
				this.show=false
			  }
			
		}
	}
</script>

<style scoped lang="scss">
	@import '../../common/style/assess.scss'
</style>
