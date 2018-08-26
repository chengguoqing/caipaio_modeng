<!--高级筛选-->
<template>
	<div class="ff_drrrty">
	   <p class="sd_jh_dert" @click="$emit('closer');df_jh_de=false"></p>

        <section class="sdf_jhdsf_e pd gd" :class="df_jh_de">
        <p class="mt50  z3 fz16">
            高级筛选
        </p>
            <section v-if="type_r==2">
     <p class="fz20 mt15 z3">搜索关联订单</p>

    <p class="pr">
        <input type="text" placeholder="请输入您要查询的订单号" class="dsf_deert">

        <van-icon name="search" class="dsf_j_de ab fz18"/>
    </p>

        </section>
            
                <section v-if="type_r==5||type_r==6">
     <p class="fz18 mt15 z3">搜索会员名</p>

    <p class="pr">
        <input type="text" placeholder="请输入您要查询的订单号" class="dsf_deert">

        <van-icon name="search" class="dsf_j_de ab fz18"/>
    </p>

        </section>
            
            

            <p class="fz20 mt15 z3">{{time_name||'注单日期'}}</p>

            <section class="mui-row mt10">
                <section class="dfs_jhdf" @tap="show=true;is_der=1">
                <input type="text" readonly v-model="time_sdf_a">
                </section>
                至
                 <section class="dfs_jhdf" @tap="show=true;is_der=2">
                <input type="text" readonly v-model="time_sdf_b">
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
 

        <van-popup v-model="show" position="bottom" :overlay="false">

        <van-datetime-picker
  v-model="currentDate"
  type="date"
:formatter="formatter"
@cancel="show=false"
@confirm="wancher"
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
            time_name:'',
            type_r:"",//1彩票盈亏 2交易流水,3充值记录 4,钱包互转
        },
        
        data() {
            return {
                time_sdf_a: "2018/8/04",
                time_sdf_b: "2018/8/20",
                show: false,
                show_er: false,
                title_e: "", //下拉框显示的标题
                is_der: 0, //1开始时间 2结束时间
                currentDate: new Date(),
                columns: [], //下拉框显示的内容
                sdf_fer: "",
                df_jh_de: "",
                sd_ddrr: [{
                    title: "选择彩种",
                    id: 1,
                    value: "上海时时乐",
                    date_r: [{
                        name: "上海时时乐1"
                    }, {
                        name: "上海时时乐2"
                    }, {
                        name: "上海时时乐3"
                    }, {
                        name: "上海时时乐4"
                    }]
                }, {
                    title: "状态",
                    id: 2,
                    value: "全部状态",
                    date_r: [{
                        name: "状态1"
                    }, {
                        name: "状态2"
                    }, {
                        name: "状3"
                    }, {
                        name: "状态4"
                    }]
                }, {
                    title: "是否单挑",
                    id: 3,
                    value: "否",
                    date_r: [{
                        name: "是"
                    }, {
                        name: "否"
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
            wancher(e) { //日期完成按钮触发

                this.show = false
                if (this.is_der == 1) {
                    this.time_sdf_a = base.time_er(e)
                }
                if (this.is_der == 2) {
                    this.time_sdf_b = base.time_er(e)
                }
            },
            dsf_drer(sd) {
                this.show_er = true
                this.title_e = sd.title
                this.columns = sd.date_r
                this.sdf_fer = sd
            },
            wancdrttx(e) {
                this.show_er = false
                this.sdf_fer.value = e.name

            }
        }, 
        mounted() {
            setTimeout(a => {
                this.df_jh_de = "act"
            }, 200);

            if(this.type_r==2){
                   this.sd_ddrr= [{
                    title: "交易类型",
                    id: 1,
                    value: "全部类型",
                    date_r: [{
                        name: "全部类型1"
                    }, {
                        name: "全部类型2"
                    }, {
                        name: "全部类型3"
                    }, {
                        name: "全部类型4"
                    }]
                }]
            }
            
                if(this.type_r==3){
                   this.sd_ddrr= [{
                    title: "订单状态",
                    id: 1,
                    value: "全部",
                    date_r: [{
                        name: "全部"
                    }, {
                        name: "全部1"
                    }, {
                        name: "全部2"
                    }, {
                        name: "全部3"
                    }]
                }]
            }
            
            
                if(this.type_r==4){
                   this.sd_ddrr= [{
                    title: "转出钱包",
                    id: 1,
                    value: "全部",
                    date_r: [{
                        name: "全部"
                    }, {
                        name: "全部1"
                    }]
                },{
                    title: "转入钱包",
                    id: 1,
                    value: "全部",
                    date_r: [{
                        name: "全部"
                    }, {
                        name: "全部1"
                    }]
                },{
                    title: "状态",
                    id: 1,
                    value: "全部",
                    date_r: [{
                        name: "全部"
                    }, {
                        name: "全部1"
                    }]
                }]
            }
            
            
     if(this.type_r==5){
                   this.sd_ddrr= [{
                    title: "排序",
                    id: 1,
                    value: "排序",
                    date_r: [{
                        name: "排序"
                    }, {
                        name: "排序2"
                    }]
                }]
            }
                 if(this.type_r==6){
                   this.sd_ddrr= [{
                    title: "契约状态",
                    id: 1,
                    value: "全部",
                    date_r: [{
                        name: "全部"
                    }, {
                        name: "全部2"
                    }]
                }]
            }
            
                if(this.type_r==7){
                   this.sd_ddrr= [{
                    title: "日工资状态",
                    id: 1,
                    value: "全部",
                    date_r: [{
                        name: "全部"
                    }, {
                        name: "全部2"
                    }]
                },{
                    title: "排序",
                    id: 1,
                    value: "按时间从近到远",
                    date_r: [{
                        name: "按时间从近到远"
                    }, {
                        name: "按时间从元到近"
                    }]
                }]
            }
            
            
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
    .sdf_jhdsf_e.act{
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

</style>
