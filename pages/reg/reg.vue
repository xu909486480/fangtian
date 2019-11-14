<template>
	<view class="reg">
		<navbar :titleName="titleName"></navbar>
		<view class="reg_all">
			<view class="all_tel">
				<input type="number"
				 value="" 
				 v-model="username" 
				 placeholder="请输入手机号" 
				 maxlength="11"
				 focus
				 @focus="isFocus"
				 />
			</view>
			<view class="all_code">
				<input type="number" 
				 value=""
				 v-model="code" 
				 placeholder="请输入验证码"
				 maxlength="6"
				 @focus="isFocus"
				 />
				 <button @tap="yzTap"
				 :disabled="disabled"
				 >{{codename}}</button>
				<!-- <text @tap="yzTap">{{codename}}</text> -->
			</view>
			<view class="all_num">
				<input type="number"
				 value="" 
				 placeholder="请输入推荐人手机号（选填）" 
				 v-model="rec_phone" 
				 maxlength="11"
				 @focus="isFocus"
				 />
			</view>
			<view class="all_error" v-if="istext">
				<image src="../../static/login_icon1.png"></image>
				<text>{{textMsg}}</text>
			</view>
		</view>
		<view class="reg_xia">
			<view class="xia_t" @tap="nextTap">
				<text>下一步</text>
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
				titleName:'注册',
				username:'',  //手机号
				code:'',	  //验证码
				rec_phone:'', //推荐人手机号
				textMsg:'',
				istext:false, 		   //判断是否输入正确提示
				codename:'获取验证码',  //验证码
				disabled:false,
			}
		},
		methods:{
			// 点击获取验证码
			yzTap(){
				// 获取验证码api接口
				uni.request({
					url:'http://192.168.0.101:802/api/Sms/send',
					method:'POST',
					data:{
						mobile:this.username
					},
					success: (res) => {
						console.log(res.data,'成功');
					}
				})
				if(this.username != ''){
					this.disabled = true
					// var that = this;  this指向
					let num = 61;
					let timer = setInterval(()=>{
						num--;
						if(num <= 0){
							this.disabled = false
							this.codename = '重新发送'
							clearInterval(timer)
						}else{
							this.codename = num + 's'
							console.log(this.codename)
						}
					},1000)
				}
			},
			// 点击下一步
			nextTap(){
				
				
				// uni.request({
				// 	url: 'http://192.168.0.101:802/api/user/register',
				// 		method:'POST',
				// 		data:{
				// 			mobile:this.username,
				// 			code:this.code,
				// 			rec_phone:this.rec_phone
				// 		},
				// 		success: (res) => {
				// 			if(res.data.code == 0){
				// 				this.textMsg = res.data.msg
				// 				this.istext = true
				// 				console.log(res,'成功');
				// 			}
				// 			if(res.data.code == 1){
				// 				this.istext = false
				// 				uni.navigateTo({
				// 					url:'../setcode/setcode'
				// 				})
				// 			}
				// 		}
				// })
			},
			isFocus(){
				this.istext = false
			}
		}
	}
</script>

<style scoped lang="scss">
	.reg{
	}
	.reg_all{
		padding: 0 32rpx;
		.all_tel{
			font-size: 30rpx;
			border-bottom: 2rpx solid #F5F5F5;
			padding: 20rpx 0;
			input{
				placeholder-color: #CCCCCC;
			}
		}
		.all_code{
			border-bottom: 2rpx solid #F5F5F5;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20rpx 0;
			font-size: 30rpx;
			input{
				placeholder-color: #CCCCCC;
			}
			button{
				width: 200rpx;
				margin-right: 0;
				border: none;
				text-align: center;
				height: 60rpx;
				font-size:30rpx;
				color:rgba(102,102,102,1);
				line-height:60rpx;
			}
			text{
				font-size:30rpx;
				color:rgba(102,102,102,1);
				line-height:42rpx;
			}
		}
		.all_num{
			font-size: 30rpx;
			border-bottom: 2rpx solid #F5F5F5;
			padding: 20rpx 0;
			input{
				placeholder-color: #CCCCCC;
			}
		}
		
		.all_error{
			display: flex;
			margin: 20rpx 0;
			align-items: center;
			image{
				width: 30rpx;
				height: 30rpx;
			}
			text{
				margin-left: 10rpx;
				font-size:26rpx;
				color:rgba(255,60,60,1);
				line-height:36rpx;
			}
		}
	}
	
	.reg_xia{
		padding: 0 32rpx;
		
		.xia_t{
			height:90rpx;
			background:linear-gradient(225deg,rgba(245,102,7,1) 0%,rgba(247,156,0,1) 100%);
			border-radius:45rpx;
			text-align: center;
			text{
				font-size:34rpx;
				color:rgba(255,255,255,1);
				line-height:90rpx;
			}
		}
		
	}
</style>
