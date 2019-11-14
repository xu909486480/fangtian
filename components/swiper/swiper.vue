<template>
	<view class="swiper">
		<swiper class="swiper" indicator-dots autoplay interval="4000" duration="300" indicator-active-color="#ffffff"
		 indicator-color="rgba(0, 0, 0, .5);" :style="{height:styleheight + 'rpx'}">
			<swiper-item v-for="(item,index) in swiper" :key="index">
				<view class="swiper-item">
					<image :src="item.img" :style="{width:swiperImgWidth + 'rpx',height:swiperImgHeight + 'rpx'}"></image>
				</view> 
			</swiper-item>
		</swiper>
	</view>
</template> 

<script>
	export default {
		name:'swiper',
		props:{ 
			swiper:Array,
			styleheight:{
				type:Number,
				default:240
			},
			swiperImgWidth:{
				type:Number,
				default:686
			},
			swiperImgHeight:{
				type:Number,
				default:240
			}
		},
		data(){
			return{
				
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped lang="scss">
	.swiper {
		text-align: center;
		height: 260rpx;
		.swiper-item {
			image{
				border-radius:20rpx;
			}
		}
	}
</style>
