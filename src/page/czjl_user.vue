<!--充值记录-->
<template>
	<div >
        <section class="sd_jh_df mui-row pr cen ">
        
            <section class="df_jh_deer w100">
                
                             <span > 充值记录
                    
                    </span>
                      <i class="dx icon-shaixuan cf sd_jh_eert fz20"  @tap="is_sx_d=true"></i>


                
                 
            </section>
            <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)" />
        
        
        </section>
        
        <section class="dsf_jh_deer">
                
          
                <van-cell-group v-for="sd in 5" class="mt10">
                    <van-cell title="2018-08-21 22:56:39"  class="z9 "/>
                    <van-cell title="金额：100"  value="订单状态：待处理" is-link to="czxq" />
                </van-cell-group>
          
        </section>
	 <suxuan v-if="is_sx_d" @closer="is_sx_d=false" time_name="充值时间" type_r="3"></suxuan>
 <myjl v-if="false"></myjl>
	</div>
</template> 
<script>
    import myjl from "../components/myjl"
       import suxuan from "../components/suxuan"
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
