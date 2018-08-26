<!--搜索联系人-->
<template>
	<div >
	<section class="sd_jh_df mui-row pr cen ">
	
	    <section class="df_jh_deer w100">
	        <span> 搜索联系人</span>
	    </section>
	    <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)" />
	
	
	</section>
	
	<section class="dsf_jh_deer bgff">
	   
        <section class="pd pt10 pm10 mui-row">
        <section class="mui-col-xs-10 pr">
            <i class="dx icon-sousuo ss_jh_drt"></i>
            <input type="text" placeholder="我的下级" v-model="ss_lian_de"  class="dsf_jh_der">
        </section>
        <section class="mui-col-xs-2 fz14 ls cen dsf_jh_det" >
                
            <span v-if="ss_lian_de">搜索</span>
            <span v-else>取消</span>
        </section>
        
    </section>
        
          <ul class="mt10">
               <li class="pl10 pt10 " @tap="hf('wdshangji')">
                <p class="sd_jh_ddr fl mr10 ad">
                    <i class="dx icon-user fz30"></i>
                </p>
                <section class="ov bbm pr10 df_jhsdert">
                    <p class=" fz16 z3">
                       o665p
                       
                    </p>
                  
                </section>
                <p class="qc"></p>
            </li>
              
    </ul>
        
        
        
	</section>

	</div>
</template>
<script>
    export default {
        data() {
            return {
                ss_lian_de:""
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
    .dsf_jh_der{
        margin-bottom: 0px;
        border: 0px;
        background: #EEEFF3;
        height: 35px;
        font-size: 16px;
        text-indent: 20px;
    }
    .ss_jh_drt{
        position: absolute;
        left: 5px;
        top:7px;
        font-size: 20px;
    }
    .dsf_jh_det{
        line-height: 35px;
    }
    
    
    
       .dsf_jh_dffe{
        line-height: 35px;
        text-align: center;
        background: #EEEFF3
    }
    
     .sd_jh_ddr{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        text-align: center;
        line-height: 50px;
        color: #fff;
        background: linear-gradient(to top,#79EDFF, #3476FF);
    }
    .df_jhsdert{
        line-height: 50px;
        padding-bottom: 10px;
    }
    .sd_jh_ddr.ab{
        background: linear-gradient(to top,#FEC740, #FB9307); 
    }
    .sd_jh_ddr.ac{
          background: linear-gradient(to top,#8A3FCA, #6144BC); 
    }
  .sd_jh_ddr.ad{
          background: #BABABA
    }

</style>
