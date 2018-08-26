<!--下级日工资-->
<template>
	<div >
	<section class="sd_jh_df mui-row pr cen ">
	
	    <section class="df_jh_deer w100">
	        <span> 下级日工资</span>
	    </section>
	    <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)" />
	    <i class="dx icon-shaixuan cf sd_jh_eert fz20"  @tap="is_sx_d=true"></i>

 
	 
	</section>
	
	<section class="dsf_jh_deer">
	   <section class="bgff">
         <p class="pd pt10 pm10">07-27至08-26</p>
       <section class="mui-row pt10 pm10 sdf_jh_de">
                <section class="mui-col-xs-6 brm cen fz13 z9">
                    已收日工资：<i class="dx icon-wenhao cz" @tap="tishi('已收日工资','搜索日期范围内，累计收到的工资总额')"></i>
                    <p class="mt5 z3">0.00</p>
                </section>
            <section class="mui-col-xs-6  cen fz13 z9">
                    待发日工资：<i class="dx icon-wenhao cz" @tap="tishi('待发日工资','搜索日期范围内，代理累计需要支付下级代理账户的日工资总额。该金额用于发放下级代理日工资，所以不用于投注、上下级转账以及提现操作')"></i>
                    <p class="mt5 z3">0.00</p>
                </section>
        </section>
    </section>
        <myjl></myjl>
        
        
        
	</section>
        
        <section class="dsf_bottme pd w100 btm">
            <van-checkbox v-model="checked" class="cz fz14 z9 f_b">全选</van-checkbox>
            <section class="f_b dsf_dfrttxd cz">
                <span class="fz14">总金额 0.00</span>
                <p class="z3">总人数:0</p>
            </section>
            <section class="dsf_kjjert">
                <button class="bghs cf fz14">批量发放</button>
                <p class="fz12 cen mt5">余额0.9465</p>
            </section>
    </section>
        
        
 <suxuan v-if="is_sx_d" @closer="is_sx_d=false" time_name="日工资周期" type_r="7"></suxuan>
 
	</div>
</template>
<script>
    import myjl from "../../components/myjl"
    import suxuan from "../../components/suxuan"
    export default {
        data() {
            return {
                is_sx_d: false,
                checked:false
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
    .sdf_jh_de {
        border-top: 1px dashed #e0e0e0;
    }

    .dsf_bottme {
        position: fixed;
        left: 0px;
        bottom: 0px;
        z-index: 100;
        background: #fff;
        height: 55px;
        line-height: 55px;
    }
    .dsf_dfrttxd{
        line-height: 1.2;
        padding-top: 0px;
        padding-left: 10px;
    }
    .dsf_kjjert{
        position: absolute;
        right: 10px;
        top: 5px;
        height: 100%;
        line-height: 1.2
    }
</style>
