<!--高级筛选-->
<template>
	<div class="ff_drrrty">
	   <p class="sd_jh_dert" @click="$emit('closer');df_jh_de=false"></p>

        <section class="sdf_jhdsf_e pd gd" :class="df_jh_de">
      
            <section >
     <p class="fz16 mt15 z3 mt50">会员类型</p>

    <p class="pr">
    <input type="text" readonly v-model="leixing" class="dsf_deert">
       <i class="dx icon-down dsf_j_de"></i>
    </p>

        </section>

            <p class="fz16 mt15 z3">返点级别</p>

            <section class="mui-row mt10">
                <section class="dfs_jhdf pr" @tap="fandian(1)">
                <input type="text" readonly v-model="time_sdf_a">
                        <i class="dx icon-down dsf_j_de ab"></i>
                </section>
                至
                 <section class="dfs_jhdf pr" @tap="fandian(2)">
                <input type="text" readonly v-model="time_sdf_b">
                        <i class="dx icon-down dsf_j_de ab"></i>
                </section>

            </section>

            <section v-if="type_r!=1">
            <section v-for="sd in sd_ddrr">
            <p class="fz16 z3 mt15">{{sd.title}}</p>
            <section class="pr" @tap="dsf_drer(sd)">
            <i class="dx icon-down dsf_j_de"></i>
            <input type="text"  v-model="sd.value" class="dsf_deert" readonly >
            </section>

            </section>
</section>

            <p class="mt20 red fz14">*点击阴影关闭窗口</p>
            <p>
            <button  class="w100 fz16 pt10 pm10 mui-btn-red mt10">搜索</button>
                </p>


    </section>

<!--

        <van-popup v-model="show" position="bottom" :overlay="false">

        <van-datetime-picker
  v-model="currentDate"
  type="date"
:formatter="formatter"
@cancel="show=false"
@confirm="wancher"
/>

    </van-popup>
-->

         <van-popup v-model="show_san" position="bottom" :overlay="false">


             <van-picker
  show-toolbar
  :columns="columns_er"
  value-key="name"
@cancel="show_er=false"
@confirm="wancdrttx_er"

/>


             </van-popup>
        
        

         <van-popup v-model="show_er" position="bottom" :overlay="false">


             <van-picker
  show-toolbar
  :title="title_e"
  :columns="columns"
  value-key="name"
@cancel="show_er=false"
@confirm="wancdrttx"

/>


             </van-popup>


	</div>
</template>
<script>
    import base from "../js/base.js"
    export default {
        props: {
            time_name: '',
            type_r: "", //1彩票盈亏 2交易流水,3充值记录 4,钱包互转
        },

        data() {
            return {
                time_sdf_a: "0.1%",
                time_sdf_b: "0.5%",
                leixing: "全部",
                show: false,
                show_er: false,
                show_san: false,
                title_e: "", //下拉框显示的标题
                is_der: 0, //1开始时间 2结束时间
                currentDate: new Date(),
                columns: [], //下拉框显示的内容
                columns_er:[],
                sdf_fer: "",
                df_jh_de: "",
                sd_ddrr: [{
                    title: "二维码状态",
                    id: 1,
                    value: "有效",
                    date_r: [{
                        name: "有效"
                    }, {
                        name: "有效1"
                    }, {
                        name: "有效2"
                    }, {
                        name: "有效3"
                    }]
                }]
            }
        },
        components: {

        },
        methods: {
            formatter(type, value) {
                if (type === 'year') {
                    return `${value}年`;
                } else if (type === 'month') {
                    return `${value}月`
                }
                return value;

            },

            dsf_drer(sd) {
                this.show_er = true
                this.title_e = sd.title
                this.columns = sd.date_r
                this.sdf_fer = sd
            },
            fandian(sd) {
                this.show_san = true

                this.columns_er = ["0.1%", "0.2%", "0.3%", "0.4%", "0.5%", "0.6%", "0.7%", "0.8%", "0.9%", "1.0%", "1.1%", "1.2%", "1.3%", "1.4%", "1.5%", "1.6%", "1.7%", "1.8%", "1.9%", "2.0%", "2.1%", "2.2%", "2.3%", "2.4%", "2.5%", "2.6%", "2.7%", "2.8%"]

                this.is_der = sd
            },
            wancdrttx(e) {
                this.show_er = false
                try {
                    this.sdf_fer.value = e.name
                } catch (e) {

                }


            },
            wancdrttx_er(e) {
                this.show_san = false


                if (this.is_der == 1) {
                    this.time_sdf_a = e
                } else if (this.is_der == 2) {
                    this.time_sdf_b = e
                }


            }
        },
        mounted() {
            setTimeout(a => {
                this.df_jh_de = "act"
            }, 200);





        },
    }

</script>
<style>
    .ff_drrrty .van-popup--bottom {
        bottom: 50px !important;
    }

</style>
<style scoped>
    .sd_j_deet {
        position: fixed;
        bottom: 50px;
        left: 0px;
        width: 100%;
        z-index: 1000001
    }

    .ff_drrrty {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: 1000;
    }

    .sd_jh_dert {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5)
    }

    .sdf_jhdsf_e {
        width: 280px;
        min-height: 200px;
        background: #E5E4EA;
        position: fixed;
        right: -250px;
        top: 0px;
        z-index: 100;
        height: 100%;
        overflow: auto
    }

    .sdf_jhdsf_e.act {
        right: 0
    }

    .dfs_jhdf {
        width: 115px;
        display: inline-block
    }

    .dfs_jhdf input,
    .dsf_deert {
        width: 100%;
        text-indent: 0px;
        color: #999;
        padding-left: 8px;
        font-size: 16px;
        margin-bottom: 0px;
    }

    .dsf_deert {
        margin-top: 6px;
    }

    .dsf_j_de {
        position: absolute;
        right: 10px;
        top: 15px;
    }

    .dsf_j_de.ab {
        top: 10px;
    }

</style>
