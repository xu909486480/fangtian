<template>
	<view class="houselist">
		<headnav :share="share" v-if="isheadnav"></headnav>
		<sort :sort="sort" v-if="issort"></sort>
		<alltab :alltab="alltab" v-if="isalltab"></alltab>
		<detail :list="detail_list" v-if="isdetail"></detail>
	</view>
</template>

<script>
	import headnav from '../../components/headnav/headnav.vue'
	import sort from '../../components/sort/sort.vue'
	import alltab from '../../components/alltab/alltab.vue'
	import detail from '../../components/detail/detail.vue'
	export default {
		components:{headnav,sort,alltab,detail},
		props:{
			isheadnav:{
				type:Boolean,
				default:true
			},
			issort:{
				type:Boolean,
				default:true
			},
			isalltab:{
				type:Boolean,
				default:false
			},
			isdetail:{
				type:Boolean,
				default:true
			}
		},
		data() {
			return {
				share:'../../static/newdetail_icon6.png',
				alltab:[
				{text:'销量'},
				{text:'关注'},
				{text:'热门新榜'},
				{text:'热门新榜'}], 
				sort:[
				{text:'区域'},
				{text:'价格'},
				{text:'户型'},
				{text:'筛选'},
				{text:'排序'},
				],
				detail_list: [{
					"img": "../../static/index_list1.png",
					"line1": "新出松柏二小精装大三房的撒多撒多阿萨德",
					"price": 615
				},
				{
					"img": "../../static/index_list1.png",
					"line1": "厅带阳台朝南，南北通透的萨达萨达暗示的撒",
					"price": 720
				}],
			}
		},
		methods:{
			homeSearch(){
				uni.navigateTo({
					url:'../../components/search/search'
				})
			}
		}
	
}
</script>

<style scoped lang="scss">
	@import '../../common/style/houselist.scss'
</style>
