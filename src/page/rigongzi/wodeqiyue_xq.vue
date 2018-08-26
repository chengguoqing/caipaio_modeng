<!--契约详情-->
<template>
	<div >
	<section class="sd_jh_df mui-row pr cen ">
	
	    <section class="df_jh_deer w100">
	        <span> 契约详情</span>
	    </section>
	    <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)" />
	
	
	</section>
	
	<section class="dsf_jh_deer">
	   <van-notice-bar :scrollable="false">
  与上级签订日工资契约，全力保障您的代理日工资！
</van-notice-bar>
        
        <van-cell-group class="mt10">
            <van-cell title="契约状态" value="契约已签订" />
             <van-cell title="金额起算日期" value="2018-06-15" />
             <van-cell title="契约日期" value="2018-06-15" />
        </van-cell-group>
        <p class="pt10 pm10 pd z9 fz14">计算日工资规则</p>
        <section class="pd pt10 pm10 bgff mui-row">
                <section class="mui-col-xs-3  fz14 z9 mt20">规则一</section>
            <section class="ov ">
                    <section class="qc fz14">
                        日投金额=><span class="ye">1元</span>
                        <span class="fr">日工资</span>
                    </section>
                     <section class="qc fz14">
                        活跃人数=><span class="ye">1人</span>
                        <span class="fr ye">1.4%</span>
                    </section>
                     <section class="qc fz14">
                        亏损金额=><span class="ye">无</span>
                    </section>
                
            </section>
    
        </section>
        
        <p class="fz12 z9 cen mt20">
                请详细阅读 <span @tap="hf('qiyuesm')"><ins class="ls">契约免责声明</ins></span>
        </p>
        
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
