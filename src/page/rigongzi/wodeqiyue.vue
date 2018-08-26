<!--我的契约-->
<template>
	<div >
	<section class="sd_jh_df mui-row pr cen ">
	
	    <section class="df_jh_deer w100">
	        <span> 我的契约</span>
	    </section>
	    <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)" />
	
	
	</section>
	
	<section class="dsf_jh_deer">
	
        <section class="pd pt10 pm10">
                <section class="yj4 bgff" @tap="hf('wodeqiyue_xq?type_r='+type_r)">
                    <section class="pd">
                        <p class="z3 pt10 pm10 fz16">
                            <span v-if="type_r==0">日工资</span> 
                               <span v-if="type_r==1">分红</span> 
                              <span v-if="type_r==2">私返</span> 
                            契约 <span class="ye">契约已签订</span>
                        </p>
                        <p class="z9 fz14">
                            金额计算日期 2018-06-15 
                        </p>
                            <p class="z9 fz14 mt5">
                            契约签订日期 2018-06-15
                        </p>
                    </section>
                    <section class="ds_jh_det   mt10 pt10 pd mui-row pm10">
                        <p class="mui-col-xs-3">规则一</p>
                        <p class="z3 ov">
                    日投金>=1元，活跃人数>=,亏损金额>=无,日工资：1.4%
                    </p>
                    </section>
                    
                    <section class="pd pt10 pm10 z9 fz14" >
                        查看详情 <i class="dx icon-right fz14 fr"></i>
                    </section>
                    
    
                </section>
        </section>
        
	</section>

	</div>
</template>
<script>
    export default {
        data() {
            return {
                type_r: 0
            }
        },
        components: {

        },
        methods: {

        },
        mounted() {
                this.type_r=  this.$route.query.type_r
        },
    }
      

</script>
<style scoped>
    .ds_jh_det {
        border-top: 1px dashed #e0e0e0;
        border-bottom: 1px dashed #e0e0e0;
    }

</style>
