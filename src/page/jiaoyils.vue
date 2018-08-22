<!--交易流水-->
<template>
    <div >
                  <section class="sd_jh_df mui-row pr cen ">

                       <section class="df_jh_deer w100">

                                  <span @tap="is_sdrr?is_sdrr=false:is_sdrr=true"> 彩票钱包交易记录
                      <i class="dx icon-down"></i>
                    </span>
                      <i class="dx icon-shaixuan cf sd_jh_eert fz20"  @tap="is_sx_d=true"></i>


                </section>
               <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)"/>


        </section>

        <section class="dsf_jh_deer" v-if="is_sdrr">

            <section class="mt10 bgff pd bbm" v-for="sd in 10">
                <p class="pt5 pm5 fz16 ">

                <span class="fz12 ">2018-08-21 21:51:03</span>
        </p>
        <section class="btm pt5 pm5 mui-row fz16 pr" @tap="hf('yinkuixq')">
    投注 <span class="fr ye fz14 mr20">-0.40000</span>
    <p class="qc pt5">
        关联订单号：20180821020rr9Fk7z00001
    </p>

        <i class="dx icon-right rightrt_er"></i>
    </section>

            </section>





            </section>

     <!--        头部的下拉-->
            <section class="dsf_jh_deer" v-else>
                <section class="pd">
                    <button @tap="dfddf(sd)" class="w100 fz16 pt10 pm10 mt10 dsf_hjh_se" :class="sd.cls" v-for="sd in caiddf">{{sd.name}}</button>

                </section>


    </section>

              <suxuan v-if="is_sx_d" @closer="is_sx_d=false" time_name="" type_r="2"></suxuan>
    </div>
        </template>
<script>
     import suxuan from "../components/suxuan"
    export default {
        data() {
            return {
                is_sdrr:true,
                is_sx_d:false,
                 caiddf: [{
                    name: "彩票交易记录 ",
                    cls: "act"
                } ,{
                    name: "AG真人交易记录 ",
                    cls: ""
                }, {
                    name: "AG捕鱼王交易记录 ",
                    cls: ""
                }, {
                    name: "沙巴体育交易记录 ",
                    cls: ""
                }]
            }
        },
        components: {
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
    .rightrt_er{
        position: absolute;
        right: 0px;
        top: 18px;
    }

</style>
