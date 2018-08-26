<template>
	<div >
	
<section class="sd_jh_df mui-row pr cen ">

    <section class="df_jh_deer w100">
        <span>我的上级 </span>
    </section>
    <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)" />


</section>

<section class="dsf_jh_deer">
    <ul class="pd">
        <li class="tr mt20" v-for="sd in dsf_sf">
            <p>{{sd.time}}</p>
            <section class="dsf_jh_der">
                <section class="cf sd_kjh_defr">
                        {{sd.text}}
                </section>
            </section>
        </li>
    </ul>
    
</section>
        
        <section class="sd_kj_deert btm mui-row">
        <section class="mui-col-xs-10">
        <input type="text" class="dsf_erjh_deer" v-model="tishy_s"  >
        </section>
            <section class="mui-col-xs-2 tr pr10">
            <span class="yj dsf_fjisd" @click="fasong"><i class="dx icon-emizhifeiji"></i></span>
            </section>
    </section>
        
	</div>
</template>
<script>
    import { Toast } from 'vant';
    import base from "../../js/base.js"
    export default {
        data() {
            return {
                tishy_s:"",
                dsf_sf: [{
                    text: "你好",
                    time: "2018/08/21"
                }, {
                    text: "你好",
                    time: "2018/08/21"
                }]
            }
        },
        components: {

        },
        methods: {
            fasong(){
                if(!this.tishy_s){
                    Toast('请输入内容');
                    return
                }
                var sd_dr={}
                sd_dr.text=this.tishy_s
                sd_dr.time=base.time_er(new Date())
                this.dsf_sf.push(sd_dr)
                this.tishy_s=""
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .sd_kjh_defr {
        display: inline-block;
        padding: 6px 10px;
        background: #706198;
        font-size: 14px;
        border-radius: 4px;
    }

    .dsf_jh_der {
        position: relative;
        padding-right: 5px;

    }

    .dsf_jh_der::after {
        content: ' ';
        position: absolute;
        width: 10px;
        height: 10px;
        background: #706198;
        right: 0px;
        top: 10px;
        transform: rotate(45deg);
    }

    .sd_kj_deert {
        position: fixed;
        left: 0px;
        bottom: 0px;
        width: 100%;
        z-index: 1000;
        height: 50px;
        line-height: 50px;
        background: #fff;
    }
    .dsf_fjisd{
        background: #8F2BCC;
        width: 35px;
        height: 35px;
        display: inline-block;
        text-align: center;
        line-height: 35px;
        color: #fff;
        background: linear-gradient(to right,#7730C3, #A027D4);
    }
    .dsf_erjh_deer{
        text-indent: 0px;
        padding-left: 10px;
        border: 0px;
        font-size: 16px;
    }

</style>
