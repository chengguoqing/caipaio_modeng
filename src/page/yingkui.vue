<template>
    <div >
                  <section class="sd_jh_df mui-row pr cen ">

                       <section class="df_jh_deer w100">

                                  <span @tap="is_sdrr?is_sdrr=false:is_sdrr=true"> 彩票盈亏
                      <i class="dx icon-down"></i>
                    </span>
                      <i class="dx icon-shaixuan cf sd_jh_eert fz20"  @tap="is_sx_d=true"></i>


                </section>
               <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)"/>


        </section>

        <section class="dsf_jh_deer" v-if="is_sdrr">

            <section class="mt10 bgff pd bbm" >
            <p class="pt5 pm5 fz16 ">
        <i class="dx icon-rili"></i> <span class="fz16">日期范围</span>
                <span class="fz12 fr">2018-08-22至2018-8-22</span>
        </p>
        <section class="btm pt20 pm20 mui-row cen pr" @tap="hf('yinkuixq')">
        <section class="mui-col-xs-6">
            <p class="fz16">总投资:</p>
            <p class="fz22 b mt10 z3">0.00</p>
        </section>

                 <section class="mui-col-xs-6">
            <p class="fz16">总盈亏:</p>
            <p class="fz22 b mt10 z3">0.00</p>
        </section>
        <i class="dx icon-right rightrt_er"></i>
    </section>

            </section>



        <section class="mt10 bgff btm">
      <p class="pt5 pm5 fz16 pd">

                <span class="fz12 ">2018-08-22至2018-8-22</span>
        </p>

    </section>
        <van-cell-group>
  <van-cell title="投注：0.00" is-link value="盈亏：0.00" to="yinkuixq"/>
    </van-cell-group>
            </section>

     <!--        头部的下拉-->
            <section class="dsf_jh_deer" v-else>
                <section class="pd">
                    <button @tap="dfddf(sd)" class="w100 fz16 pt10 pm10 mt10 dsf_hjh_se" :class="sd.cls" v-for="sd in caiddf">{{sd.name}}</button>

                </section>


    </section>

              <suxuan v-if="is_sx_d" @closer="is_sx_d=false" time_name="日期" type_r="1"></suxuan>
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
                    name: "彩票盈亏",
                    cls: "act"
                } ,{
                    name: "AG真人盈亏",
                    cls: ""
                }, {
                    name: "AG捕鱼王盈亏",
                    cls: ""
                }, {
                    name: "沙巴体育盈亏",
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
        top: 40px;
    }

</style>
