<!--添加规则-->
<template>
	<div >
	<section class="sd_jh_df mui-row pr cen ">
	
	    <section class="df_jh_deer w100">
	        <span> 添加规则</span>
	    </section>
	    <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)" />
	
	
	</section>
	
	<section class="dsf_jh_deer">
	       <p class="pt10 pm10 cen fz16 bgff z3 bbm">规则一</p>
        <p class="pd pt10 pm10">日工资条件</p>
               <form class="mui-input-group ">
            <div class="mui-input-row dsf_sdd_dr ab">
                <label>日投注额(元)>=</label>
                <p class="ov">
               <input type="text" class="mui-input-clear" placeholder="请输入">
                    </p>
                <p class="qc  pl15 pm10 fz12">
                当日您的团队总投注金额
                </p>
     
            </div>
                   
                    <div class="mui-input-row dsf_sdd_dr ab">
                <label>活跃人数(人)>=</label>
                <p class="ov">
               <input type="text" class="mui-input-clear" placeholder="请输入">
                    </p>
                <p class="qc  pl15 pm10 fz12">
                当日累计有效投注金额=>1000元的用户人数，计位活跃人数
                </p>
     
            </div>
                   
                            <div class="mui-input-row dsf_sdd_dr ab">
                <label>亏损金额(元)>=</label>
                <p class="ov">
               <input type="text" class="mui-input-clear" placeholder="请输入">
                    </p>
                <p class="qc  pl15 pm10 fz12">
              您团队的当日累计亏损金额<span class="red">(不输入代表"我要求")</span>
                </p>
     
            </div>
                   
                    
                   
                   
                 
        </form>
        
         <p class="pd pt10 pm10">日工资比例</p>
           <form class="mui-input-group ">
            <div class="mui-input-row dsf_sdd_dr  ">
                <label>日工资(元/万)>=</label>
                <p class="ov">
               <input type="text" class="mui-input-clear" placeholder="请输入">
                    </p>
             
     
            </div>
    </form>
        
        <p class="mt30 pd">
            <button class="fz16 pt10 pm10 w100 mui-btn-red">保存规则</button>
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
    .dsf_sdd_dr.ab{
        height: auto  !important;
    }
    .dsf_sdd_dr.ab label {
        padding-bottom: 0px;
    }
    .dsf_sdd_dr label {
        width: 130px !important;
        font-size: 14px;
        
    }
    .dsf_sdd_dr input{
        
         font-size: 14px !important;
        margin-bottom: 0px;
    }
    .dsf_sdd_dr.ab input{
        height: 35px;
    }

</style>
