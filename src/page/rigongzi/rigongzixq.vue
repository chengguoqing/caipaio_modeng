<template>
	<div >
	<section class="sd_jh_df mui-row pr cen ">
	
	    <section class="df_jh_deer w100">
	        <span>{{type_r==1?'私返':'日工资'}} 详情 </span>
	    </section>
	    <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)" />
	
	
	</section>
	
	<section class="dsf_jh_deer ">
	   <van-cell-group class="mt10">
	       <van-cell :title="type_r==1?'私返日期':'日工资日期'" value="2018-08-25" />
	   </van-cell-group>
        
        
           <van-cell-group class="mt10">
	       <van-cell title="日投注额" value="0" />
        <van-cell >
            <p class="z3">活跃人数 <span class="fr">0</span></p>
            <p class="fz12">当日累计有效投注金额=>1000元的用户人数，计位活跃人数</p>
    </van-cell>
                 <van-cell  :title="type_r==1?'私返比例':'日工资比例'" value="0%" />
	   </van-cell-group>
        
          <van-cell-group class="mt10">
                      <van-cell >
            <p class="z3">{{type_r==1?'私返':'日工资'}}金额 <span class="fr ye">0</span></p>
            <p class="fz12">当日团队投注金额和活跃人数 未符合契约规则</p>
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
                type_r:0
            }
        },
        components: {

        },
        methods: {

        },
        mounted() {
            this.type_r=this.$route.query.type_r 
        },
    }

</script>
<style scoped>


</style>
