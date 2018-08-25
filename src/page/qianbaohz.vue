<!--钱包互转-->

<template>
	<div >
        <section class="sd_jh_df mui-row pr cen ">
        
            <section class="df_jh_deer w100">
                
                             <span > 提现记录
                    
                    </span>
                      <i class="dx icon-shaixuan cf sd_jh_eert fz20"  @tap="is_sx_d=true"></i>


                
                 
            </section>
            <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)" />
        
         
        </section>
        
        <section class="dsf_jh_deer">
                
           
          
          
        </section> 
	 <suxuan v-if="is_sx_d" @closer="is_sx_d=false" time_name="转账日期" type_r="4"></suxuan>
 <myjl></myjl>
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
