<!--投注记录-->
<template>
	<div >
	<section class="sd_jh_df mui-row pr cen ">
	
	    <section class="df_jh_deer w100">
	        <span> 投注记录</span>
	    </section>
	    <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)" />
	
	
	</section>
	
	<section class="dsf_jh_deer">
	
        
           <ul>
                <li class="bgff btm pd pr mb10" v-for="sd in 10" @tap="hf('touzxq')">
                    <p class="pt5 pm5 fz14 z9">
   <span class="z3"> 广东11选5-前三直选复试</span>
        <span class="fr">2018-08-14 07:05:28</span>
            </p>
                    <section class="pt5 pm5 btm fz14 z3">
                  
                        <p class="qc "></p>
                        <span class="z9">第20180821-78期</span>

                        <span class=" fr mr30 z9">
                            03,04,5|03,05|03
                        </span>
                        
                            <p class="qc pt5"></p>
                        <span class="z9">投注0.4元</span>

                        <span class=" fr mr30 z3">
                           未中奖
                        </span>
                    </section>
                    <i class="dx icon-right right_deer"></i>
                    
                    <p class="btm pt5 pm5 tr">
    <button class="sd_deer " @tap.stop="show_er=true">再投一次</button>
    </p>
                </li>
            </ul>
        
        
	</section>

        
<van-dialog
  v-model="show_er"
 show-cancel-button 
>
    <section class="pd">
        <p class="z3 cen fz18 pt10">再投一次</p>
      <p class="fz12 z6 mt5">  期号20180826-56</p>
        <section class="mui-row cen mt5">
            <p class="mui-col-xs-7 z3 fz14">
                广东11选5-前三直选复式
            </p>
              <p class="mui-col-xs-5 z3 fz14">
               03,04,05|03,05|03
            </p>
        </section>
        <section class="mt10 fz14">
            模式 
            <span v-for="sd in sd_sder" class="br dsf_jhdf yj4" :class="sd.cls" @tap="sd_ddf(sd)">{{sd.text}}</span>
        </section>
        
            <section class="mt10 fz14">
            倍数  <input type="number" class="dsf_jerh_deer" v-model="beisd_s" > 倍 
                <span v-for="sd in beisd_sd" class="br dsf_jhdf yj4" :class="sd.cls" @tap="sd_ddf_er(sd)">{{sd.text}}</span>
        </section>
        
        <p class="mt5 z6">
            <span class="ls">1</span> 注 <span class="ls">{{beisd_s}}</span>倍 共
            <span class="ls">{{beisd_s*jh_sdf*2|baoliu}}</span>
            元
        </p>
        
    </section>        
    
                    
    </van-dialog>
        
	</div>
</template>
<script>
    export default {
        data() {
            return {
                show_er: false,
                beisd_s: 1,//倍数
                jh_sdf: 1,//模式
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
                }],
                beisd_sd: [{
                    text: 10,
                    cls: ""
                }, {
                    text: 50, 
                    cls: ""
                }, {
                    text: 100,
                    cls: ""
                }]
            }
        },
        components: {

        },
        methods: {
            sd_ddf(sd) {
                this.sd_sder.map(a => {
                    a.cls = ""
                })
                  if(sd.text=="元"){
                   this.jh_sdf=1
                }
                if(sd.text=="角"){
                   this.jh_sdf=0.1
                }
                  if(sd.text=="分"){
                      this.jh_sdf=0.01
                }
                  if(sd.text=="厘"){
                      this.jh_sdf=0.001
                }
                sd.cls = "act"
            },
            sd_ddf_er(sd) {
                this.beisd_sd.map(a => {
                    a.cls = ""
                })
                   sd.cls = "act"
                this.beisd_s = sd.text
             
            }
        },
        mounted() {

        },
        filters: { //过滤器   页面上调用{{dt.state|lei}}
            baoliu(num) {
                
                return num.toFixed(3)
            }
        }
 
    }

</script>
<style scoped>
    .right_deer {
        position: absolute;
        right: 10px;
        top: 50px;
    }

    .sd_deer {
        padding-top: 3px;
        padding-bottom: 3px;
        border: 1px solid #AEA1E8;
        color: #AEA1E8
    }

    .dsf_jhdf {
        color: #666;
        display: inline-block;
        width: 30px;
        height: 30px;
        margin-left: 5px;
        line-height: 30px;
        text-align: center;
        font-size: 14px;
    }

    .dsf_jerh_deer {
        margin-bottom: 0px;
        width: 80px;
        height: 30px;
        text-indent: 0px;
        text-align: center;
    }

    .dsf_jhdf.act {
        background: #4A48CD;
        color: #fff
    }

</style>
