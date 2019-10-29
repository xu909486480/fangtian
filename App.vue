<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style scoped>
	/*每个页面公共css */
	@import './common/uni.css';
	@import "/wxcomponents/vant/dist/common/index.wxss";
</style>
