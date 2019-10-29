<template>
	<view class="member">
		<navbar :titleName="titleName"></navbar>
		
		
		
	</view>
</template> 

<script>
	import navbar from '../../components/navbar/navbar.vue'
	export default {
		components:{navbar},
		data(){ 
			return{
				titleName:'我的会员',
				
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped lang="scss">
	
</style>
