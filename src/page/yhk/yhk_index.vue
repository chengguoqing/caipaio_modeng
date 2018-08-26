<!--绑定银行卡-->
<template>
	<div >
	<section class="sd_jh_df mui-row pr cen ">
	
	    <section class="df_jh_deer w100">
	        <span> 绑定银行卡</span>
	    </section>
	    <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)" />
	
	
	</section>
	
	<section class="dsf_jh_deer">
	   <section class=" pt10 dsf_drrt">
        <section class="dsf_jh_er_rrt">
            <i class="dx icon-chongzhi1 sd_jh_dfrt cz"></i>
            <span class="fz20 cz ml10 b z6">绑定银行卡</span>
        </section>
                
        </section>
        
        
        <section class="dsf_erjh_deer">
            <p>1、每个账户最多可绑定5张银行卡<br>
            2、如需解绑请联系在线客服<br>
                3、在首次新增银行卡 1小时之后，非首次新增银行卡 1小时之后，新卡才可以提现
        </p>
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

        },
        mounted() {
window.scrollTo(0,0);
        },
    }

</script>
<style scoped>
    .dsf_drrt{
        width: 300px;
        margin: auto;
        min-height: 500px;
    }
    .dsf_jh_er_rrt{
        border-radius: 8px;
        border: 4px solid #DADADA;
        padding: 20px;
        background: #fff;
        line-height: 80px
    }
    .sd_jh_dfrt{
        font-size: 60px;
        color: #DADADA
    }
    .dsf_erjh_deer{
        width: 300px;
        margin: auto;
    }

</style>
