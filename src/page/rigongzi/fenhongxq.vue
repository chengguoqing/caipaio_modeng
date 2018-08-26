<template>
	<div >
	<section class="sd_jh_df mui-row pr cen ">
	
	    <section class="df_jh_deer w100">
	        <span>分红详情 </span>
	    </section>
	    <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)" />
	
	
	</section>
	
	<section class="dsf_jh_deer ">
	   <van-cell-group class="mt10">
	       <van-cell title="工资日期" value="2018-08-25" />
	   </van-cell-group>
        
        
           <van-cell-group class="mt10">
	       <van-cell title="日均投注额" value="0" />
        <van-cell >
            <p class="z3">半月亏损额 <span class="fr">0</span></p>
            <p class="fz12">本周期，您的团队的累计亏损金额</p>
    </van-cell>
               
               
               
               <van-cell >
            <p class="z3">活跃人数 <span class="fr">0</span></p>
            <p class="fz12">当日累计有效投注金额=>1000元的用户人数，计位活跃人数</p>
    </van-cell>
               
               
                 <van-cell title="分红比例" value="0%" />
	   </van-cell-group>
        
          <van-cell-group class="mt10">
                      <van-cell >
            <p class="z3">分红金额 <span class="fr ye">0</span></p>
            <p class="fz12">(中奖+返点+活动+投注)x分红比例</p>
    </van-cell>
               <van-cell title="状态" value="已发放" />
    </van-cell-group>
        
	</section>

        
             <section  class="btm dsf_h_dre pt5 pm10 btm pd bgff">
            <a class="mui-btn mui-btn-red w100 fz16 h100" @tap="hf('wodeqiyue_xq')">查看契约详情</a>
        </section>
	</div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        components: {

        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style scoped>


</style>
