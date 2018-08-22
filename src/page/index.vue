<template>
	<div >
	   <section class="sd_jh_df mui-row">
            <section class="df_jh_deer" v-for="sd in sd_df" :class="sd.cls" @tap="qiehuan(sd)">
                  <span> {{sd.name}}</span>
                </section>

             <section class="df_jh_deer pr">

                    <img src="../assets/img/kefu.png" class="kefwey">
                </section>

        </section>

        <section class="dsf_jh_deer">
<!--        轮播图-->
        <section class="lunbo_er">
    <van-swipe :autoplay="3000" class="h100">
  <van-swipe-item v-for="sd in 5">
        <img src="../assets/img/banner.jpg" class="w100 h100">
    </van-swipe-item>
</van-swipe>

    </section>


        <section class="df_jh_deertt bgff pd pr" @tap="hf('gonggao')">
            <img src="../assets/img/gonggao.jpg" class="gongg_ds fl kx cz mr10">
            <section class="ov pl10 df_jh_dert blm ">
                 <vue-seamless-scroll :data="sys_user" :class-option="optionSingleHeightTime_er" class="seamless-warp as_kj_tope   ">


            <p class="cz  " v-for="sd in sys_user">{{sd.name}}</p>
    </vue-seamless-scroll>
    </section>
            <p class="qc"></p>

            <van-icon name="arrow" class="z9 righty_der"/>
    </section>


        <section class="mt10 bgff">
    <van-tabs>
  <van-tab v-for="index in sd_jh_dff" :title="index.name">

      <section class="mui-row pm15">
        <section class="mui-col-xs-4 cen pt15 " v-for="sd in 6">
                <img src="../assets/img/shsih_s.png" class="shsih_s">
            <p class="z3 fz16 mt2">日本30秒</p>
        </section>
             <section class="mui-col-xs-4 cen pt15 " @click="hf('caizhongsz')">
               <p class="shsih_s ab">
            <i class="dx icon-gengduomore10 fz26"></i>
    </p>
            <p class="z3 fz16 mt2">编辑</p>
        </section>


        </section>


  </van-tab>
</van-tabs>






        </section>

        </section>

        <dibu :active="0"></dibu>
	</div>
</template>
<script>
    import dibu from "../components/dibu"
    export default {
        data() {
            return {
                sd_df: [{
                    name: "彩票",
                    cls: "act"
                }, {
                    name: "真人",
                    cls: ""
                }, {
                    name: "捕鱼王",
                    cls: ""
                }, {
                    name: "体育",
                    cls: ""
                }],

                sd_jh_dff: [{
                    name: "常玩",
                    cls: "act",
                    text: ''
                }, {
                    name: "时时彩",
                    cls: ""
                }, {
                    name: "11选5",
                    cls: ""
                }, {
                    name: "PK10",
                    cls: ""
                }, {
                    name: "快3",
                    cls: ""
                }, {
                    name: "常玩",
                    cls: ""
                }, {
                    name: "时时彩",
                    cls: ""
                }, {
                    name: "11选5",
                    cls: ""
                }, {
                    name: "PK10",
                    cls: ""
                }, {
                    name: "快3",
                    cls: ""
                }],
                sys_user:[
                    {
                        name:"公告",
                        id:0
                    }, {
                        name:"公告1",
                        id:1
                    }, {
                        name:"公告2",
                        id:2
                    }, {
                        name:"公告3",
                        id:3
                    }, {
                        name:"公告4",
                        id:3
                    }, {
                        name:"公告5",
                        id:3
                    }, {
                        name:"公告6",
                        id:3
                    }
                ]
            }
        },
        components: {
            dibu
        },
        computed: {
            optionSingleHeightTime_er() {
                return {
                    singleHeight: 21,
                    waitTime: 2000
                }
            }
        },

        methods: {
            qiehuan(sd) {
                this.sd_df.map(a => {
                    a.cls = ""
                })
                sd.cls = "act"
            }
        },
        mounted() {

            mui('.mui-scroll-wrapper').scroll({

            });
        }
    }

</script>
<style scoped>
    .lunbo_er {
        position: relative;
        height: 9rem
    }

    .gongg_ds {
        width: 37px;
        position: relative;
        top: 3px;
    }

    .df_jh_dert {
        font-size: 14px;
        color: #999
    }

    .df_jh_deertt {
        padding-top: 8px;
        padding-bottom: 8px;
    }

    .righty_der {
        position: absolute;
        right: 10px;
        top: 12px;
        font-size: 14px;
    }

    .dsf_jh_dert {
        line-height: 40px;
        color: #666
    }

    .dsf_jh_dert span {
        padding-left: 15px;
        padding-right: 15px;
    }

    .dsf_jh_dert.act span {
        border-bottom: 2px solid #EC1D3A;
        color: #EC1D3A;
        padding-bottom: 8px;

    }


    .as_kj_tope{
        height: 20px;
        overflow: hidden
    }

</style>
