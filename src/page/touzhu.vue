<!--投注查询-->
<template>
	<div >


               <section class="sd_jh_df mui-row pr cen ">
             <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)" v-if="$route.query.type==1"/>

                       <section class="df_jh_deer w100">
               <span @tap="is_sdrr?is_sdrr=false:is_sdrr=true"> 彩票投注
                      <i class="dx icon-down"></i>
                    </span>
                </section>
 

                <i class="dx icon-shaixuan cf sd_jh_eert fz20"  @tap="is_sx_d=true"></i>

        </section> 

        <section class="dsf_jh_deer" v-if="is_sdrr">

            <ul>
                <li class="bgff btm pd pr mb10" v-for="sd in 10" @tap="hf('touzxq')">
                    <p class="pt5 pm5 fz14 z9">2018-08-14 07:05:28</p>
                    <section class="pt5 pm5 btm fz14 z3">
                                腾讯分分彩-后三直选复式 <span class="ye fr mr30">未中奖</span>
                        <p class="qc pt5"></p>
                        <span class="z9">投注</span>：0.16

                        <span class=" fr mr30 z9">奖金 <span class="z3">0.00</span></span>
                    </section>
                    <i class="dx icon-right right_deer"></i>
                </li>
            </ul>


    </section>


<!--        头部的下拉-->
            <section class="dsf_jh_deer" v-else>
                <section class="pd">
                    <button @tap="dfddf(sd)" class="w100 fz16 pt10 pm10 mt10 dsf_hjh_se" :class="sd.cls" v-for="sd in caiddf">{{sd.name}}</button>

                </section>
    </section>

        <section v-if="$route.query.type!=1">
        	<dibu :active="2"></dibu>
        </section>
        <suxuan v-if="is_sx_d" @closer="is_sx_d=false" ></suxuan>



	</div>
</template>
<script>
    import dibu from "../components/dibu"
    import suxuan from "../components/suxuan"
    export default {
        data() {
            return {
                is_sx_d:false,//是否显示筛选
                is_sdrr: true,
                caiddf: [{
                    name: "彩票投注",
                    cls: "act"
                }, {
                    name: "彩票追号",
                    cls: ""
                }, {
                    name: "AG真人投注记录",
                    cls: ""
                }, {
                    name: "AG捕鱼王游戏记录",
                    cls: ""
                }, {
                    name: "沙巴体育投注记录",
                    cls: ""
                }]
            }
        },
        components: {
            dibu,
            suxuan
        },
        methods: {
            dfddf(sd) {
                this.caiddf.map(a => {
                    a.cls = ""
                })
                sd.cls = "act"
                this.is_sdrr = true

            }
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .right_deer {
        position: absolute;
        right: 10px;
        top: 50px;
    }



</style>
