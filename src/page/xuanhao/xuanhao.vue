<!--选择号码-->
<template>
	<div >
	<section class="sd_jh_df mui-row pr cen ">
	
	    <section class="df_jh_deer w100">
	    
            
             <span @tap="is_sdrr?is_sdrr=false:is_sdrr=true" class="dsf_h_dee pr">
                        <span class="df_jh_deeert">日本30秒</span>
                 五星直选复式
                      <i class="dx icon-down"></i>
          
                    </span>
	    </section>
        
	    <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)" >
        <span class="fz14 df_jerh_dee">游戏大厅</span>
            
    

    </van-icon>
	<span class="cf sd_jh_eert "> 
    	  <i class="dx icon-gantan fz22" @click="tishi"> </i>
        
          <i class="dx icon-jilu fz22 ml10" @tap="hf('touzhujilu')"></i>
    </span>

	</section>
	
	<section class="dsf_jh_deer">
        
	   <section class="pd pt5  bgff fz12 dsf_jh_deet">
            20180826-2043 投注截止:<span class="red">00:30</span>
           <span class="fr z6 dsf_deeert" @click="iszs_e?iszs_e=false:iszs_e=true" :class="iszs_e?'act':''">走势<i class="dx icon-right1 cz" ></i></span>
        </section>
        
        <section class="dsf_jhj_dert" v-if="iszs_e">
        <zoushi></zoushi>
        </section>
        
        
        <section class="pd mt20">
            <xh_kl wei_er="万"></xh_kl>
        </section>
           <section class="pd mt20">
            <xh_kl wei_er="千"></xh_kl>
        </section>
           <section class="pd mt20">
            <xh_kl wei_er="百"></xh_kl>
        </section>
           <section class="pd mt20">
            <xh_kl wei_er="十"></xh_kl>
        </section>
           <section class="pd mt20">
            <xh_kl wei_er="个"></xh_kl>
        </section>
        
        
	</section>
        
        
        <section class="dsf_jh_der btm">
    <section class="mui-row pd f_dfd_derrt">
        <section class="mui-col-xs-2">
   <span class="cz fz14 z6"> 0注</span>
        </section>
             <section class="mui-col-xs-5 cen">
    <span v-for="sd in sd_sder" class="fz12 dsf_jh_dert br" :class="sd.cls" @tap="sd_drt(sd)">{{sd.text}}</span>
        </section>
             <section class="mui-col-xs-5 dfs_de_dert ">
    <van-stepper v-model="value" class="fr mt2" />
        </section>
    
    </section>
            
    <section class="mui-row btm cen fds_Jh_dert">
        <section class="mui-col-xs-3 brm fz12 df_jh_der ab">
            <p class="z6"> 
    <i class="ye dx icon-lanzi fz20"></i>
    </p>
    加入选号篮
    
        </section>
        
        <section class="mui-col-xs-3 brm fz12 df_jh_der ">
 
    选号篮<span class="ye">(0)</span>
    
        </section>
        
             <section class="mui-col-xs-3 brm fz12 df_jh_der ac">
 
    <span class="fz16">共:</span><span class="red">0元</span>
                 <p class="fz12">余额：0.94元</p>
    
        </section>
        
           <section class="mui-col-xs-3 brm fz12 df_jh_der ">
 
   <button class="w100 mui-btn-red kuy_sert fz16">快速投注</button>
    
        </section>
        
    
    </section>        
            
    </section>
        
<p style="height:50px"></p>
	</div>
</template>
<script>
    import xh_kl from "../../components/xh_kl"
    import zoushi from "../../components/zoushi"
    export default {
        data() {
            return {
                iszs_e: false, //是否显示走势图
                value: 1,
                is_sdrr: false,
                sd_sder: [{
                    text: "元",
                    cls: "act"
                }, {
                    text: "角",
                    cls: ""
                }, {
                    text: "分",
                    cls: ""
                }, {
                    text: "厘",
                    cls: ""
                }]
            }
        },
        components: {
            xh_kl,
            zoushi
        },
        methods: {
            sd_drt(sd) {
                this.sd_sder.map(a => {
                    a.cls = ""
                })
                sd.cls = "act"
            },
            tishi() {
                this.$dialog.alert({
                    title: '玩法说明',
                    message: '单注中奖金额:195600.00元<br>在万位、千位、百位、十位、个位分别选择一个或多个号码，组合成一注或多注。所选号码与开奖号码一致且顺序相同，即为中奖'
                }).then(() => {
                    // on close
                });
            }
        },
        mounted() {

        },
    }

</script>
<style>
    .dfs_de_dert input {
        width: 43px !important;
        height: 26px !important;
        margin-bottom: 0px !important;
        padding: 1px;
        text-indent: 0px;
        border-radius: 0px;
    }

</style>
<style scoped>
    .dsf_h_dee {
        position: relative;
        top: 5px;
    }

    .df_jerh_dee {
        position: relative;
        bottom: 4px;
        left: 5px;
    }

    .df_jh_deeert {
        position: absolute;
        left: 0px;
        top: -20px;
        text-align: center;
        font-size: 12px;
        width: 100%;
    }

    .dsf_jh_deet {
        position: sticky;
        left: 0px;
        top: 61px;
        z-index: 1000
    }

    .dsf_jh_der {
        position: fixed;
        left: 0px;
        bottom: 0px;
        width: 100%;
        z-index: 1000;
        background: #fff;

    }

    .f_dfd_derrt {
        line-height: 35px;
    }

    .dsf_jh_dert {
        display: inline-block;
        width: 25px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        border-radius: 4px;
        margin-right: 5px;
    }

    .dsf_jh_dert.act {
        background: #F73C3D;
        color: #fff;
    }

    .fds_Jh_dert {
        line-height: 45px;
        height: 45px;
    }

    .df_jh_der.ab {
        line-height: 1.3;
        padding-top: 2px;

    }

    .df_jh_der.ac {
        line-height: 1.4;
        padding-top: 5px;
    }

    .kuy_sert {
        padding: 0px;
        border-top: 0px;
        height: 100%;
        border-radius: 0px;
    }

    .dsf_jhj_dert {
        height: 210px;
        overflow: auto;
    }

    .dsf_deeert.act {
        color: #DF3400
    }

    .dsf_deeert.act .icon-right1 {
        display: inline-block;
        transform: rotate(90deg)
    }

</style>
