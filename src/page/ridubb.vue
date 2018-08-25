<!--日度报表-->
<template>
<div>
    <section class="sd_jh_df mui-row pr cen ">

        <section class="df_jh_deer w100">


            <span @tap="is_sdrr?is_sdrr=false:is_sdrr=true"> 彩票盈亏
                      <i class="dx icon-down"></i>
                    </span>


        </section>
        <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)" />

        <i class="dx icon-shaixuan cf sd_jh_eert fz20" @tap="is_sx_d=true"></i>
    </section>

    <section class="dsf_jh_deer" v-if="is_sdrr">

        <van-cell-group>
            <van-cell title="tiangong" />
        </van-cell-group>

        <section class="mt10">
            <van-cell-group>
                <van-cell>
                    <i class="dx icon-rili cz fz18"></i>
                    <span class="fz16 z6 cz">日期范围</span> 
                    <span class="fr z9">2018-08-18至2018-08-25</span>
                </van-cell>
                <van-cell is-link to="cpxq?type_r=0">
                    <section class="mui-row cen">
                        <section class="mui-col-xs-6">
                            <p>总投注</p>
                            <p class="z3 fz20 b">0.00</p>
                        </section>
                        <section class="mui-col-xs-6">
                            <p>总盈亏</p>
                            <p class="z3 fz20 b">0.00</p>
                        </section>
                    </section>
                </van-cell>

            </van-cell-group>
        </section>
        
        
           <section class="mt10" v-for="sd in 5">
            <van-cell-group>
                <van-cell>
                 <span class="z9"> 2018-08-25</span>
                </van-cell>
                <van-cell   is-link to="cpxq?type_r=-1">
                    投注：0.00
              <span class="fr">盈亏：0.00</span>
                    <p class="z3">
                    活跃认识：0
                </p>
    </van-cell>

            </van-cell-group>
        </section>
        
              
        
        



    </section>


    <!--        头部的下拉-->
    <section class="dsf_jh_deer" v-else>
        <section class="pd">
            <button @tap="dfddf(sd)" class="w100 fz16 pt10 pm10 mt10 dsf_hjh_se" :class="sd.cls" v-for="sd in caiddf">{{sd.name}}</button>

        </section>
    </section>
 <suxuan v-if="is_sx_d" @closer="is_sx_d=false" time_name="日期" type_r="5">
    </suxuan>     
</div>
</template>
<script>
       import suxuan from "../components/suxuan"
    export default {
        data() {
            return {
                is_sx_d:false,
                is_sdrr: true,
                caiddf: [{
                    name: "彩票盈亏",
                    cls: "act"
                }, {
                    name: "彩票盈亏",
                    cls: ""
                }, {
                    name: "彩票盈亏",
                    cls: ""
                }, {
                    name: "彩票盈亏",
                    cls: ""
                }, {
                    name: "彩票盈亏",
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
    .sdsf_jhh_der{
        width: 8px;
        height: 8px;
        background: #33CC33;
        display: inline-block;
    }

</style>
