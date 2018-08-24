<!--我的账号-->
<template>
	<div >
	         <section class="sd_jh_df mui-row pr cen ">

                       <section class="df_jh_deer w100">
                  <span> 我的账户</span>
                </section>

                         <i class="dx icon-liaotianduihua cf sd_jh_eert ab fz20"  ></i>
                <i class="dx icon-shezhi cf sd_jh_eert fz20" @tap="hf('shezhi')" ></i>

        </section>

        <section class="dsf_jh_deer">
                <section class="bgff">
                    <section class="cen ">

                        <user_top></user_top>


                        <section class=" btm mui-row pt10 pm10 bbm">
                                <section class="mui-col-xs-4" @tap="hf('congzhi')">
                            <i class="dx icon-chongzhi z9 cz"></i>
                                    <span class="fz14 z3">充值</span>
                            </section>

                             <section class="mui-col-xs-4 blm" @click="hf('zhaunzhang')">
                            <i class="dx icon-zhuanzhang z9 cz fz20"></i>
                                    <span class="fz14 z3">转账</span>
                            </section>


                             <section class="mui-col-xs-4 blm" @tap="hf('tixian')">
                            <i class="dx icon-tixian1 z9 cz fz18"></i>
                                    <span class="fz14 z3">提现</span>
                            </section>



                        </section>


                    </section>

            </section>

            <section v-for="sd in sd_dfrt">
            <p class="pd pt10 pm10">
                {{sd.title}}
            </p>
            <section class="mui-row sdf_jh_drer cen bgff btm" :class="sd.ty">
                <section class="mui-col-xs-4 dsf_jh_derr pt15 pm5 bbm" v-for="sf in sd.dated" @tap="hf(sf.url)">
                        <span class=" dsf_jher_der cz">
                                <i class="dx cf " :class="[sf.icon,sf.size]"></i>
                        </span>
                    <p class="z3 mt5 fz14">
                {{sf.name}}
                        </p>
                </section>
            </section>
            </section>

    </section>

        	<dibu :active="3"></dibu>
	</div>
</template>
<script>
    import dibu from "../components/dibu"
    import user_top from "../components/user_top"
    export default {
        data() {
            return {
                sd_dfrt: [{
                    title: "数据中心",
                    ty: "",
                    dated: [{
                        name: "投注中心",
                        icon: "icon-qian",
                        size: "fz20",
                        url:"touzhu?type=1"

                    }, {
                        name: "盈亏统计",
                        icon: "icon-tongji",
                        size: "fz20",
                        url:"yingkui"

                    }, {
                        name: "交易流水",
                        icon: "icon-navicon-jysz",
                        size: "fz20",
                        url:"jiaoyils"

                    }, {
                        name: "充值记录",
                        icon: "icon-chongzhi1",
                        size: "fz20",
                        url:"czjl_user"

                    }, {
                        name: "提现记录",
                        icon: "icon-tixian1",
                        size: "fz20",
                        url:"tixianjl"

                    }, {
                        name: "钱包互转记录",
                        icon: "icon-qianbao",
                        size: "fz20",
                        url:"qianbaohz"

                    }]
                },{
                    title: "代理中心",
                    ty: "ab",
                    dated: [{
                        name: "注册下级",
                        icon: "icon-zhucetianjiahaoyou",
                        size: "fz20",
                        url:"zucexiaji"

                    }, {
                        name: "下级管理",
                        icon: "icon-structurehierar",
                        size: "fz20",
                        url:"xiajigl"

                    }, {
                        name: "推广二维码",
                        icon: "icon-erweima",
                        size: "fz20",
                        url:""

                    }, {
                        name: "团队报表",
                        icon: "icon-tuanduichengyuan",
                        size: "fz20",
                        url:""

                    }, {
                        name: "日度报表",
                        icon: "icon-rili",
                        size: "fz20",
                        url:""

                    }, {
                        name: "日工资管理",
                        icon: "icon-icon-test",
                        size: "fz20",
                        url:""

                    }, {
                        name: "分红管理",
                        icon: "icon-dabingtu",
                        size: "fz20",
                        url:""

                    }, {
                        name: "私返管理",
                        icon: "icon-chongzhi",
                        size: "fz20",
                        url:""

                    }]
                },{
                    title: "账户中心",
                    ty: "ac",
                    dated: [{
                        name: "绑定银行卡",
                        icon: "icon-yinxingqia",
                        size: "fz20",
                        url:""

                    }, {
                        name: "账户安全",
                        icon: "icon-anquan",
                        size: "fz20",
                        url:""

                    }]
                }]
            }
        },
        components: {
            dibu,
            user_top
        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style scoped>


    .dsf_jher_der {
        width: 40px;
        height: 40px;
        line-height: 40px;
        display: inline-block;
       border-radius: 10px;
        background: linear-gradient(to top, #FF8E8E, #FF8D8E);
    }
    .sdf_jh_drer.ab .dsf_jher_der{
          background: linear-gradient(to top, #93C8FF, #3ABFFD);
    }
 .sdf_jh_drer.ac .dsf_jher_der{
          background: linear-gradient(to top, #FF9CCA, #FF74A8);
    }
</style>
