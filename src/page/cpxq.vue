<!--彩票详情-->
<template>
	<div >
	<section class="sd_jh_df mui-row pr cen ">
	
	    <section class="df_jh_deer w100">
	        <span>彩票详情 </span>
	    </section>
	    <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)" />
	
	
	</section>
	
	<section class="dsf_jh_deer">
	<van-cell-group class="mt10">
	    <van-cell :title="type_r>1?'会员名称':'团队名称'" value="tiangong" v-if="type_r>0">
            <span v-if="type_r==2">          o665p <i class="dx icon-weixinliaotian ls cz"></i></span>
    </van-cell>
        
            <van-cell title="名称" value="tiangong" v-if="type_r<=0"/>
            <van-cell title="时间" value="2018-08-25至2018-08-25" />
	</van-cell-group>
        
        	<van-cell-group class="mt10">
	    <van-cell title="投注" value="0.0000" />
          <van-cell title="中奖" value="0.0000" />
                  <van-cell title="返点" value="0.0000" />
                  <van-cell title="会员活动" value="0.0000" />
                  <van-cell title="代理活动" value="0.0000" />
                  <van-cell title="盈亏" value="0.0000" />
	</van-cell-group>
        
        <van-cell-group v-if="type_r==-1" class="mt10">
            <van-cell title="当前总活跃人数" value="0" />
        </van-cell-group>
        
        
        <p class="pd mt10 fz14 z9">
                温馨提示：仅保持最近35天的数据
        </p>
            
        
	</section>
         
        
        <section v-if="type_r>1" class="btm dsf_h_dre pt5 pm10 btm pd bgff">
            <a class="mui-btn mui-btn-red w100 fz16 h100" @tap="hf('touzhu?type=1')">查看投注记录</a>
        </section>

	</div>
</template>
<script>
    export default {
        data() {
            return {
                type_r: 0
            }
        },
        components: {

        },
        methods: {

        },
        mounted() {
            this.type_r = this.$route.query.type_r
        },
    }

</script>
<style scoped>
 

</style>
