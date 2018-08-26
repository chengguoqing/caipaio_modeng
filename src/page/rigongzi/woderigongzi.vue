<!--我的日工资-->
<template>
	<div >
	
<section class="sd_jh_df mui-row pr cen ">

    <section class="df_jh_deer w100">
        <span>我的日工资 </span>
    </section>
    <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)" />


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
    
    <section class="pd">
            <van-cell-group class="mt10" v-for="sd in 10">
                <van-cell>
                    <span class="z9">2018-08-24</span>
    </van-cell>
        <van-cell  is-link to="rigongzixq">
            <section class="mui-row">
                <section class="mui-col-xs-6 z3">
                <span class="z9">金额</span> 0.00
            </section>
                <section class="mui-col-xs-6 z3">
                <span class="z9">状态</span> 已发放
            </section>
        </section>            
    </van-cell>
            </van-cell-group>
            
    
    </section>
     
    
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
            tishi(title, msg) {
                this.$dialog.alert({
                    title: title,
                    message: msg
                }).then(() => {
                    // on close
                });
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .sdf_jh_de {
        border-top: 1px dashed #e0e0e0;
    }

</style>
