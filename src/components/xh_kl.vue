<!--选号-->
<template>
	<div class="bgff yj4">
	   <section class="pt10">
            <span class="fz16 dsf_jh_der">{{wei_er}}位选号</span>
            <section class="fr">
    <span v-for="sd in sd_der" class="df_jh_dert" :class="sd.cls" @tap="sfd_dff(sd)">{{sd.name}}</span>
        </section>
        <p class="qc"></p> 
        
        <section class="mui-row cen pt10 btm mt10">
            <section class="mui-col-xs-2 mt5 " v-for="sd in yijgh_sd">
                <span class="f_b">
                    <span class="sdsf_jh_dr gd" :class="sd.cls" @tap="df_dfrt(sd)">{{sd.num}}</span>   <br>
                 <span class="fz14">{{sd.yilou}}</span>
                </span>
            </section>
    
        </section>
           
           <section class="mt10 btm  cen pt5 pm5">
    
        <span v-for="sd in sd_ddr" class="fz12 fg_jh_ddert" :class="sd.cls" @tap="dsf_dsff(sd)">{{sd.text}}</span>
            </section>
    
    </section>

	</div>
</template>
<script>
    export default {
        props: {
            wei_er: ""
        },
        data() {
            return {
                sd_der: [{
                    name: "当前遗漏",
                    cls: "act"
                }, {
                    name: "百期热度",
                    cls: ""
                }],
                sd_ddr: [{
                    text: "全",
                    type: 0,
                    cls: ""
                }, {
                    text: "大",
                    type: 1,
                    cls: ""
                }, {
                    text: "小",
                    type: 2,
                    cls: ""
                }, {
                    text: "奇",
                    type: 3,
                    cls: ""
                }, {
                    text: "偶",
                    type: 4,
                    cls: ""
                }, {
                    text: "清除",
                    type: 5,
                    cls: ""
                }],
                yijgh_sd: [{
                    num: 0,
                    yilou: 7,
                    cls: ""
                }, {
                    num: 1,
                    yilou: 7,
                    cls: ""
                }, {
                    num: 2,
                    yilou: 7,
                    cls: ""
                }, {
                    num: 3,
                    yilou: 7,
                    cls: ""
                }, {
                    num: 4,
                    yilou: 7,
                    cls: ""
                }, {
                    num: 5,
                    yilou: 7,
                    cls: ""
                }, {
                    num: 6,
                    yilou: 7,
                    cls: ""
                }, {
                    num: 7,
                    yilou: 7,
                    cls: ""
                }, {
                    num: 8,
                    yilou: 7,
                    cls: ""
                }, {
                    num: 9,
                    yilou: 7,
                    cls: ""
                }]
            }
        },
        components: {

        },
        methods: {
            sfd_dff(sd) {
                this.sd_der.map(a => {
                    a.cls = ""
                })
                sd.cls = "act"
            },
            df_dfrt(sd) {
                if (sd.cls) {
                    sd.cls = ""
                } else {
                    sd.cls = "act"
                }
            },
            dsf_dsff(sd) {
                this.yijgh_sd.map(a => {
                    a.cls = ""

                })


                this.yijgh_sd.map((a, b) => {
                    if (sd.type == 0) { //全
                        a.cls = "act"
                    }
                    if (sd.type == 1 && b > 4) { //大
                        a.cls = "act"
                    }
                    if (sd.type == 2 && b < 5) { //小
                        a.cls = "act"
                    }
                    if (sd.type == 3 && b % 2 != 0) { //奇
                        a.cls = "act"
                    }
                    if (sd.type == 4 && b % 2 == 0) { //偶
                        a.cls = "act"
                    }


                })

            }
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .dsf_jh_der {
        border-left: 2px solid #E82E2F;
        padding-left: 10px;
    }

    .df_jh_dert {
        font-size: 14px;
        padding: 5px 10px;
        color: #999
    }

    .df_jh_dert.act {
        background: #F4F4F4;
        border-radius: 10px;
        color: #666
    }

    .sdsf_jh_dr {
        width: 42px;
        line-height: 42px;
        height: 42px;
        border: 1px solid #FF7A1E;
        color: #333;
        display: inline-block;
        border-radius: 50%
    }

    .sdsf_jh_dr.act {
        background: #FF7A1E;
        color: #fff
    }

    .fg_jh_ddert {
        background: #F4F4F4;
        color: #666;
        padding: 4px 8px;
        margin-right: 10px;
        border-radius: 4px;
    }

    .fg_jh_ddert:hover {
        color: #fff;
        background: #FF7A1E;
    }

</style>
