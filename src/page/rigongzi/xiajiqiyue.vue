<!--下级契约-->
<template>
	<div >
	<section class="sd_jh_df mui-row pr cen ">
	
	    <section class="df_jh_deer w100">
	        <span> 下级契约</span>
	    </section>
	    <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)" />
	    <i class="dx icon-shaixuan cf sd_jh_eert fz20"  @tap="is_sx_d=true"></i>


	
	</section> 
	 
	<section class="dsf_jh_deer">
         <section class="pd">
            <van-cell-group class="mt10" v-for="sd in 10">
                <van-cell>
                    <span class="z9">o665p</span>
    </van-cell>
        <van-cell  is-link to="qiyue_xq">
            <section class="mui-row">
                <section class="mui-col-xs-6 z3">
                <span class="z9">创建时间</span> 2018-08-26
            </section>
                <section class="mui-col-xs-6 z3">
                <span class="z9">契约状态</span> 已签订
            </section>
        </section>            
    </van-cell>
            </van-cell-group>
            
    
    </section>
        
        
	<myjl v-if="false"></myjl>
	</section>
        
        
               <section  class="btm dsf_h_dre pt5 pm10 btm pd bgff">
            <a class="mui-btn mui-btn-red w100 fz16 h100" @tap="hf('cjqy')">创建日工资契约</a>
        </section>
 <suxuan v-if="is_sx_d" @closer="is_sx_d=false" time_name="创建日期" type_r="6"></suxuan>
 
	</div>
</template>
<script> 
    import myjl from "../../components/myjl"
        import suxuan from "../../components/suxuan"
    export default {
        data() {
            return {
 is_sx_d:false
            }
        },
        components: {
            myjl,
            suxuan
        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style scoped>


</style>
