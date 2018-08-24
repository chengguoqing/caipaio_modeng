<!--下级管理-->
<template>
    <div >
        <section class="sd_jh_df mui-row pr cen ">

            <section class="df_jh_deer w100">
                <span> 下级管理</span>
            </section>
            <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)" />


        </section>

        <section class="dsf_jh_deer   pm10 ">
        <van-cell-group>
            <van-cell title="tiangong"  />

             <van-cell>
               <span class="z6">今日彩票活跃人数：</span>  <span class="z3">0</span>
    </van-cell>
        </van-cell-group>

            <van-cell-group class="mt10">
                <van-cell>
               <span class="fz14 z6">0665p</span>
                    <span class="ye">(代理)</span>
                    <span class="yj sd_dert cz ml5"></span>
    </van-cell>

    <van-cell  is-link @click="show=true">
        <p>2018-08-22 00:04 31 <span class="fr">返点：<span class="z3">1.4%</span></span></p>
        <p>
        今日彩票活跃数:<span class="z3">0</span>
        </p>
    </van-cell>
            </van-cell-group>



        </section>


<!--        下拉款-->
        <van-actionsheet
  v-model="show"
 cancel-text="取消"
  :actions="actions"
  @select="onSelect"
/>
<!--     详情   弹出层-->
        <van-dialog
  v-model="show_er"
  :show-confirm-button="false"
 show-cancel-button
cancel-button-text="关闭"
>

  <section class="sd_jhhrt pm30">
    <p class="pt5 fz16 pm5 bgff cen z3">0665p</p>
    <p class="pt5 pm5 cen">
        不活跃天数:<span class="red">2</span>
    </p>
    <section class="bgff  mui-row cen">
        <section class="mui-col-xs-6 brm pt20 pm10">
        <p class="z3 fz15">账户余额</p>
        <p class="mt5">0</p>
    </section>

         <section class="mui-col-xs-6 brm pt20 pm10">
        <p class="z3 fz15">返点级别</p>
        <p class="mt5">0</p>
    </section>


    </section>

      <section class="mui-row bgff pt10 pm10 mt10 pd">
        <p class="mui-col-xs-4 z3">最后登录时间</p>
          <p class="mui-col-xs-8">2018-08-22 00:04:32</p>

    </section>
       <section class="mui-row bgff pt10 pm10 mt10 pd">
        <p class="mui-col-xs-4 z3">注册录时间</p>
          <p class="mui-col-xs-8">2018-08-22 00:04:32</p>

    </section>

     <section class="pd bgff pt10 pm10 fz14 z3 mt10 ">
    今日彩票活跃(人数):0
    </section>

    </section>


</van-dialog>


<!--返点弹出层        -->
<van-dialog v-model="show_san" show-cancel-button cancel-button-text="关闭">
     <section class="sd_jhhrt pm30">
    <p class="pt5 fz16 pm5 bgff cen z3">0665p</p>

     <section class="mui-row bgff pt10 pm10 mt10 pd mt10">
        <p class="mui-col-xs-4 z3">当前返点级别</p>
          <p class="mui-col-xs-8">1.5%</p>

    </section>
         <section class="pd mt10 bgff pt10 pm10">
        <p class="z3">设置返点级别 <span class="red">{{dang_sd}}%</span></p>

              <section class="mt10 pm10 mui-row">
        <section class="mui-col-xs-1 mt10">

            <div class="swiper-button-prev_r" slot="button-prev">
    <i class="dx icon-jian-tianchong cz fz22 red"></i>
                </div>
        </section>
       <section class="mui-col-xs-10  pl10 pr10">

                   <swiper :options="swiperOption" class="SDf_dfreyy">
    <!-- slides -->
    <swiper-slide v-for="sd in dian_de" class="w100 h100 ">
        <section class="cen dfs_dert" :class="sd.cls" @click="xz_ddf(sd)">
            {{sd.name}}
            <p>%</p>
        </section>
    </swiper-slide>





  </swiper>


        </section>

                      <section class="mui-col-xs-1 tr mt10">
        <div class="swiper-button-next_r dfd_jhj_der" slot="button-next">
            <i class="dx icon-add cz fz22 red " ></i>
        </div>
        </section>
        </section>



    </section>

    </section>
</van-dialog>



    </div>
        </template>




<script>
    import 'swiper/dist/css/swiper.css'

    import {
        swiper,
        swiperSlide
    } from 'vue-awesome-swiper'
    export default {
        data() {
            return {
                show: false, //下拉
                show_er: false, //详情
                show_san: false, //返点
                dang_sd:1.5,
                actions: [{
                    name: '详情',
                    id: 0
                }, {
                    name: '设置返点',
                    id: 1
                }],
                dian_de: [{
                    name: "1.5",
                    cls: "act"
                }, {
                    name: "1.6",
                    cls: ""
                }, {
                    name: "1.7",
                    cls: ""
                }, {
                    name: "1.8",
                    cls: ""
                }, {
                    name: "1.9",
                    cls: ""
                }, {
                    name: "2.0",
                    cls: ""
                }, {
                    name: "2.1",
                    cls: ""
                }, {
                    name: "2.2",
                    cls: ""
                }, {
                    name: "2.3",
                    cls: ""
                }, {
                    name: "2.4",
                    cls: ""
                }, {
                    name: "2.5",
                    cls: ""
                }, {
                    name: "2.6",
                    cls: ""
                }, {
                    name: "2.7",
                    cls: ""
                }, {
                    name: "2.8",
                    cls: ""
                }],
                swiperOption: {
                    slidesPerView: 4,
                    slidesPerGroup: 3, //3个一组
                    navigation: {
                        nextEl: '.swiper-button-next_r',
                        prevEl: '.swiper-button-prev_r'
                    }
                }
            }
        },
        components: {
            swiper,
            swiperSlide
        },
        methods: {
            onSelect(e) {
                this.show = false
                if (e.id == 0) { //详情
                    this.show_er = true
                } else if (e.id == 1) { //设置返点
                    this.show_san=true
                }
            },
            xz_ddf(sd) {
                this.dian_de.map(a => {
                    a.cls = ""
                })
                sd.cls = "act"
                this.dang_sd=sd.name
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .sd_dert {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #999;
    }

    .sd_jhhrt {
        background: #F0EFF5;
    }

    .dfs_dert {
        text-align: center;
        background: #ECECF5;
        width: 40px;
        height: 40px;
        line-height: 1;
        padding-top: 5px;
        margin: auto;
        border-radius: 4px;
    }

    .dfs_dert.act {
        background: #FB3233;
        color: #fff
    }

    .dfs_dert.act p {
        color: #fff
    }

</style>
