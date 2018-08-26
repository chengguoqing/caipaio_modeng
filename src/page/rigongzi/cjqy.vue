<!--创建契约-->
<template>
	<div >
	<section class="sd_jh_df mui-row pr cen ">
	
	    <section class="df_jh_deer w100">
	        <span> 创建契约</span>
	    </section>
	    <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)" />
	
	
	</section>
	
	<section class="dsf_jh_deer">
        
        <section class="mui-row cen bgff fz16">
            <section class="mui-col-xs-6 pt10 pm10 f_jh_ddf" :class="sd.cls" v-for='sd in toutap' @tap="qiehua(sd)">
                {{sd.name}}
            </section>
        </section>
        
        <form class="mui-input-group mt10">
            <div class="mui-input-row dsf_sdd_dr">
                <label>代理会员名</label>
                <p class="ov">
               <input type="text" class="mui-input-clear" placeholder="请点击输入">
                    </p>
     
            </div>
                  <div class="mui-input-row dsf_sdd_dr">
                <label>金额起算日期</label>
                <p class="ov pr" @click="show=true">
               <input type="text" class="mui-input-clear" v-model="time_er"  placeholder="点击选择日期" disabled>
    <i class="dx icon-right rihg_erertt"></i>               
    </p>
     
            </div>
        </form>
        
        <p class="pa pt10 pm10 z9  pd">计算日工资规则</p>
               <section class="pd pt10 pm10 bgff mui-row">
                <section class="mui-col-xs-3  fz14 z9 mt20">规则一</section>
            <section class="ov pr20 pr" @tap="hf('tianjiaguize?type_r=1')">
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
                <i class="dx icon-right dsf_jh_der"></i>
                
            </section>
                   
                   <p class="qc btm mt10 pt10 ls cen" @tap="hf('tianjiaguize')">
    +添加规则契约
                </p>
    
        </section>
        
             <p class="pa pt10 pm10 z9  pd">解约条件(选填)</p>
      <section class="bgff pd">
    <textarea placeholder="请点击输入" class="dianji_dert" rows="4"></textarea>
     </section>
        
        <p class="mt20 cen fz12 ">
            请详细阅读 <ins class="ls" @tap="hf('qiyuesm')">契约免责声明</ins>
        </p>
        
        <p class="pd mt20">
            <button class="mui-btn-red w100 fz16 pt10 pm10" @>发送契约</button>
        </p>
    
        
	
	</section>

        
        
        
        <get_time :show="show" @close="show=false" @settime="settime"></get_time>
        
	</div>
</template>
<script>
    import get_time from "../../components/get_time"
    export default {
        data() {
            return {
                show:false,
                time_er:"",
                toutap: [{
                    name: "模式一",
                    cls: "act"
                }, {
                    name: "模式二",
                    cls: ""
                }]
            }
        },
        components: {
            get_time
        },
        methods: {

            qiehua(sd) {
                this.toutap.map(a => {
                    a.cls = ""
                })
                sd.cls = "act"
            },
            settime(date){
                this.show=false
                this.time_er=date
            }

        },
        mounted() {

        },
    }

</script>
<style scoped>
    .f_jh_ddf.act {
        color: #7662CC;
        border-bottom: 1px solid #7662CC
    }



    .rihg_erertt {
        position: absolute;
        right: 10px;
        top: 10px;
    }
    .dsf_jh_der{
        position: absolute;
        right: 0px;
        top: 20px;
    }
    .dianji_dert{
        text-indent: 0px;
        padding-left: 0px;
        margin-bottom: 0px;
        border: 0px;
        font-size: 14px;
    }
</style>
