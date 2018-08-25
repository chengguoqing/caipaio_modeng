<!--推广二维码-->
<template>
	<div >
	<section class="sd_jh_df mui-row pr cen ">
	
	    <section class="df_jh_deer w100">
	        <span>推广二维码 </span>
	    </section>
	    <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)" />
	
	    <i class="dx icon-shaixuan cf sd_jh_eert fz20"  @tap="is_sx_d=true"></i>
	</section>
	
	<section class="dsf_jh_deer">
	
	</section>
        
        
        <p class="pd pt5 pm5 g_deertt bgff btm">
            <button class="mui-btn-red w100 fz16 ht100" @tap="hf('add_qr')">添加二维码</button>
        </p>

        <myjl></myjl>
         <suxuan_er v-if="is_sx_d" @closer="is_sx_d=false"></suxuan_er>
	</div>
</template>
<script>
    import myjl from "../components/myjl"
    import suxuan_er from "../components/suxuan_er"
    export default {
        data() {
            return {
                is_sx_d:false
            }
        },
        components: {
            myjl,
            suxuan_er
        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style scoped>
    .g_deertt{
        position: fixed;
        left: 0px;
        bottom: 0px;
        z-index: 1000;
        
        width: 100%;
    }

</style>
