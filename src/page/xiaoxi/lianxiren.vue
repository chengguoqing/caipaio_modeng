<!--我的消息-->
<template>
	<div >
	<section class="sd_jh_df mui-row pr cen ">
	
	    <section class="df_jh_deer w100">
	        <span> 我的消息</span>
	    </section>
	    <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)" />
	
	
	</section>
	
	<section class="dsf_jh_deer bgff pd">
	   <section class="dsf_jh_dffe z9 fz14 mt10 yj4" @tap="hf('shousuo')">
        <i class="dx icon-sousuo fz18 z9 cz"></i>
           <span class="cz">搜索</span>
        </section>
        
        
           <ul class="mt20">
            
                <li class="pl10 pt10 " @tap="hf('wdshangji')">
                <p class="sd_jh_ddr fl mr10 ab">
                    <i class="dx icon-user4 fz30"></i>
                </p>
                <section class="ov bbm pr10 df_jhsdert">
                    <p class=" fz16 z3">
                        我的上级
                       
                    </p>
                  
                </section>
                <p class="qc"></p>
            </li>
                <li class="pl10 pt10 " @tap="hf('wdshangji')">
                <p class="sd_jh_ddr fl mr10 ac">
                    <i class="dx icon-users fz30"></i>
                </p>
                <section class="ov bbm pr10 df_jhsdert">
                    <p class=" fz16 z3">
                        下级群发(0/1)
                       
                    </p>
                  
                </section>
                <p class="qc"></p>
            </li>
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
 <xiaoxi_dibu :active="1"></xiaoxi_dibu>
	</div>
</template>
<script>
      import xiaoxi_dibu from "../../components/xiaoxi_dibu"
    export default {
        data() {
            return {

            }
        },
        components: {
            xiaoxi_dibu
        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style scoped>
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
