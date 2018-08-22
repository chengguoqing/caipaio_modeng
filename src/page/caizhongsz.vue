<!--常用彩种设置-->
<template>
    <div class="df_deertty">
               <section class="sd_jh_df mui-row pr cen ">

                       <section class="df_jh_deer w100">
                  <span> 常用彩种设置</span>
                </section>
               <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)"/>


        </section>

    <section class="dsf_jh_deer    bgff" >
        <section class="pd">
            <p class="pt10">
                <span class="ls fz18">常用彩种</span>
                <span>最多可设置10个</span>
            </p>





        </section>


         <section class="mui-row pl5 pr5">
        <section class="mui-col-xs-4 cen  pl5 pr5 mt10" v-for="sd in 3">
            <section class="df_jh_dert pt10 pm10 pr">
                <img src="../assets/img/shsih_s.png" class="shsih_s">
            <p class="z3 fz16 mt2">日本30秒</p>
                <i class="dx icon-jian-tianchong z9 diir_err fz16"></i>
                </section>
        </section>



        </section>


        <van-collapse v-model="activeNames" class="mt10">
  <van-collapse-item title="时时彩" :name="idx+1" v-for="(sd,idx) in 5">
    <section class="mui-row  ">
        <section class="mui-col-xs-4 cen  pl5 pr5 mt10" v-for="sd in 3">
            <section class="df_jh_dert pt10 pm10 pr">
                <img src="../assets/img/shsih_s.png" class="shsih_s">
            <p class="z3 fz16 mt2">日本30秒</p>
                <i class="dx icon-add ls diir_err fz16"></i>
                </section>
        </section>


            <section class="mui-col-xs-4 cen  pl5 pr5 mt10" v-for="sd in 3">
            <section class="df_jh_dert pt10 pm10 pr">
                <img src="../assets/img/shsih_s.png" class="shsih_s">
            <p class="z3 fz16 mt2">日本30秒</p>
               <span class="yuxuan_e">已选</span>
                </section>
        </section>
        </section>
  </van-collapse-item>


</van-collapse>




    </section>

    </div>
        </template>
<script>
    export default {
        data() {
            return {
 activeNames: [1]
            }
        },
        components: {

        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style>
   .df_deertty .van-collapse-item__content{
        padding-left: 10px;
       padding-right: 10px;
    }
</style>
<style scoped>
    .df_jh_dert{
        background: #F6F6F6;
    }
    .diir_err{
        position: absolute;
        right: 5px;
        top: 5px;
    }
    .yuxuan_e{
        position: absolute;
        right: 0px;
        top: 5px;
        background: #E3E3E3;
        font-size: 12px;
        border-top-left-radius: 10px;
         border-bottom-left-radius: 10px;
        width: 40px;
        line-height: 20px;
    }

</style>
